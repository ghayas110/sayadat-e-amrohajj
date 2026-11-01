'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Lock,
  LogOut,
  GitBranch,
  Printer,
  ZoomIn,
  ZoomOut,
  ExternalLink,
  RefreshCw,
  X,
  BookOpen,
  Images,
  Wallet,
} from 'lucide-react'
import FamilyTree from '@/components/FamilyTree'
import SearchSelect from '@/components/SearchSelect'
import TreePrintPanel from '@/components/TreePrintPanel'
import BookPrintPanel from '@/components/BookPrintPanel'
import { MOHALLAS, findKhandan, khandansForMohalla } from '@/data/amrohaIndex'
import { INDEX_PAGES, MOHALLA_OPTIONS, khandanOption } from '@/data/indexOptions'
import {
  buildFamilyTree,
  countPeople,
  indexParents,
  isBookRecordId,
  type TreeNode,
  type TreeRecord,
} from '@/lib/familyTree'

const UNASSIGNED = 'unassigned'
const STUDIO_URL = 'https://sayadat-e-amroha.sanity.studio'

const isUnassigned = (record: TreeRecord) =>
  !record.khandan || record.khandan === 'other' || !findKhandan(record.khandan)

export default function AdminPage() {
  const [auth, setAuth] = useState<'checking' | 'locked' | 'ok'>('checking')
  const [pin, setPin] = useState('')
  const [pinError, setPinError] = useState<string | null>(null)
  const [signingIn, setSigningIn] = useState(false)

  const [mohalla, setMohalla] = useState('')
  const [records, setRecords] = useState<TreeRecord[]>([])
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [khandan, setKhandan] = useState('')
  const [selected, setSelected] = useState<TreeNode | null>(null)
  const [zoom, setZoom] = useState(1)
  const [printOpen, setPrintOpen] = useState(false)
  const [bookOpen, setBookOpen] = useState(false)
  const treeScrollRef = useRef<HTMLDivElement>(null)

  // Open each tree scrolled to its top node, which sits in the middle of a wide tree
  useEffect(() => {
    const el = treeScrollRef.current
    if (el) el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2
  }, [khandan, records])

  const fitToWidth = () => {
    const el = treeScrollRef.current
    if (!el) return
    const naturalWidth = el.scrollWidth / zoom
    setZoom(Math.max(0.2, Math.min(1, +(el.clientWidth / naturalWidth).toFixed(2))))
  }

  useEffect(() => {
    fetch('/api/admin/session')
      .then((res) => res.json())
      .then((data) => setAuth(data.authenticated ? 'ok' : 'locked'))
      .catch(() => setAuth('locked'))
  }, [])

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setSigningIn(true)
    setPinError(null)
    try {
      const res = await fetch('/api/admin/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Could not sign in')
      setPin('')
      setAuth('ok')
    } catch (err: any) {
      setPinError(err.message)
    } finally {
      setSigningIn(false)
    }
  }

  const signOut = async () => {
    await fetch('/api/admin/session', { method: 'DELETE' })
    setAuth('locked')
    setRecords([])
    setMohalla('')
    setKhandan('')
    setSelected(null)
  }

  const loadRecords = async (value: string) => {
    setLoading(true)
    setLoadError(null)
    try {
      const res = await fetch(`/api/admin/records?mohalla=${encodeURIComponent(value)}`)
      const data = await res.json()
      if (res.status === 401) {
        setAuth('locked')
        return
      }
      if (!res.ok) throw new Error(data.error || 'Could not load records')
      setRecords(data.records || [])
    } catch (err: any) {
      setLoadError(err.message)
      setRecords([])
    } finally {
      setLoading(false)
    }
  }

  const selectMohalla = (value: string) => {
    setMohalla(value)
    setKhandan('')
    setSelected(null)
    setRecords([])
    if (value) loadRecords(value)
  }

  const selectKhandan = (value: string) => {
    setKhandan(value)
    setSelected(null)
    setZoom(1)
  }

  // Khandans listed for this mohalla in the book, plus any khandan a record in this mohalla uses
  const khandanOptions = useMemo(() => {
    const listed = khandansForMohalla(mohalla)
    const extra = records
      .map((r) => findKhandan(r.khandan))
      .filter((k): k is NonNullable<typeof k> => Boolean(k) && !listed.includes(k!))
    const unique = [...listed, ...extra.filter((k, i) => extra.indexOf(k) === i)]
    const countText = (serial: string) => {
      const n = records.filter((r) =>
        serial === UNASSIGNED ? isUnassigned(r) : r.khandan === serial
      ).length
      return `${n} ${n === 1 ? 'record' : 'records'}`
    }
    return [
      ...unique.sort((a, b) => a.serial - b.serial).map((k) => khandanOption(k, countText(String(k.serial)))),
      {
        value: UNASSIGNED,
        label: 'دیگر / Khandan not selected',
        hint: `Records with no khandan or a khandan not in the index · ${countText(UNASSIGNED)}`,
      },
    ]
  }, [mohalla, records])

  const khandanRecords = useMemo(
    () =>
      khandan
        ? records.filter((r) => (khandan === UNASSIGNED ? isUnassigned(r) : r.khandan === khandan))
        : [],
    [records, khandan]
  )
  const roots = useMemo(() => buildFamilyTree(khandanRecords), [khandanRecords])
  const parents = useMemo(() => indexParents(roots), [roots])

  const khandanInfo = findKhandan(khandan)
  const mohallaInfo = MOHALLAS.find((m) => m.value === mohalla)
  const treeTitle = khandanInfo ? khandanInfo.name : 'دیگر خاندان'
  const treeSubtitle = [
    mohallaInfo?.ur,
    khandanInfo && `کوثر الانساب صفحہ ${khandanInfo.page}`,
  ]
    .filter(Boolean)
    .join(' • ')

  // "X بن Y بن Z" up to the top of the tree
  const lineage = (node: TreeNode) => {
    const ancestors: string[] = []
    for (let p = parents.get(node.id); p; p = parents.get(p.id)) ancestors.push(p.name)
    if (ancestors.length === 0) return node.name
    return `${node.name} ${node.gender === 'female' ? 'بنت' : 'بن'} ${ancestors.join(' بن ')}`
  }

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
        <form
          onSubmit={signIn}
          className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-slate-200 p-6 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-900 text-amber-300 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-slate-900">Admin / ایڈمن</h1>
              <p className="text-xs text-slate-600">Enter the PIN to view family trees</p>
            </div>
          </div>
          <input
            type="password"
            inputMode="numeric"
            autoComplete="off"
            autoFocus
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 8))}
            placeholder="PIN / پن کوڈ"
            className="w-full px-4 py-3 text-center text-2xl tracking-[0.5em] bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
          />
          {pinError && <p className="text-sm text-rose-700">{pinError}</p>}
          <button
            type="submit"
            disabled={!pin || signingIn}
            className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold rounded-lg transition disabled:opacity-50"
          >
            {signingIn ? 'Checking…' : 'Unlock'}
          </button>
          <Link href="/" className="block text-center text-xs text-slate-600 hover:text-emerald-800">
            ← Back to form
          </Link>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-emerald-900 text-white shadow print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/" className="p-2 hover:bg-emerald-800 rounded-lg transition" title="Back to form">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="min-w-0">
              <h1 className="font-bold text-base md:text-lg leading-tight">
                Family Tree Admin / نسب نامہ
              </h1>
              <p className="hidden sm:block text-xs text-amber-200">
                Sadat-e-Amroha Nasab Nama
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
          <Link
            href="/admin/payments"
            className="px-3 py-1.5 text-xs md:text-sm bg-emerald-800 hover:bg-emerald-700 rounded-md border border-emerald-600 transition flex items-center gap-1.5"
            title="Bookings, deposit slips and who has paid"
          >
            <Wallet className="w-4 h-4" />
            <span className="hidden sm:inline">Payments</span>
          </Link>
          <Link
            href="/admin/gallery"
            className="px-3 py-1.5 text-xs md:text-sm bg-emerald-800 hover:bg-emerald-700 rounded-md border border-emerald-600 transition flex items-center gap-1.5"
            title="Photos families uploaded, by mohalla"
          >
            <Images className="w-4 h-4" />
            <span className="hidden sm:inline">Gallery</span>
          </Link>
          <button
            onClick={() => setBookOpen(true)}
            className="px-3 py-1.5 text-xs md:text-sm bg-amber-500 hover:bg-amber-400 text-emerald-950 font-medium rounded-md shadow transition flex items-center gap-1.5"
            title="Print or save every khandan as one book"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Whole book</span>
          </button>
          <button
            onClick={signOut}
            className="px-3 py-1.5 text-xs md:text-sm bg-emerald-800 hover:bg-emerald-700 rounded-md border border-emerald-600 transition flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Lock</span>
          </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4 print:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                1. Mohalla / محلہ
              </label>
              <SearchSelect
                value={mohalla}
                onChange={selectMohalla}
                dir="rtl"
                options={MOHALLA_OPTIONS}
                placeholder="محلہ تلاش کریں / Type to search mohalla"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>2. Khandan / خاندان</span>
                {loading && <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-700" />}
              </label>
              <SearchSelect
                value={khandan}
                onChange={selectKhandan}
                dir="rtl"
                disabled={!mohalla}
                options={khandanOptions}
                placeholder={mohalla ? 'خاندان تلاش کریں / Type to search khandan' : 'پہلے محلہ منتخب کریں / Choose a mohalla first'}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none disabled:opacity-50"
              />
            </div>
          </div>
          {loadError && <p className="text-sm text-rose-700">{loadError}</p>}
          <p className="text-xs text-slate-600 flex flex-wrap items-center gap-x-2" dir="rtl">
            <span>کتاب کی فہرست / Book index:</span>
            {INDEX_PAGES.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-800 underline hover:text-emerald-600"
              >
                {p.label}
              </a>
            ))}
          </p>
        </section>

        {/* Tree */}
        {khandan && (
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm print:border-0 print:shadow-none">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-slate-100 print:hidden">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <GitBranch className="w-4 h-4 text-emerald-700" />
                <span>
                  {khandanRecords.length} {khandanRecords.length === 1 ? 'record' : 'records'} •{' '}
                  {countPeople(roots)} people
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setZoom((z) => Math.max(0.2, +(z - 0.1).toFixed(1)))}
                  className="p-2 rounded-lg hover:bg-slate-100 text-slate-700"
                  title="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-600 w-12 text-center">{Math.round(zoom * 100)}%</span>
                <button
                  onClick={() => setZoom((z) => Math.min(1.6, +(z + 0.1).toFixed(1)))}
                  className="p-2 rounded-lg hover:bg-slate-100 text-slate-700"
                  title="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={fitToWidth}
                  className="px-2 py-1.5 text-xs rounded-lg hover:bg-slate-100 text-slate-700"
                  title="Fit whole tree to the screen"
                >
                  Fit
                </button>
                <button
                  onClick={() => setPrintOpen(true)}
                  disabled={khandanRecords.length === 0}
                  className="ml-2 px-3 py-1.5 text-xs rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print</span>
                </button>
              </div>
            </div>

            {khandanRecords.length === 0 ? (
              <div className="p-10 text-center text-sm text-slate-600">
                No records submitted yet for this khandan in this mohalla.
              </div>
            ) : (
              <div
                ref={treeScrollRef}
                className="overflow-auto max-h-[75vh] print:max-h-none print:overflow-visible"
              >
                <div style={{ zoom }}>
                  <FamilyTree
                    title={treeTitle}
                    subtitle={treeSubtitle}
                    roots={roots}
                    selectedId={selected?.id}
                    onSelect={setSelected}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 px-5 py-3 border-t border-slate-100 text-xs text-slate-600 print:hidden">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-3 rounded border-2 border-emerald-600 bg-emerald-50" /> Submitted
                own record
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-3 rounded border border-emerald-200 bg-white" /> Son
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-3 rounded border border-pink-200 bg-pink-50" /> Daughter
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-3 rounded border border-dashed border-slate-400 bg-slate-50" />{' '}
                Father named in a record (no record of his own)
              </span>
            </div>
          </section>
        )}
      </main>

      {bookOpen && <BookPrintPanel onClose={() => setBookOpen(false)} />}

      {printOpen && (
        <TreePrintPanel
          onClose={() => setPrintOpen(false)}
          scopes={[
            {
              id: 'all',
              label: `Whole nasab / پورا نسب (${countPeople(roots)} people)`,
              title: treeTitle,
              subtitle: treeSubtitle,
              roots,
            },
            // A selected person with children can be printed on their own, like a section of the book
            ...(selected && selected.children.length > 0
              ? [
                  {
                    id: `branch:${selected.id}`,
                    label: `Only the branch of ${selected.name} / صرف یہ شاخ (${countPeople([selected])} people)`,
                    title: treeTitle,
                    subtitle: `شاخ: ${lineage(selected)}`,
                    roots: [selected],
                  },
                ]
              : []),
          ]}
        />
      )}

      {/* Person details */}
      {selected && (
        <aside className="fixed inset-x-0 bottom-0 md:inset-x-auto md:right-4 md:bottom-4 md:w-96 z-50 bg-white border border-slate-200 rounded-t-2xl md:rounded-2xl shadow-2xl p-5 space-y-3 print:hidden">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0" dir="rtl">
              {selected.photoUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`${selected.photoUrl}?w=112&h=112&fit=crop&auto=format`}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover border border-slate-200"
                />
              )}
              <div>
                <h2 className="font-bold text-lg text-slate-900">
                  {selected.name}
                  {selected.isDeceased && <span className="text-sm text-slate-600"> (مرحوم)</span>}
                </h2>
                <p className="text-xs text-slate-600">
                  {selected.gender === 'female' ? 'Daughter / بیٹی' : 'Son / بیٹا'}
                  {selected.isPlaceholder && ' • no record of his own'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <dl className="text-sm space-y-2" dir="rtl">
            <div>
              <dt className="text-xs text-slate-600">نسب / Lineage</dt>
              <dd className="text-slate-900">{lineage(selected)}</dd>
            </div>
            {parents.get(selected.id) && (
              <div>
                <dt className="text-xs text-slate-600">والد / Father</dt>
                <dd>
                  <button
                    onClick={() => setSelected(parents.get(selected.id)!)}
                    className="text-emerald-800 hover:underline"
                  >
                    {parents.get(selected.id)!.name}
                  </button>
                </dd>
              </div>
            )}
            {selected.spouse && (
              <div>
                <dt className="text-xs text-slate-600">
                  {selected.gender === 'female' ? 'شوہر / Husband' : 'زوجہ / Wife'}
                </dt>
                <dd className="text-slate-900">
                  {selected.spouse}
                  {selected.spouseMohalla && ` (${selected.spouseMohalla})`}
                </dd>
              </div>
            )}
            {selected.notes && (
              <div>
                <dt className="text-xs text-slate-600">Notes</dt>
                <dd className="text-slate-900">{selected.notes}</dd>
              </div>
            )}
            {selected.children.length > 0 && (
              <div>
                <dt className="text-xs text-slate-600">اولاد / Children</dt>
                <dd className="text-slate-900">
                  {selected.children.filter((c) => c.gender === 'male').length} sons •{' '}
                  {selected.children.filter((c) => c.gender === 'female').length} daughters
                </dd>
              </div>
            )}
          </dl>

          {selected.recordId && !isBookRecordId(selected.recordId) && (
            <a
              href={`${STUDIO_URL}/intent/edit/id=${selected.recordId};type=lineageRecord/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-emerald-800 hover:underline"
            >
              Open record in Sanity Studio <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </aside>
      )}
    </div>
  )
}
