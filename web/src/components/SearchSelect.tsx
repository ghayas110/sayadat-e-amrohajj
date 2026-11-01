'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface SearchSelectOption {
  value: string
  label: string
  // Second line shown under the label, also searched
  hint?: string
}

interface SearchSelectProps {
  options: SearchSelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  // When set, an extra first option that clears the selection
  emptyLabel?: string
  dir?: 'ltr' | 'rtl'
  disabled?: boolean
  className?: string
}

// Widest the option list may grow beyond its field, so long Urdu names fit on one line
const LIST_MAX_WIDTH_PX = 600

// Loose match for typed searches: ignores case, Arabic diacritics and Arabic/Urdu letter variants
const normalize = (text: string) =>
  text
    .normalize('NFC')
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .toLowerCase()

/** A dropdown you can type into to filter its options. */
export default function SearchSelect({
  options,
  value,
  onChange,
  placeholder = 'Search…',
  emptyLabel,
  dir,
  disabled,
  className = '',
}: SearchSelectProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [align, setAlign] = useState<'left' | 'right' | 'full'>('full')
  const rootRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const listId = useId()

  const selected = options.find((o) => o.value === value)
  const q = normalize(query.trim())
  const matches = q
    ? options.filter((o) => normalize(`${o.label} ${o.hint || ''}`).includes(q))
    : options
  const items = emptyLabel && !q ? [{ value: '', label: emptyLabel }, ...matches] : matches

  const close = () => {
    setOpen(false)
    setQuery('')
  }

  const openList = () => {
    if (disabled) return
    // Let the list be wider than the field, opening towards whichever side has room
    const rect = rootRef.current?.getBoundingClientRect()
    if (rect) {
      const listWidth = Math.min(window.innerWidth * 0.92, LIST_MAX_WIDTH_PX)
      if (rect.left + listWidth <= window.innerWidth - 8) setAlign('left')
      else if (rect.right - listWidth >= 8) setAlign('right')
      else setAlign('full')
    }
    setOpen(true)
    setActive(Math.max(0, items.findIndex((o) => o.value === value)))
  }

  const choose = (next: string) => {
    onChange(next)
    close()
  }

  // Close when clicking anywhere else on the page
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close()
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [open])

  // Keep the highlighted option visible while moving with the arrow keys
  useEffect(() => {
    if (open) listRef.current?.children[active]?.scrollIntoView({ block: 'nearest' })
  }, [active, open])

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!open) openList()
      else setActive((i) => Math.min(items.length - 1, i + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(0, i - 1))
    } else if (e.key === 'Enter') {
      if (open) {
        e.preventDefault()
        if (items[active]) choose(items[active].value)
      }
    } else if (e.key === 'Escape') {
      close()
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <input
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        autoComplete="off"
        disabled={disabled}
        dir={dir}
        value={open ? query : selected?.label || ''}
        placeholder={open && selected ? selected.label : placeholder}
        onFocus={openList}
        onClick={() => !open && openList()}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
          setActive(0)
        }}
        onKeyDown={onKeyDown}
        className={`${className} pe-9`}
      />
      <ChevronDown
        className={`w-4 h-4 text-slate-500 absolute end-3 top-1/2 -translate-y-1/2 pointer-events-none transition ${
          open ? 'rotate-180' : ''
        }`}
      />
      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          dir={dir}
          className={`absolute z-30 mt-1 max-h-80 overflow-auto bg-white border border-slate-200 rounded-lg shadow-lg py-1 ${
            align === 'full' ? 'left-0 w-full' : `${align === 'left' ? 'left-0' : 'right-0'} min-w-full w-max`
          }`}
          style={align === 'full' ? undefined : { maxWidth: `min(92vw, ${LIST_MAX_WIDTH_PX}px)` }}
        >
          {items.length === 0 ? (
            <li className="px-3 py-2 text-sm text-slate-600">No matches / کوئی نتیجہ نہیں</li>
          ) : (
            items.map((option, i) => (
              <li
                key={option.value || '__empty'}
                role="option"
                aria-selected={option.value === value}
                onMouseDown={(e) => {
                  e.preventDefault()
                  choose(option.value)
                }}
                onMouseEnter={() => setActive(i)}
                className={`px-3 py-1.5 cursor-pointer text-sm ${
                  i === active ? 'bg-emerald-50' : ''
                } ${option.value === value ? 'font-semibold text-emerald-900' : 'text-slate-800'} ${
                  option.value === '' ? 'text-slate-600' : ''
                }`}
              >
                <div>{option.label}</div>
                {option.hint && <div className="text-xs text-slate-600">{option.hint}</div>}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}
