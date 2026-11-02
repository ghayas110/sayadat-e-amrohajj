import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Noto Nastaliq Urdu (SIL Open Font License), Arabic-script subset only. The unicode-range keeps
// English text on the system font while Urdu text renders in Nastaliq.
const urduFont = localFont({
  src: '../fonts/NotoNastaliqUrdu-Arabic.woff2',
  weight: '400 700',
  variable: '--font-urdu',
  adjustFontFallback: false,
  display: 'swap',
  declarations: [
    {
      prop: 'unicode-range',
      value:
        'U+0600-06FF, U+0750-077F, U+0870-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FEFC',
    },
    // Nastaliq reads smaller than Latin at the same size; enlarge Urdu glyphs to match
    { prop: 'size-adjust', value: '115%' },
  ],
})

export const metadata: Metadata = {
  title: 'Sadat-e Amroha Nasab Nama | ساداتِ امروہہ نسب نامہ',
  description:
    'Official Information Collection Portal for Sadat-e Amroha Nasab Nama (New Computerized Edition) following Kausar-ul-Ansab (1999).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${urduFont.variable} h-full antialiased font-sans`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}
