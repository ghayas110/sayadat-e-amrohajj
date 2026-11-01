// The families typed in from Kausar-ul-Ansab (1999). They never change on the website, so they ship
// with the site as JSON, written by scripts/import-kausar-ul-ansab.ts, and Sanity holds only the
// community's own submissions. About 6 MB: import this only from server code, never a client component.

import book from '@/data/kausar-ul-ansab.json'
import type { TreeRecord } from '@/lib/familyTree'

export const bookRecords = book as TreeRecord[]

const byId = new Map(bookRecords.map((r) => [r._id, r]))
export const findBookRecord = (id: string) => byId.get(id)
