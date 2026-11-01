import { NextRequest, NextResponse } from 'next/server'
import { getSanityWriteClient } from '@/lib/sanity.client'
import { isAdminRequest } from '@/lib/adminAuth'
import { isBookRecordId } from '@/lib/familyTree'
import { PAYMENT_STATUS } from '@/lib/booking'

// Sets a submission's payment status after the admin has checked the bank account
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 })
  }
  const { id } = await params
  if (!/^[\w.-]+$/.test(id) || isBookRecordId(id)) {
    return NextResponse.json({ error: 'Invalid record' }, { status: 400 })
  }
  const body = await req.json().catch(() => null)
  const status = body?.status
  if (!(status in PAYMENT_STATUS)) {
    return NextResponse.json({ error: 'Unknown payment status' }, { status: 400 })
  }
  try {
    const client = getSanityWriteClient()
    const doc = await client.getDocument(id)
    if (!doc || doc._type !== 'lineageRecord') {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 })
    }
    const paid = status === 'verified' || status === 'dispatched'
    let patch = client.patch(id).set({ 'advanceBooking.paymentStatus': status })
    // Keep the first time it was marked paid; clear it if marked unpaid again
    if (paid && !doc.advanceBooking?.verifiedAt) {
      patch = patch.set({ 'advanceBooking.verifiedAt': new Date().toISOString() })
    } else if (!paid) {
      patch = patch.unset(['advanceBooking.verifiedAt'])
    }
    await patch.commit()
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Could not save' }, { status: 500 })
  }
}
