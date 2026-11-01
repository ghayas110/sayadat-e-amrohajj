import { NextRequest, NextResponse } from 'next/server'
import { getLineagePerson } from '@/lib/lineageIndex'
import { clientIp, tooMany } from '@/lib/rateLimit'

// One person's family details, to pre-fill the form after he is picked from the name search.
export async function GET(req: NextRequest) {
  if (tooMany(clientIp(req))) {
    return NextResponse.json(
      { error: 'Too many requests, please wait a moment' },
      { status: 429, headers: { 'Retry-After': '30' } }
    )
  }
  const id = req.nextUrl.searchParams.get('id') || ''
  if (!/^(r:[\w.-]+|s:[\w.-]+:\d+)$/.test(id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  }
  try {
    const person = await getLineagePerson(id)
    if (!person) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json({ person }, { headers: { 'Cache-Control': 'private, max-age=60' } })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Lookup failed' }, { status: 500 })
  }
}
