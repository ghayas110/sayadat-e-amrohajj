'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { BookOpen, Loader2, Search, UserPlus } from 'lucide-react'
import type { LineageOption } from '@/lib/lineageTypes'

interface PersonSearchSelectProps {
  // The text in the box, and the ledger person it was picked from (if any)
  name: string
  picked?: LineageOption
  onChange: (name: string, picked?: LineageOption) => void
  // Only re-rank the results; nothing outside them is hidden
  mohalla?: string
  khandan?: string
  placeholder?: string
  required?: boolean
  className?: string
}

// Typing is debounced: a search goes out only after this long without a keystroke
const DEBOUNCE_MS = 300
const MIN_CHARS = 2

// Answers already fetched in this page visit, shared by every name box on the form, so typing a
// name back after deleting it, or the father box repeating a search, costs nothing
const resultCache = new Map<string, LineageOption[]>()
// Set when the server answers 429: no searches go out until this time (shared by all boxes)
let blockedUntil = 0

async function search(q: string, mohalla: string, khandan: string, signal: AbortSignal) {
  const key = `${q}|${mohalla}|${khandan}`
  const cached = resultCache.get(key)
  if (cached) return { options: cached }
  if (Date.now() < blockedUntil) return { throttled: true as const }
  const params = new URLSearchParams({ q })
  if (mohalla) params.set('mohalla', mohalla)
  if (khandan) params.set('khandan', khandan)
  const res = await fetch(`/api/lineage/search?${params}`, { signal })
  if (res.status === 429) {
    blockedUntil = Date.now() + Number(res.headers.get('Retry-After') || 30) * 1000
    return { throttled: true as const }
  }
  const data = await res.json()
  const options: LineageOption[] = data.options || []
  if (res.ok) resultCache.set(key, options)
  return { options }
}

/**
 * A name box that searches the ledger as you type. Picking a result links the form to that person;
 * anything typed can also be kept as a new name that is not in the ledger yet.
 */
export default function PersonSearchSelect({
  name,
  picked,
  onChange,
  mohalla = '',
  khandan = '',
  placeholder,
  required,
  className = '',
}: PersonSearchSelectProps) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<LineageOption[]>([])
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'throttled' | 'error'>('idle')
  const [active, setActive] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const listId = useId()

  const query = name.trim()

  // Debounced search; a newer keystroke cancels the pending timer and aborts any request in flight,
  // so a slow answer for an old query can never overwrite the list for the current one
  useEffect(() => {
    if (!open || picked || query.length < MIN_CHARS) {
      setStatus('idle')
      return
    }
    const controller = new AbortController()
    setStatus('loading')
    const timer = setTimeout(async () => {
      try {
        const result = await search(query, mohalla, khandan, controller.signal)
        if ('throttled' in result) return setStatus('throttled')
        setOptions(result.options)
        setActive(0)
        setStatus('done')
      } catch (err: any) {
        if (err?.name !== 'AbortError') setStatus('error')
      }
    }, DEBOUNCE_MS)
    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query, mohalla, khandan, open, picked])

  // Close when clicking anywhere else
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  useEffect(() => {
    if (open) listRef.current?.children[active]?.scrollIntoView({ block: 'nearest' })
  }, [active, open])

  const showList = open && !picked && query.length >= MIN_CHARS
  // The first row keeps the name exactly as typed, for someone not in the ledger yet
  const rows: (LineageOption | null)[] = showList ? [null, ...options] : []

  const choose = (row: LineageOption | null) => {
    if (row) onChange(row.name, row)
    setOpen(false)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showList) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(rows.length - 1, i + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(0, i - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      choose(rows[active] ?? null)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <div className="relative">
        <input
          type="text"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          autoComplete="off"
          required={required}
          dir="auto"
          value={name}
          placeholder={placeholder}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            // Editing the text un-links a picked person: it is now a typed name again
            onChange(e.target.value, undefined)
            setOpen(true)
          }}
          onKeyDown={onKeyDown}
          className={`${className} pe-9`}
        />
        <span className="absolute end-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
          {status === 'loading' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : picked ? (
            <BookOpen className="w-4 h-4 text-emerald-700" />
          ) : (
            <Search className="w-4 h-4" />
          )}
        </span>
      </div>

      {showList && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          dir="rtl"
          className="absolute z-30 mt-1 w-full min-w-[18rem] max-h-80 overflow-auto bg-white border border-slate-200 rounded-lg shadow-lg py-1"
        >
          {rows.map((row, i) => (
            <li
              key={row?.id ?? '__typed'}
              role="option"
              aria-selected={i === active}
              onMouseDown={(e) => {
                e.preventDefault()
                choose(row)
              }}
              onMouseEnter={() => setActive(i)}
              className={`px-3 py-1.5 cursor-pointer text-sm ${i === active ? 'bg-emerald-50' : ''}`}
            >
              {row ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-900">{row.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        row.kind === 'record'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {row.kind === 'record'
                        ? `ریکارڈ موجود${row.childCount ? ` · ${row.childCount} اولاد` : ''}`
                        : 'بیٹے کے طور پر درج'}
                    </span>
                  </div>
                  {row.hint && <div className="text-xs text-slate-600">{row.hint}</div>}
                </>
              ) : (
                <div className="flex items-center gap-2 text-slate-700">
                  <UserPlus className="w-4 h-4 text-slate-500" />
                  <span>
                    «{query}» — نیا نام، جیسا لکھا ویسا رکھیں / Not in the ledger, keep as typed
                  </span>
                </div>
              )}
            </li>
          ))}
          <li className="px-3 py-1 text-xs text-slate-500" aria-hidden>
            {status === 'loading' && 'تلاش جاری ہے… / Searching…'}
            {status === 'done' && options.length === 0 && 'کوئی ملتا جلتا نام نہیں / No matching name'}
            {status === 'done' && options.length === 30 && 'مزید نام ہیں — والد یا محلہ کا نام بھی لکھیں / More results — add a word to narrow'}
            {status === 'throttled' && 'بہت زیادہ تلاش — چند لمحے انتظار کریں / Too many searches, wait a moment'}
            {status === 'error' && 'تلاش ناکام / Search failed'}
          </li>
        </ul>
      )}
    </div>
  )
}
