import { NextRequest, NextResponse } from 'next/server'
import { getSanityWriteClient } from '@/lib/sanity.client'
import { isAdminRequest } from '@/lib/adminAuth'
import { BOOK_SOURCE, isBookRecordId } from '@/lib/familyTree'
import { findKhandan } from '@/data/amrohaIndex'
import { findLineageOption, invalidateLineageIndex } from '@/lib/lineageIndex'
import { mergeOriginalSpellings, parseOriginalSpellings } from '@/lib/originalSpellings'
import fs from 'fs/promises'
import path from 'path'

// Edit or delete one community record. Admin only. Records typed in from the 1999 book are refused:
// they are regenerated from web/scripts/kausar-ul-ansab/*.ts on every import, so an edit made here
// would be silently overwritten — correct those in the data files instead.

type Ctx = { params: Promise<{ id: string }> }

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '')
const opt = (v: unknown) => str(v) || undefined

const bookRecordRefused = () =>
  NextResponse.json(
    { error: 'This family comes from the 1999 book, which ships with the site. Edit it in the data files.' },
    { status: 403 }
  )

async function loadEditable(req: NextRequest, ctx: Ctx) {
  if (!isAdminRequest(req)) return { error: NextResponse.json({ error: 'Not signed in' }, { status: 401 }) }
  const { id } = await ctx.params
  if (!/^[\w.-]+$/.test(id)) return { error: NextResponse.json({ error: 'Invalid id' }, { status: 400 }) }
  if (isBookRecordId(id)) return { error: bookRecordRefused() }
  const client = getSanityWriteClient()
  const doc = await client.getDocument(id)
  if (!doc || doc._type !== 'lineageRecord') {
    return { error: NextResponse.json({ error: 'Record not found' }, { status: 404 }) }
  }
  if (doc.source === BOOK_SOURCE) return { error: bookRecordRefused() }
  return { client, doc, id }
}

// The full record, to load into the form for editing
export async function GET(req: NextRequest, ctx: Ctx) {
  const r = await loadEditable(req, ctx)
  if (r.error) return r.error
  return NextResponse.json({ record: r.doc }, { headers: { 'Cache-Control': 'no-store' } })
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  const r = await loadEditable(req, ctx)
  if (r.error) return r.error
  const { client, doc, id } = r
  const body = await req.json().catch(() => null)
  if (!body || !str(body.name) || !str(body.fatherName)) {
    return NextResponse.json({ error: 'Name and Father Name are required.' }, { status: 400 })
  }

  // Keep each son's photo and birth order, and each daughter's birth order, unless the edit removed them
  const oldSons = new Map<string, any>((doc.sons || []).map((s: any) => [s._key, s]))
  const oldDaughters = new Map<string, any>((doc.daughters || []).map((d: any) => [d._key, d]))
  const stamp = Date.now()
  const sons = (Array.isArray(body.sons) ? body.sons : [])
    .filter((s: any) => str(s?.name))
    .map((s: any, i: number) => {
      const old = s.key ? oldSons.get(s.key) : undefined
      return {
        ...(old || {}),
        _key: old?._key || `son_${i}_${stamp}`,
        name: str(s.name),
        occupationOrNotes: opt(s.occupationOrNotes),
        isDeceased: Boolean(s.isDeceased),
      }
    })
  const daughters = (Array.isArray(body.daughters) ? body.daughters : [])
    .filter((d: any) => str(d?.name))
    .map((d: any, i: number) => {
      const old = d.key ? oldDaughters.get(d.key) : undefined
      const married = d.maritalStatus !== 'unmarried'
      return {
        ...(old || {}),
        _key: old?._key || `daughter_${i}_${stamp}`,
        name: str(d.name),
        maritalStatus: married ? 'married' : 'unmarried',
        husbandName: married ? opt(d.husbandName) : undefined,
        husbandFatherName: married ? opt(d.husbandFatherName) : undefined,
        husbandMohalla: married ? opt(d.husbandMohalla) : undefined,
      }
    })

  const khandan = body.khandan === 'other' || findKhandan(body.khandan) ? str(body.khandan) : ''
  const set: Record<string, unknown> = {
    name: str(body.name),
    fatherName: str(body.fatherName),
    mohalla: opt(body.mohalla),
    customMohalla: opt(body.customMohalla),
    khandan: khandan || undefined,
    customKhandan: khandan === 'other' ? opt(body.customKhandan) : undefined,
    referencePageNumber: opt(body.referencePageNumber),
    wifeDetails: {
      name: opt(body.wifeName),
      fatherName: opt(body.wifeFatherName),
      mohalla: opt(body.wifeMohalla),
    },
    sons,
    daughters,
    'contactDetails.phone': opt(body.phone),
    'contactDetails.address': opt(body.address),
    'advanceBooking.bookingType': opt(body.bookingType),
    'advanceBooking.transactionId': opt(body.transactionId),
    'submissionMeta.submitterName': opt(body.submitterName),
  }
  const spellings = parseOriginalSpellings(body.originalSpellings)
  if (spellings.length) {
    set['submissionMeta.originalSpellings'] = mergeOriginalSpellings(doc.submissionMeta?.originalSpellings, spellings)
  }

  // Tree links: only touched when the editor picked a person or father from the ledger again
  const ref = (rid: string) => ({ _type: 'reference', _ref: rid, _weak: true })
  const unset: string[] = []
  const person = body.personId ? await findLineageOption(String(body.personId)).catch(() => null) : null
  const father = body.fatherId ? await findLineageOption(String(body.fatherId)).catch(() => null) : null
  if (person && person.recordId !== id) {
    if (person.kind === 'son') set.parentRecord = ref(person.recordId)
    else set.updatesRecord = ref(person.recordId)
  }
  if (father?.kind === 'record' && father.recordId !== id) {
    set.parentRecord = ref(father.recordId)
    unset.push('fatherInRecord')
  } else if (father?.kind === 'son') {
    set.fatherInRecord = { record: ref(father.recordId), sonName: father.name }
    unset.push('parentRecord')
  }

  // Empty values are removed rather than stored as nulls
  for (const [k, v] of Object.entries(set)) if (v === undefined) {
    delete set[k]
    unset.push(k)
  }

  try {
    let patch = client.patch(id).set(set)
    if (unset.length) patch = patch.unset(unset)
    const updated = await patch.commit()
    invalidateLineageIndex()
    return NextResponse.json({ success: true, id: updated._id })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Could not save' }, { status: 500 })
  }
}

// The submit route also keeps a local copy of every submission (data/submissions.json); a deleted
// record is taken out of it too, or it would reappear whenever Sanity can't be reached
async function removeFromBackup(id: string) {
  const backupFile = path.join(process.cwd(), 'data', 'submissions.json')
  try {
    const records = JSON.parse(await fs.readFile(backupFile, 'utf8'))
    if (!Array.isArray(records)) return
    const kept = records.filter((rec: any) => rec.id !== id && rec._id !== id)
    if (kept.length !== records.length) await fs.writeFile(backupFile, JSON.stringify(kept, null, 2))
  } catch {
    // No backup file yet
  }
}

export async function DELETE(req: NextRequest, ctx: Ctx) {
  const r = await loadEditable(req, ctx)
  if (r.error) return r.error
  try {
    await r.client.delete(r.id)
    await removeFromBackup(r.id)
    invalidateLineageIndex()
    return NextResponse.json({ success: true })
  } catch (error: any) {
    // Sanity refuses while a strong reference still points at the record
    return NextResponse.json({ error: error?.message || 'Could not delete' }, { status: 500 })
  }
}
