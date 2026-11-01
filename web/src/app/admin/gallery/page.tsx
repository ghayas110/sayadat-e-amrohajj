'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Images, Lock, Printer, RefreshCw } from 'lucide-react'
import SearchSelect from '@/components/SearchSelect'
import { MOHALLAS } from '@/data/amrohaIndex'
import type { GalleryPhoto } from '@/lib/galleryTypes'

// Photos families uploaded (their own and their sons'), grouped by mohalla. Pick a mohalla to see
// only its photos; Print starts every mohalla on a new page.

interface Section {
  value: string
  name: string
  photos: GalleryPhoto[]
}

// Mohallas in the order of the book's index, typed-in ones after them, "no mohalla" last
const sectionOrder = (value: string) => {
  const i = MOHALLAS.findIndex((m) => m.value === value)
  return i >= 0 ? i : value === 'none' ? 2000 : 1000
}

export default function GalleryPage() {
  const [auth, setAuth] = useState<'checking' | 'locked' | 'ok'>('checking')
  const [photos, setPhotos] = useState<GalleryPhoto[] | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [mohalla, setMohalla] = useState('')
  const [printing, setPrinting] = useState(false)

  const load = () => {
    setLoadError(null)
    setPhotos(null)
    fetch('/api/admin/gallery')
      .then(async (res) => {
        const data = await res.json()
        if (res.status === 401) {
          setAuth('locked')
          return
        }
        setAuth('ok')
        if (!res.ok) throw new Error(data.error || 'Could not load photos')
        setPhotos(data.photos || [])
      })
      .catch((err) => setLoadError(err.message))
  }

  useEffect(load, [])

  const sections = useMemo(() => {
    const groups = new Map<string, Section>()
    for (const p of photos || []) {
      const group = groups.get(p.mohalla) ?? { value: p.mohalla, name: p.mohallaName, photos: [] }
      group.photos.push(p)
      groups.set(p.mohalla, group)
    }
    return [...groups.values()].sort((a, b) => sectionOrder(a.value) - sectionOrder(b.value) || a.name.localeCompare(b.name))
  }, [photos])

  const options = sections.map((s) => ({
    value: s.value,
    label: s.name,
    hint: `${s.photos.length} ${s.photos.length === 1 ? 'photo' : 'photos'}`,
  }))
  const shown = mohalla ? sections.filter((s) => s.value === mohalla) : sections
  const shownCount = shown.reduce((n, s) => n + s.photos.length, 0)

  // Every photo has to be loaded (lazy ones too) before the print dialog opens
  useEffect(() => {
    if (!printing) return
    const onAfterPrint = () => setPrinting(false)
    window.addEventListener('afterprint', onAfterPrint)
    const images = Array.from(document.querySelectorAll<HTMLImageElement>('img.gallery-photo'))
    const ready = Promise.all(images.map((img) => img.decode().catch(() => undefined)))
    const timeout = new Promise((resolve) => setTimeout(resolve, 15000))
    let cancelled = false
    Promise.race([ready, timeout]).then(() => {
      if (!cancelled) window.print()
    })
    return () => {
      cancelled = true
      window.removeEventListener('afterprint', onAfterPrint)
    }
  }, [printing])

  if (auth === 'checking') {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        <RefreshCw className="w-5 h-5 animate-spin" />
      </div>
    )
  }

  if (auth === 'locked') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-slate-200 p-6 space-y-4 text-center">
          <Lock className="w-8 h-8 text-emerald-800 mx-auto" />
          <p className="text-sm text-slate-700">Unlock the admin page with the PIN first, then open the gallery.</p>
          <Link
            href="/admin"
            className="inline-block px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg"
          >
            Go to admin / ایڈمن
          </Link>
        </div>
      </div>
    )
  }

  const today = new Date().toLocaleDateString('en-GB')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 print:bg-white">
      <style>{`@page { size: A4 portrait; margin: 10mm; }`}</style>

      <header className="bg-emerald-900 text-white shadow print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/admin" className="p-2 hover:bg-emerald-800 rounded-lg transition" title="Back to admin">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="min-w-0">
              <h1 className="font-bold text-base md:text-lg leading-tight">Photo Gallery / تصاویر</h1>
              <p className="hidden sm:block text-xs text-amber-200">Sadat-e-Amroha Nasab Nama</p>
            </div>
          </div>
          <button
            onClick={load}
            className="px-3 py-1.5 text-xs md:text-sm bg-emerald-800 hover:bg-emerald-700 rounded-md border border-emerald-600 transition flex items-center gap-1.5"
          >
            <RefreshCw className={`w-4 h-4 ${photos === null && !loadError ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6 print:p-0 print:max-w-none">
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col md:flex-row md:items-end gap-4 print:hidden">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-slate-700 mb-1">Mohalla / محلہ</label>
            <SearchSelect
              value={mohalla}
              onChange={setMohalla}
              dir="rtl"
              options={options}
              emptyLabel="تمام محلے / All mohallas"
              placeholder="محلہ تلاش کریں / Type to search mohalla"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-700">
              {photos === null ? 'Loading…' : `${shownCount} ${shownCount === 1 ? 'photo' : 'photos'}`}
            </span>
            <button
              onClick={() => setPrinting(true)}
              disabled={!shownCount || printing}
              className="px-4 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-semibold flex items-center gap-2 disabled:opacity-50"
            >
              <Printer className="w-4 h-4" />
              {printing ? 'Preparing…' : mohalla ? `Print ${shown[0]?.name || ''}` : 'Print all mohallas'}
            </button>
          </div>
        </section>

        {loadError && <p className="text-sm text-rose-700 print:hidden">{loadError}</p>}

        {photos !== null && photos.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center text-sm text-slate-600 print:hidden">
            <Images className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            No photos uploaded yet. Photos added with the form (the family head&apos;s and his sons&apos;) appear here.
          </div>
        )}

        {shown.map((section, i) => (
          <section key={section.value} className={i > 0 ? 'print:break-before-page' : ''}>
            <div className="flex items-baseline justify-between gap-3 mb-3 border-b border-slate-200 pb-2" dir="rtl">
              <h2 className="text-xl font-bold text-emerald-900 leading-[2]">{section.name}</h2>
              <span className="text-xs text-slate-600">
                <span className="hidden print:inline">ساداتِ امروہہ نسب نامہ — تصاویر • {today} • </span>
                <span dir="ltr">
                  {section.photos.length} {section.photos.length === 1 ? 'photo' : 'photos'}
                </span>
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 print:grid-cols-4 gap-3" dir="rtl">
              {section.photos.map((p) => (
                <figure
                  key={p.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden break-inside-avoid"
                >
                  <div className="aspect-[3/4] bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${p.url}?w=600&fit=max&auto=format`}
                      alt={p.name}
                      loading={printing ? 'eager' : 'lazy'}
                      className="gallery-photo w-full h-full object-contain"
                    />
                  </div>
                  <figcaption className="px-2 py-1.5 text-center leading-[1.9]">
                    <span className="block text-sm font-semibold text-slate-900">
                      {p.name}
                      {p.isDeceased && <span className="text-xs text-slate-600"> (مرحوم)</span>}
                    </span>
                    {p.lineage && <span className="block text-xs text-slate-600">{p.lineage}</span>}
                    {p.khandan && <span className="block text-[11px] text-slate-500">{p.khandan}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
