// A small in-memory limiter for the public lookup endpoints. It is per server instance, which is
// enough to stop someone paging through the whole ledger from one address.

const hits = new Map<string, number[]>()

export function clientIp(req: Request) {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
}

/** True when this address has made more than `max` requests in the last `windowMs`. */
export function tooMany(ip: string, max = 90, windowMs = 60_000) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < windowMs)
  recent.push(now)
  hits.set(ip, recent)
  // Forget addresses that have gone quiet so the map doesn't grow without bound
  if (hits.size > 5000) {
    for (const [key, times] of hits) if (now - times[times.length - 1] > windowMs) hits.delete(key)
  }
  return recent.length > max
}
