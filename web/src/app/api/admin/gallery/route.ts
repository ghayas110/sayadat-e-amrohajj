import { NextRequest, NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity.client'
import { isAdminRequest } from '@/lib/adminAuth'
import { BOOK_SOURCE } from '@/lib/familyTree'
import { MOHALLAS, findKhandan } from '@/data/amrohaIndex'
import type { GalleryPhoto } from '@/lib/galleryTypes'

// Every photo families uploaded with their submission — the head of the family's own and his
// sons' — for the admin gallery, which groups them by mohalla for viewing and printing.
// Admin only: these are photos of private people.

export async function GET(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 })
  }
  try {
    const records: {
      _id: string
      name?: string
      fatherName?: string
      mohalla?: string
      customMohalla?: string
      khandan?: string
      photo?: string
      sons?: { name?: string; isDeceased?: boolean; photo?: string }[]
    }[] = await sanityClient.fetch(
      `*[_type == "lineageRecord" && source != $book && (defined(profileImage.asset) || count(sons[defined(photo.asset)]) > 0)]
        | order(_createdAt asc) {
          _id, name, fatherName, mohalla, customMohalla, khandan,
          "photo": profileImage.asset->url,
          "sons": sons[]{ name, isDeceased, "photo": photo.asset->url }
        }`,
      { book: BOOK_SOURCE }
    )

    const photos: GalleryPhoto[] = records.flatMap((r) => {
      const known = MOHALLAS.find((m) => m.value === r.mohalla && m.value !== 'Other')
      const place = {
        recordId: r._id,
        mohalla: known ? known.value : r.mohalla === 'Other' && r.customMohalla ? `other:${r.customMohalla}` : 'none',
        mohallaName: known ? known.ur : r.mohalla === 'Other' && r.customMohalla ? r.customMohalla : 'محلہ درج نہیں',
        khandan: findKhandan(r.khandan) ? `خاندان ${r.khandan}` : undefined,
      }
      const own: GalleryPhoto[] = r.photo
        ? [{ ...place, id: `${r._id}:self`, url: r.photo, name: r.name || '', lineage: r.fatherName ? `بن ${r.fatherName}` : undefined }]
        : []
      const sons: GalleryPhoto[] = (r.sons || []).flatMap((s, i) =>
        s?.photo
          ? [
              {
                ...place,
                id: `${r._id}:son:${i}`,
                url: s.photo,
                name: s.name || '',
                lineage: r.name ? `بن ${r.name}` : undefined,
                isDeceased: Boolean(s.isDeceased),
              },
            ]
          : []
      )
      return [...own, ...sons]
    })

    return NextResponse.json({ photos }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Could not load photos' }, { status: 500 })
  }
}
