'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  User,
  Users,
  Plus,
  Trash2,
  CheckCircle2,
  Phone,
  MapPin,
  CreditCard,
  Upload,
  AlertCircle,
  Copy,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  FileText,
  Clock,
  ExternalLink,
} from 'lucide-react'

interface Son {
  id: string
  name: string
  occupationOrNotes: string
  isDeceased: boolean
}

interface Daughter {
  id: string
  name: string
  maritalStatus: 'married' | 'unmarried'
  husbandName: string
  husbandFatherName: string
  husbandMohalla: string
}

export default function Home() {
  // Form State
  const [name, setName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [mohalla, setMohalla] = useState('Tripolia')
  const [customMohalla, setCustomMohalla] = useState('')
  const [referencePageNumber, setReferencePageNumber] = useState('')

  const [wifeName, setWifeName] = useState('')
  const [wifeFatherName, setWifeFatherName] = useState('')
  const [wifeMohalla, setWifeMohalla] = useState('')

  // Dynamic Sons
  const [sons, setSons] = useState<Son[]>([
    { id: '1', name: '', occupationOrNotes: '', isDeceased: false },
  ])

  // Dynamic Daughters
  const [daughters, setDaughters] = useState<Daughter[]>([
    {
      id: '1',
      name: '',
      maritalStatus: 'married',
      husbandName: '',
      husbandFatherName: '',
      husbandMohalla: '',
    },
  ])

  // Confidential Contact
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  // Advance Booking
  const [bookingType, setBookingType] = useState<'standard_5000' | 'with_photo_7000' | 'submission_only'>('standard_5000')
  const [transactionId, setTransactionId] = useState('')
  const [submitterName, setSubmitterName] = useState('')
  const [paymentSlipFile, setPaymentSlipFile] = useState<File | null>(null)
  const [colorPhotoFile, setColorPhotoFile] = useState<File | null>(null)

  // Status & Feedback
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState<any | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Sons Handlers
  const addSon = () => {
    setSons([
      ...sons,
      { id: Date.now().toString(), name: '', occupationOrNotes: '', isDeceased: false },
    ])
  }

  const removeSon = (id: string) => {
    if (sons.length === 1) {
      setSons([{ id: '1', name: '', occupationOrNotes: '', isDeceased: false }])
    } else {
      setSons(sons.filter((s) => s.id !== id))
    }
  }

  const updateSon = (id: string, field: keyof Son, value: any) => {
    setSons(sons.map((s) => (s.id === id ? { ...s, [field]: value } : s)))
  }

  // Daughters Handlers
  const addDaughter = () => {
    setDaughters([
      ...daughters,
      {
        id: Date.now().toString(),
        name: '',
        maritalStatus: 'married',
        husbandName: '',
        husbandFatherName: '',
        husbandMohalla: '',
      },
    ])
  }

  const removeDaughter = (id: string) => {
    if (daughters.length === 1) {
      setDaughters([
        {
          id: '1',
          name: '',
          maritalStatus: 'married',
          husbandName: '',
          husbandFatherName: '',
          husbandMohalla: '',
        },
      ])
    } else {
      setDaughters(daughters.filter((d) => d.id !== id))
    }
  }

  const updateDaughter = (id: string, field: keyof Daughter, value: any) => {
    setDaughters(daughters.map((d) => (d.id === id ? { ...d, [field]: value } : d)))
  }

  // Copy to clipboard helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(label)
    setTimeout(() => setCopiedField(null), 2000)
  }

  // Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!name.trim() || !fatherName.trim() || !phone.trim()) {
      setErrorMessage('Please fill in required fields: Name, Father Name, and Phone Number.')
      window.scrollTo({ top: 400, behavior: 'smooth' })
      return
    }

    setSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('fatherName', fatherName)
      formData.append('mohalla', mohalla)
      formData.append('customMohalla', customMohalla)
      formData.append('referencePageNumber', referencePageNumber)

      formData.append('wifeName', wifeName)
      formData.append('wifeFatherName', wifeFatherName)
      formData.append('wifeMohalla', wifeMohalla)

      formData.append('sons', JSON.stringify(sons))
      formData.append('daughters', JSON.stringify(daughters))

      formData.append('phone', phone)
      formData.append('address', address)

      formData.append('bookingType', bookingType)
      formData.append('transactionId', transactionId)
      formData.append('submitterName', submitterName || name)

      if (paymentSlipFile) {
        formData.append('paymentSlip', paymentSlipFile)
      }
      if (colorPhotoFile) {
        formData.append('colorPhoto', colorPhotoFile)
      }

      const res = await fetch('/api/submit-lineage', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setSubmissionSuccess({
        id: data.id,
        savedToSanity: data.savedToSanity,
        message: data.message,
      })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong while submitting.')
    } finally {
      setSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmissionSuccess(null)
    setName('')
    setFatherName('')
    setMohalla('Tripolia')
    setCustomMohalla('')
    setReferencePageNumber('')
    setWifeName('')
    setWifeFatherName('')
    setWifeMohalla('')
    setSons([{ id: '1', name: '', occupationOrNotes: '', isDeceased: false }])
    setDaughters([
      {
        id: '1',
        name: '',
        maritalStatus: 'married',
        husbandName: '',
        husbandFatherName: '',
        husbandMohalla: '',
      },
    ])
    setPhone('')
    setAddress('')
    setTransactionId('')
    setPaymentSlipFile(null)
    setColorPhotoFile(null)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 bg-emerald-900 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-bold text-lg shadow">
              س
            </div>
            <div>
              <h1 className="font-bold text-base md:text-lg leading-tight">
                Sayadat-e-Amroha Lineage Record
              </h1>
              <p className="text-xs text-amber-200">
                سیادتِ امروحہ - خاندانی شجرۂ نسب (کمپیوٹرائزڈ ایڈیشن)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/records"
              className="px-3 py-1.5 text-xs md:text-sm bg-emerald-800 hover:bg-emerald-700 text-white rounded-md border border-emerald-600 transition flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>View Records</span>
            </Link>
            <a
              href="http://localhost:3333"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-xs md:text-sm bg-amber-500 hover:bg-amber-400 text-emerald-950 font-medium rounded-md shadow transition flex items-center gap-1.5"
            >
              <span>Sanity Studio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Banner Section */}
        <section className="bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl mb-8 border border-emerald-700/40 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New Computerized Edition • Date: 22-10-2026</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2">
              Sayadat-e-Amroha Lineage Record
            </h2>
            <p className="text-xl md:text-2xl font-serif text-amber-200 mb-4" dir="rtl">
              سیادتِ امروحہ خاندانی شجرۂ نسب - کوثر الانساب نیا ایڈیشن
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-4">
              Following the publication of the genealogical book <strong>Kausar-ul-Ansab</strong> by{' '}
              <span className="text-amber-200">Syed Nazar-e-Hasnain Naqvi</span> (Mohalla Gher
              Manaf) from Karachi in 1999, information is now being collected to publish a new
              computerized edition titled <strong>&ldquo;Sayadat-e-Amroha Lineage Record&rdquo;</strong> after 27
              years under the supervision of{' '}
              <span className="text-amber-200">Syed Sibte Sajid Naqvi</span> (Mohalla Tripolia).
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-emerald-200 pt-2 border-t border-emerald-800/80">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>~250 Pages Deluxe Book</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Confidential Contacts Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Urdu & English Supported</span>
              </div>
            </div>
          </div>
        </section>

        {/* Success Modal / Banner */}
        {submissionSuccess && (
          <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 md:p-8 mb-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-emerald-900 mb-1">
                  Lineage Record Submitted Successfully!
                </h3>
                <p className="text-sm text-emerald-800 mb-3" dir="rtl">
                  آپ کی خاندانی تفصیلات بحفاظت موصول ہو چکی ہیں اور ریکارڈ میں محفوظ کر دی گئی ہیں۔
                </p>
                <div className="bg-white p-4 rounded-xl border border-emerald-200 text-xs md:text-sm space-y-2 mb-4">
                  <p>
                    <span className="font-semibold text-slate-700">Submission Reference ID:</span>{' '}
                    <code className="bg-slate-100 text-emerald-800 px-2 py-0.5 rounded font-mono">
                      {submissionSuccess.id}
                    </code>
                  </p>
                  <p>
                    <span className="font-semibold text-slate-700">Sanity Studio Status:</span>{' '}
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                      {submissionSuccess.savedToSanity
                        ? '✓ Stored in Sanity Cloud Database (rohuunpd)'
                        : 'Captured locally & ready for cloud sync'}
                    </span>
                  </p>
                  <p className="text-slate-600">
                    If advance booking was made, please send your payment deposit slip via WhatsApp
                    to{' '}
                    <strong className="text-emerald-900 select-all">0345-2695417</strong> (Syed
                    Sibte Sajid Naqvi).
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={resetForm}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-sm font-medium transition"
                  >
                    Submit Another Family Record
                  </button>
                  <Link
                    href="/records"
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm font-medium transition flex items-center gap-1.5"
                  >
                    <span>View Submitted Lineage Records</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div className="bg-rose-50 border border-rose-300 text-rose-800 p-4 rounded-xl mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Please check the form:</p>
              <p className="text-sm">{errorMessage}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Column (Span 2) */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* 1. Family Head Details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Family Head & Lineage (سرپرست اور خاندانی شجرہ)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Primary individual under whom this branch is recorded
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Name (Syed) / نام مع سید <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Syed Muhammad Ali Naqvi"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Father&apos;s Name (سید) / والد کا نام <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    placeholder="e.g. Syed Nazar-e-Hasnain Naqvi"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mohalla in Amroha / امروحہ کا محلہ <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={mohalla}
                    onChange={(e) => setMohalla(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  >
                    <option value="Tripolia">Mohalla Tripolia / محلہ ترپولیا</option>
                    <option value="Gher Manaf">Mohalla Gher Manaf / محلہ گھیر مناف</option>
                    <option value="Chhappah">Mohalla Chhappah / محلہ چھپاہ</option>
                    <option value="Sadat">Mohalla Sadat / محلہ سادات</option>
                    <option value="Shafat Pota">Mohalla Shafat Pota / محلہ شفاعت پوتا</option>
                    <option value="Danishmandan">Mohalla Danishmandan / محلہ دانشمندان</option>
                    <option value="Kot">Mohalla Kot / محلہ کوٹ</option>
                    <option value="Qazi Zada">Mohalla Qazi Zada / محلہ قاضی زادہ</option>
                    <option value="Other">Other / دیگر محلہ</option>
                  </select>
                </div>

                {mohalla === 'Other' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Specify Mohalla / محلہ کا نام
                    </label>
                    <input
                      type="text"
                      value={customMohalla}
                      onChange={(e) => setCustomMohalla(e.target.value)}
                      placeholder="Enter your Mohalla name"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ref Page No. in Kausar-ul-Ansab (1999) / صفحہ نمبر
                  </label>
                  <input
                    type="text"
                    value={referencePageNumber}
                    onChange={(e) => setReferencePageNumber(e.target.value)}
                    placeholder="e.g. Page 142 (if known)"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Wife Details Sub-box */}
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>Wife&apos;s Information / زوجہ کی تفصیلات (مع ولدیت و محلہ)</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      value={wifeName}
                      onChange={(e) => setWifeName(e.target.value)}
                      placeholder="Wife's Name (e.g. Syeda Zahra Bano)"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={wifeFatherName}
                      onChange={(e) => setWifeFatherName(e.target.value)}
                      placeholder="Father's Name (d/o Syed Akhtar)"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={wifeMohalla}
                      onChange={(e) => setWifeMohalla(e.target.value)}
                      placeholder="Wife's Native Mohalla / Family"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Sons (Dynamic List) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">
                      Sons (Syed) / بیٹے (سید)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Add all sons dynamically using the button below
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={addSon}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium text-xs rounded-lg border border-blue-200 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Son (بیٹا شامل کریں)</span>
                </button>
              </div>

              <div className="space-y-3">
                {sons.map((son, index) => (
                  <div
                    key={son.id}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2.5 w-full">
                      <input
                        type="text"
                        value={son.name}
                        onChange={(e) => updateSon(son.id, 'name', e.target.value)}
                        placeholder={`Son #${index + 1} Name (e.g. Syed Ali Raza)`}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={son.occupationOrNotes}
                        onChange={(e) =>
                          updateSon(son.id, 'occupationOrNotes', e.target.value)
                        }
                        placeholder="Profession / City / Notes (Optional)"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={son.isDeceased}
                          onChange={(e) =>
                            updateSon(son.id, 'isDeceased', e.target.checked)
                          }
                          className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        <span>مرحوم (Deceased)</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => removeSon(son.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded hover:bg-rose-50 transition"
                        title="Remove son"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Total Sons entered: {sons.filter((s) => s.name.trim()).length}</span>
                <button
                  type="button"
                  onClick={addSon}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ Add another son</span>
                </button>
              </div>
            </div>

            {/* 3. Daughters & Husbands (Dynamic List) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-800 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">
                      Daughters (Syeda) / بیٹیاں (سیدہ)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Enter daughter name and husband&apos;s details if married
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={addDaughter}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-pink-50 text-pink-700 hover:bg-pink-100 font-medium text-xs rounded-lg border border-pink-200 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Daughter (بیٹی شامل کریں)</span>
                </button>
              </div>

              <div className="space-y-4">
                {daughters.map((daughter, index) => (
                  <div
                    key={daughter.id}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Daughter #{index + 1}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-xs">
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input
                              type="radio"
                              name={`status_${daughter.id}`}
                              value="married"
                              checked={daughter.maritalStatus === 'married'}
                              onChange={() =>
                                updateDaughter(daughter.id, 'maritalStatus', 'married')
                              }
                              className="text-pink-600"
                            />
                            <span>Married</span>
                          </label>
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input
                              type="radio"
                              name={`status_${daughter.id}`}
                              value="unmarried"
                              checked={daughter.maritalStatus === 'unmarried'}
                              onChange={() =>
                                updateDaughter(daughter.id, 'maritalStatus', 'unmarried')
                              }
                              className="text-pink-600"
                            />
                            <span>Unmarried</span>
                          </label>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeDaughter(daughter.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 rounded transition"
                          title="Remove daughter"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          value={daughter.name}
                          onChange={(e) =>
                            updateDaughter(daughter.id, 'name', e.target.value)
                          }
                          placeholder="Daughter's Name (e.g. Syeda Fatima Zahra)"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
                        />
                      </div>

                      {daughter.maritalStatus === 'married' && (
                        <div>
                          <input
                            type="text"
                            value={daughter.husbandName}
                            onChange={(e) =>
                              updateDaughter(daughter.id, 'husbandName', e.target.value)
                            }
                            placeholder="Husband's Name (e.g. Syed Zafar Abbas)"
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
                          />
                        </div>
                      )}
                    </div>

                    {daughter.maritalStatus === 'married' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        <input
                          type="text"
                          value={daughter.husbandFatherName}
                          onChange={(e) =>
                            updateDaughter(daughter.id, 'husbandFatherName', e.target.value)
                          }
                          placeholder="Husband's Father's Name"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-500 focus:outline-none"
                        />
                        <input
                          type="text"
                          value={daughter.husbandMohalla}
                          onChange={(e) =>
                            updateDaughter(daughter.id, 'husbandMohalla', e.target.value)
                          }
                          placeholder="Husband's Mohalla / Family in Amroha"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-500 focus:outline-none"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>
                  Total Daughters entered:{' '}
                  {daughters.filter((d) => d.name.trim()).length}
                </span>
                <button
                  type="button"
                  onClick={addDaughter}
                  className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ Add another daughter</span>
                </button>
              </div>
            </div>

            {/* 4. Confidential Contact Details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Contact & Courier Information (رابطہ اور پتہ)
                  </h3>
                  <p className="text-xs text-amber-700 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Note: Phone number and address will NOT be published in the book.</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0345-2695417"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Home / Courier Address for Book Delivery{' '}
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <textarea
                      required
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="House No, Street, Sector / Area, City, Postal Code"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Advance Booking & Payment */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Advance Booking & Bank Details (پیشگی بکنگ اور ادائیگی)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Advance booking is currently open. Printed on high quality paper (~250 pages).
                  </p>
                </div>
              </div>

              {/* Booking Options Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                <div
                  onClick={() => setBookingType('standard_5000')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                    bookingType === 'standard_5000'
                      ? 'border-emerald-600 bg-emerald-50/50'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Standard
                    </span>
                    <input
                      type="radio"
                      checked={bookingType === 'standard_5000'}
                      onChange={() => setBookingType('standard_5000')}
                      className="text-emerald-600"
                    />
                  </div>
                  <div className="text-xl font-extrabold text-slate-900">Rs. 5,000</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Standard Book with full family lineage included.
                  </p>
                </div>

                <div
                  onClick={() => setBookingType('with_photo_7000')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                    bookingType === 'with_photo_7000'
                      ? 'border-emerald-600 bg-emerald-50/50'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      With Color Photo
                    </span>
                    <input
                      type="radio"
                      checked={bookingType === 'with_photo_7000'}
                      onChange={() => setBookingType('with_photo_7000')}
                      className="text-emerald-600"
                    />
                  </div>
                  <div className="text-xl font-extrabold text-slate-900">Rs. 7,000</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Book + Passport-size color photograph printed in book (+Rs. 2,000).
                  </p>
                </div>

                <div
                  onClick={() => setBookingType('submission_only')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                    bookingType === 'submission_only'
                      ? 'border-emerald-600 bg-emerald-50/50'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Lineage Only
                    </span>
                    <input
                      type="radio"
                      checked={bookingType === 'submission_only'}
                      onChange={() => setBookingType('submission_only')}
                      className="text-emerald-600"
                    />
                  </div>
                  <div className="text-xl font-extrabold text-slate-900">Free</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Submitting lineage data only, without ordering a book at this time.
                  </p>
                </div>
              </div>

              {/* Bank Details Display */}
              <div className="p-4 rounded-xl bg-slate-900 text-white mb-6">
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-sm text-slate-100">
                      Official Bank Account Details
                    </span>
                  </div>
                  <span className="text-xs text-amber-300">Bank AL Habib Limited</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Account Title:</span>
                    <span className="font-semibold text-slate-100 text-sm">
                      Syed Sibte Said Naqvi
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Branch:</span>
                    <span className="text-slate-200">
                      Incholi Federal B Area, Karachi, Pakistan
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded-lg">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Account Number:</span>
                      <span className="font-mono font-bold text-amber-300 text-xs md:text-sm">
                        1318007801332801-9
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('1318007801332801-9', 'acc')}
                      className="p-1.5 hover:bg-slate-700 text-slate-300 rounded transition"
                      title="Copy Account Number"
                    >
                      {copiedField === 'acc' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded-lg">
                    <div>
                      <span className="text-slate-400 block text-[10px]">IBAN / Code:</span>
                      <span className="font-mono font-bold text-amber-300 text-xs md:text-sm">
                        PK BAHL 1318007801332801-9
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('PK BAHL 1318007801332801-9', 'iban')}
                      className="p-1.5 hover:bg-slate-700 text-slate-300 rounded transition"
                      title="Copy IBAN"
                    >
                      {copiedField === 'iban' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>After payment, send deposit slip photo via WhatsApp to:</span>
                  <a
                    href="https://wa.me/923452695417"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 font-bold hover:underline"
                  >
                    0345-2695417
                  </a>
                </div>
              </div>

              {/* Uploads and Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Upload Payment Slip / Deposit Receipt
                  </label>
                  <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-xl cursor-pointer bg-slate-50 transition">
                    <Upload className="w-5 h-5 text-slate-400 mb-1" />
                    <span className="text-xs text-slate-600 font-medium text-center">
                      {paymentSlipFile ? paymentSlipFile.name : 'Choose receipt image or PDF'}
                    </span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => setPaymentSlipFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </label>
                </div>

                {bookingType === 'with_photo_7000' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Upload Passport-Size Color Photo for Book
                    </label>
                    <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-amber-300 hover:border-amber-500 rounded-xl cursor-pointer bg-amber-50/40 transition">
                      <Upload className="w-5 h-5 text-amber-500 mb-1" />
                      <span className="text-xs text-amber-900 font-medium text-center">
                        {colorPhotoFile ? colorPhotoFile.name : 'Choose high-res color photo'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setColorPhotoFile(e.target.files?.[0] || null)}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Transaction ID / Slip Reference Number
                  </label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="e.g. TRX-987654 or Deposit Slip No."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Name of Person Submitting Form
                  </label>
                  <input
                    type="text"
                    value={submitterName}
                    onChange={(e) => setSubmitterName(e.target.value)}
                    placeholder="If submitting on behalf of someone else"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base md:text-lg rounded-xl shadow-lg transition transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Saving to Sanity Database...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-amber-300" />
                    <span>Submit Sayadat-e-Amroha Lineage Record</span>
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-500 mt-2">
                By submitting, your genealogical information will be reviewed and cataloged for the
                official book.
              </p>
            </div>
          </form>

          {/* Sidebar / Live Shijra Preview Column (Span 1) */}
          <div className="space-y-6">
            {/* Live Shijra Card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 sticky top-20">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Live Shijra Card Preview</span>
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-mono">
                  {name ? 'Ready' : 'Draft'}
                </span>
              </div>

              {/* Shijra Preview Content */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 font-sans text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                    Head of Lineage
                  </span>
                  <div className="text-sm font-bold text-slate-900">
                    {name.trim() || 'Syed [Your Name]'}
                  </div>
                  <div className="text-slate-600">
                    والد: {fatherName.trim() || 'Syed [Father Name]'}
                  </div>
                  <div className="text-emerald-800 font-medium">
                    محلہ: {mohalla === 'Other' ? customMohalla || 'Amroha' : mohalla}
                  </div>
                  {referencePageNumber && (
                    <div className="text-[11px] text-slate-500">
                      Ref Page: {referencePageNumber} (کوثر الانساب 1999)
                    </div>
                  )}
                </div>

                {wifeName && (
                  <div className="pt-2 border-t border-slate-200 text-slate-700">
                    <span className="text-[10px] text-slate-500 block uppercase">زوجہ:</span>
                    <span className="font-medium">{wifeName}</span>
                    {wifeFatherName && <span> مع ولدیت {wifeFatherName}</span>}
                    {wifeMohalla && <span> ({wifeMohalla})</span>}
                  </div>
                )}

                {/* Sons List Preview */}
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">
                    بیٹے / Sons ({sons.filter((s) => s.name.trim()).length}):
                  </span>
                  {sons.filter((s) => s.name.trim()).length === 0 ? (
                    <span className="text-slate-400 italic">None added yet</span>
                  ) : (
                    <ul className="space-y-1">
                      {sons
                        .filter((s) => s.name.trim())
                        .map((s, idx) => (
                          <li key={s.id} className="text-slate-800 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <span>{s.name}</span>
                            {s.isDeceased && (
                              <span className="text-[10px] text-slate-500">(مرحوم)</span>
                            )}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>

                {/* Daughters List Preview */}
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-[10px] font-bold text-pink-700 uppercase tracking-wider block mb-1">
                    بیٹیاں / Daughters ({daughters.filter((d) => d.name.trim()).length}):
                  </span>
                  {daughters.filter((d) => d.name.trim()).length === 0 ? (
                    <span className="text-slate-400 italic">None added yet</span>
                  ) : (
                    <ul className="space-y-1">
                      {daughters
                        .filter((d) => d.name.trim())
                        .map((d, idx) => (
                          <li key={d.id} className="text-slate-800 text-[11px]">
                            <div className="font-medium flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                              <span>{d.name}</span>
                            </div>
                            {d.maritalStatus === 'married' && d.husbandName && (
                              <div className="text-slate-500 pl-3">
                                داماد: {d.husbandName}
                                {d.husbandMohalla && ` (${d.husbandMohalla})`}
                              </div>
                            )}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Contact Notice */}
              <div className="mt-4 p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-[11px] text-amber-900">
                <p className="font-semibold mb-0.5">Publisher & Project Organization:</p>
                <p>Syed Sibte Sajid Naqvi (Mohalla Tripolia)</p>
                <p className="text-slate-600">House No. L-22, Sector Z-A, Gulshan-e-Maymar, Karachi</p>
                <p className="font-bold text-emerald-800 mt-1">WhatsApp: 0345-2695417</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
