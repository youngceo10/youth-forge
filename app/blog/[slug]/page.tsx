'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useCallback } from 'react'
import { supabase, BlogPost } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { generateMetadata } from '@/lib/seo';

// dynamic metadata generation will use a placeholder; the actual metadata can be enhanced
// if you move this component to a server component and fetch the post at build time.
export const metadata = generateMetadata({
  title: 'Blog Post',
  description: 'Read our in-depth research and stories by and for young founders.',
  pathname: '/blog',
});

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchPost = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('blog')
        .select('*')
        .eq('slug', params.slug)
        .eq('published', true)
        .single()

      if (error) throw error
      setPost(data)
    } catch (error) {
      console.error('Error fetching post:', error)
      // Use placeholder for demo
      setPost(getPlaceholderPost(params.slug))
    } finally {
      setLoading(false)
    }
  }, [params.slug])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  function getPlaceholderPost(slug: string): BlogPost {
    const posts: Record<string, BlogPost> = {
      'breaking-barriers-canada': {
        id: '1',
        title: 'Breaking Barriers: Teen Entrepreneurs in Canada',
        slug: 'breaking-barriers-canada',
        excerpt: 'Our latest research reveals the unique challenges faced by young founders in the Canadian startup ecosystem.',
        content: `
          <p>Canada has long been known for its supportive startup ecosystem, but our research reveals that young entrepreneurs under 25 face unique challenges that often go unaddressed.</p>
          
          <h2>Key Findings</h2>
          <p>Through extensive interviews and surveys with over 150 young founders across Toronto, Vancouver, and Montreal, we've identified three critical barriers:</p>
          
          <ul>
            <li><strong>Access to Capital:</strong> Only 12% of teen founders reported successfully securing seed funding from traditional venture capital sources.</li>
            <li><strong>Mentorship Gap:</strong> 68% of respondents cited lack of experienced mentorship as a major obstacle to growth.</li>
            <li><strong>Legal Barriers:</strong> Age-based restrictions on contract signing and business registration create unnecessary complexity.</li>
          </ul>
          
          <h2>The Path Forward</h2>
          <p>Our recommendations focus on three key areas: creating youth-specific funding programs, establishing mentorship matching platforms, and advocating for policy reforms that recognize the capabilities of young founders.</p>
        `,
        featured_image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200',
        author: 'Youth Forge Research Team',
        created_at: '2024-11-15',
        published: true,
      }
    }
    return posts[slug] || posts['breaking-barriers-canada']
  }
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { supabase, BlogPost } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { generateMetadata as makeMeta } from '@/lib/seo'

type Params = { params: { slug: string } }

export async function generateMetadata({ params }: Params) {
  const slug = params.slug
  try {
    const { data, error } = await supabase
      .from('blog')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (error || !data) return makeMeta({ title: 'Blog Post', pathname: '/blog' })

    return makeMeta({
      title: data.title,
      description: data.excerpt,
      pathname: `/blog/${data.slug}`,
      image: data.featured_image,
    })
  } catch (e) {
    return makeMeta({ title: 'Blog Post', pathname: '/blog' })
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  try {
    const { data, error } = await supabase
      .from('blog')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (error || !data) {
      notFound()
    }

    const post: BlogPost = data as BlogPost

    return (
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-yf-blue-50/30 to-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                href="/blog" 
                className="inline-flex items-center text-yf-blue-200 hover:text-yf-blue-300 mb-8 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yf-blue-300 mb-6">
                {post.title}
              </h1>

              <div className="flex items-center text-yf-blue-200/70 mb-8">
                <span className="font-medium">{post.author}</span>
                <span className="mx-3">•</span>
                <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg prose-yf max-w-none"
            >
              <div 
                className="text-yf-blue-200/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
              />
            </motion.article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-yf-blue-50/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-yf-blue-300 mb-4">
                Want to contribute to our research?
              </h3>
              <p className="text-yf-blue-200/80 mb-8">
                Join Youth Forge and help us uncover the challenges facing young entrepreneurs.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-yf-blue-300 text-white rounded-lg font-medium hover:bg-yf-blue-200 transition-all hover:shadow-lg"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    )
  } catch (err) {
    console.error('Error fetching post:', err)
    notFound()
  }
}
