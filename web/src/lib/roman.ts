// Matching names typed on an English keyboard ("Ali Muhammad") against names stored in Urdu (علی محمد).
//
// Urdu does not write short vowels, and Roman spellings of the same name vary ("Muhammad",
// "Mohammed", "Mohd"). So both scripts are reduced to the same phonetic consonant skeleton:
// letters that sound alike share a symbol, vowels are dropped, doubled letters collapse and a
// word-final h (silent in فاطمہ / "Fatima") is dropped. محمد, "Muhammad" and "Mohammed" all become
// "mhmd". Word-initial و / ی are kept as w / y, so ولی ("Wali") and علی ("Ali") stay apart.
//
// Symbols: K = خ (kh), S = ش (sh), c = چ (ch); غ / گ both become g, as people rarely type "gh".

const URDU_CONSONANT: Record<string, string> = {
  ب: 'b', پ: 'p', ت: 't', ٹ: 't', ط: 't', ث: 's', س: 's', ص: 's', ج: 'j', چ: 'c',
  ح: 'h', ہ: 'h', ھ: 'h', ۃ: 'h', ة: 'h', ۂ: 'h', خ: 'K', د: 'd', ڈ: 'd', ذ: 'z',
  ر: 'r', ڑ: 'r', ز: 'z', ژ: 'z', ض: 'z', ظ: 'z', ش: 'S', غ: 'g', ف: 'f', ق: 'k',
  ک: 'k', ك: 'k', گ: 'g', ل: 'l', م: 'm', ن: 'n', ں: 'n',
}
const URDU_W = new Set(['و', 'ؤ'])
const URDU_Y = new Set(['ی', 'ے', 'ي', 'ى', 'ئ'])

const LATIN = /[a-z]/i
export const hasLatin = (text: string) => LATIN.test(text)

// Honorifics and connecting words that are not part of a name
const SKIP = new Set(['syed', 'sayed', 'sayyid', 'sayyed', 'syeda', 'sayeda', 'bin', 'ibn', 'binte', 'bint', 's/o', 'd/o', 'w/o', 'son', 'of', 'mr', 'mrs', 'سید', 'سیدہ', 'سیّد', 'سیّدہ', 'بن', 'بنت'])

const finish = (s: string, keepFinalH = false) => {
  const collapsed = s.replace(/(.)\1+/g, '$1')
  return collapsed.length > 1 && !keepFinalH ? collapsed.replace(/h$/, '') : collapsed
}

/** Consonant skeleton of one Urdu-script word. */
export function urduWordSkeleton(word: string): string {
  const chars = [...word.normalize('NFC').replace(/[ً-ٰٟـ]/g, '')]
  let out = ''
  chars.forEach((ch, i) => {
    if (URDU_CONSONANT[ch]) out += URDU_CONSONANT[ch]
    else if (i === 0 && URDU_W.has(ch)) out += 'w'
    else if (i === 0 && URDU_Y.has(ch)) out += 'y'
    // ا آ ع ء and medial و ی are vowels here
  })
  return finish(out)
}

/** Consonant skeleton of one Roman-script word. */
export function romanWordSkeleton(word: string, keepFinalH = false): string {
  let w = word.toLowerCase().replace(/[^a-z]/g, '')
  if (!w) return ''
  let start = ''
  if (/^[wv]/.test(w)) {
    start = 'w'
    w = w.slice(1)
  } else if (/^y/.test(w)) {
    start = 'y'
    w = w.slice(1)
  }
  w = w
    .replace(/kh/g, 'K')
    .replace(/sh/g, 'S')
    .replace(/ch/g, 'C')
    // A lone c is a k sound ("Jacob"); only ch is چ
    .replace(/c/g, 'k')
    .replace(/C/g, 'c')
    .replace(/gh/g, 'g')
    .replace(/zh/g, 'z')
    .replace(/ph/g, 'f')
    .replace(/q/g, 'k')
    .replace(/x/g, 'ks')
    .replace(/[aeiouwvy]/g, '')
  return finish(start + w, keepFinalH)
}

const isUrduWord = (word: string) => /[؀-ۿ]/.test(word)

/** Each word of a name with its skeleton, in either script, without honorifics. */
export function nameWords(text: string): { word: string; skel: string }[] {
  return text
    .split(/[\s\-_,.()]+/)
    .filter((w) => w && !SKIP.has(w.toLowerCase()))
    .map((word) => ({ word, skel: isUrduWord(word) ? urduWordSkeleton(word) : romanWordSkeleton(word) }))
    .filter((w) => w.skel)
}

/** Skeletons of each word of a name, in either script, without honorifics. */
export const nameSkeleton = (text: string): string[] => nameWords(text).map((w) => w.skel)

/** The last typed word's skeleton with its final h kept: "Muh" is "mh", not "m", while still typing. */
export function lastWordRaw(text: string): string {
  const words = text.split(/[\s\-_,.()]+/).filter((w) => w && !SKIP.has(w.toLowerCase()))
  const last = words[words.length - 1] || ''
  return isUrduWord(last) ? urduWordSkeleton(last) : romanWordSkeleton(last, true)
}

/**
 * How well a typed Roman name matches a stored name, both as skeleton words: 0 = every word the
 * same, 1 = every typed word found in order (the last may be half-typed), 2 = found out of order,
 * -1 = no match. One-letter skeletons ("Ali" = "l") must match exactly, or they match everything.
 */
export function skeletonMatch(query: string[], name: string[], lastRaw = ''): number {
  if (!query.length) return -1
  const hit = (q: string, n: string, last: boolean) =>
    q === n || (last && ((q.length >= 2 && n.startsWith(q)) || (lastRaw.length >= 2 && n.startsWith(lastRaw))))
  // While the last word may still be half-typed ("Muh", trimmed to "m"), a name only counts as an
  // exact match if it also fits the untrimmed form — otherwise امام would beat محمد for "Ali Muh"
  const lastIdx = query.length - 1
  const stillTyping = lastRaw.length >= 2 && lastRaw !== query[lastIdx]
  if (
    query.length === name.length &&
    query.every((q, i) => q === name[i]) &&
    (!stillTyping || name[lastIdx].startsWith(lastRaw))
  )
    return 0
  let pos = 0
  let inOrder = true
  for (let i = 0; i < query.length; i++) {
    const last = i === query.length - 1
    const at = name.findIndex((n, j) => j >= pos && hit(query[i], n, last))
    if (at >= 0) {
      pos = at + 1
      continue
    }
    inOrder = false
    if (!name.some((n) => hit(query[i], n, last))) return -1
  }
  return inOrder ? 1 : 2
}

// ── Choosing between Urdu spellings that share a skeleton (حسن / حسین for "Hasan" / "Hussain") ──

// Roman and Urdu turned into one alphabet. Urdu writes long vowels (ا و ی) and not short ones, so long
// vowels are capitals — A, I, O — and short ones lower case: skipping a Roman short vowel the Urdu
// leaves out is cheap, skipping a long one is not. "Zaheer" (ee = I) then prefers ظہیر to ظاہر, and
// "Hussain" (ai = I) prefers حسین to حسن. Some spellings stay ambiguous ("Zahir"); frequency decides.
function romanShape(word: string) {
  return word
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/kh/g, 'K')
    .replace(/sh/g, 'S')
    .replace(/ch/g, 'c')
    .replace(/gh/g, 'g')
    .replace(/q/g, 'k')
    .replace(/(ee|ii|ei|ai|ey|ay)/g, 'I')
    .replace(/(oo|uu|ou|au|ow)/g, 'O')
    .replace(/aa/g, 'A')
    .replace(/^v/, 'w')
    .replace(/(?!^)[wv]/g, 'O')
    .replace(/(?!^)y/g, 'I')
    // A final i is almost always the written ی ("Ali" علی, "Taqi" تقی)
    .replace(/i$/, 'I')
    .replace(/u/g, 'o')
    .replace(/e/g, 'i')
    .replace(/(.)\1+/g, '$1')
}

function urduShape(word: string) {
  const chars = [...word.normalize('NFC').replace(/[ً-ٰٟـ]/g, '')]
  return chars
    .map((ch, i) => {
      const last = i === chars.length - 1
      if (URDU_CONSONANT[ch]) return last && 'ہۃة'.includes(ch) ? 'a' : URDU_CONSONANT[ch]
      // A word-initial alif carries a vowel of either length; elsewhere it is a long a
      if ('اآأإ'.includes(ch)) return i === 0 ? 'a' : 'A'
      if (URDU_W.has(ch)) return i === 0 ? 'w' : 'O'
      if (URDU_Y.has(ch)) return i === 0 ? 'y' : 'I'
      return ''
    })
    .join('')
    .replace(/(.)\1+/g, '$1')
}

const SHORT_VOWELS = 'aio'
const skipCost = (c: string) => (SHORT_VOWELS.includes(c) ? 0.4 : 1)
// Near matches: one short vowel for another (Urdu writes neither — "Imam" / امام), or a short vowel
// against its own long form (a / A). Anything else is a full mismatch.
const swapCost = (a: string, b: string) => {
  if (a === b) return 0
  if (SHORT_VOWELS.includes(a) && SHORT_VOWELS.includes(b)) return 0.3
  return a.toLowerCase() === b.toLowerCase() && SHORT_VOWELS.includes(a.toLowerCase()) ? 0.3 : 1
}

function weightedDistance(a: string, b: string) {
  const row = [0]
  for (let j = 1; j <= b.length; j++) row[j] = row[j - 1] + skipCost(b[j - 1])
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]
    row[0] += skipCost(a[i - 1])
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j]
      row[j] = Math.min(
        row[j] + skipCost(a[i - 1]),
        row[j - 1] + skipCost(b[j - 1]),
        prev + swapCost(a[i - 1], b[j - 1])
      )
      prev = tmp
    }
  }
  return row[b.length]
}

/** Lower is closer: how far an Urdu spelling's written vowels are from a Roman spelling's. */
export const spellingDistance = (roman: string, urdu: string) => weightedDistance(romanShape(roman), urduShape(urdu))

// ── Fallback for a word the ledger has never used ──

const ROMAN_TO_URDU: [RegExp, string][] = [
  [/kh/g, 'خ'], [/gh/g, 'غ'], [/sh/g, 'ش'], [/ch/g, 'چ'], [/zh/g, 'ژ'], [/ph/g, 'ف'], [/th/g, 'تھ'], [/dh/g, 'دھ'],
  [/bh/g, 'بھ'], [/b/g, 'ب'], [/p/g, 'پ'], [/t/g, 'ت'], [/j/g, 'ج'], [/d/g, 'د'], [/r/g, 'ر'], [/z/g, 'ز'],
  [/s/g, 'س'], [/f/g, 'ف'], [/q/g, 'ق'], [/k/g, 'ک'], [/c/g, 'ک'], [/g/g, 'گ'], [/l/g, 'ل'], [/m/g, 'م'],
  [/n/g, 'ن'], [/[wv]/g, 'و'], [/x/g, 'کس'], [/h/g, 'ہ'],
]

/** A rough Urdu spelling for a Roman word, used only when the ledger has no word that sounds like it. */
export function guessUrdu(word: string): string {
  let w = word.toLowerCase().replace(/[^a-z]/g, '')
  if (!w) return ''
  w = w
    .replace(/^(aa|a|i|e|u|o)/, 'ا$1')
    .replace(/(ee|ii|ai|ei|y)/g, 'ی')
    .replace(/(oo|uu|ou|au)/g, 'و')
    .replace(/aa/g, 'ا')
    .replace(/a$/, 'ا')
    .replace(/[ie]$/, 'ی')
    .replace(/o/g, 'و')
    .replace(/[aeiu]/g, '')
  for (const [re, ur] of ROMAN_TO_URDU) w = w.replace(re, ur)
  return w.replace(/ہ$/, 'ہ')
}
