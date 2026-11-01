'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText, Lock, RefreshCw, Search, Wallet } from 'lucide-react'
import { MOHALLAS } from '@/data/amrohaIndex'
import { PAYMENT_STATUS, bookingOf, rupees, statusOf, type PaymentStatus } from '@/lib/booking'

// Who booked a book and whether they have paid. The website can't see the bank account: the admin
// checks the deposit slip and transaction ID against the bank, then marks the booking paid here.

interface PaymentRecord {
  _id: string
  name?: string
  fatherName?: string
  mohalla?: string
  customMohalla?: string
  phone?: string
  submitter?: string
  submittedAt?: string
  _createdAt: string
  bookingType?: string
  transactionId?: string
  status?: string
  verifiedAt?: string
  slipUrl?: string
  slipFileUrl?: string
}

type Filter = 'pending' | 'paid' | 'free' | 'all'

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'pending', label: 'Not checked / تصدیق باقی' },
  { value: 'paid', label: 'Paid / ادا شدہ' },
  { value: 'free', label: 'Free / مفت' },
  { value: 'all', label: 'All / سب' },
]

const isPaid = (s: PaymentStatus) => s === 'verified' || s === 'dispatched'

const mohallaName = (r: PaymentRecord) =>
  r.mohalla === 'Other' ? r.customMohalla : MOHALLAS.find((m) => m.value === r.mohalla)?.ur || r.mohalla

const dateText = (iso?: string) => (iso ? new Date(iso).toLocaleDateString('en-GB') : '')

export default function PaymentsPage() {
  const [auth, setAuth] = useState<'checking' | 'locked' | 'ok'>('checking')
  const [records, setRecords] = useState<PaymentRecord[] | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [filter, setFilter] = useState<Filter>('pending')
  const [query, setQuery] = useState('')
  const [savingId, setSavingId] = useState<string | null>(null)

  const load = () => {
    setLoadError(null)
    setRecords(null)
    fetch('/api/admin/payments')
      .then(async (res) => {
        const data = await res.json()
        if (res.status === 401) {
          setAuth('locked')
          return
        }
        setAuth('ok')
        if (!res.ok) throw new Error(data.error || 'Could not load payments')
        setRecords(data.records || [])
      })
      .catch((err) => setLoadError(err.message))
  }

  useEffect(load, [])

  const rows = useMemo(
    () =>
      (records || []).map((r) => ({
        ...r,
        booking: bookingOf(r.bookingType),
        state: statusOf(r.bookingType, r.status),
      })),
    [records]
  )

  const totals = useMemo(() => {
    const paid = rows.filter((r) => isPaid(r.state))
    const pending = rows.filter((r) => r.state === 'pending')
    return {
      paid: paid.length,
      paidAmount: paid.reduce((n, r) => n + r.booking.price, 0),
      pending: pending.length,
      pendingAmount: pending.reduce((n, r) => n + r.booking.price, 0),
      pendingNoSlip: pending.filter((r) => !r.slipUrl && !r.slipFileUrl && !r.transactionId).length,
      free: rows.filter((r) => r.state === 'na').length,
    }
  }, [rows])

  const q = query.trim().toLowerCase()
  const shown = rows.filter(
    (r) =>
      (filter === 'all' ||
        (filter === 'pending' && r.state === 'pending') ||
        (filter === 'paid' && isPaid(r.state)) ||
        (filter === 'free' && r.state === 'na')) &&
      (!q ||
        [r.name, r.fatherName, r.phone, r.transactionId, r.submitter].some((v) => v?.toLowerCase().includes(q)))
  )

  const setStatus = async (r: PaymentRecord, status: PaymentStatus) => {
    setSavingId(r._id)
    try {
      const res = await fetch(`/api/admin/payments/${encodeURIComponent(r._id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Could not save')
      const paid = status === 'verified' || status === 'dispatched'
      setRecords((prev) =>
        (prev || []).map((x) =>
          x._id === r._id
            ? { ...x, status, verifiedAt: paid ? x.verifiedAt || new Date().toISOString() : undefined }
            : x
        )
      )
    } catch (err: any) {
      window.alert(err.message)
    } finally {
      setSavingId(null)
    }
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
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-slate-200 p-6 space-y-4 text-center">
          <Lock className="w-8 h-8 text-emerald-800 mx-auto" />
          <p className="text-sm text-slate-700">Unlock the admin page with the PIN first, then open Payments.</p>
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-emerald-900 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/admin" className="p-2 hover:bg-emerald-800 rounded-lg transition" title="Back to admin">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="min-w-0">
              <h1 className="font-bold text-base md:text-lg leading-tight">Payments / ادائیگیاں</h1>
              <p className="hidden sm:block text-xs text-amber-200">Book bookings and deposit slips</p>
            </div>
          </div>
          <button
            onClick={load}
            className="px-3 py-1.5 text-xs md:text-sm bg-emerald-800 hover:bg-emerald-700 rounded-md border border-emerald-600 transition flex items-center gap-1.5"
          >
            <RefreshCw className={`w-4 h-4 ${records === null && !loadError ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl border border-emerald-200 p-4">
            <p className="text-xs text-slate-600">Paid / ادا شدہ</p>
            <p className="text-2xl font-bold text-emerald-800">{rupees(totals.paidAmount)}</p>
            <p className="text-xs text-slate-600">{totals.paid} bookings</p>
          </div>
          <div className="bg-white rounded-2xl border border-amber-200 p-4">
            <p className="text-xs text-slate-600">Not checked yet / تصدیق باقی</p>
            <p className="text-2xl font-bold text-amber-700">{rupees(totals.pendingAmount)}</p>
            <p className="text-xs text-slate-600">
              {totals.pending} bookings
              {totals.pendingNoSlip > 0 && ` · ${totals.pendingNoSlip} with no slip or transaction ID`}
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-4">
            <p className="text-xs text-slate-600">Free (lineage only) / مفت</p>
            <p className="text-2xl font-bold text-slate-700">{totals.free}</p>
            <p className="text-xs text-slate-600">no payment needed</p>
          </div>
        </div>

        <p className="text-xs text-slate-600">
          The website can&apos;t see your bank account. Check each slip or transaction ID against the bank (Bank AL
          Habib), then press <strong>Mark paid</strong>.
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex flex-wrap gap-1.5">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-3 py-1.5 rounded-lg border text-sm transition ${
                  filter === f.value
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold'
                    : 'border-slate-300 text-slate-700 bg-white hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name, phone or transaction ID"
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>

        {loadError && <p className="text-sm text-rose-700">{loadError}</p>}
        {records === null && !loadError && <p className="text-sm text-slate-600">Loading…</p>}

        {records !== null && shown.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center text-sm text-slate-600">
            <Wallet className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            {records.length === 0 ? 'No submissions yet.' : 'Nothing in this list.'}
          </div>
        )}

        <div className="space-y-3">
          {shown.map((r) => {
            const status = PAYMENT_STATUS[r.state]
            const saving = savingId === r._id
            return (
              <div
                key={r._id}
                className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col md:flex-row gap-4"
              >
                <div className="md:w-28 shrink-0">
                  {r.slipUrl ? (
                    <a href={r.slipUrl} target="_blank" rel="noreferrer" title="Open the slip full size">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${r.slipUrl}?w=240&fit=max&auto=format`}
                        alt="Deposit slip"
                        className="w-28 h-36 object-cover rounded-lg border border-slate-200 bg-slate-100"
                      />
                    </a>
                  ) : r.slipFileUrl ? (
                    <a
                      href={r.slipFileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-28 h-36 rounded-lg border border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-1 text-xs text-emerald-800 hover:bg-slate-100"
                    >
                      <FileText className="w-6 h-6" />
                      Slip (PDF)
                    </a>
                  ) : (
                    r.state !== 'na' && (
                      <div className="w-28 h-36 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-center text-xs text-slate-500 p-2">
                        No slip uploaded
                      </div>
                    )
                  )}
                </div>

                <div className="flex-1 min-w-0 space-y-1 text-sm">
                  <p className="font-bold text-base text-slate-900" dir="rtl">
                    {r.name} <span className="font-normal text-slate-600">بن {r.fatherName}</span>
                  </p>
                  <p className="text-slate-700">
                    {r.booking.label} · <strong>{r.booking.price ? rupees(r.booking.price) : 'Free'}</strong>
                  </p>
                  <p className="text-slate-700">
                    Transaction ID: <strong className="font-mono">{r.transactionId || '—'}</strong>
                  </p>
                  <p className="text-xs text-slate-600">
                    {r.phone && <span className="mr-3">📞 {r.phone}</span>}
                    {mohallaName(r) && <span className="mr-3">{mohallaName(r)}</span>}
                    <span>Submitted {dateText(r.submittedAt || r._createdAt)}</span>
                    {r.submitter && r.submitter !== r.name && <span> by {r.submitter}</span>}
                  </p>
                </div>

                <div className="md:w-56 shrink-0 flex flex-col items-start md:items-end gap-2">
                  <span className={`text-xs font-semibold border rounded-full px-2.5 py-0.5 ${status.className}`}>
                    {status.label}
                  </span>
                  {r.verifiedAt && isPaid(r.state) && (
                    <span className="text-xs text-slate-600">Marked paid {dateText(r.verifiedAt)}</span>
                  )}
                  {r.state === 'pending' && (
                    <button
                      onClick={() => setStatus(r, 'verified')}
                      disabled={saving}
                      className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold disabled:opacity-50"
                    >
                      {saving ? 'Saving…' : 'Mark paid / ادا شدہ'}
                    </button>
                  )}
                  {r.state === 'verified' && (
                    <button
                      onClick={() => setStatus(r, 'dispatched')}
                      disabled={saving}
                      className="px-3 py-1.5 rounded-lg border border-sky-300 text-sky-800 hover:bg-sky-50 text-sm disabled:opacity-50"
                    >
                      Book sent / کتاب روانہ
                    </button>
                  )}
                  {isPaid(r.state) && (
                    <button
                      onClick={() => setStatus(r, 'pending')}
                      disabled={saving}
                      className="text-xs text-slate-600 underline hover:text-slate-900 disabled:opacity-50"
                    >
                      Mark not paid
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
