import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const SITE_URL = process.env.SITE_URL || 'https://youthforge.vercel.app'

const staticPages = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/engage',
  '/founders',
  '/team',
  '/chapters'
]

function formatDate(d: Date) {
  return d.toISOString()
}

export async function GET() {
  // start with static pages
  const urls = staticPages.map((path) => ({
    loc: `${SITE_URL}${path}`,
    lastmod: formatDate(new Date()),
    changefreq: 'weekly',
    priority: path === '/' ? '1.0' : '0.7',
  }))

  // fetch published blog posts and add them
  try {
    const { data: posts } = await supabase.from('blog').select('slug, created_at').eq('published', true).order('created_at', { ascending: false }).limit(1000)
    if (Array.isArray(posts)) {
      for (const p of posts) {
        urls.push({
          loc: `${SITE_URL}/blog/${p.slug}`,
          lastmod: p.created_at ? formatDate(new Date(p.created_at)) : formatDate(new Date()),
          changefreq: 'monthly',
          priority: '0.6',
        })
      }
    }
  } catch (err) {
    console.error('Error fetching posts for sitemap:', err)
  }

  const xmlParts = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ]

  for (const u of urls) {
    xmlParts.push('<url>')
    xmlParts.push(`<loc>${u.loc}</loc>`)
    xmlParts.push(`<lastmod>${u.lastmod}</lastmod>`)
    xmlParts.push(`<changefreq>${u.changefreq}</changefreq>`)
    xmlParts.push(`<priority>${u.priority}</priority>`)
    xmlParts.push('</url>')
  }

  xmlParts.push('</urlset>')

  const xml = xmlParts.join('\n')
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  })
}
