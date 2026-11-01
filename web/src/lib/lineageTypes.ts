// Shapes shared by the lineage lookup API and the public form (no server-only imports).

/** One person the form can match: a family head who has a record, or a son listed in a record. */
export interface LineageOption {
  // 'r:<recordId>' for a head with his own record, 's:<recordId>:<index>' for a son listed in a record
  id: string
  kind: 'record' | 'son'
  // The record that is this man (kind 'record') or that lists him as a son (kind 'son')
  recordId: string
  name: string
  fatherName: string
  // Second line shown in the list: father, place, khandan and page
  hint: string
  khandan?: string
  mohalla?: string
  page?: string
  // Sons and daughters in his own record (0 for a son who has none yet)
  childCount: number
}

export interface LineageSon {
  name: string
  occupationOrNotes?: string
  isDeceased?: boolean
}

export interface LineageDaughter {
  name: string
  maritalStatus?: string
  husbandName?: string
  husbandFatherName?: string
  husbandMohalla?: string
  notes?: string
}

/** Urdu spellings for one word typed in English, closest first. */
export interface UrduSuggestion {
  input: string
  options: string[]
  // No word in the ledger sounds like it: the option is a rough letter-by-letter guess
  guessed: boolean
}

/** Everything the book (or an earlier submission) knows about one person, used to pre-fill the form. */
export interface LineagePerson {
  kind: 'record' | 'son'
  recordId: string
  name: string
  fatherName?: string
  // His father as a pickable option, when the father is in the ledger
  father?: LineageOption
  mohalla?: string
  customMohalla?: string
  khandan?: string
  page?: string
  notes?: string
  isDeceased?: boolean
  wife?: { name?: string; fatherName?: string; mohalla?: string }
  sons: LineageSon[]
  daughters: LineageDaughter[]
}
