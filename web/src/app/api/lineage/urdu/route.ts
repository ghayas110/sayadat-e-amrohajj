import { NextRequest, NextResponse } from 'next/server'
import { suggestUrdu } from '@/lib/lineageIndex'
import { clientIp, tooMany } from '@/lib/rateLimit'

// Urdu spelling suggestions for a name typed in English, from the words the ledger itself uses.
export async function GET(req: NextRequest) {
  if (tooMany(clientIp(req))) {
    return NextResponse.json(
      { error: 'Too many requests, please wait a moment', words: [] },
      { status: 429, headers: { 'Retry-After': '30' } }
    )
  }
  const text = (req.nextUrl.searchParams.get('text') || '').trim().slice(0, 120)
  if (!text) return NextResponse.json({ words: [] })
  try {
    const words = await suggestUrdu(text)
    return NextResponse.json({ words }, { headers: { 'Cache-Control': 'private, max-age=300' } })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Lookup failed', words: [] }, { status: 500 })
  }
}
