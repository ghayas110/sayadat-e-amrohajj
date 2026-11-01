// Book booking choices and payment states. The stored values keep their first names
// (standard_5000, with_photo_7000) because records already use them; the prices are set here.

export type BookingType = 'standard_5000' | 'with_photo_7000' | 'submission_only'
export type PaymentStatus = 'pending' | 'verified' | 'dispatched' | 'na'

export const BOOKING: Record<BookingType, { price: number; label: string }> = {
  standard_5000: { price: 6000, label: 'Book / کتاب' },
  with_photo_7000: { price: 8000, label: 'Book + colour photo / کتاب مع تصویر' },
  submission_only: { price: 0, label: 'Lineage only (free) / صرف نسب نامہ' },
}

export const PAYMENT_STATUS: Record<PaymentStatus, { label: string; className: string }> = {
  pending: { label: 'Not checked yet / تصدیق باقی', className: 'bg-amber-50 text-amber-800 border-amber-300' },
  verified: { label: 'Paid / ادائیگی ہو گئی', className: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  dispatched: { label: 'Paid · book sent / کتاب روانہ', className: 'bg-sky-50 text-sky-800 border-sky-300' },
  na: { label: 'Free / مفت', className: 'bg-slate-50 text-slate-600 border-slate-300' },
}

export const bookingOf = (value: string | undefined) => BOOKING[value as BookingType] ?? BOOKING.standard_5000

/** Status for records saved before the website set one: free bookings need no payment. */
export const statusOf = (bookingType: string | undefined, status: string | undefined): PaymentStatus =>
  status && status in PAYMENT_STATUS
    ? (status as PaymentStatus)
    : bookingType === 'submission_only'
      ? 'na'
      : 'pending'

export const rupees = (n: number) => `Rs. ${n.toLocaleString('en')}`
