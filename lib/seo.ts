import type { Metadata } from 'next'

const SITE_URL = process.env.SITE_URL || 'https://youthforge.org'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/djrdh7thl/image/upload/v1768332531/image2_tdasui.jpg'

export function generateMetadata({
  title,
  description,
  pathname,
  image,
  keywords,
}: {
  title?: string
  description?: string
  pathname?: string
  image?: string
  keywords?: string[]
}): Metadata {
  const fullTitle = title ? `${title} | Youth Forge` : 'Youth Forge - Challenging the Status Quo'
  const url = pathname ? `${SITE_URL}${pathname}` : SITE_URL
  const metaImage = image || DEFAULT_IMAGE

  return {
    title: fullTitle,
    description: description || 'Breaking down barriers for young entrepreneurs under 25 through research-driven advocacy and policy change.',
    keywords: keywords || [
      'youth entrepreneurship',
      'young founders',
      'innovation',
      'mentorship',
    ],
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description: description,
      images: [
        { url: metaImage, width: 1200, height: 630, alt: fullTitle }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description,
      images: [metaImage],
      creator: '@youthforge',
    },
  }
}
