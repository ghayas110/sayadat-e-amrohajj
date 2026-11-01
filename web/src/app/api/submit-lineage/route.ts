import { NextRequest, NextResponse } from 'next/server'
import { parseOriginalSpellings } from '@/lib/originalSpellings'
import { getSanityWriteClient } from '@/lib/sanity.client'
import { findKhandan } from '@/data/amrohaIndex'
import { findLineageOption, invalidateLineageIndex } from '@/lib/lineageIndex'
import fs from 'fs/promises'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const name = (formData.get('name') as string) || ''
    const fatherName = (formData.get('fatherName') as string) || ''
    // Ledger people the name and father were picked from (ids from /api/lineage/search)
    const personId = (formData.get('personId') as string) || ''
    const fatherId = (formData.get('fatherId') as string) || ''
    const mohalla = (formData.get('mohalla') as string) || ''
    const customMohalla = (formData.get('customMohalla') as string) || ''
    const referencePageNumber = (formData.get('referencePageNumber') as string) || ''
    const khandanRaw = (formData.get('khandan') as string) || ''
    const customKhandan = (formData.get('customKhandan') as string) || ''
    const khandan = khandanRaw === 'other' || findKhandan(khandanRaw) ? khandanRaw : ''

    const wifeName = (formData.get('wifeName') as string) || ''
    const wifeFatherName = (formData.get('wifeFatherName') as string) || ''
    const wifeMohalla = (formData.get('wifeMohalla') as string) || ''

    const sonsRaw = (formData.get('sons') as string) || '[]'
    const daughtersRaw = (formData.get('daughters') as string) || '[]'

    const phone = (formData.get('phone') as string) || ''
    const address = (formData.get('address') as string) || ''

    const bookingType = (formData.get('bookingType') as string) || 'standard_5000'
    const transactionId = (formData.get('transactionId') as string) || ''
    const submitterName = (formData.get('submitterName') as string) || name
    const originalSpellings = parseOriginalSpellings(formData.get('originalSpellings'))

    let sons: any[] = []
    let daughters: any[] = []

    try {
      sons = JSON.parse(sonsRaw)
    } catch {
      sons = []
    }

    try {
      daughters = JSON.parse(daughtersRaw)
    } catch {
      daughters = []
    }

    // Only these four are required; everything else (mohalla, wife, children, booking) is optional
    if (!name.trim() || !fatherName.trim() || !phone.trim() || !address.trim()) {
      return NextResponse.json(
        { error: 'Name, Father Name, Phone Number and Address are required fields.' },
        { status: 400 }
      )
    }

    const token = process.env.SANITY_API_WRITE_TOKEN
    const client = getSanityWriteClient()

    let paymentSlipAssetId: string | null = null
    // A slip sent as a PDF is stored as a file; Sanity's image store refuses PDFs
    let paymentSlipFileAssetId: string | null = null
    let colorPhotoAssetId: string | null = null
    let profileImageAssetId: string | null = null
    const sonPhotoAssetIds: Record<string, string> = {}

    const paymentSlipFile = formData.get('paymentSlip') as File | null
    const colorPhotoFile = formData.get('colorPhoto') as File | null
    const profileImageFile = formData.get('profileImage') as File | null

    const uploadImage = async (file: File) => {
      const buffer = Buffer.from(await file.arrayBuffer())
      const asset = await client.assets.upload('image', buffer, { filename: file.name })
      return asset._id
    }

    const isImage = (file: File | null): file is File =>
      Boolean(file && file.size > 0 && file.type.startsWith('image/'))

    // Upload assets if token is present
    if (token) {
      // Optional photos: family head and sons only (no wife/daughter photos are collected)
      if (isImage(profileImageFile)) {
        profileImageAssetId = await uploadImage(profileImageFile)
      }

      for (const son of sons) {
        if (!son?.id || !son.name?.trim()) continue
        const sonPhotoFile = formData.get(`sonPhoto_${son.id}`) as File | null
        if (isImage(sonPhotoFile)) {
          sonPhotoAssetIds[son.id] = await uploadImage(sonPhotoFile)
        }
      }

      if (bookingType !== 'submission_only' && paymentSlipFile && paymentSlipFile.size > 0) {
        const buffer = Buffer.from(await paymentSlipFile.arrayBuffer())
        if (paymentSlipFile.type.startsWith('image/')) {
          const asset = await client.assets.upload('image', buffer, { filename: paymentSlipFile.name })
          paymentSlipAssetId = asset._id
        } else {
          const asset = await client.assets.upload('file', buffer, {
            filename: paymentSlipFile.name,
            contentType: paymentSlipFile.type || 'application/pdf',
          })
          paymentSlipFileAssetId = asset._id
        }
      }

      if (colorPhotoFile && colorPhotoFile.size > 0) {
        const buffer = Buffer.from(await colorPhotoFile.arrayBuffer())
        const asset = await client.assets.upload('image', buffer, {
          filename: colorPhotoFile.name,
        })
        colorPhotoAssetId = asset._id
      }
    }

    // Links that hang this record in the family tree. The ids come from the browser, so each is
    // looked up again in the ledger index and ignored if it does not resolve.
    const person = personId ? await findLineageOption(personId).catch(() => null) : null
    const father = fatherId ? await findLineageOption(fatherId).catch(() => null) : null
    const ref = (id: string) => ({ _type: 'reference', _ref: id, _weak: true })
    let parentRecord: any
    let fatherInRecord: any
    let updatesRecord: any
    // He is a son listed in a record: that record is his father's
    if (person?.kind === 'son') parentRecord = ref(person.recordId)
    // He already has a record (usually from the book): this submission corrects and extends it
    if (person?.kind === 'record') updatesRecord = ref(person.recordId)
    // A father picked explicitly wins over whatever the person pick implied
    if (father?.kind === 'record') {
      parentRecord = ref(father.recordId)
    } else if (father?.kind === 'son') {
      // The father has no record of his own, only a line among his father's sons
      parentRecord = undefined
      fatherInRecord = { record: ref(father.recordId), sonName: father.name }
    }

    const doc: any = {
      _type: 'lineageRecord',
      name: name.trim(),
      fatherName: fatherName.trim(),
      source: 'form',
      mohalla: mohalla.trim() || undefined,
      customMohalla: customMohalla.trim() || undefined,
      khandan: khandan || undefined,
      customKhandan: khandan === 'other' ? customKhandan.trim() || undefined : undefined,
      referencePageNumber: referencePageNumber.trim() || undefined,
      parentRecord,
      fatherInRecord,
      updatesRecord,
      profileImage: profileImageAssetId
        ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: profileImageAssetId },
          }
        : undefined,
      wifeDetails: {
        name: wifeName.trim() || undefined,
        fatherName: wifeFatherName.trim() || undefined,
        mohalla: wifeMohalla.trim() || undefined,
      },
      sons: sons
        .filter((s) => s.name && s.name.trim())
        .map((s, idx) => ({
          _key: `son_${idx}_${Date.now()}`,
          name: s.name.trim(),
          occupationOrNotes: s.occupationOrNotes?.trim() || undefined,
          isDeceased: Boolean(s.isDeceased),
          photo: sonPhotoAssetIds[s.id]
            ? {
                _type: 'image',
                asset: { _type: 'reference', _ref: sonPhotoAssetIds[s.id] },
              }
            : undefined,
        })),
      daughters: daughters
        .filter((d) => d.name && d.name.trim())
        .map((d, idx) => ({
          _key: `daughter_${idx}_${Date.now()}`,
          name: d.name.trim(),
          maritalStatus: d.maritalStatus || 'married',
          husbandName: d.maritalStatus === 'unmarried' ? undefined : d.husbandName?.trim(),
          husbandFatherName: d.maritalStatus === 'unmarried' ? undefined : d.husbandFatherName?.trim(),
          husbandMohalla: d.maritalStatus === 'unmarried' ? undefined : d.husbandMohalla?.trim(),
        })),
      contactDetails: {
        phone: phone.trim(),
        address: address.trim(),
      },
      advanceBooking: {
        bookingType,
        transactionId: transactionId.trim() || undefined,
        // The admin marks it paid on the Payments page after checking the bank account
        paymentStatus: bookingType === 'submission_only' ? 'na' : 'pending',
        paymentSlipImage: paymentSlipAssetId
          ? {
              _type: 'image',
              asset: { _type: 'reference', _ref: paymentSlipAssetId },
            }
          : undefined,
        paymentSlipFile: paymentSlipFileAssetId
          ? {
              _type: 'file',
              asset: { _type: 'reference', _ref: paymentSlipFileAssetId },
            }
          : undefined,
        colorPhoto: colorPhotoAssetId
          ? {
              _type: 'image',
              asset: { _type: 'reference', _ref: colorPhotoAssetId },
            }
          : undefined,
      },
      submissionMeta: {
        submitterName: submitterName.trim() || name.trim(),
        submittedAt: new Date().toISOString(),
        isApprovedForBook: false,
        originalSpellings: originalSpellings.length ? originalSpellings : undefined,
      },
    }

    let sanityCreatedDoc: any = null

    if (token) {
      try {
        sanityCreatedDoc = await client.create(doc)
        // So the name search offers this person straight away
        invalidateLineageIndex()
      } catch (err: any) {
        console.error('Error writing to Sanity:', err)
        // Fall back to local backup
      }
    }

    const savedRecord = {
      id: sanityCreatedDoc?._id || `local_${Date.now()}`,
      ...doc,
      savedToSanity: Boolean(sanityCreatedDoc),
      hasToken: Boolean(token),
    }

    // Also keep a local backup copy. On Vercel the file system is read-only, so this only works when
    // running on a computer; there Sanity is the only store and a failed write here is not an error.
    try {
      const backupDir = path.join(process.cwd(), 'data')
      await fs.mkdir(backupDir, { recursive: true })
      const backupFile = path.join(backupDir, 'submissions.json')
      let existingData: any[] = []
      try {
        existingData = JSON.parse(await fs.readFile(backupFile, 'utf8'))
      } catch {
        existingData = []
      }
      existingData.unshift(savedRecord)
      await fs.writeFile(backupFile, JSON.stringify(existingData, null, 2))
    } catch (err) {
      if (!sanityCreatedDoc) throw new Error('Could not save the record. Please try again.')
      console.warn('Local backup not written (read-only file system):', err)
    }

    return NextResponse.json({
      success: true,
      id: savedRecord.id,
      savedToSanity: Boolean(sanityCreatedDoc),
      message: sanityCreatedDoc
        ? 'Record successfully saved directly to your Sanity Studio database!'
        : 'Record captured and secured! Set SANITY_API_WRITE_TOKEN in .env.local to enable direct cloud writing.',
    })
  } catch (error: any) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
