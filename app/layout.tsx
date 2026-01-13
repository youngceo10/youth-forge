import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://youthforge.org'),
  title: {
    default: 'Youth Forge - Challenging the Status Quo',
    template: '%s | Youth Forge'
  },
  description: 'A global market research organization focused on uncovering the hidden challenges faced by young entrepreneurs under the age of 25, advocating for youth innovation and inclusion regardless of age.',
  keywords: [
    'youth entrepreneurship',
    'market research',
    'teen founders',
    'young entrepreneurs',
    'innovation',
    'mentorship',
    'startup funding',
    'policy advocacy',
    'entrepreneurship barriers',
    'youth-led organization'
  ],
  authors: [{ name: 'Youth Forge' }],
  creator: 'Youth Forge',
  publisher: 'Youth Forge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://youthforge.org',
    siteName: 'Youth Forge',
    title: 'Youth Forge - Challenging the Status Quo',
    description: 'Breaking down barriers for young entrepreneurs under 25 through research-driven advocacy and policy change.',
    images: [
      {
        url: '/logo-transparent.png',
        width: 1200,
        height: 630,
        alt: 'Youth Forge Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youth Forge - Challenging the Status Quo',
    description: 'Breaking down barriers for young entrepreneurs under 25 through research-driven advocacy and policy change.',
    images: ['/logo-transparent.png'],
    creator: '@youthforge',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased bg-white text-yf-blue-300`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
