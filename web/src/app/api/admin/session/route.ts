import { NextRequest, NextResponse } from 'next/server'
import {
  ADMIN_COOKIE,
  checkPin,
  clearFailedLogins,
  clientIp,
  isAdminRequest,
  isPinConfigured,
  loginLockedFor,
  recordFailedLogin,
  sessionToken,
} from '@/lib/adminAuth'

// Is this browser signed in?
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { authenticated: isAdminRequest(req), configured: isPinConfigured() },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}

// Sign in with the PIN
export async function POST(req: NextRequest) {
  if (!isPinConfigured()) {
    return NextResponse.json(
      { error: 'Admin PIN is not configured. Set ADMIN_PIN on the server.' },
      { status: 503 }
    )
  }

  const ip = clientIp(req)
  const lockedMs = loginLockedFor(ip)
  if (lockedMs > 0) {
    return NextResponse.json(
      { error: `Too many wrong attempts. Try again in ${Math.ceil(lockedMs / 60000)} minutes.` },
      { status: 429 }
    )
  }

  const { pin } = await req.json().catch(() => ({ pin: '' }))
  if (!checkPin(String(pin || ''))) {
    recordFailedLogin(ip)
    return NextResponse.json({ error: 'Incorrect PIN / غلط پن' }, { status: 401 })
  }

  clearFailedLogins(ip)
  const res = NextResponse.json({ authenticated: true })
  res.cookies.set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12,
  })
  return res
}

// Sign out
export async function DELETE() {
  const res = NextResponse.json({ authenticated: false })
  res.cookies.delete(ADMIN_COOKIE)
  return res
}
