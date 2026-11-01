// Server-side index of every man in the ledger — each family head with a record, and each son a
// record lists — so the public form can search names and pre-fill a person's details.
//
// Sanity's text matching tokenises Urdu poorly, so the index is built once and searched in memory:
// about 9,400 records and 34,000 names. The book's records come with the site; only submissions are
// queried from Sanity, every minute (serving the old copy while the new one loads), so a burst of
// searches costs one small query, not one per keystroke.

import { sanityClient } from '@/lib/sanity.client'
import { BOOK_SOURCE, nameKey, type TreeRecord } from '@/lib/familyTree'
import { bookRecords, findBookRecord } from '@/lib/bookRecords'
import { findKhandan, MOHALLAS } from '@/data/amrohaIndex'
import type { LineageOption, LineagePerson, UrduSuggestion } from '@/lib/lineageTypes'
import {
  guessUrdu,
  hasLatin,
  lastWordRaw,
  nameSkeleton,
  nameWords,
  romanWordSkeleton,
  skeletonMatch,
  spellingDistance,
  urduWordSkeleton,
} from '@/lib/roman'

interface IndexRecord {
  _id: string
  name?: string
  fatherName?: string
  mohalla?: string
  customMohalla?: string
  khandan?: string
  referencePageNumber?: string
  parent?: string
  sons?: string[]
  daughterCount?: number
  // Only for the spelling dictionary
  daughters?: string[]
  husbands?: string[]
  wife?: string
}

interface Entry {
  option: LineageOption
  key: string
  // Phonetic skeleton of each word, for matching names typed in English, and the Urdu words they
  // came from (same order), for breaking ties between names that sound alike
  skeleton: string[]
  urduWords: string[]
}

interface LineageIndex {
  at: number
  entries: Entry[]
  byOptionId: Map<string, LineageOption>
  // Every Urdu word used in a name, grouped by skeleton, with how often the ledger uses it
  words: Map<string, Map<string, number>>
}

const REFRESH_MS = 60_000
// Kept on globalThis: each API route bundles its own copy of this module, and a record saved
// through one route must reach the searches of the others on the same server
interface IndexState {
  cache: LineageIndex | null
  loading: Promise<LineageIndex> | null
  // When a record was last saved: searches wait for a copy loaded after it
  savedAt: number
}
const state: IndexState = ((globalThis as { __lineageIndex?: IndexState }).__lineageIndex ??= {
  cache: null,
  loading: null,
  savedAt: 0,
})

const mohallaLabel = (value?: string) => MOHALLAS.find((m) => m.value === value)?.ur || value

const skeletonOf = (name: string) => {
  const words = nameWords(name)
  return { skeleton: words.map((w) => w.skel), urduWords: words.map((w) => w.word) }
}

/**
 * Tie-breaker between names with the same skeleton: how far each typed word's vowels are from the
 * Urdu word it matched. "Ali Muhammad" is nearer علی محمد than آل محمد; "Zaheer" nearer ظہیر than اظہر.
 */
function vowelDistance(typed: { word: string; skel: string }[], entry: Entry, lastRaw: string) {
  let total = 0
  typed.forEach((t, i) => {
    const last = i === typed.length - 1
    let best = Infinity
    entry.skeleton.forEach((s, j) => {
      const matches = s === t.skel || (last && ((t.skel.length >= 2 && s.startsWith(t.skel)) || (lastRaw.length >= 2 && s.startsWith(lastRaw))))
      // A half-typed word compares against as much of the Urdu word as has been typed
      if (matches) best = Math.min(best, spellingDistance(t.word, last ? entry.urduWords[j].slice(0, t.word.length) : entry.urduWords[j]))
    })
    if (best < Infinity) total += best
  })
  // Still typing ("Muh"): prefer names where the untrimmed form fits, محمد over امام
  const raw = lastRaw.length >= 2 && lastRaw !== typed[typed.length - 1]?.skel
  if (raw && !entry.skeleton.some((s) => s.startsWith(lastRaw))) total += 3
  return total
}

// A spelling the book uses often wins a close call against a rare one (محمد over محامد)
const usageWeight = (uses: number) => 0.25 * Math.log(uses)

const toIndexRecord = (r: TreeRecord): IndexRecord => ({
  _id: r._id,
  name: r.name,
  fatherName: r.fatherName,
  mohalla: r.mohalla,
  customMohalla: r.customMohalla,
  khandan: r.khandan,
  referencePageNumber: r.referencePageNumber,
  parent: r.parentRecord?._ref,
  sons: r.sons?.map((s) => s.name),
  daughterCount: r.daughters?.length ?? 0,
  daughters: r.daughters?.map((d) => d.name),
  husbands: r.daughters?.map((d) => d.husbandName || ''),
  wife: r.wifeDetails?.name,
})

async function load(): Promise<LineageIndex> {
  // The book's families come with the site; Sanity holds the submissions (and, until they are
  // deleted there, old copies of the book records, which are skipped)
  const submitted: IndexRecord[] = await sanityClient.fetch(
    `*[_type == "lineageRecord" && defined(name) && source != $book]{
      _id, name, fatherName, mohalla, customMohalla, khandan, referencePageNumber,
      "parent": parentRecord._ref,
      "sons": sons[].name,
      "daughterCount": count(daughters),
      "daughters": daughters[].name,
      "husbands": daughters[].husbandName,
      "wife": wifeDetails.name
    }`,
    { book: BOOK_SOURCE }
  )
  const records = [...bookRecords.map(toIndexRecord), ...submitted]
  const byId = new Map(records.map((r) => [r._id, r]))

  // A son who also has his own record is offered once, as that record
  const hasOwnRecord = new Set(
    records.filter((r) => r.parent).map((r) => `${r.parent}|${nameKey(r.name)}`)
  )

  // "بن father بن grandfather · mohalla · خاندان N · صفحہ P" — enough to tell apart the many men
  // who share a name
  const hint = (father: string | undefined, grandfather: string | undefined, r: IndexRecord) => {
    const k = findKhandan(r.khandan)
    return [
      father && `بن ${father}${grandfather ? ` بن ${grandfather}` : ''}`,
      mohallaLabel(r.mohalla) || r.customMohalla,
      k && `خاندان ${k.serial}`,
      r.referencePageNumber && `صفحہ ${r.referencePageNumber}`,
    ]
      .filter(Boolean)
      .join(' · ')
  }

  // Spelling dictionary: skeleton → Urdu word → uses. Women's names come from the daughters and wives.
  const words = new Map<string, Map<string, number>>()
  const addWords = (text: string | undefined) => {
    for (const word of (text || '').split(/\s+/)) {
      if (!/[؀-ۿ]/.test(word) || ['سید', 'سیدہ', 'بن', 'بنت'].includes(word)) continue
      const skel = urduWordSkeleton(word)
      if (!skel) continue
      const forms = words.get(skel) ?? new Map<string, number>()
      forms.set(word, (forms.get(word) || 0) + 1)
      words.set(skel, forms)
    }
  }
  for (const r of records) {
    addWords(r.name)
    r.sons?.forEach(addWords)
    r.daughters?.forEach(addWords)
    r.husbands?.forEach(addWords)
    addWords(r.wife)
  }

  const entries: Entry[] = []
  for (const r of records) {
    const name = r.name!.trim()
    const parent = r.parent ? byId.get(r.parent) : undefined
    entries.push({
      key: nameKey(name),
      ...skeletonOf(name),
      option: {
        id: `r:${r._id}`,
        kind: 'record',
        recordId: r._id,
        name,
        fatherName: r.fatherName?.trim() || '',
        hint: hint(r.fatherName, parent?.fatherName, r),
        khandan: r.khandan,
        mohalla: r.mohalla,
        page: r.referencePageNumber,
        childCount: (r.sons?.length || 0) + (r.daughterCount || 0),
      },
    })
    ;(r.sons || []).forEach((son, i) => {
      if (!son?.trim() || hasOwnRecord.has(`${r._id}|${nameKey(son)}`)) return
      entries.push({
        key: nameKey(son),
        ...skeletonOf(son),
        option: {
          id: `s:${r._id}:${i}`,
          kind: 'son',
          recordId: r._id,
          name: son.trim(),
          fatherName: name,
          hint: hint(name, r.fatherName, r),
          khandan: r.khandan,
          mohalla: r.mohalla,
          page: r.referencePageNumber,
          childCount: 0,
        },
      })
    })
  }
  return { at: Date.now(), entries, byOptionId: new Map(entries.map((e) => [e.option.id, e.option])), words }
}

async function getIndex(): Promise<LineageIndex> {
  const { cache } = state
  const current = cache && cache.at >= state.savedAt
  if (cache && current && Date.now() - cache.at < REFRESH_MS) return cache
  // One load at a time, however many searches arrive while it runs
  const startedAt = Date.now()
  state.loading ??= load()
    .then((fresh) => (state.cache = { ...fresh, at: startedAt }))
    .finally(() => {
      state.loading = null
    })
  return cache && current ? cache : state.loading
}

/** Drops the cached index so the next search sees a record that was just saved. */
export function invalidateLineageIndex() {
  state.savedAt = Date.now()
}

/**
 * Men whose name contains every word typed, best matches first. `mohalla` and `khandan` only
 * re-rank — families move, so nothing outside them is hidden.
 */
export async function searchLineage(
  query: string,
  opts: { mohalla?: string; khandan?: string; limit?: number } = {}
): Promise<LineageOption[]> {
  const { entries } = await getIndex()
  const roman = hasLatin(query)
  // Typed in English: match by sound against the Urdu names. Typed in Urdu: match the letters.
  const typed = roman ? nameWords(query) : []
  const skeleton = typed.map((w) => w.skel)
  const lastRaw = roman ? lastWordRaw(query) : ''
  const words = roman ? [] : nameKey(query).split(' ').filter(Boolean)
  if (roman ? !skeleton.length : !words.length) return []
  const whole = words.join(' ')

  const scored: { entry: Entry; score: number }[] = []
  for (const entry of entries) {
    let score: number
    if (roman) {
      const match = skeletonMatch(skeleton, entry.skeleton, lastRaw)
      if (match < 0) continue
      // Doubled so a better-fitting name outranks the small "has his own record" preference
      score = match * 10 + 2 * vowelDistance(typed, entry, lastRaw)
    } else {
      if (!words.every((w) => entry.key.includes(w))) continue
      score = entry.key === whole ? 0 : entry.key.startsWith(whole) ? 10 : 20
    }
    const o = entry.option
    if (opts.khandan && o.khandan === opts.khandan) score -= 6
    if (opts.mohalla && o.mohalla === opts.mohalla) score -= 4
    if (o.kind === 'record') score -= 1
    scored.push({ entry, score })
  }
  scored.sort((a, b) => a.score - b.score || a.entry.key.length - b.entry.key.length)
  return scored.slice(0, opts.limit ?? 30).map((s) => s.entry.option)
}

const FIXED_WORDS: Record<string, string> = {
  syed: 'سید', sayed: 'سید', sayyid: 'سید', sayyed: 'سید', syeda: 'سیدہ', sayeda: 'سیدہ',
  bin: 'بن', ibn: 'بن', binte: 'بنت', bint: 'بنت',
}

/**
 * Urdu spelling for a name typed in English, word by word, taken from the words the ledger itself
 * uses — "Hussain" becomes حسین as the book spells it. Up to four choices per word, closest first;
 * a word the ledger never uses gets a rough letter-by-letter guess, flagged as such.
 */
export async function suggestUrdu(text: string): Promise<UrduSuggestion[]> {
  const { words } = await getIndex()
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 8)
    .map((input) => {
      if (!hasLatin(input)) return { input, options: [input], guessed: false }
      const fixed = FIXED_WORDS[input.toLowerCase()]
      if (fixed) return { input, options: [fixed], guessed: false }
      const forms = words.get(romanWordSkeleton(input))
      if (!forms?.size) {
        const guess = guessUrdu(input)
        return { input, options: guess ? [guess] : [input], guessed: true }
      }
      const ranked = [...forms]
        // Rarely used spellings are mostly misreadings; keep them only if nothing else exists
        .filter(([, uses], _, all) => uses > 1 || all.length === 1)
        .map(([urdu, uses]) => {
          const distance = spellingDistance(input, urdu)
          return { urdu, distance, score: distance - usageWeight(uses) }
        })
        .sort((a, b) => a.score - b.score)
      const options = ranked.slice(0, 4).map((r) => r.urdu)
      // A one-letter skeleton ("Ayaan", "Aiza" = n, z) shares its sound with dozens of unrelated book
      // words. If none of them is actually close, the name is likely newer than the book: lead with
      // the letter-by-letter spelling (ایان) and keep the book words as alternatives. "Ali" is close
      // to علی, so it is unaffected.
      if (romanWordSkeleton(input).length <= 1 && Math.min(...ranked.map((r) => r.distance)) > 0.8) {
        const guess = guessUrdu(input)
        if (guess) return { input, options: [guess, ...options.slice(0, 3)], guessed: true }
      }
      return { input, options, guessed: false }
    })
}

/** Resolves an option id ('r:<id>' or 's:<id>:<n>') to the man it names, or null. */
export async function findLineageOption(id: string): Promise<LineageOption | null> {
  return (await getIndex()).byOptionId.get(id) ?? null
}

/** Everything known about one person, for pre-filling the form. */
export async function getLineagePerson(id: string): Promise<LineagePerson | null> {
  const option = await findLineageOption(id)
  if (!option) return null
  const book = findBookRecord(option.recordId)
  const record: any = book
    ? { ...book, parent: book.parentRecord?._ref }
    : await sanityClient.fetch(
        `*[_id == $id][0]{
          _id, name, fatherName, mohalla, customMohalla, khandan, referencePageNumber,
          "parent": parentRecord._ref, wifeDetails,
          sons[]{ name, occupationOrNotes, isDeceased },
          daughters[]{ name, maritalStatus, husbandName, husbandFatherName, husbandMohalla, notes }
        }`,
        { id: option.recordId }
      )
  if (!record) return null

  if (option.kind === 'son') {
    const son = record.sons?.[Number(id.split(':')[2])]
    return {
      kind: 'son',
      recordId: record._id,
      name: option.name,
      fatherName: record.name,
      father: (await findLineageOption(`r:${record._id}`)) ?? undefined,
      mohalla: record.mohalla,
      customMohalla: record.customMohalla,
      khandan: record.khandan,
      page: record.referencePageNumber,
      notes: son?.occupationOrNotes,
      isDeceased: son?.isDeceased,
      sons: [],
      daughters: [],
    }
  }

  return {
    kind: 'record',
    recordId: record._id,
    name: record.name,
    fatherName: record.fatherName,
    father: record.parent ? (await findLineageOption(`r:${record.parent}`)) ?? undefined : undefined,
    mohalla: record.mohalla,
    customMohalla: record.customMohalla,
    khandan: record.khandan,
    page: record.referencePageNumber,
    wife: record.wifeDetails,
    sons: (record.sons || []).filter((s: { name?: string }) => s?.name),
    daughters: (record.daughters || []).filter((d: { name?: string }) => d?.name),
  }
}
