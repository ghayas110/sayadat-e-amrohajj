'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  FileText,
  Users,
  ExternalLink,
  RefreshCw,
  Search,
  CheckCircle2,
  Clock,
  Phone,
  MapPin,
  Calendar,
} from 'lucide-react'

export default function RecordsPage() {
  const [records, setRecords] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [source, setSource] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState('')

  const fetchRecords = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/records')
      const data = await res.json()
      setRecords(data.records || [])
      setSource(data.source || 'sanity')
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecords()
  }, [])

  const filteredRecords = records.filter((r) => {
    const q = searchQuery.toLowerCase()
    return (
      (r.name && r.name.toLowerCase().includes(q)) ||
      (r.fatherName && r.fatherName.toLowerCase().includes(q)) ||
      (r.mohalla && r.mohalla.toLowerCase().includes(q)) ||
      (r.referencePageNumber && r.referencePageNumber.toLowerCase().includes(q))
    )
  })

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-emerald-900 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 hover:bg-emerald-800 rounded-lg transition"
              title="Back to Form"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-bold text-lg">Sayadat-e-Amroha Lineage Records</h1>
              <p className="text-xs text-amber-200">
                Database entries captured from the community
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchRecords}
              className="px-3 py-1.5 text-xs bg-emerald-800 hover:bg-emerald-700 text-white rounded-md border border-emerald-600 transition flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <a
              href="http://localhost:3333"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-xs bg-amber-500 hover:bg-amber-400 text-emerald-950 font-medium rounded-md shadow transition flex items-center gap-1.5"
            >
              <span>Sanity Studio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Search & Stats Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, father name, or mohalla..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-sm"
            />
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              Total Records: <strong>{filteredRecords.length}</strong>
            </span>
            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-lg font-medium">
              Source: {source === 'sanity' ? 'Sanity Cloud API' : 'Local Secured Store'}
            </span>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="p-12 text-center text-slate-500">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-emerald-700" />
            <p className="text-sm">Loading lineage records...</p>
          </div>
        ) : filteredRecords.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">
              No Lineage Records Found
            </h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mb-4">
              {searchQuery
                ? 'No records match your search criteria.'
                : 'No family records have been submitted yet.'}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-sm font-medium transition"
            >
              Fill Out Lineage Form
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRecords.map((r) => (
              <div
                key={r.id || r._id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-base text-slate-900">
                      {r.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      والد: {r.fatherName}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {r.mohalla === 'Other' ? r.customMohalla || 'Amroha' : r.mohalla}
                  </span>
                </div>

                {r.referencePageNumber && (
                  <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    کوثر الانساب (1999) حوالہ صفحہ: <strong>{r.referencePageNumber}</strong>
                  </p>
                )}

                {r.wifeDetails?.name && (
                  <div className="text-xs text-slate-700">
                    <span className="text-slate-400">زوجہ:</span> {r.wifeDetails.name}
                    {r.wifeDetails.fatherName && ` (${r.wifeDetails.fatherName})`}
                  </div>
                )}

                {/* Sons and Daughters chips */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  {r.sons && r.sons.length > 0 && (
                    <div>
                      <span className="font-semibold text-blue-700 block text-[11px] mb-1">
                        Sons ({r.sons.length}):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {r.sons.map((s: any, idx: number) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded text-[11px]"
                          >
                            {s.name} {s.isDeceased ? '(مرحوم)' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {r.daughters && r.daughters.length > 0 && (
                    <div>
                      <span className="font-semibold text-pink-700 block text-[11px] mb-1">
                        Daughters ({r.daughters.length}):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {r.daughters.map((d: any, idx: number) => (
                          <span
                            key={idx}
                            className="bg-pink-50 text-pink-800 border border-pink-200 px-2 py-0.5 rounded text-[11px]"
                          >
                            {d.name}
                            {d.husbandName ? ` (داماد: ${d.husbandName})` : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Booking status */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>
                    Booking:{' '}
                    <strong className="text-slate-700">
                      {r.advanceBooking?.bookingType || 'Standard'}
                    </strong>
                  </span>
                  <span>
                    {r.submissionMeta?.submittedAt
                      ? new Date(r.submissionMeta.submittedAt).toLocaleDateString()
                      : 'Recently submitted'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
