'use client'

import React, { useEffect, useState } from 'react'
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
  Camera,
  X,
  Languages,
  Pencil,
} from 'lucide-react'
import { KHANDANS, findKhandan, khandansForMohalla } from '@/data/amrohaIndex'
import { INDEX_PAGES, MOHALLA_OPTIONS, khandanOption } from '@/data/indexOptions'
import SearchSelect from '@/components/SearchSelect'
import PersonSearchSelect from '@/components/PersonSearchSelect'
import UrduHint from '@/components/UrduHint'
import type { LineageOption, LineagePerson, UrduSuggestion } from '@/lib/lineageTypes'

// Pre-select the khandan when a mohalla has only one listed in the index
const defaultKhandanFor = (mohalla: string) => {
  const options = khandansForMohalla(mohalla)
  return options.length === 1 ? String(options[0].serial) : ''
}

// Person details already fetched in this visit, so re-picking someone costs no request
const personCache = new Map<string, LineagePerson>()

async function fetchPerson(id: string): Promise<LineagePerson | null> {
  const cached = personCache.get(id)
  if (cached) return cached
  const res = await fetch(`/api/lineage/person?id=${encodeURIComponent(id)}`)
  if (!res.ok) return null
  const { person } = await res.json()
  personCache.set(id, person)
  return person
}

// A name typed in English and the Urdu it was turned into before saving
interface NameConversion {
  from: string
  to: string
  guessed: boolean
}

const LATIN = /[a-z]/i

// The ledger's own Urdu spelling of a name typed in English, first suggestion for each word
async function urduFor(text: string): Promise<{ urdu: string; guessed: boolean } | null> {
  const res = await fetch(`/api/lineage/urdu?text=${encodeURIComponent(text)}`)
  if (!res.ok) return null
  const { words } = (await res.json()) as { words: UrduSuggestion[] }
  if (!words?.length) return null
  return {
    urdu: words.map((w) => w.options[0] || w.input).join(' '),
    guessed: words.some((w) => w.guessed),
  }
}

const emptySon = (id = '1'): Son => ({ id, name: '', occupationOrNotes: '', isDeceased: false, photo: null })
const emptyDaughter = (id = '1'): Daughter => ({
  id,
  name: '',
  maritalStatus: 'married',
  husbandName: '',
  husbandFatherName: '',
  husbandMohalla: '',
})

const Optional = () => (
  <span className="font-normal text-xs text-slate-600 normal-case tracking-normal">
    (Optional / اختیاری)
  </span>
)

interface Son {
  id: string
  name: string
  occupationOrNotes: string
  isDeceased: boolean
  photo: File | null
  // Sanity _key when editing a saved record, so the son's photo stays attached
  key?: string
}

// Shrink phone photos before upload so several of them fit in one request
async function downscaleImage(file: File, maxSize = 1200): Promise<File> {
  if (!file.type.startsWith('image/')) return file
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height))
    const width = Math.round(bitmap.width * scale)
    const height = Math.round(bitmap.height * scale)
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvas.getContext('2d')?.drawImage(bitmap, 0, 0, width, height)
    bitmap.close()
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/jpeg', 0.85)
    )
    if (!blob) return file
    return new File([blob], file.name.replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' })
  } catch {
    return file
  }
}

function usePreviewUrl(file: File | null) {
  const [preview, setPreview] = useState<{ file: File; url: string } | null>(null)
  useEffect(() => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setPreview({ file, url: reader.result as string })
    reader.readAsDataURL(file)
    return () => reader.abort()
  }, [file])
  return preview && preview.file === file ? preview.url : null
}

function PhotoPicker({
  file,
  onChange,
  label,
  size = 'md',
}: {
  file: File | null
  onChange: (file: File | null) => void
  label: string
  size?: 'sm' | 'md'
}) {
  const preview = usePreviewUrl(file)
  const dimensions = size === 'sm' ? 'w-10 h-10' : 'w-20 h-20'

  return (
    <div className="relative shrink-0">
      <label
        className={`${dimensions} rounded-full border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-white flex items-center justify-center cursor-pointer overflow-hidden transition`}
        title={label}
      >
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt={label} className="w-full h-full object-cover" />
        ) : (
          <Camera className={size === 'sm' ? 'w-4 h-4 text-slate-400' : 'w-6 h-6 text-slate-400'} />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const picked = e.target.files?.[0] || null
            e.target.value = ''
            onChange(picked ? await downscaleImage(picked) : null)
          }}
          className="hidden"
        />
      </label>
      {file && (
        <button
          type="button"
          onClick={() => onChange(null)}
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-700 hover:bg-rose-600 text-white flex items-center justify-center shadow transition"
          title="Remove photo"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  )
}

function AvatarPreview({ file, className }: { file: File | null; className: string }) {
  const preview = usePreviewUrl(file)
  if (!preview) return null
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={preview} alt="" className={`${className} rounded-full object-cover`} />
}

interface Daughter {
  id: string
  name: string
  maritalStatus: 'married' | 'unmarried'
  husbandName: string
  husbandFatherName: string
  husbandMohalla: string
  key?: string
}

export default function Home() {
  // Form State
  const [name, setName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [mohalla, setMohalla] = useState('')
  const [customMohalla, setCustomMohalla] = useState('')
  const [khandan, setKhandan] = useState('')
  const [customKhandan, setCustomKhandan] = useState('')
  const [referencePageNumber, setReferencePageNumber] = useState('')
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null)

  // The ledger person the name and the father were picked from, when they were
  const [personPick, setPersonPick] = useState<LineageOption | undefined>()
  const [fatherPick, setFatherPick] = useState<LineageOption | undefined>()
  const [loadingPerson, setLoadingPerson] = useState(false)

  const [wifeName, setWifeName] = useState('')
  const [wifeFatherName, setWifeFatherName] = useState('')
  const [wifeMohalla, setWifeMohalla] = useState('')

  // Dynamic Sons
  const [sons, setSons] = useState<Son[]>([
    { id: '1', name: '', occupationOrNotes: '', isDeceased: false, photo: null },
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

  // Editing a saved record: an admin opens /?edit=<id> from the records page
  const [editId, setEditId] = useState<string | null>(null)
  const [editLoading, setEditLoading] = useState(false)

  // English names turned into Urdu on submit, shown for a check and kept on the record.
  // urduSkipKey holds the English names left as they are, so the next Submit goes through.
  const [conversions, setConversions] = useState<NameConversion[]>([])
  const [urduSkipKey, setUrduSkipKey] = useState<string | null>(null)

  const loadRecord = (r: any) => {
    setName(r.name || '')
    setFatherName(r.fatherName || '')
    setMohalla(r.mohalla || '')
    setCustomMohalla(r.customMohalla || '')
    setKhandan(r.khandan || '')
    setCustomKhandan(r.customKhandan || '')
    setReferencePageNumber(r.referencePageNumber || '')
    setWifeName(r.wifeDetails?.name || '')
    setWifeFatherName(r.wifeDetails?.fatherName || '')
    setWifeMohalla(r.wifeDetails?.mohalla || '')
    setSons(
      r.sons?.length
        ? r.sons.map((s: any) => ({
            id: s._key,
            key: s._key,
            name: s.name || '',
            occupationOrNotes: s.occupationOrNotes || '',
            isDeceased: Boolean(s.isDeceased),
            photo: null,
          }))
        : [emptySon()]
    )
    setDaughters(
      r.daughters?.length
        ? r.daughters.map((d: any) => ({
            id: d._key,
            key: d._key,
            name: d.name || '',
            maritalStatus: d.maritalStatus === 'unmarried' ? ('unmarried' as const) : ('married' as const),
            husbandName: d.husbandName || '',
            husbandFatherName: d.husbandFatherName || '',
            husbandMohalla: d.husbandMohalla || '',
          }))
        : [emptyDaughter()]
    )
    setPhone(r.contactDetails?.phone || '')
    setAddress(r.contactDetails?.address || '')
    if (r.advanceBooking?.bookingType) setBookingType(r.advanceBooking.bookingType)
    setTransactionId(r.advanceBooking?.transactionId || '')
    setSubmitterName(r.submissionMeta?.submitterName || '')
  }

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('edit')
    if (!id) return
    setEditId(id)
    setEditLoading(true)
    fetch(`/api/admin/records/${encodeURIComponent(id)}`)
      .then(async (res) => {
        const data = await res.json().catch(() => ({}))
        if (res.status === 401) throw new Error('Sign in as admin first (Admin page), then press Edit again.')
        if (!res.ok) throw new Error(data.error || 'Could not load the record')
        loadRecord(data.record)
      })
      .catch((err) => setErrorMessage(err.message))
      .finally(() => setEditLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // With no mohalla (or "Other"), every khandan in the index can be searched
  const khandanOptions =
    mohalla && mohalla !== 'Other' ? khandansForMohalla(mohalla) : KHANDANS
  const selectedKhandan = findKhandan(khandan)

  const selectMohalla = (value: string) => {
    setMohalla(value)
    setKhandan(defaultKhandanFor(value))
    setCustomKhandan('')
  }

  // Fill the whole form from what the ledger already holds about the picked person
  const applyPerson = (p: LineagePerson) => {
    setName(p.name)
    setFatherName(p.fatherName || '')
    setFatherPick(p.father)
    if (p.mohalla) setMohalla(p.mohalla)
    setCustomMohalla(p.customMohalla || '')
    setKhandan(p.khandan || '')
    setCustomKhandan('')
    setReferencePageNumber(p.page || '')
    setWifeName(p.wife?.name || '')
    setWifeFatherName(p.wife?.fatherName || '')
    setWifeMohalla(p.wife?.mohalla || '')
    setSons(
      p.sons.length
        ? p.sons.map((s, i) => ({
            id: `l${i}`,
            name: s.name,
            occupationOrNotes: s.occupationOrNotes || '',
            isDeceased: Boolean(s.isDeceased),
            photo: null,
          }))
        : [emptySon()]
    )
    setDaughters(
      p.daughters.length
        ? p.daughters.map((d, i) => ({
            id: `l${i}`,
            name: d.name,
            maritalStatus: d.maritalStatus === 'unmarried' ? ('unmarried' as const) : ('married' as const),
            husbandName: d.husbandName || '',
            husbandFatherName: d.husbandFatherName || '',
            husbandMohalla: d.husbandMohalla || '',
          }))
        : [emptyDaughter()]
    )
  }

  const selectPerson = async (text: string, picked?: LineageOption) => {
    setName(text)
    setPersonPick(picked)
    if (!picked) return
    setLoadingPerson(true)
    try {
      const person = await fetchPerson(picked.id)
      if (person) applyPerson(person)
    } finally {
      setLoadingPerson(false)
    }
  }

  const selectFather = (text: string, picked?: LineageOption) => {
    setFatherName(text)
    setFatherPick(picked)
    // A son usually lives where his father's family does
    if (picked && !mohalla && picked.mohalla) {
      setMohalla(picked.mohalla)
      setKhandan(picked.khandan || defaultKhandanFor(picked.mohalla))
    }
  }

  // Sons Handlers
  const addSon = () => {
    setSons([
      ...sons,
      { id: Date.now().toString(), name: '', occupationOrNotes: '', isDeceased: false, photo: null },
    ])
  }

  const removeSon = (id: string) => {
    if (sons.length === 1) {
      setSons([{ id: '1', name: '', occupationOrNotes: '', isDeceased: false, photo: null }])
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

  const keepEnglish = () => {
    const back = new Map(conversions.map((c) => [c.to, c.from]))
    const undo = (v: string) => back.get(v.trim()) ?? v
    setName(undo(name))
    setFatherName(undo(fatherName))
    setWifeName(undo(wifeName))
    setWifeFatherName(undo(wifeFatherName))
    setSons(sons.map((s) => ({ ...s, name: undo(s.name) })))
    setDaughters(
      daughters.map((d) => ({
        ...d,
        name: undo(d.name),
        husbandName: undo(d.husbandName),
        husbandFatherName: undo(d.husbandFatherName),
      }))
    )
    setUrduSkipKey(JSON.stringify([...new Set(conversions.map((c) => c.from))]))
    setConversions([])
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

    // An admin editing an older record may not have its phone and address
    if (!name.trim() || !fatherName.trim() || (!editId && (!phone.trim() || !address.trim()))) {
      setErrorMessage(
        'Please fill in the required fields: Name, Father Name, Phone Number and Address. Everything else is optional.'
      )
      window.scrollTo({ top: 400, behavior: 'smooth' })
      return
    }

    // The tree and the printed book are in Urdu: names typed in English are changed to the ledger's
    // Urdu spelling first, and the form stops so the person can check them before pressing Submit again
    const nameValues = [
      name,
      fatherName,
      wifeName,
      wifeFatherName,
      ...sons.map((s) => s.name),
      ...daughters.flatMap((d) => [d.name, d.husbandName, d.husbandFatherName]),
    ]
    const english = [...new Set(nameValues.map((v) => v.trim()).filter((v) => LATIN.test(v)))]
    if (english.length && JSON.stringify(english) !== urduSkipKey) {
      setSubmitting(true)
      const found: NameConversion[] = []
      await Promise.all(
        english.map(async (from) => {
          const r = await urduFor(from).catch(() => null)
          if (r && r.urdu !== from) found.push({ from, to: r.urdu, guessed: r.guessed })
        })
      )
      setSubmitting(false)
      const map = new Map(found.map((c) => [c.from, c.to]))
      const conv = (v: string) => map.get(v.trim()) ?? v
      setUrduSkipKey(JSON.stringify([...new Set(english.map(conv).filter((v) => LATIN.test(v)))]))
      if (found.length) {
        found.sort((a, b) => english.indexOf(a.from) - english.indexOf(b.from))
        setName(conv(name))
        setFatherName(conv(fatherName))
        setWifeName(conv(wifeName))
        setWifeFatherName(conv(wifeFatherName))
        setSons(sons.map((s) => ({ ...s, name: conv(s.name) })))
        setDaughters(
          daughters.map((d) => ({
            ...d,
            name: conv(d.name),
            husbandName: conv(d.husbandName),
            husbandFatherName: conv(d.husbandFatherName),
          }))
        )
        setConversions((prev) => [...prev.filter((c) => !map.has(c.from)), ...found])
        setTimeout(() => document.getElementById('urdu-check')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50)
        return
      }
    }

    setSubmitting(true)

    if (editId) {
      try {
        const res = await fetch(`/api/admin/records/${encodeURIComponent(editId)}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            fatherName,
            personId: personPick?.id,
            fatherId: fatherPick?.id,
            mohalla,
            customMohalla,
            khandan,
            customKhandan,
            referencePageNumber,
            wifeName,
            wifeFatherName,
            wifeMohalla,
            sons: sons.map(({ photo, id, ...son }) => son),
            daughters: daughters.map(({ id, ...daughter }) => daughter),
            phone,
            address,
            bookingType,
            transactionId: bookingType === 'submission_only' ? '' : transactionId,
            submitterName,
            originalSpellings: conversions,
          }),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) throw new Error(data.error || 'Could not save the changes')
        window.location.href = '/records'
      } catch (err: any) {
        setErrorMessage(err.message)
        setSubmitting(false)
      }
      return
    }

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('fatherName', fatherName)
      if (personPick) formData.append('personId', personPick.id)
      if (fatherPick) formData.append('fatherId', fatherPick.id)
      formData.append('mohalla', mohalla)
      formData.append('customMohalla', customMohalla)
      formData.append('khandan', khandan)
      formData.append('customKhandan', customKhandan)
      formData.append('referencePageNumber', referencePageNumber)

      formData.append('wifeName', wifeName)
      formData.append('wifeFatherName', wifeFatherName)
      formData.append('wifeMohalla', wifeMohalla)

      formData.append('sons', JSON.stringify(sons.map((son) => ({ ...son, photo: undefined }))))
      sons.forEach((son) => {
        if (son.photo && son.name.trim()) {
          formData.append(`sonPhoto_${son.id}`, son.photo)
        }
      })

      if (profileImageFile) {
        formData.append('profileImage', profileImageFile)
      }
      formData.append('daughters', JSON.stringify(daughters))

      formData.append('phone', phone)
      formData.append('address', address)

      formData.append('bookingType', bookingType)
      const paying = bookingType !== 'submission_only'
      formData.append('transactionId', paying ? transactionId : '')
      formData.append('submitterName', submitterName || name)
      formData.append('originalSpellings', JSON.stringify(conversions))

      if (paying && paymentSlipFile) {
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
    setMohalla('')
    setCustomMohalla('')
    setKhandan('')
    setCustomKhandan('')
    setReferencePageNumber('')
    setProfileImageFile(null)
    setWifeName('')
    setWifeFatherName('')
    setWifeMohalla('')
    setSons([{ id: '1', name: '', occupationOrNotes: '', isDeceased: false, photo: null }])
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
    setPersonPick(undefined)
    setFatherPick(undefined)
    setConversions([])
    setUrduSkipKey(null)
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
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-bold text-lg shadow shrink-0">
              س
            </div>
            <div className="min-w-0">
              <h1 className="font-bold text-base md:text-lg leading-tight">
                Sadat-e-Amroha Nasab Nama
              </h1>
              <p className="hidden sm:block text-xs text-amber-200">
                ساداتِ امروہہ - خاندانی نسب نامہ (کمپیوٹرائزڈ ایڈیشن)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/records"
              className="px-3 py-1.5 text-xs md:text-sm bg-emerald-800 hover:bg-emerald-700 text-white rounded-md border border-emerald-600 transition flex items-center gap-1.5"
              title="View Records"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">View Records</span>
            </Link>
            <a
              href="https://sayadat-e-amroha.sanity.studio"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-xs md:text-sm bg-amber-500 hover:bg-amber-400 text-emerald-950 font-medium rounded-md shadow transition flex items-center gap-1.5"
              title="Sanity Studio"
            >
              <span className="hidden sm:inline">Sanity Studio</span>
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
              Sadat-e-Amroha Nasab Nama
            </h2>
            <p className="text-xl md:text-2xl font-serif text-amber-200 mb-4" dir="rtl">
              ساداتِ امروہہ نسب نامہ
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-4">
              Following the publication of the genealogical book <strong>Kausar-ul-Ansab</strong> by{' '}
              <span className="text-amber-200">Syed Nazar-e-Hasnain Naqvi</span> (Mohalla Gher
              Manaf) from Karachi in 1999, information is now being collected to publish a new
              computerized edition titled <strong>&ldquo;Sadat-e-Amroha Nasab Nama&rdquo;</strong> after 27
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
                  Nasab Nama Submitted Successfully!
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
                    <span>View Submitted Records</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {editId && (
          <div className="bg-amber-50 border border-amber-300 text-amber-900 p-4 rounded-xl mb-6 flex items-start gap-3">
            <Pencil className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="flex-1 text-sm">
              <p className="font-semibold">
                {editLoading ? 'Loading the record…' : `Editing the record of ${name || '…'}`}
              </p>
              <p className="text-xs text-amber-800">
                Change anything below and press Save. Photos and payment slips stay as they are. /
                تصاویر اور رسید ویسے ہی رہیں گی۔
              </p>
            </div>
            <Link href="/records" className="text-xs font-medium underline text-amber-900 shrink-0">
              Cancel
            </Link>
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
                    Family Head & Lineage (سرپرست نسب نامہ)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Primary individual under whom this branch is recorded
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Name (Syed) / نام مع سید <span className="text-rose-500">*</span>
                  </label>
                  <PersonSearchSelect
                    name={name}
                    picked={personPick}
                    onChange={selectPerson}
                    mohalla={mohalla}
                    khandan={khandan}
                    required
                    placeholder="اپنا نام لکھیں / Type your name — English or Urdu"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  />
                  {!personPick && <UrduHint value={name} onUse={(urdu) => selectPerson(urdu, undefined)} />}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Father&apos;s Name &amp; Lineage / والد کا نام و نسب نامہ <span className="text-rose-500">*</span>
                  </label>
                  <PersonSearchSelect
                    name={fatherName}
                    picked={fatherPick}
                    onChange={selectFather}
                    mohalla={mohalla}
                    khandan={khandan}
                    required
                    placeholder="والد کا نام تلاش کریں / Search your father — English or Urdu"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  />
                  {!fatherPick && <UrduHint value={fatherName} onUse={(urdu) => selectFather(urdu, undefined)} />}
                  {fatherPick && (
                    <p className="text-xs text-emerald-800 mt-1" dir="rtl">
                      {fatherPick.name} — {fatherPick.hint}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2 -mt-1">
                  {loadingPerson ? (
                    <p className="text-xs text-slate-600">
                      کتاب سے تفصیل لائی جا رہی ہے… / Loading details from the ledger…
                    </p>
                  ) : personPick ? (
                    <div
                      className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg px-3 py-2 space-y-0.5"
                      dir="rtl"
                    >
                      <div>
                        <b>کتاب میں موجود:</b> {personPick.name} — {personPick.hint}
                      </div>
                      <div className="text-emerald-800">
                        {personPick.kind === 'record'
                          ? 'آپ کا خاندان کتاب سے بھر دیا گیا ہے — غلطی ہو تو درست کریں اور نئی اولاد شامل کریں۔'
                          : 'آپ اپنے والد کے خاندان میں درج ہیں — اپنی زوجہ اور اولاد شامل کریں۔'}{' '}
                        / Filled in from the ledger — correct anything wrong and add new children.
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-600" dir="rtl">
                      اگر آپ کا نام کتاب میں ہے تو فہرست سے اپنا نام چنیں — باقی تفصیل خود بھر جائے گی اور آپ کا
                      ریکارڈ نسب نامہ سے جڑ جائے گا۔ / If you are in the ledger, pick yourself from the list.
                      <br />
                      انگریزی کی بورڈ ہو تو انگریزی میں لکھیں، جیسے Ali Muhammad — تلاش پھر بھی کام کرے گی، اور ہر نام کے
                      نیچے کتاب والے اردو ہجے تجویز ہوں گے۔ / On an English keyboard? Type in English — search still works,
                      and each name box suggests the Urdu spelling the book uses.
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mohalla in Amroha / امروہہ کا محلہ <Optional />
                  </label>
                  <SearchSelect
                    value={mohalla}
                    onChange={selectMohalla}
                    dir="rtl"
                    options={MOHALLA_OPTIONS}
                    emptyLabel="— معلوم نہیں / Not known —"
                    placeholder="محلہ تلاش کریں / Type to search mohalla"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  />
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

                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Khandan / خاندان{' '}
                    <span className="font-normal text-slate-600">
                      (from Kausar-ul-Ansab index)
                    </span>{' '}
                    <Optional />
                  </label>
                  <SearchSelect
                    value={khandan}
                    onChange={setKhandan}
                    dir="rtl"
                    options={[
                      ...khandanOptions.map((k) => khandanOption(k)),
                      { value: 'other', label: 'دیگر / Not listed' },
                    ]}
                    emptyLabel="— معلوم نہیں / Not known —"
                    placeholder="خاندان تلاش کریں / Type to search khandan"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  />
                  {khandan === 'other' && (
                    <input
                      type="text"
                      value={customKhandan}
                      onChange={(e) => setCustomKhandan(e.target.value)}
                      placeholder="e.g. اولاد سید ... بن سید ..."
                      dir="rtl"
                      className="w-full mt-2 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                    />
                  )}
                  {selectedKhandan && (
                    <p className="text-xs text-emerald-800 mt-1">
                      Section starts on page {selectedKhandan.page} of Kausar-ul-Ansab (1999) /
                      صفحہ {selectedKhandan.page}
                    </p>
                  )}
                  <p className="text-xs text-slate-600 mt-1 flex flex-wrap items-center gap-x-2" dir="rtl">
                    <span>کتاب کی فہرست دیکھیں / See the book&apos;s index:</span>
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
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ref Page No. in Kausar-ul-Ansab (1999) / صفحہ نمبر <Optional />
                  </label>
                  <input
                    type="text"
                    value={referencePageNumber}
                    onChange={(e) => setReferencePageNumber(e.target.value)}
                    placeholder={
                      selectedKhandan
                        ? `e.g. ${selectedKhandan.page} or later (if known)`
                        : 'e.g. Page 142 (if known)'
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Optional Profile Photo */}
              <div className="mt-5 flex items-center gap-4">
                <PhotoPicker
                  file={profileImageFile}
                  onChange={setProfileImageFile}
                  label="Upload profile photo"
                />
                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Profile Photo (Optional) / تصویر (اختیاری)
                  </p>
                  <p className="text-xs text-slate-600">
                    Photo of the family head. Photos of wife and daughters are not collected.
                  </p>
                </div>
              </div>

              {/* Wife Details Sub-box */}
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-600" />
                  <span>Wife&apos;s Information / زوجہ کی تفصیلات (مع ولدیت و محلہ)</span>
                  <Optional />
                </h4>
                <p className="text-xs text-slate-600 -mt-2 mb-3">
                  Leave blank if not known / معلوم نہ ہو تو خالی چھوڑ دیں
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      value={wifeName}
                      onChange={(e) => setWifeName(e.target.value)}
                      placeholder="Wife's Name (e.g. Syeda Zahra Bano)"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                    <UrduHint value={wifeName} onUse={setWifeName} />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={wifeFatherName}
                      onChange={(e) => setWifeFatherName(e.target.value)}
                      placeholder="Father's Name (d/o Syed Akhtar)"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                    <UrduHint value={wifeFatherName} onUse={setWifeFatherName} />
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
                      Sons (Syed) / بیٹے (سید) <Optional />
                    </h3>
                    <p className="text-xs text-slate-600">
                      Add all sons dynamically using the button below. Tap the camera to add a
                      photo (optional).
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
                    <PhotoPicker
                      file={son.photo}
                      onChange={(file) => updateSon(son.id, 'photo', file)}
                      label={`Son #${index + 1} photo (optional)`}
                      size="sm"
                    />
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2.5 w-full">
                      <div>
                        <input
                          type="text"
                          value={son.name}
                          onChange={(e) => updateSon(son.id, 'name', e.target.value)}
                          placeholder={`Son #${index + 1} Name (e.g. Syed Ali Raza)`}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <UrduHint value={son.name} onUse={(urdu) => updateSon(son.id, 'name', urdu)} />
                      </div>
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

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
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
                      Daughters (Syeda) / بیٹیاں (سیدہ) <Optional />
                    </h3>
                    <p className="text-xs text-slate-600">
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
                    <div className="flex flex-wrap items-center justify-between gap-2">
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
                        <UrduHint value={daughter.name} onUse={(urdu) => updateDaughter(daughter.id, 'name', urdu)} />
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
                          <UrduHint
                            value={daughter.husbandName}
                            onUse={(urdu) => updateDaughter(daughter.id, 'husbandName', urdu)}
                          />
                        </div>
                      )}
                    </div>

                    {daughter.maritalStatus === 'married' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        <div>
                          <input
                            type="text"
                            value={daughter.husbandFatherName}
                            onChange={(e) =>
                              updateDaughter(daughter.id, 'husbandFatherName', e.target.value)
                            }
                            placeholder="Husband's Father's Name"
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-500 focus:outline-none"
                          />
                          <UrduHint
                            value={daughter.husbandFatherName}
                            onUse={(urdu) => updateDaughter(daughter.id, 'husbandFatherName', urdu)}
                          />
                        </div>
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

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
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
                    Advance Booking & Bank Details (پیشگی بکنگ اور ادائیگی) <Optional />
                  </h3>
                  <p className="text-xs text-slate-600">
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
                  <div className="text-xl font-extrabold text-slate-900">Rs. 6,000</div>
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
                  <div className="text-xl font-extrabold text-slate-900">Rs. 8,000</div>
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
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
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

              {/* Bank Details Display: only when a book is being ordered; the free option pays nothing */}
              {bookingType !== 'submission_only' && (
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
                    <span className="text-slate-300 block">Account Title:</span>
                    <span className="font-semibold text-slate-100 text-sm">
                      Syed Sibte Said Naqvi
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-300 block">Branch:</span>
                    <span className="text-slate-200">
                      Incholi Federal B Area, Karachi, Pakistan
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded-lg">
                    <div>
                      <span className="text-slate-300 block text-xs">Account Number:</span>
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
                      <span className="text-slate-300 block text-xs">IBAN / Code:</span>
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

                <div className="mt-3 pt-2 border-t border-slate-800/80 text-xs text-slate-300 flex items-center justify-between">
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
              )}

              {/* Uploads and Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookingType !== 'submission_only' && (
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
                )}

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

                {bookingType !== 'submission_only' && (
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
                )}

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
              {conversions.length > 0 && (
                <div id="urdu-check" className="mb-4 bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-sm">
                  <p className="font-semibold text-emerald-900 flex items-center gap-1.5">
                    <Languages className="w-4 h-4" />
                    <span>English names changed to Urdu — please check, then press Submit again</span>
                  </p>
                  <p className="text-xs text-emerald-800 mb-2" dir="rtl">
                    انگریزی میں لکھے نام کتاب کے اردو ہجے میں بدل دیے گئے ہیں۔ دیکھ لیں، پھر دوبارہ جمع کریں۔
                  </p>
                  <ul className="space-y-1 mb-3">
                    {conversions.map((c) => (
                      <li key={c.from} className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="text-slate-600">{c.from}</span>
                        <span className="text-slate-400">→</span>
                        <span className="text-base text-slate-900" dir="rtl">
                          {c.to}
                        </span>
                        {c.guessed && (
                          <span className="text-amber-700">(not in the book — check the spelling / ہجے دیکھ لیں)</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-600 mb-2">
                    You can still change any name in its box. Your English spelling is saved alongside for the editors.
                  </p>
                  <button
                    type="button"
                    onClick={keepEnglish}
                    className="px-3 py-1.5 text-xs bg-white hover:bg-slate-100 text-slate-800 rounded-md border border-slate-300 transition"
                  >
                    Keep English instead / انگریزی ہی رکھیں
                  </button>
                </div>
              )}
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
                    <span>{editId ? 'Save Changes / تبدیلیاں محفوظ کریں' : 'Submit Sadat-e-Amroha Nasab Nama'}</span>
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-600 mt-2">
                By submitting, your genealogical information will be reviewed and cataloged for the
                official book.
              </p>
            </div>
          </form>

          {/* Sidebar / Live Nasab Nama Preview Column (Span 1) */}
          <div className="space-y-6">
            {/* Live Nasab Nama Card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 sticky top-20">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Live Nasab Nama Card Preview</span>
                </span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-mono">
                  {name ? 'Ready' : 'Draft'}
                </span>
              </div>

              {/* Nasab Nama Preview Content */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 font-sans text-xs">
                <div>
                  <AvatarPreview file={profileImageFile} className="w-14 h-14 mb-2 border border-slate-200" />
                  <span className="text-xs text-slate-600 uppercase tracking-wider block">
                    Head of Lineage
                  </span>
                  <div className="text-sm font-bold text-slate-900">
                    {name.trim() || 'Syed [Your Name]'}
                  </div>
                  <div className="text-slate-600">
                    والد: {fatherName.trim() || 'Syed [Father Name]'}
                  </div>
                  <div className="text-emerald-800 font-medium">
                    محلہ: {mohalla === 'Other' ? customMohalla || 'Amroha' : mohalla || '—'}
                  </div>
                  {(selectedKhandan || customKhandan) && (
                    <div className="text-slate-700" dir="rtl">
                      خاندان: {selectedKhandan ? selectedKhandan.name : customKhandan}
                    </div>
                  )}
                  {referencePageNumber && (
                    <div className="text-xs text-slate-600">
                      Ref Page: {referencePageNumber} (کوثر الانساب 1999)
                    </div>
                  )}
                </div>

                {wifeName && (
                  <div className="pt-2 border-t border-slate-200 text-slate-700">
                    <span className="text-xs text-slate-600 block uppercase">زوجہ:</span>
                    <span className="font-medium">{wifeName}</span>
                    {wifeFatherName && <span> مع ولدیت {wifeFatherName}</span>}
                    {wifeMohalla && <span> ({wifeMohalla})</span>}
                  </div>
                )}

                {/* Sons List Preview */}
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                    بیٹے / Sons ({sons.filter((s) => s.name.trim()).length}):
                  </span>
                  {sons.filter((s) => s.name.trim()).length === 0 ? (
                    <span className="text-slate-600 italic">None added yet</span>
                  ) : (
                    <ul className="space-y-1">
                      {sons
                        .filter((s) => s.name.trim())
                        .map((s, idx) => (
                          <li key={s.id} className="text-slate-800 flex items-center gap-1.5">
                            {s.photo ? (
                              <AvatarPreview file={s.photo} className="w-5 h-5" />
                            ) : (
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            )}
                            <span>{s.name}</span>
                            {s.isDeceased && (
                              <span className="text-xs text-slate-600">(مرحوم)</span>
                            )}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>

                {/* Daughters List Preview */}
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-xs font-bold text-pink-700 uppercase tracking-wider block mb-1">
                    بیٹیاں / Daughters ({daughters.filter((d) => d.name.trim()).length}):
                  </span>
                  {daughters.filter((d) => d.name.trim()).length === 0 ? (
                    <span className="text-slate-600 italic">None added yet</span>
                  ) : (
                    <ul className="space-y-1">
                      {daughters
                        .filter((d) => d.name.trim())
                        .map((d, idx) => (
                          <li key={d.id} className="text-slate-800 text-xs">
                            <div className="font-medium flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                              <span>{d.name}</span>
                            </div>
                            {d.maritalStatus === 'married' && d.husbandName && (
                              <div className="text-slate-600 pl-3">
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
              <div className="mt-4 p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
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
