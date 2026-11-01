// Dropdown options for mohalla and khandan, shared by the public form and the admin page,
// in the order of the book's index (فہرست).

import { MOHALLAS, khandansForMohalla, type Khandan } from './amrohaIndex'
import type { SearchSelectOption } from '@/components/SearchSelect'

// The three photographed pages of the book's index, in web/public/index
export const INDEX_PAGES = [
  { href: '/index/page1.jpeg', label: 'فہرست صفحہ ۱' },
  { href: '/index/page2.jpeg', label: 'فہرست صفحہ ۲' },
  { href: '/index/page3.jpeg', label: 'فہرست صفحہ ۳' },
]

export const MOHALLA_OPTIONS: SearchSelectOption[] = MOHALLAS.map((m) => {
  if (m.value === 'Other') return { value: m.value, label: `${m.ur} / ${m.en}` }
  const families = khandansForMohalla(m.value).map((k) => k.serial)
  return {
    value: m.value,
    label: m.ur,
    hint: `${m.en} · خاندان نمبر ${families.join('، ')}`,
  }
})

// "33۔ اولاد سید محمد ہاشم بن سید علی اکبر", with the book's wording of the mohalla and its page
export const khandanOption = (k: Khandan, extra?: string): SearchSelectOption => ({
  value: String(k.serial),
  label: `${k.serial}۔ ${k.name}`,
  hint: [k.residence, `صفحہ ${k.page}`, extra].filter(Boolean).join(' · '),
})
