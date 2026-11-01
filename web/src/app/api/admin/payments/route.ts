import { NextRequest, NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity.client'
import { isAdminRequest } from '@/lib/adminAuth'
import { BOOK_SOURCE } from '@/lib/familyTree'

// Every submission's booking and payment details, for the admin Payments page.
// Admin only: includes phone numbers and deposit slips.
export async function GET(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 })
  }
  try {
    const records = await sanityClient.fetch(
      `*[_type == "lineageRecord" && source != $book] | order(_createdAt desc) {
        _id, name, fatherName, mohalla, customMohalla, _createdAt,
        "phone": contactDetails.phone,
        "submitter": submissionMeta.submitterName,
        "submittedAt": submissionMeta.submittedAt,
        "bookingType": advanceBooking.bookingType,
        "transactionId": advanceBooking.transactionId,
        "status": advanceBooking.paymentStatus,
        "verifiedAt": advanceBooking.verifiedAt,
        "slipUrl": advanceBooking.paymentSlipImage.asset->url,
        "slipFileUrl": advanceBooking.paymentSlipFile.asset->url
      }`,
      { book: BOOK_SOURCE }
    )
    return NextResponse.json({ records }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Could not load payments' }, { status: 500 })
  }
}
