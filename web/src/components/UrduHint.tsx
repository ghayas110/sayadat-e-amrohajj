'use client'

import React, { useEffect, useState } from 'react'
import { Languages } from 'lucide-react'
import type { UrduSuggestion } from '@/lib/lineageTypes'

// Waits for a pause in typing before asking, and remembers every answer in this page visit
const DEBOUNCE_MS = 450
const cache = new Map<string, UrduSuggestion[]>()
let blockedUntil = 0

const LATIN = /[a-z]/i

/**
 * Shown under a name box when the name is typed in English: the Urdu spelling the ledger uses,
 * word by word, with a choice where a word has more than one spelling, and a button to switch the
 * box to Urdu. The family tree and the printed book are in Urdu, so names are best stored that way.
 */
export default function UrduHint({ value, onUse }: { value: string; onUse: (urdu: string) => void }) {
  const text = value.trim()
  const [words, setWords] = useState<UrduSuggestion[] | null>(null)
  // The spelling chosen for each word, when the person changed it from the first suggestion
  const [chosen, setChosen] = useState<Record<number, string>>({})

  useEffect(() => {
    setChosen({})
    if (!LATIN.test(text) || text.length < 2) {
      setWords(null)
      return
    }
    const cached = cache.get(text)
    if (cached) {
      setWords(cached)
      return
    }
    const controller = new AbortController()
    const timer = setTimeout(async () => {
      if (Date.now() < blockedUntil) return
      try {
        const res = await fetch(`/api/lineage/urdu?text=${encodeURIComponent(text)}`, { signal: controller.signal })
        if (res.status === 429) {
          blockedUntil = Date.now() + Number(res.headers.get('Retry-After') || 30) * 1000
          return
        }
        const data = await res.json()
        if (!res.ok) return
        cache.set(text, data.words)
        setWords(data.words)
      } catch {
        // Aborted by a newer keystroke, or offline: the hint just doesn't show
      }
    }, DEBOUNCE_MS)
    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [text])

  if (!words?.length || !LATIN.test(text)) return null

  const pick = (i: number) => chosen[i] ?? words[i].options[0]
  const urdu = words.map((_, i) => pick(i)).join(' ')
  const anyGuess = words.some((w) => w.guessed)

  return (
    <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs" dir="rtl">
      <Languages className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
      <span className="text-slate-600">اردو میں:</span>
      {words.map((w, i) =>
        w.options.length > 1 ? (
          <select
            key={i}
            value={pick(i)}
            onChange={(e) => setChosen({ ...chosen, [i]: e.target.value })}
            aria-label={`Urdu spelling for ${w.input}`}
            className="border border-emerald-300 bg-emerald-50 rounded px-1 py-0.5 text-sm text-slate-900"
          >
            {w.options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        ) : (
          <span
            key={i}
            className={`text-sm px-1 ${w.guessed ? 'text-amber-800 underline decoration-dotted' : 'text-slate-900'}`}
            title={w.guessed ? 'Not found in the ledger — a rough spelling, please check' : undefined}
          >
            {w.options[0]}
          </span>
        )
      )}
      <button
        type="button"
        onClick={() => onUse(urdu)}
        className="ms-1 px-2 py-0.5 rounded bg-emerald-700 text-white hover:bg-emerald-800"
      >
        اردو استعمال کریں / Use Urdu
      </button>
      {anyGuess && (
        <span className="text-amber-800 basis-full">
          نقطہ دار لفظ کتاب میں نہیں ملا — ہجے خود دیکھ لیں / Dotted word not in the ledger, check its spelling
        </span>
      )}
    </div>
  )
}
