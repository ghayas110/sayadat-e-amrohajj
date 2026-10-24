import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sayadat-e-Amroha Lineage Record | سیادتِ امروحہ شجرۂ نسب',
  description:
    'Official Information Collection Portal for Sayadat-e-Amroha Lineage Record (New Computerized Edition) following Kausar-ul-Ansab (1999).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}
