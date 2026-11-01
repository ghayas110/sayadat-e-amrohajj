// Checks that buildFamilyTree honours the two links the public form writes:
// fatherInRecord (father is a son listed in a record) and updatesRecord (a correction of a record).
// Run: npx tsx scripts/check-tree-links.ts

import { buildFamilyTree, type TreeNode, type TreeRecord } from '../src/lib/familyTree'

const BOOK = 'kausar-ul-ansab-1999'
let failed = 0
const check = (label: string, ok: boolean) => {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}`)
  if (!ok) failed++
}
const find = (nodes: TreeNode[], pred: (n: TreeNode) => boolean): TreeNode | undefined => {
  for (const n of nodes) {
    if (pred(n)) return n
    const hit = find(n.children, pred)
    if (hit) return hit
  }
}

// Book: grandfather G (book record) lists sons A and B. A has his own book record listing son C.
const book: TreeRecord[] = [
  { _id: 'G', name: 'سید غلام علی', fatherName: 'سید فضل علی', source: BOOK, sons: [{ name: 'سید احمد' }, { name: 'سید باقر' }] },
  { _id: 'A', name: 'سید احمد', fatherName: 'سید غلام علی', source: BOOK, parentRecord: { _ref: 'G' }, sons: [{ name: 'سید کاظم' }] },
]

// 1. A form record whose father B is only a son listed in G (no record of his own)
{
  const tree = buildFamilyTree([
    ...book,
    {
      _id: 'F1', name: 'سید زید', fatherName: 'سید باقر', source: 'form',
      fatherInRecord: { record: { _ref: 'G' }, sonName: 'سید باقر' },
    },
  ])
  const b = find(tree, (n) => n.name === 'سید باقر')
  check('fatherInRecord: new record hangs under the listed son باقر', Boolean(b?.children.some((c) => c.id === 'F1')))
  check('fatherInRecord: no placeholder is invented for باقر', !find(tree, (n) => Boolean(n.isPlaceholder) && n.name === 'سید باقر'))
}

// 2. A form record picked from a son slot (کاظم in A) — becomes that son, not an extra one
{
  const tree = buildFamilyTree([
    ...book,
    { _id: 'F2', name: 'سید کاظم', fatherName: 'سید احمد', source: 'form', parentRecord: { _ref: 'A' }, sons: [{ name: 'سید نیا' }] },
  ])
  const a = find(tree, (n) => n.id === 'A')!
  const kazims = a.children.filter((c) => c.name === 'سید کاظم')
  check('son pick: the record fills the son slot (one کاظم, not two)', kazims.length === 1 && kazims[0].id === 'F2')
  check('son pick: his new child shows under him', kazims[0]?.children.some((c) => c.name === 'سید نیا'))
}

// 3. A correction of book record A — replaces it, keeps its place and adopts its children
{
  const tree = buildFamilyTree([
    ...book,
    { _id: 'C1', name: 'سید کاظم', fatherName: 'سید احمد', source: BOOK, parentRecord: { _ref: 'A' }, sons: [{ name: 'سید عون' }] },
    {
      _id: 'F3', name: 'سید احمد', fatherName: 'سید غلام علی', source: 'form', updatesRecord: { _ref: 'A' },
      sons: [{ name: 'سید کاظم' }, { name: 'سید نیا بیٹا' }],
    },
  ])
  check('correction: the book record A is gone from the tree', !find(tree, (n) => n.id === 'A'))
  const g = find(tree, (n) => n.id === 'G')!
  const f3 = g.children.find((c) => c.id === 'F3')
  check('correction: it sits where A sat, under G', Boolean(f3))
  check('correction: A\'s grandchild record (کاظم) now hangs under the correction', Boolean(f3?.children.some((c) => c.id === 'C1')))
  check('correction: the newly added son shows', Boolean(f3?.children.some((c) => c.name === 'سید نیا بیٹا')))
  check('correction: one احمد under G, not two', g.children.filter((c) => c.name === 'سید احمد').length === 1)
}

// 4. Nothing changes for records that use neither link
{
  const plain = buildFamilyTree(book)
  const g = find(plain, (n) => n.id === 'G')
  check('no new links: tree unchanged (one root, G under its father, A under G)', plain.length === 1 && Boolean(g?.children.some((c) => c.id === 'A')))
}

console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed')
process.exit(failed ? 1 : 0)
