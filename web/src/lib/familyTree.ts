// Builds a book-style family tree (نسب نامہ) from submitted lineage records.
//
// Each record is one family: a head, his wife, sons and daughters. Records are joined into one
// tree when a record's head is a son in another record — either through the explicit
// `parentRecord` link set in Sanity Studio, or when the head's father's name matches a son's name.

export interface TreeRecord {
  _id: string
  name: string
  fatherName?: string
  source?: string
  mohalla?: string
  customMohalla?: string
  khandan?: string
  customKhandan?: string
  referencePageNumber?: string
  profileImageUrl?: string
  parentRecord?: { _ref: string }
  // The father has no record, only a line among the sons of this record
  fatherInRecord?: { record?: { _ref: string }; sonName?: string }
  // A submission that corrects and extends an existing record (usually one from the book)
  updatesRecord?: { _ref: string }
  wifeDetails?: { name?: string; fatherName?: string; mohalla?: string }
  sons?: {
    name: string
    occupationOrNotes?: string
    isDeceased?: boolean
    photoUrl?: string
    birthOrder?: number
  }[]
  daughters?: {
    name: string
    maritalStatus?: string
    husbandName?: string
    husbandFatherName?: string
    husbandMohalla?: string
    notes?: string
    birthOrder?: number
  }[]
}

export interface TreeNode {
  id: string
  name: string
  gender: 'male' | 'female'
  // Spouse line shown under the name, as in the book: "زوجہ سید ..."
  spouse?: string
  spouseMohalla?: string
  notes?: string
  isDeceased?: boolean
  photoUrl?: string
  // Set when this person has submitted their own record
  recordId?: string
  referencePage?: string
  // A father who has no record of his own, added so that brothers share one parent node
  isPlaceholder?: boolean
  // Set on printed pages when this person's family continues on another page
  continuationPage?: number | string
  children: TreeNode[]
}

// Records typed in from the book are joined only through their explicit links
export const BOOK_SOURCE = 'kausar-ul-ansab-1999'
// Book records ship with the site as JSON (src/data/kausar-ul-ansab.json), not in Sanity
export const isBookRecordId = (id: string | undefined) => Boolean(id?.startsWith('kaa1999-'))
// Father stored for a book family whose father the book doesn't name
const UNKNOWN_FATHER = 'نامعلوم'

const HONORIFICS = /^(syed|sayed|sayyid|syeda|sayeda|mr|s\/o|سید|سیدہ|سیّد|سیّدہ)\s+/i

// Loose comparison key for names typed by different people
export function nameKey(name: string | undefined) {
  let key = (name || '')
    .normalize('NFC')
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/[ـً-ٰٟ]/g, '')
    .replace(/[.,'"()\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
  while (HONORIFICS.test(key)) key = key.replace(HONORIFICS, '')
  return key
}

const wifeLine = (wife: TreeRecord['wifeDetails']) =>
  wife?.name
    ? [wife.name, wife.fatherName && `(${wife.fatherName})`].filter(Boolean).join(' ')
    : undefined

function headNode(record: TreeRecord): TreeNode {
  const sons = (record.sons || []).map((son, i) => ({
    order: son.birthOrder,
    node: {
      id: `${record._id}:son:${i}`,
      name: son.name,
      gender: 'male',
      notes: son.occupationOrNotes,
      isDeceased: son.isDeceased,
      photoUrl: son.photoUrl,
      children: [],
    } as TreeNode,
  }))
  const daughters = (record.daughters || []).map((d, i) => ({
    order: d.birthOrder,
    node: {
      id: `${record._id}:daughter:${i}`,
      name: d.name,
      gender: 'female',
      spouse:
        d.maritalStatus !== 'unmarried' && d.husbandName
          ? [d.husbandName, d.husbandFatherName && `بن ${d.husbandFatherName}`]
              .filter(Boolean)
              .join(' ')
          : undefined,
      spouseMohalla: d.maritalStatus !== 'unmarried' ? d.husbandMohalla : undefined,
      notes: d.notes,
      children: [],
    } as TreeNode,
  }))
  // Sons and daughters together in birth order when known (as the book draws them),
  // otherwise sons first, then daughters, in the order they were entered
  const children = [...sons, ...daughters]
    .map((c, i) => ({ ...c, sortKey: c.order ?? 1000 + i }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map((c) => c.node)

  return {
    id: record._id,
    name: record.name,
    gender: 'male',
    spouse: wifeLine(record.wifeDetails),
    spouseMohalla: record.wifeDetails?.mohalla,
    photoUrl: record.profileImageUrl,
    recordId: record._id,
    referencePage: record.referencePageNumber,
    children,
  }
}

/**
 * Returns the top-level branches of the tree. Each record becomes a node; a record is placed
 * under its father's record when one is found, otherwise under a placeholder father node
 * (shared by brothers who name the same father).
 */
/**
 * A record submitted as a correction of another (`updatesRecord`) stands in for it: the old record
 * is dropped, and every link that pointed at it now points at the correction, which also inherits
 * the old record's place in the tree when it has none of its own.
 */
function applyCorrections(input: TreeRecord[]): TreeRecord[] {
  const byId = new Map(input.map((r) => [r._id, r]))
  const replacedBy = new Map<string, string>()
  for (const r of input) {
    const target = r.updatesRecord?._ref
    // The latest correction wins (records arrive oldest first)
    if (target && target !== r._id && byId.has(target)) replacedBy.set(target, r._id)
  }
  if (!replacedBy.size) return input
  const alias = (id: string | undefined) => (id ? replacedBy.get(id) ?? id : id)
  return input
    .filter((r) => !replacedBy.has(r._id))
    .map((r) => {
      const replaced = [...replacedBy].find(([, by]) => by === r._id)?.[0]
      const old = replaced ? byId.get(replaced) : undefined
      const parent = r.parentRecord?._ref ?? (r.fatherInRecord ? undefined : old?.parentRecord?._ref)
      const fatherIn = r.fatherInRecord ?? (r.parentRecord ? undefined : old?.fatherInRecord)
      return {
        ...r,
        parentRecord: parent ? { _ref: alias(parent)! } : undefined,
        fatherInRecord: fatherIn?.record
          ? { ...fatherIn, record: { _ref: alias(fatherIn.record._ref)! } }
          : fatherIn,
      }
    })
}

export function buildFamilyTree(input: TreeRecord[]): TreeNode[] {
  const records = applyCorrections(input)
  const nodes = new Map(records.map((r) => [r._id, headNode(r)]))
  const parentOf = new Map<string, string>()

  const isAncestor = (candidate: string, of: string) => {
    for (let cur: string | undefined = candidate; cur; cur = parentOf.get(cur)) {
      if (cur === of) return true
    }
    return false
  }

  const hasSon = (record: TreeRecord, key: string) =>
    (record.sons || []).some((s) => nameKey(s.name) === key)

  // 1. Find each record's father record:
  //    a) the explicit link set in Sanity Studio
  //    b) a record whose head is the father (preferring one that lists this person as a son)
  //    c) otherwise, the one record that lists the father as a son — this family then hangs
  //       under that son (a generation that hasn't submitted its own record)
  const findParent = (record: TreeRecord) => {
    const linked = record.parentRecord?._ref
    if (linked && linked !== record._id && nodes.has(linked)) {
      return { parentId: linked, viaSon: false }
    }
    // Father picked on the form from among a record's sons
    const fatherRecord = record.fatherInRecord?.record?._ref
    if (fatherRecord && fatherRecord !== record._id && nodes.has(fatherRecord)) {
      return { parentId: fatherRecord, viaSon: true }
    }
    if (record.source === BOOK_SOURCE) return undefined
    const father = nameKey(record.fatherName)
    if (!father || father === UNKNOWN_FATHER) return undefined
    const others = records.filter((o) => o._id !== record._id)
    const heads = others.filter((o) => nameKey(o.name) === father)
    const head =
      heads.find((o) => hasSon(o, nameKey(record.name))) ?? (heads.length === 1 ? heads[0] : undefined)
    if (head) return { parentId: head._id, viaSon: false }
    const grandfathers = others.filter((o) => hasSon(o, father))
    return grandfathers.length === 1 ? { parentId: grandfathers[0]._id, viaSon: true } : undefined
  }

  const viaSon = new Set<string>()
  for (const record of records) {
    const link = findParent(record)
    // Skip links that would make a loop (e.g. two records naming each other)
    if (link && !isAncestor(link.parentId, record._id)) {
      parentOf.set(record._id, link.parentId)
      if (link.viaSon) viaSon.add(record._id)
    }
  }

  // 2. Put each record's head where the matching son sits in the father's record
  for (const record of records) {
    const parentId = parentOf.get(record._id)
    if (!parentId) continue
    const parent = nodes.get(parentId)!
    const child = nodes.get(record._id)!
    if (viaSon.has(record._id)) {
      const fatherKey = nameKey(record.fatherInRecord?.sonName || record.fatherName)
      const father = parent.children.find((c) => c.gender === 'male' && nameKey(c.name) === fatherKey)
      ;(father ?? parent).children.push(child)
      continue
    }
    const slot = parent.children.findIndex(
      (c) => c.gender === 'male' && !c.recordId && nameKey(c.name) === nameKey(record.name)
    )
    if (slot >= 0) {
      const son = parent.children[slot]
      child.notes ??= son.notes
      child.isDeceased ??= son.isDeceased
      child.photoUrl ??= son.photoUrl
      parent.children[slot] = child
    } else {
      // Linked in Studio but not listed among the father's sons: add as an extra son
      const sonsEnd = parent.children.filter((c) => c.gender === 'male').length
      parent.children.splice(sonsEnd, 0, child)
    }
  }

  // 3. Records without a father record: group brothers under one placeholder father
  const roots: TreeNode[] = []
  const placeholders = new Map<string, TreeNode>()
  for (const record of records) {
    if (parentOf.has(record._id)) continue
    const node = nodes.get(record._id)!
    const father = nameKey(record.fatherName)
    if (!father || father === UNKNOWN_FATHER) {
      roots.push(node)
      continue
    }
    let placeholder = placeholders.get(father)
    if (!placeholder) {
      placeholder = {
        id: `father:${father}`,
        name: record.fatherName!.trim(),
        gender: 'male',
        isPlaceholder: true,
        children: [],
      }
      placeholders.set(father, placeholder)
      roots.push(placeholder)
    }
    placeholder.children.push(node)
  }

  return roots
}

// Map of node id → parent node, used to show a person's chain of ancestors ("X بن Y بن Z")
export function indexParents(roots: TreeNode[]) {
  const parents = new Map<string, TreeNode>()
  const walk = (node: TreeNode) => {
    for (const child of node.children) {
      parents.set(child.id, node)
      walk(child)
    }
  }
  roots.forEach(walk)
  return parents
}

export function countPeople(roots: TreeNode[]): number {
  return roots.reduce((sum, node) => sum + 1 + countPeople(node.children), 0)
}
