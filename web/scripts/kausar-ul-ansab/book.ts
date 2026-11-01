// Shared format for the khandans transcribed from Kausar-ul-Ansab (1999).
//
// Each khandan file writes its trees nested, in the same shape the book draws them: a person and
// their children, eldest first (right to left in the book). Males are written without "سید"; the
// importer adds it, as the book prints "سید" under every male name. Daughters keep the book's
// "زوجہ سید ..." line as `husband`, with the husband's mohalla when the book gives one.
//
//   m('حسن علی', [m('امین الدین احمد', 'عرف دولہ', [...]), f('شفیع النساء', 'سید سرور حسین', 'چھیوڑہ')])
//
// Readings that could not be confirmed from the photos are marked with "VERIFY".

export interface BookPerson {
  name: string
  gender: 'm' | 'f'
  notes?: string
  husband?: string
  husbandMohalla?: string
  // Book page this person's family is drawn on, when it differs from their father's
  page?: number
  children?: BookPerson[]
}

export interface BookTree {
  // Page the tree starts on
  page: number
  // Father of the first person drawn, when the book names him
  father?: string
  root: BookPerson
}

export interface BookKhandan {
  serial: number
  // Mohalla value stored on the records (the khandan's main mohalla in the index)
  mohalla: string
  trees: BookTree[]
}

// Flat form stored in Sanity: one record per man with children
export interface BookChild {
  name: string
  gender: 'm' | 'f'
  husband?: string
  husbandMohalla?: string
  notes?: string
}

export interface BookFamily {
  key: string
  head: string
  // Key of the father's family; omitted for the first person of a tree
  parent?: string
  // Father's name for the first person of a tree
  father?: string
  page: number
  children: BookChild[]
}

/** A son. `m(name)`, `m(name, children)`, `m(name, notes)` or `m(name, notes, children)`. */
export function m(name: string, a?: string | BookPerson[], b?: BookPerson[]): BookPerson {
  const notes = typeof a === 'string' ? a : undefined
  const children = Array.isArray(a) ? a : b
  return { name, gender: 'm', ...(notes ? { notes } : {}), ...(children?.length ? { children } : {}) }
}

/** A daughter, with the husband's name and mohalla as the book prints them under her name. */
export function f(name: string, husband?: string, husbandMohalla?: string, notes?: string): BookPerson {
  return {
    name,
    gender: 'f',
    ...(husband ? { husband } : {}),
    ...(husbandMohalla ? { husbandMohalla } : {}),
    ...(notes ? { notes } : {}),
  }
}

/** Marks a family the book continues on another page ("صفحہ ... پر"). */
export const onPage = (page: number, person: BookPerson): BookPerson => ({ ...person, page })

/** Turns the nested trees into one family per man with children, keyed by their place in the tree. */
export function flatten(khandan: BookKhandan): BookFamily[] {
  const families: BookFamily[] = []
  const walk = (person: BookPerson, key: string, page: number, parent?: string, father?: string) => {
    const children = person.children || []
    if (person.gender !== 'm' || !children.length) return
    const ownPage = person.page ?? page
    families.push({
      key,
      head: person.name,
      ...(parent ? { parent } : { father }),
      page: ownPage,
      children: children.map(({ name, gender, husband, husbandMohalla, notes }) => ({
        name,
        gender,
        ...(husband ? { husband } : {}),
        ...(husbandMohalla ? { husbandMohalla } : {}),
        ...(notes ? { notes } : {}),
      })),
    })
    children.forEach((child, i) => walk(child, `${key}-${i}`, ownPage, key))
  }
  khandan.trees.forEach((tree, t) => walk({ ...tree.root, page: tree.root.page ?? tree.page }, `t${t}`, tree.page, undefined, tree.father))
  return families
}
