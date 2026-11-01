'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Printer, X } from 'lucide-react'
import FamilyTree from '@/components/FamilyTree'
import type { TreeNode } from '@/lib/familyTree'
import { packSections, planSections, sectionRoots, type SectionPlan, type Size } from '@/lib/treePagination'

// What can be printed: the whole tree, or one person's branch
export interface PrintScope {
  id: string
  label: string
  title: string
  subtitle?: string
  roots: TreeNode[]
}

export type Paper = 'A4' | 'A3'
export type TextSize = 'small' | 'medium' | 'large'

// Paper sizes in landscape (mm). Browsers lay out print pages at 96 CSS px per inch.
export const PAPER_MM: Record<Paper, [number, number]> = { A4: [297, 210], A3: [420, 297] }
export const MARGIN_MM = 8
const PX_PER_MM = 96 / 25.4
export const LABEL_HEIGHT = 26
export const SECTION_GAP = 16
export const TEXT_SCALE: Record<TextSize, number> = { small: 0.5, medium: 0.65, large: 0.8 }

export function pageBox(paper: Paper) {
  const [w, h] = PAPER_MM[paper]
  // A few pixels' slack so rounding never spills a page onto an extra sheet
  const width = Math.floor((w - 2 * MARGIN_MM) * PX_PER_MM) - 4
  const height = Math.floor((h - 2 * MARGIN_MM) * PX_PER_MM) - 4
  return { width, height, contentHeight: height - LABEL_HEIGHT }
}

const noop = () => {}

export const sectionTitle = (section: SectionPlan, scope: { title: string }) =>
  section.head
    ? `${section.head.name}${section.headParent ? ` بن ${section.headParent.name}` : ''}`
    : scope.title

interface PrintPage {
  label: string
  content: React.ReactNode
}

export default function TreePrintPanel({
  scopes,
  onClose,
}: {
  scopes: PrintScope[]
  onClose: () => void
}) {
  const [scopeId, setScopeId] = useState(scopes[0].id)
  const [paper, setPaper] = useState<Paper>('A4')
  const [textSize, setTextSize] = useState<TextSize>('medium')
  const [tree, setTree] = useState<{ size: Size; nodes: Map<string, Size> } | null>(null)
  const [sectionSizes, setSectionSizes] = useState<Size[] | null>(null)
  const [printing, setPrinting] = useState(false)
  const measureRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)

  const scope = scopes.find((s) => s.id === scopeId) || scopes[0]
  const page = pageBox(paper)
  const scale = TEXT_SCALE[textSize]

  // Measure the whole tree, and every person's box, at full size off screen
  useEffect(() => {
    const el = measureRef.current
    if (!el) return
    const observer = new ResizeObserver(() => {
      // While printing, these hidden copies are not laid out (size 0); keep the last measurement
      if (el.offsetWidth === 0) return
      const nodes = new Map<string, Size>()
      el.querySelectorAll<HTMLElement>('[data-node-id]').forEach((n) =>
        nodes.set(n.dataset.nodeId!, { w: n.offsetWidth, h: n.offsetHeight })
      )
      setTree({ size: { w: el.offsetWidth, h: el.offsetHeight }, nodes })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [scopeId])

  // Book style: cut the tree into sections that fit a page at the chosen text size
  const plan = useMemo(
    () =>
      tree
        ? planSections(scope.roots, tree.nodes, { w: page.width / scale, h: page.contentHeight / scale })
        : null,
    [tree, scope.roots, page.width, page.contentHeight, scale]
  )

  // Measure each section as it will print (page numbers are filled in afterwards)
  useEffect(() => {
    const el = sectionsRef.current
    if (!el || !plan) return
    const observer = new ResizeObserver(() => {
      if (el.offsetWidth === 0) return
      const boxes = Array.from(el.children) as HTMLElement[]
      setSectionSizes(boxes.map((b) => ({ w: b.offsetWidth, h: b.offsetHeight })))
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [plan])

  const bookPages = useMemo(
    () =>
      plan && sectionSizes && sectionSizes.length === plan.length
        ? packSections(sectionSizes, scale, { w: page.width, h: page.contentHeight }, SECTION_GAP)
        : null,
    [plan, sectionSizes, scale, page.width, page.contentHeight]
  )

  const pageCount = bookPages ? bookPages.length : null

  // Once the print pages are on the page, wait for photos to load, then open the print dialog
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
    const timeout = new Promise((resolve) => setTimeout(resolve, 3000))
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
    if (!tree) return []
    if (plan && bookPages) {
      const pageOfSection = new Map<number, number>()
      bookPages.forEach((sections, p) => sections.forEach((s) => pageOfSection.set(s.index, p + 1)))
      const sectionIndexOfHead = new Map(plan.map((s, i) => [s.head?.id, i]))
      const pageOfHead = (id: string) => pageOfSection.get(sectionIndexOfHead.get(id)!) ?? '?'
      // The page where a section's head appears inside his father's section
      const parentPage = (i: number) => {
        const parentIndex = plan.findIndex((s) => s.cutIds.includes(plan[i].head!.id))
        return pageOfSection.get(parentIndex)
      }

      return bookPages.map((sections, p) => ({
        label: `صفحہ ${p + 1} از ${bookPages.length}`,
        content: (
          <div className="flex flex-col items-center" style={{ gap: SECTION_GAP }}>
            {sections.map(({ index, scale: s, size }) => (
              <div key={index} style={{ zoom: s, width: size.w }}>
                <FamilyTree
                  title={sectionTitle(plan[index], scope)}
                  subtitle={plan[index].head ? `(صفحہ ${parentPage(index)} سے جاری)` : scope.subtitle}
                  roots={sectionRoots(plan[index], scope.roots, pageOfHead)}
                  onSelect={noop}
                />
              </div>
            ))}
          </div>
        ),
      }))
    }
    return []
  }

  const printPages = printing ? buildPages() : []

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-slate-900/40 flex items-center justify-center p-4">
        <div className="w-full max-w-lg max-h-[95vh] overflow-auto bg-white rounded-2xl shadow-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <Printer className="w-5 h-5 text-emerald-700" />
              Print nasab / نسب پرنٹ کریں
            </h2>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600" title="Close">
              <X className="w-4 h-4" />
            </button>
          </div>

          {scopes.length > 1 && (
            <fieldset className="space-y-1.5">
              <legend className="text-xs font-semibold text-slate-700 mb-1">What to print</legend>
              {scopes.map((s) => (
                <label key={s.id} className="flex items-start gap-2 text-sm text-slate-800 cursor-pointer">
                  <input
                    type="radio"
                    name="print-scope"
                    checked={scopeId === s.id}
                    onChange={() => {
                      setScopeId(s.id)
                      setTree(null)
                      setSectionSizes(null)
                    }}
                    className="mt-1"
                  />
                  <span>{s.label}</span>
                </label>
              ))}
            </fieldset>
          )}

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

          <p className="text-sm font-medium text-slate-800">
            {pageCount === null
              ? 'Working out pages…'
              : `${pageCount} ${pageCount === 1 ? 'page' : 'pages'} • large branches continue on their own page, marked “صفحہ N”, as in Kausar-ul-Ansab`}
          </p>

          <p className="text-xs text-slate-600">
            In the print window, keep the scale at 100% (Default) and turn on “Background graphics” to keep the
            colours. Choose “Save as PDF” to keep a copy.
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
              disabled={pageCount === null || printing}
              className="px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-semibold flex items-center gap-2 disabled:opacity-50"
            >
              <Printer className="w-4 h-4" />
              {pageCount && pageCount > 1 ? `Print ${pageCount} pages` : 'Print'}
            </button>
          </div>
        </div>
      </div>

      {/* Hidden full-size copies, used only for measuring */}
      <div className="fixed left-0 top-0 -z-10 invisible pointer-events-none" aria-hidden>
        <div ref={measureRef} style={{ width: 'max-content' }}>
          <FamilyTree title={scope.title} subtitle={scope.subtitle} roots={scope.roots} onSelect={noop} />
        </div>
        {plan && (
          <div ref={sectionsRef} key={`${scopeId}-${paper}-${textSize}`}>
            {plan.map((section, i) => (
              <div key={i} style={{ width: 'max-content' }}>
                <FamilyTree
                  title={sectionTitle(section, scope)}
                  subtitle={section.head ? '(صفحہ 00 سے جاری)' : scope.subtitle}
                  roots={sectionRoots(section, scope.roots, () => '00')}
                  onSelect={noop}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* The printed pages: only shown while printing */}
      {printing &&
        createPortal(
          <div ref={layerRef} className="tree-print-layer">
            <style>{`@page { size: ${paper} landscape; margin: ${MARGIN_MM}mm; }`}</style>
            {printPages.map((p, i) => (
              <div key={i} className="tree-print-page" style={{ width: page.width, height: page.height }}>
                <div className="tree-print-label" style={{ height: LABEL_HEIGHT }} dir="rtl">
                  <span>{scope.title}</span>
                  <span>{p.label}</span>
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

export function Choice({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg border text-sm transition ${
        active
          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold'
          : 'border-slate-300 text-slate-700 hover:bg-slate-50'
      }`}
    >
      {children}
    </button>
  )
}
