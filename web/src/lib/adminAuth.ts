import { createHash, timingSafeEqual } from 'crypto'
import type { NextRequest } from 'next/server'

export const ADMIN_COOKIE = 'admin_session'

// The admin PIN comes from the ADMIN_PIN environment variable. Without it, admin access stays locked.
const adminPin = () => process.env.ADMIN_PIN?.trim() || ''

// Session token derived from the PIN, so changing ADMIN_PIN signs everyone out
export const sessionToken = () =>
  createHash('sha256').update(`sadat-e amroha-admin:${adminPin()}`).digest('hex')

const safeEqual = (a: string, b: string) => {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB)
}

export const isPinConfigured = () => adminPin().length > 0

export const checkPin = (pin: string) => isPinConfigured() && safeEqual(pin.trim(), adminPin())

export const isAdminRequest = (req: NextRequest) => {
  const cookie = req.cookies.get(ADMIN_COOKIE)?.value
  return isPinConfigured() && Boolean(cookie) && safeEqual(cookie!, sessionToken())
}

// Simple per-IP lockout so the 4-digit PIN can't be brute-forced quickly
const MAX_ATTEMPTS = 5
const LOCK_MS = 10 * 60 * 1000
const attempts = new Map<string, { count: number; lockedUntil: number }>()

export function loginLockedFor(ip: string) {
  const entry = attempts.get(ip)
  return entry && entry.lockedUntil > Date.now() ? entry.lockedUntil - Date.now() : 0
}

export function recordFailedLogin(ip: string) {
  const entry = attempts.get(ip) || { count: 0, lockedUntil: 0 }
  entry.count += 1
  if (entry.count >= MAX_ATTEMPTS) {
    entry.count = 0
    entry.lockedUntil = Date.now() + LOCK_MS
  }
  attempts.set(ip, entry)
}

export const clearFailedLogins = (ip: string) => attempts.delete(ip)

export const clientIp = (req: NextRequest) =>
  req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'local'
