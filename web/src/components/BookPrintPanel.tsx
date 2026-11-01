'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { BookOpen, Printer, X } from 'lucide-react'
import FamilyTree from '@/components/FamilyTree'
import {
  Choice,
  LABEL_HEIGHT,
  MARGIN_MM,
  SECTION_GAP,
  TEXT_SCALE,
  pageBox,
  sectionTitle,
  type Paper,
  type TextSize,
} from '@/components/TreePrintPanel'
import { KHANDANS, findKhandan } from '@/data/amrohaIndex'
import { buildFamilyTree, countPeople, type TreeNode, type TreeRecord } from '@/lib/familyTree'
import { packSections, planSections, sectionRoots, type SectionPlan, type Size } from '@/lib/treePagination'

// The whole book in one print: a cover, a contents page, then every khandan in the order of the
// book's index, each starting on a new page and cut into page-sized sections the same way as the
// single-khandan "Book style" print. The browser's "Save as PDF" turns it into a downloadable file.

interface Chapter {
  id: string
  serial?: number
  title: string
  subtitle: string
  residence?: string
  roots: TreeNode[]
  people: number
}

interface PrintPage {
  title?: string
  label?: string
  content: React.ReactNode
}

const noop = () => {}

function buildChapters(records: TreeRecord[]): Chapter[] {
  const byKhandan = new Map<string, TreeRecord[]>()
  const other: TreeRecord[] = []
  for (const r of records) {
    const k = findKhandan(r.khandan)
    if (!k) other.push(r)
    else byKhandan.set(String(k.serial), [...(byKhandan.get(String(k.serial)) || []), r])
  }
  const chapters: Chapter[] = []
  for (const k of KHANDANS) {
    const list = byKhandan.get(String(k.serial))
    if (!list?.length) continue
    const roots = buildFamilyTree(list)
    chapters.push({
      id: String(k.serial),
      serial: k.serial,
      title: k.name,
      subtitle: `${k.residence} • کوثر الانساب صفحہ ${k.page}`,
      residence: k.residence,
      roots,
      people: countPeople(roots),
    })
  }
  if (other.length) {
    const roots = buildFamilyTree(other)
    chapters.push({
      id: 'other',
      title: 'دیگر خاندان',
      subtitle: 'جن ریکارڈ میں خاندان درج نہیں',
      roots,
      people: countPeople(roots),
    })
  }
  return chapters
}

// Runs after the hidden copies are on the page and the Urdu font has loaded, so sizes are final.
// A timer rather than requestAnimationFrame, which stops while the tab is in the background.
function afterLayout(run: () => void) {
  let cancelled = false
  document.fonts.ready.then(() =>
    setTimeout(() => {
      if (!cancelled) run()
    }, 0)
  )
  return () => {
    cancelled = true
  }
}

export default function BookPrintPanel({ onClose }: { onClose: () => void }) {
  const [paper, setPaper] = useState<Paper>('A4')
  const [textSize, setTextSize] = useState<TextSize>('medium')
  const [records, setRecords] = useState<TreeRecord[] | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [nodeSizes, setNodeSizes] = useState<Map<string, Size>[] | null>(null)
  const [sectionSizes, setSectionSizes] = useState<Size[][] | null>(null)
  const [printing, setPrinting] = useState(false)
  const treesRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)

  const page = pageBox(paper)
  const scale = TEXT_SCALE[textSize]

  useEffect(() => {
    fetch('/api/admin/records?all=1')
      .then(async (res) => {
        const data = await res.json()
        if (res.status === 401) throw new Error('Signed out — unlock the admin page again.')
        if (!res.ok) throw new Error(data.error || 'Could not load the records')
        setRecords(data.records || [])
      })
      .catch((err) => setLoadError(err.message))
  }, [])

  const chapters = useMemo(() => (records ? buildChapters(records) : null), [records])
  const totalPeople = useMemo(() => chapters?.reduce((n, c) => n + c.people, 0) ?? 0, [chapters])

  // Every person's box at full size, per khandan (node ids repeat across khandans)
  useEffect(() => {
    if (!chapters || nodeSizes) return
    return afterLayout(() => {
      const el = treesRef.current
      if (!el) return
      setNodeSizes(
        Array.from(el.children).map((chapterEl) => {
          const sizes = new Map<string, Size>()
          chapterEl.querySelectorAll<HTMLElement>('[data-node-id]').forEach((n) =>
            sizes.set(n.dataset.nodeId!, { w: n.offsetWidth, h: n.offsetHeight })
          )
          return sizes
        })
      )
    })
  }, [chapters, nodeSizes])

  const plans = useMemo(
    () =>
      chapters && nodeSizes
        ? chapters.map((c, i) =>
            planSections(c.roots, nodeSizes[i], { w: page.width / scale, h: page.contentHeight / scale })
          )
        : null,
    [chapters, nodeSizes, page.width, page.contentHeight, scale]
  )

  // Each section as it will print (page numbers are filled in afterwards)
  useEffect(() => {
    setSectionSizes(null)
    if (!plans) return
    return afterLayout(() => {
      const el = sectionsRef.current
      if (!el) return
      setSectionSizes(
        Array.from(el.children).map((chapterEl) =>
          (Array.from(chapterEl.children) as HTMLElement[]).map((b) => ({ w: b.offsetWidth, h: b.offsetHeight }))
        )
      )
    })
  }, [plans])

  const packed = useMemo(
    () =>
      plans && sectionSizes && plans.every((plan, i) => sectionSizes[i]?.length === plan.length)
        ? plans.map((plan, i) =>
            packSections(sectionSizes[i], scale, { w: page.width, h: page.contentHeight }, SECTION_GAP)
          )
        : null,
    [plans, sectionSizes, scale, page.width, page.contentHeight]
  )

  // Page numbers start after the cover and contents; each khandan opens on a new page
  const chapterStart = useMemo(() => {
    if (!packed) return null
    let next = 1
    return packed.map((pages) => {
      const start = next
      next += pages.length
      return start
    })
  }, [packed])
  const treePageCount = packed ? packed.reduce((n, p) => n + p.length, 0) : null

  useEffect(() => {
    if (!printing) return
    document.body.classList.add('printing-tree')
    const onAfterPrint = () => {
      document.body.classList.remove('printing-tree')
      setPrinting(false)
    }
    window.addEventListener('afterprint', onAfterPrint)
    const images = Array.from(layerRef.current?.querySelectorAll('img') || [])
    const imagesReady = Promise.all(images.map((img) => img.decode().catch(() => undefined)))
    const timeout = new Promise((resolve) => setTimeout(resolve, 5000))
    let cancelled = false
    Promise.race([imagesReady, timeout]).then(() => {
      if (!cancelled) requestAnimationFrame(() => window.print())
    })
    return () => {
      cancelled = true
      window.removeEventListener('afterprint', onAfterPrint)
      document.body.classList.remove('printing-tree')
    }
  }, [printing])

  const buildPages = (): PrintPage[] => {
    if (!chapters || !plans || !packed || !chapterStart) return []
    const today = new Date().toLocaleDateString('en-GB')
    // Contents on one page in two columns: rows share the height left under the heading
    const CONTENTS_HEADING = 48
    const rowHeight = Math.min(32, (page.contentHeight - CONTENTS_HEADING) / Math.ceil(chapters.length / 2))
    const pages: PrintPage[] = [
      {
        content: (
          <div className="h-full flex flex-col items-center justify-center text-center gap-4 border-4 border-double border-emerald-800 rounded-lg">
            <p className="text-5xl font-bold text-emerald-900 leading-[2]" dir="rtl">
              ساداتِ امروہہ نسب نامہ
            </p>
            <p className="text-2xl text-slate-800">Sadat-e-Amroha Nasab Nama</p>
            <p className="text-xl text-slate-700 leading-[2]" dir="rtl">
              خاندانی نسب — کوثر الانساب (1999) کا کمپیوٹرائزڈ ایڈیشن
            </p>
            <p className="text-base text-slate-600 leading-[2]" dir="rtl">
              {chapters.length} خاندان • {totalPeople.toLocaleString('en')} افراد
            </p>
            <p className="text-sm text-slate-500">{today}</p>
          </div>
        ),
      },
      {
        title: 'فہرست',
        content: (
          <div dir="rtl" className="h-full">
            <p className="text-xl font-bold text-emerald-900 text-center" style={{ height: CONTENTS_HEADING }}>فہرست / Contents</p>
            <ol
              className="columns-2 gap-10"
              style={{ fontSize: Math.min(14, rowHeight / 1.9), lineHeight: `${rowHeight}px` }}
            >
              {chapters.map((c, i) => (
                <li key={c.id} className="flex items-baseline gap-2 break-inside-avoid" style={{ height: rowHeight }}>
                  <span className="text-slate-500 w-6 shrink-0">{c.serial ?? '—'}</span>
                  <span className="text-slate-900 truncate">{c.title}</span>
                  <span className="flex-1 border-b border-dotted border-slate-400" />
                  <span className="text-slate-700 shrink-0">صفحہ {chapterStart[i]}</span>
                </li>
              ))}
            </ol>
          </div>
        ),
      },
    ]

    chapters.forEach((chapter, c) => {
      const plan = plans[c]
      const first = chapterStart[c]
      const pageOfSection = new Map<number, number>()
      packed[c].forEach((sections, p) => sections.forEach((s) => pageOfSection.set(s.index, first + p)))
      const sectionIndexOfHead = new Map(plan.map((s, i) => [s.head?.id, i]))
      const pageOfHead = (id: string) => pageOfSection.get(sectionIndexOfHead.get(id)!) ?? '?'
      const parentPage = (i: number) =>
        pageOfSection.get(plan.findIndex((s) => s.cutIds.includes(plan[i].head!.id)))

      packed[c].forEach((sections, p) =>
        pages.push({
          title: chapter.serial ? `${chapter.serial}. ${chapter.title}` : chapter.title,
          label: `صفحہ ${first + p}`,
          content: (
            <div className="flex flex-col items-center" style={{ gap: SECTION_GAP }}>
              {sections.map(({ index, scale: s, size }) => (
                <div key={index} style={{ zoom: s, width: size.w }}>
                  <FamilyTree
                    title={sectionTitle(plan[index], chapter)}
                    subtitle={plan[index].head ? `(صفحہ ${parentPage(index)} سے جاری)` : chapter.subtitle}
                    roots={sectionRoots(plan[index], chapter.roots, pageOfHead)}
                    onSelect={noop}
                  />
                </div>
              ))}
            </div>
          ),
        })
      )
    })
    return pages
  }

  const printPages = printing ? buildPages() : []

  const status = loadError
    ? loadError
    : !records
      ? 'Loading every record…'
      : !nodeSizes
        ? `Measuring ${chapters?.length ?? 0} family trees…`
        : !packed
          ? 'Laying out pages…'
          : `${chapters!.length} khandans • ${totalPeople.toLocaleString('en')} people • ${
              treePageCount! + 2
            } pages (cover, contents and ${treePageCount} pages of trees)`

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-slate-900/40 flex items-center justify-center p-4">
        <div className="w-full max-w-lg max-h-[95vh] overflow-auto bg-white rounded-2xl shadow-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-700" />
              Whole book / پوری کتاب
            </h2>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600" title="Close">
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-slate-700">
            Every khandan in the order of the book&apos;s index, each starting on a new page, with a cover and a
            contents page. Large branches continue on their own page, marked “صفحہ N”.
          </p>

          <div className="flex flex-wrap gap-6">
            <div>
              <span className="block text-xs font-semibold text-slate-700 mb-1">Paper (landscape) / کاغذ</span>
              <div className="flex gap-1.5">
                {(['A4', 'A3'] as Paper[]).map((p) => (
                  <Choice key={p} active={paper === p} onClick={() => setPaper(p)}>
                    {p}
                  </Choice>
                ))}
              </div>
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-700 mb-1">Text size / تحریر</span>
              <div className="flex gap-1.5">
                {(['small', 'medium', 'large'] as TextSize[]).map((t) => (
                  <Choice key={t} active={textSize === t} onClick={() => setTextSize(t)}>
                    {t === 'small' ? 'Small' : t === 'medium' ? 'Medium' : 'Large'}
                  </Choice>
                ))}
              </div>
            </div>
          </div>

          <p className={`text-sm ${loadError ? 'text-rose-700' : 'text-slate-800 font-medium'}`}>{status}</p>

          <p className="text-xs text-slate-600">
            To download: in the print window choose <strong>Save as PDF</strong> as the printer, keep the scale at
            100% (Default) and turn on “Background graphics”. A book this size can take a minute to open in the
            print window.
          </p>

          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              onClick={() => setPrinting(true)}
              disabled={!packed || printing}
              className="px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-semibold flex items-center gap-2 disabled:opacity-50"
            >
              <Printer className="w-4 h-4" />
              {printing ? 'Preparing…' : 'Print / Save as PDF'}
            </button>
          </div>
        </div>
      </div>

      {/* Hidden full-size copies, used only for measuring */}
      <div className="fixed left-0 top-0 -z-10 invisible pointer-events-none" aria-hidden>
        {chapters && !nodeSizes && (
          <div ref={treesRef}>
            {chapters.map((c) => (
              <div key={c.id} style={{ width: 'max-content' }}>
                <FamilyTree title={c.title} subtitle={c.subtitle} roots={c.roots} onSelect={noop} />
              </div>
            ))}
          </div>
        )}
        {chapters && plans && (
          <div ref={sectionsRef} key={`${paper}-${textSize}`}>
            {chapters.map((c, ci) => (
              <div key={c.id}>
                {plans[ci].map((section: SectionPlan, i) => (
                  <div key={i} style={{ width: 'max-content' }}>
                    <FamilyTree
                      title={sectionTitle(section, c)}
                      subtitle={section.head ? '(صفحہ 000 سے جاری)' : c.subtitle}
                      roots={sectionRoots(section, c.roots, () => '000')}
                      onSelect={noop}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {printing &&
        createPortal(
          <div ref={layerRef} className="tree-print-layer">
            <style>{`@page { size: ${paper} landscape; margin: ${MARGIN_MM}mm; }`}</style>
            {printPages.map((p, i) => (
              <div key={i} className="tree-print-page" style={{ width: page.width, height: page.height }}>
                <div className="tree-print-label" style={{ height: LABEL_HEIGHT }} dir="rtl">
                  <span>{p.title || 'ساداتِ امروہہ نسب نامہ'}</span>
                  <span>{p.label || ''}</span>
                </div>
                <div className="relative overflow-hidden" style={{ width: page.width, height: page.contentHeight }}>
                  {p.content}
                </div>
              </div>
            ))}
          </div>,
          document.body
        )}
    </>
  )
}
