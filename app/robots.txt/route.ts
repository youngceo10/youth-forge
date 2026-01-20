import { NextResponse } from 'next/server'

const SITE_URL = process.env.SITE_URL || 'https://youthforge.vercel.app'

export async function GET() {
  const lines = [
    'User-agent: *',
    'Disallow:',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    'Host: youthforge.vercel.app'
  ]

  return new NextResponse(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  })
}
