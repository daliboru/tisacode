import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const sfPro = localFont({
  src: '../../public/fonts/SF_PRO.otf',
  variable: '--font-sf-pro',
})

const inter = localFont({
  src: '../../public/fonts/Inter.ttf',
  variable: '--font-inter',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Tisacode - product engineering for tech businesses',
  description:
    'We build new software products for tech businesses and rewire the ones already running. MVPs, audits, legacy modernisation, team enablement.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sfPro.variable}  antialiased`}>{children}</body>
      <Analytics />
    </html>
  )
}
