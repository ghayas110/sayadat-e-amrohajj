import { NextRequest, NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity.client'
import { isAdminRequest } from '@/lib/adminAuth'
import { khandansForMohalla } from '@/data/amrohaIndex'
import { bookRecords } from '@/lib/bookRecords'
import { BOOK_SOURCE } from '@/lib/familyTree'

// All lineage records in one mohalla, with the fields the family tree needs. Includes the records
// of every khandan the book's index lists under the mohalla, even when stored under another one.
export async function GET(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 })
  }

  const all = req.nextUrl.searchParams.get('all') === '1'
  const mohalla = req.nextUrl.searchParams.get('mohalla') || ''
  if (!mohalla && !all) {
    return NextResponse.json({ error: 'mohalla is required' }, { status: 400 })
  }

  const khandans = khandansForMohalla(mohalla).map((k) => String(k.serial))
  try {
    // The book's families come with the site; Sanity holds the submissions
    const book = bookRecords.filter((r) => all || r.mohalla === mohalla || khandans.includes(r.khandan || ''))
    const submitted = await sanityClient.fetch(
      `*[_type == "lineageRecord" && source != $book && ($all || mohalla == $mohalla || khandan in $khandans)] | order(_createdAt asc) {
        _id, name, fatherName, source, mohalla, customMohalla, khandan, customKhandan,
        referencePageNumber, parentRecord, fatherInRecord, updatesRecord, wifeDetails,
        "profileImageUrl": profileImage.asset->url,
        sons[]{ name, occupationOrNotes, isDeceased, birthOrder, "photoUrl": photo.asset->url },
        daughters[]{ name, maritalStatus, husbandName, husbandFatherName, husbandMohalla, notes, birthOrder }
      }`,
      { all, mohalla, khandans, book: BOOK_SOURCE }
    )
    return NextResponse.json({ records: [...book, ...submitted] }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Could not load records' }, { status: 500 })
  }
}
