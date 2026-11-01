// Splits a large family tree into page-sized sections, the way Kausar-ul-Ansab prints it:
// a branch that does not fit is moved to its own section, and where it was cut the person
// shows "صفحہ N" pointing to the page where his family continues.

import type { TreeNode } from '@/lib/familyTree'

export interface Size {
  w: number
  h: number
}

export interface SectionPlan {
  // null for the first section, which holds the top of the tree
  head: TreeNode | null
  headParent?: TreeNode
  // People inside this section whose families continue in another section
  cutIds: string[]
}

// Spacing of the tree in px, matching .ftree in globals.css (base font 18px)
const GAP_X = 0.35 * 18 * 2
const GAP_Y = 1.6 * 18
// Extra height of a person whose family continues elsewhere ("صفحہ N" line)
const STUB_EXTRA_H = 22
const FALLBACK_NODE: Size = { w: 150, h: 60 }

/**
 * Decides where to cut the tree so that every section fits within `limit` (tree px at full size).
 * `nodeSizes` are the measured sizes of each person's box, keyed by node id ('__title' for the
 * top title box).
 */
export function planSections(roots: TreeNode[], nodeSizes: Map<string, Size>, limit: Size): SectionPlan[] {
  const box = (id: string) => nodeSizes.get(id) || FALLBACK_NODE
  const top: TreeNode = { id: '__title', name: '', gender: 'male', children: roots }

  const parents = new Map<string, TreeNode>()
  const index = (n: TreeNode) =>
    n.children.forEach((c) => {
      parents.set(c.id, n)
      index(c)
    })
  index(top)

  // Lays out one section headed by `head` and returns the people whose families are cut off
  // to continue in their own sections. The section keeps as many whole generations as fit the
  // page, then narrower branches are allowed to run deeper to fill the remaining space.
  const planOne = (head: TreeNode): string[] => {
    // Height: how many generations below the head fit on the page
    const levelHeight: number[] = []
    const measureLevels = (n: TreeNode, depth: number) =>
      n.children.forEach((c) => {
        levelHeight[depth] = Math.max(levelHeight[depth] || 0, box(c.id).h)
        measureLevels(c, depth + 1)
      })
    measureLevels(head, 1)
    let height = box(head.id).h
    let maxDepth = 0
    for (let depth = 1; depth < levelHeight.length; depth++) {
      const add = 2 * GAP_Y + levelHeight[depth] + STUB_EXTRA_H
      if (depth > 1 && height + add > limit.h) break
      height += add
      maxDepth = depth
    }

    const depthOf = new Map<string, number>()
    const setDepths = (n: TreeNode, depth: number) =>
      n.children.forEach((c) => {
        depthOf.set(c.id, depth)
        setDepths(c, depth + 1)
      })
    setDepths(head, 1)

    let cut = new Set<string>()
    const width = (n: TreeNode): number => {
      const own = box(n.id).w + GAP_X
      if (cut.has(n.id) || n.children.length === 0) return own
      return Math.max(own, n.children.reduce((sum, c) => sum + width(c), 0))
    }
    const cutAtDepth = (n: TreeNode, depth: number, limitDepth: number, into: Set<string>) =>
      n.children.forEach((c) => {
        if (depth === limitDepth) {
          if (c.children.length) into.add(c.id)
        } else cutAtDepth(c, depth + 1, limitDepth, into)
      })

    // Whole generations: the deepest cut that fits the page width
    for (let depth = maxDepth; depth >= 1; depth--) {
      cut = new Set()
      cutAtDepth(head, 1, depth, cut)
      if (width(head) <= limit.w) break
    }

    // Let narrow branches continue deeper while the section still fits
    const byIdHere = new Map<string, TreeNode>()
    const collectHere = (n: TreeNode) =>
      n.children.forEach((c) => {
        byIdHere.set(c.id, c)
        collectHere(c)
      })
    collectHere(head)
    for (let changed = true; changed; ) {
      changed = false
      for (const id of Array.from(cut)) {
        const node = byIdHere.get(id)!
        if (depthOf.get(id)! >= maxDepth) continue
        const before = cut
        cut = new Set(cut)
        cut.delete(id)
        node.children.forEach((c) => c.children.length && cut.add(c.id))
        if (width(head) <= limit.w) changed = true
        else cut = before
      }
    }

    // Cut people in reading order (eldest branch first)
    const inOrder = (n: TreeNode): string[] =>
      n.children.flatMap((c) => (cut.has(c.id) ? [c.id] : inOrder(c)))
    return inOrder(head)
  }

  // Sections in reading order: the top first, then the branches it points to, and so on
  const sections: SectionPlan[] = [{ head: null, cutIds: planOne(top) }]
  const byId = new Map<string, TreeNode>()
  const collect = (n: TreeNode) => {
    byId.set(n.id, n)
    n.children.forEach(collect)
  }
  roots.forEach(collect)
  for (let i = 0; i < sections.length; i++) {
    for (const id of sections[i].cutIds) {
      const head = byId.get(id)!
      const headParent = parents.get(id)
      sections.push({
        head,
        headParent: headParent && headParent.id !== '__title' ? headParent : undefined,
        cutIds: planOne(head),
      })
    }
  }
  return sections
}

/** The tree shown in one section: people whose family continues elsewhere become "صفحہ N" stubs. */
export function sectionRoots(
  section: SectionPlan,
  topRoots: TreeNode[],
  pageOfSection: (headId: string) => number | string
): TreeNode[] {
  const cut = new Set(section.cutIds)
  const copy = (n: TreeNode): TreeNode =>
    cut.has(n.id)
      ? { ...n, children: [], continuationPage: pageOfSection(n.id) }
      : { ...n, children: n.children.map(copy) }
  return (section.head ? section.head.children : topRoots).map(copy)
}

export interface PackedSection {
  index: number
  scale: number
  size: Size
}

/**
 * Places measured sections on pages in order, several to a page when they fit,
 * at `scale` (smaller only for a section too big for a page on its own).
 */
export function packSections(sizes: Size[], scale: number, page: Size, separator = 16): PackedSection[][] {
  const pages: PackedSection[][] = []
  let current: PackedSection[] = []
  let used = 0
  sizes.forEach((size, index) => {
    const s = Math.min(scale, page.w / size.w, page.h / size.h)
    const h = size.h * s
    const needed = current.length ? h + separator : h
    if (current.length && used + needed > page.h) {
      pages.push(current)
      current = []
      used = 0
    }
    used += current.length ? h + separator : h
    current.push({ index, scale: s, size })
  })
  if (current.length) pages.push(current)
  return pages
}
