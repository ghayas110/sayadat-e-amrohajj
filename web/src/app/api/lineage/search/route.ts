import { NextRequest, NextResponse } from 'next/server'
import { searchLineage } from '@/lib/lineageIndex'
import { clientIp, tooMany } from '@/lib/rateLimit'

// Name search for the public form: men in the ledger whose name matches what was typed.
// Returns names and lineage only, never contact details. Throttled per address; the form also
// debounces and caches on its side, so normal typing stays far below the limit.
export async function GET(req: NextRequest) {
  if (tooMany(clientIp(req))) {
    return NextResponse.json(
      { error: 'Too many searches, please wait a moment', options: [] },
      { status: 429, headers: { 'Retry-After': '30' } }
    )
  }
  const p = req.nextUrl.searchParams
  const q = (p.get('q') || '').trim()
  if (q.length < 2) return NextResponse.json({ options: [] })
  try {
    const options = await searchLineage(q.slice(0, 80), {
      mohalla: p.get('mohalla') || undefined,
      khandan: p.get('khandan') || undefined,
    })
    return NextResponse.json({ options }, { headers: { 'Cache-Control': 'private, max-age=60' } })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Search failed', options: [] }, { status: 500 })
  }
}
