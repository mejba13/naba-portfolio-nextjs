import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'

// Inter - Industry-standard body font (clean, highly readable)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Space Grotesk - Modern geometric display font (bold, premium, tech-forward)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Dynamic base URL for metadata
const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  return 'https://naba-portfolio-nextjs.vercel.app'
}

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),

  // Favicon and Icons
  icons: {
    icon: [
      { url: '/images/favicon.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/favicon.jpeg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/images/favicon.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: '/images/favicon.jpeg',
  },

  // Manifest for PWA
  manifest: '/manifest.json',

  // Primary Meta Tags
  title: {
    default: 'Rabiul Islam Naba | Head of Supply Chain & Procurement Specialist | Bangladesh',
    template: '%s | Rabiul Islam Naba',
  },
  description: 'Rabiul Islam Naba is an accomplished supply chain and procurement leader with 10+ years of experience across Bangladesh\'s manufacturing, energy, and technology sectors. Currently Head of Supply Chain at Fervent Multiboard Industries Ltd. BUET graduate & CIPS certified professional.',

  // Enhanced Keywords
  keywords: [
    'Rabiul Islam Naba',
    'Supply Chain Manager Bangladesh',
    'Procurement Specialist Dhaka',
    'Head of Supply Chain',
    'Strategic Sourcing Expert',
    'Vendor Management Professional',
    'CIPS Certified',
    'BUET Graduate',
    'Industrial Engineering',
    'Fervent Multiboard Industries',
    'Walton',
    'Rahimafrooz',
    'Supply Chain Leadership',
    'Procurement Operations',
    'Contract Negotiation',
    'Logistics Management Bangladesh',
    'Manufacturing Supply Chain',
    'Construction Supply Chain',
  ],

  // Author Information
  authors: [
    { name: 'Rabiul Islam Naba', url: 'https://rabiulnaba.com' },
  ],
  creator: 'Rabiul Islam Naba',
  publisher: 'Rabiul Islam Naba',

  // Category
  category: 'Professional Portfolio',

  // Canonical URL
  alternates: {
    canonical: 'https://rabiulnaba.com',
    languages: {
      'en-US': 'https://rabiulnaba.com',
    },
  },

  // Open Graph - Images auto-detected from opengraph-image.png in app directory
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    siteName: 'Rabiul Islam Naba - Professional Portfolio',
    title: 'Rabiul Islam Naba | Head of Supply Chain & Procurement Specialist',
    description: 'Strategic supply chain leader with 10+ years experience driving operational excellence across manufacturing, energy, and technology sectors in Bangladesh. BUET graduate & CIPS certified.',
    url: 'https://naba-portfolio-nextjs.vercel.app',
    firstName: 'Rabiul Islam',
    lastName: 'Naba',
    username: 'rabiulnaba',
    gender: 'male',
  },

  // Twitter Card - Images auto-detected from twitter-image.png in app directory
  twitter: {
    card: 'summary_large_image',
    site: '@rabiulnaba',
    creator: '@rabiulnaba',
    title: 'Rabiul Islam Naba | Head of Supply Chain & Procurement Specialist',
    description: 'Strategic supply chain leader with 10+ years experience. Head of Supply Chain at Fervent Multiboard Industries Ltd. BUET graduate & CIPS certified professional based in Dhaka, Bangladesh.',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (placeholders - update with actual values)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Other meta
  applicationName: 'Rabiul Islam Naba Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // App Links
  appLinks: {
    web: {
      url: 'https://rabiulnaba.com',
      should_fallback: true,
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
  userScalable: true,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />

        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="BD-C" />
        <meta name="geo.placename" content="Dhaka, Bangladesh" />
        <meta name="geo.position" content="23.8103;90.4125" />
        <meta name="ICBM" content="23.8103, 90.4125" />

        {/* Language and Content */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />

        {/* Target Audience */}
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Revisit */}
        <meta name="revisit-after" content="7 days" />

        {/* Author */}
        <meta name="author" content="Rabiul Islam Naba" />
        <meta name="designer" content="Engr Mejba Ahmed" />

        {/* Classification */}
        <meta name="classification" content="Business, Professional Portfolio, Supply Chain, Procurement" />
        <meta name="subject" content="Professional Portfolio of Rabiul Islam Naba - Supply Chain & Procurement Expert" />

        {/* Mobile Web App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Naba Portfolio" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
