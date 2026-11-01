// Names typed in English that the form turned into Urdu before saving. Kept on the record so the
// editors can check the Urdu against what the family actually typed.
export interface OriginalSpelling {
  _key: string
  english: string
  urdu: string
  guessed: boolean
}

export function parseOriginalSpellings(raw: unknown): OriginalSpelling[] {
  let list: unknown = raw
  if (typeof raw === 'string') {
    try {
      list = JSON.parse(raw)
    } catch {
      return []
    }
  }
  if (!Array.isArray(list)) return []
  const stamp = Date.now()
  return list
    .slice(0, 60)
    .filter((c: any) => typeof c?.from === 'string' && typeof c?.to === 'string' && c.from.trim() && c.to.trim())
    .map((c: any, i: number) => ({
      _key: `spelling_${i}_${stamp}`,
      english: c.from.trim().slice(0, 120),
      urdu: c.to.trim().slice(0, 120),
      guessed: Boolean(c.guessed),
    }))
}

/** Older spellings plus new ones, one entry per English name (the newest wins). */
export function mergeOriginalSpellings(old: OriginalSpelling[] = [], added: OriginalSpelling[]): OriginalSpelling[] {
  const fresh = new Set(added.map((c) => c.english))
  return [...old.filter((c) => !fresh.has(c.english)), ...added]
}
