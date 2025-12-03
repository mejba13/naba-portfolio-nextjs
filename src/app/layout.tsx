import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rabiulnaba.com'),
  title: 'Rabiul Islam Naba | Head of Supply Chain & Procurement Specialist',
  description:
    'Rabiul Islam Naba is an accomplished supply chain and procurement leader with extensive experience across Bangladesh\'s manufacturing, energy, and technology sectors.',
  keywords: [
    'Supply Chain',
    'Procurement',
    'Sourcing',
    'Vendor Management',
    'Operations',
    'Bangladesh',
    'BUET',
    'Industrial Engineering',
  ],
  authors: [{ name: 'Rabiul Islam Naba' }],
  creator: 'Rabiul Islam Naba',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Rabiul Islam Naba Portfolio',
    title: 'Rabiul Islam Naba | Head of Supply Chain & Procurement Specialist',
    description:
      'Strategic supply chain leader driving operational excellence across manufacturing, energy, and technology sectors in Bangladesh.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rabiul Islam Naba - Supply Chain Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabiul Islam Naba | Supply Chain & Procurement Specialist',
    description:
      'Strategic supply chain leader driving operational excellence across manufacturing, energy, and technology sectors.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
