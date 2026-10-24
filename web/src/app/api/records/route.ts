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
        `*[_type == "lineageRecord"] | order(_createdAt desc)`
      )
    } catch (sanityErr) {
      console.warn('Could not fetch from Sanity API, reading local cache:', sanityErr)
      source = 'local'
    }

    if (!records || records.length === 0) {
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
