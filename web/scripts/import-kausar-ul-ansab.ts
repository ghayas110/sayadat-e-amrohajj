// Turns the families transcribed from Kausar-ul-Ansab (1999) into lineage records, written to
// src/data/kausar-ul-ansab.json, which ships with the site. The book never changes on the website,
// so its ~9,400 records stay out of Sanity (the free plan holds 10,000 documents); Sanity keeps
// only the community's own submissions.
//
//   npx tsx scripts/import-kausar-ul-ansab.ts --dry-run                                # check only
//   npx tsx scripts/import-kausar-ul-ansab.ts                                          # write the JSON
//   npx tsx --env-file=.env.local scripts/import-kausar-ul-ansab.ts --delete           # remove book records from Sanity
//   npx tsx --env-file=.env.local scripts/import-kausar-ul-ansab.ts --only 60 --delete # just these khandans
//
// Records keep fixed IDs (kaa1999-k<serial>-<place in tree>), so submissions that link to a book
// person keep pointing at the same record after the transcription is corrected and rebuilt.

import fs from 'fs'
import path from 'path'
import { createClient } from '@sanity/client'
import type { BookFamily } from './kausar-ul-ansab/book'
import { IMPORTS, type KhandanImport } from './kausar-ul-ansab'

const BOOK_SOURCE = 'kausar-ul-ansab-1999'
const SYED = 'سید'
// Stored as the father of a tree's first person when the book doesn't name him
const UNKNOWN_FATHER = 'نامعلوم'
// Sanity transactions are kept well under the request size limit
const BATCH_SIZE = 200
const OUTPUT = path.join(__dirname, '..', 'src', 'data', 'kausar-ul-ansab.json')

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const deleteAll = args.includes('--delete')
const onlyArg = args[args.indexOf('--only') + 1]
const only = args.includes('--only') ? new Set(onlyArg.split(',').map(Number)) : undefined

const male = (name: string) => `${SYED} ${name}`

function validate(set: KhandanImport) {
  const errors: string[] = []
  const byKey = new Map<string, BookFamily>()
  for (const family of set.families) {
    if (byKey.has(family.key)) errors.push(`Duplicate key: ${family.key}`)
    byKey.set(family.key, family)
  }
  for (const family of set.families) {
    if (!family.head.trim()) errors.push(`${family.key}: empty name`)
    if (family.children.some((c) => !c.name.trim())) errors.push(`${family.key}: child with empty name`)
    if (!family.parent) continue
    const parent = byKey.get(family.parent)
    if (!parent) {
      errors.push(`${family.key}: parent "${family.parent}" not found`)
      continue
    }
    if (!parent.children.some((c) => c.gender === 'm' && c.name === family.head)) {
      errors.push(`${family.key}: "${family.head}" is not listed as a son of ${parent.key} (${parent.head})`)
    }
  }
  return { errors: errors.map((e) => `khandan ${set.serial}: ${e}`), byKey }
}

function toDocument(set: KhandanImport, family: BookFamily, byKey: Map<string, BookFamily>) {
  const father = family.parent ? byKey.get(family.parent)!.head : family.father
  const docId = (key: string) => `${set.idPrefix}${key}`
  let sonIndex = 0
  let daughterIndex = 0
  const sons: Record<string, unknown>[] = []
  const daughters: Record<string, unknown>[] = []

  family.children.forEach((child, i) => {
    if (child.gender === 'm') {
      sons.push({
        _key: `s${sonIndex++}`,
        name: male(child.name),
        occupationOrNotes: child.notes,
        birthOrder: i + 1,
      })
    } else {
      daughters.push({
        _key: `d${daughterIndex++}`,
        name: child.name,
        ...(child.husband ? { maritalStatus: 'married', husbandName: child.husband } : {}),
        husbandMohalla: child.husbandMohalla,
        notes: child.notes,
        birthOrder: i + 1,
      })
    }
  })

  return {
    _id: docId(family.key),
    source: BOOK_SOURCE,
    name: male(family.head),
    fatherName: father ? male(father) : UNKNOWN_FATHER,
    mohalla: set.mohalla,
    khandan: String(set.serial),
    referencePageNumber: String(family.page),
    ...(family.parent
      ? { parentRecord: { _ref: docId(family.parent) } }
      : {}),
    sons,
    daughters,
  }
}

async function main() {
  const sets = IMPORTS.filter((set) => !only || only.has(set.serial))
  if (only && sets.length !== only.size) throw new Error(`No transcription for some of khandans ${onlyArg}`)

  if (deleteAll) {
    const token = process.env.SANITY_API_WRITE_TOKEN
    if (!token) throw new Error('SANITY_API_WRITE_TOKEN is not set')
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rohuunpd',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-10-24',
      useCdn: false,
      token,
    })
    // GROQ's path() doesn't match these dashed IDs, so the prefix is checked here
    const bookIds: string[] = await client.fetch(`*[source == $book]._id`, { book: BOOK_SOURCE })
    for (const set of sets) {
      const ids = bookIds.filter((id) => id.startsWith(set.idPrefix))
      // Batches keep each transaction under Sanity's request size limit
      for (let i = 0; i < ids.length; i += BATCH_SIZE) {
        const tx = client.transaction()
        ids.slice(i, i + BATCH_SIZE).forEach((id) => tx.delete(id))
        await tx.commit({ visibility: 'async' })
      }
      console.log(`Khandan ${set.serial}: deleted ${ids.length} book records from Sanity.`)
    }
    return
  }

  if (only) throw new Error('--only is for --delete; the JSON is always written for every khandan')
  const checked = sets.map((set) => ({ set, ...validate(set) }))
  const errors = checked.flatMap((c) => c.errors)
  if (errors.length) {
    console.error('Transcription problems:\n' + errors.map((e) => `  - ${e}`).join('\n'))
    process.exit(1)
  }

  const docs = checked.flatMap(({ set, byKey }) => {
    const people =
      set.families.filter((f) => !f.parent).length + set.families.reduce((n, f) => n + f.children.length, 0)
    console.log(`Khandan ${set.serial}: ${set.families.length} families, ${people} people.`)
    return set.families.map((f) => toDocument(set, f, byKey))
  })
  if (dryRun) {
    console.log(`${docs.length} records checked.`)
    return
  }
  // One record per line, so a corrected family shows up as a small change
  fs.writeFileSync(OUTPUT, '[\n' + docs.map((d) => JSON.stringify(d)).join(',\n') + '\n]\n')
  console.log(`${docs.length} records written to ${path.relative(process.cwd(), OUTPUT)}.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
