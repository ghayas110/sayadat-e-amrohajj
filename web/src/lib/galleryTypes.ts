// One photo in the admin gallery: a family head's own photo or one of his sons'
export interface GalleryPhoto {
  id: string
  url: string
  name: string
  // "بن father" under the name
  lineage?: string
  isDeceased?: boolean
  recordId: string
  // Mohalla value from the index, "other:<name>" for one typed in, or 'none' when none was given
  mohalla: string
  mohallaName: string
  khandan?: string
}
