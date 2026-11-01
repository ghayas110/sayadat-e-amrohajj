import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity.client'
import fs from 'fs/promises'
import path from 'path'

export async function GET(req: Request) {
  try {
    let records: any[] = []
    let source = 'sanity'

    try {
      records = await sanityClient.fetch(
        // Families entered from the Kausar-ul-Ansab book are reference data for the admin tree,
        // not community submissions, so they are left out of this public list
        // This list is public: contact details and payment slips are never sent to the browser
        `*[_type == "lineageRecord" && source != "kausar-ul-ansab-1999"] | order(_createdAt desc) {
          ...,
          "contactDetails": null,
          "advanceBooking": advanceBooking{ bookingType },
          "profileImageUrl": profileImage.asset->url,
          sons[]{ ..., "photoUrl": photo.asset->url }
        }`
      )
    } catch (sanityErr) {
      console.warn('Could not fetch from Sanity API, reading local cache:', sanityErr)
      source = 'local'
    }

    if (source === 'local') {
      try {
        const backupFile = path.join(process.cwd(), 'data', 'submissions.json')
        const content = await fs.readFile(backupFile, 'utf8')
        records = JSON.parse(content)
        source = 'local'
      } catch {
        records = []
      }
    }

    return NextResponse.json(
      { records, source, count: records.length },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    )
  } catch (error: any) {
    return NextResponse.json({ error: error.message, records: [] }, { status: 500 })
  }
}
