'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState, useCallback } from 'react'
import { supabase, BlogPost } from '@/lib/supabase'
import Image from 'next/image'

const placeholderPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Breaking Barriers: Teen Entrepreneurs in Canada',
    slug: 'breaking-barriers-canada',
    excerpt: 'Our latest research reveals the unique challenges faced by young founders in the Canadian startup ecosystem.',
    content: '',
    featured_image: 'https://res.cloudinary.com/djrdh7thl/image/upload/v1768332543/image1_azeopc.webp',
    author: 'Youth Forge Research Team',
    created_at: '2024-11-15',
    published: true,
  },
  {
    id: '2',
    title: 'Global Youth Entrepreneurship Report 2024',
    slug: 'global-report-2024',
    excerpt: 'Comprehensive findings from our research across 8 countries highlighting systemic barriers and opportunities.',
    content: '',
    featured_image: 'https://res.cloudinary.com/djrdh7thl/image/upload/v1768332533/image5_gsyag5.png',
    author: 'Youth Forge Research Team',
    created_at: '2024-11-10',
    published: true,
  },
  {
    id: '3',
    title: 'Mentorship Matters: Bridging the Gap',
    slug: 'mentorship-matters',
    excerpt: 'How connecting young founders with experienced mentors can transform entrepreneurial outcomes.',
    content: '',
    featured_image: 'https://res.cloudinary.com/djrdh7thl/image/upload/v1768332531/image2_tdasui.jpg',
    author: 'Sarah Chen',
    created_at: '2024-11-05',
    published: true,
  },
  {
    id: '4',
    title: 'The Funding Challenge: Age Discrimination',
    slug: 'funding-age-discrimination',
    excerpt: 'Exploring how age-based barriers prevent talented teen founders from accessing capital.',
    content: '',
    featured_image: 'https://res.cloudinary.com/djrdh7thl/image/upload/v1768332532/image3_cueois.jpg',
    author: 'Marcus Johnson',
    created_at: '2024-10-28',
    published: true,
  },
  {
    id: '5',
    title: 'Policy Advocacy: Making Youth Voices Heard',
    slug: 'policy-advocacy',
    excerpt: 'Our approach to bringing youth entrepreneurship data to policy tables around the world.',
    content: '',
    featured_image: 'https://res.cloudinary.com/djrdh7thl/image/upload/v1768332537/image64_uhmeal.webp',
    author: 'Amara Okafor',
    created_at: '2024-10-20',
    published: true,
  },
  {
    id: '6',
    title: 'Success Stories: Teen Founders Who Beat the Odds',
    slug: 'success-stories',
    excerpt: 'Inspiring stories from young entrepreneurs who overcame systemic barriers to build successful ventures.',
    content: '',
    featured_image: 'https://res.cloudinary.com/djrdh7thl/image/upload/v1768332536/image7_grnhha.jpg',
    author: 'Youth Forge Team',
    created_at: '2024-10-12',
    published: true,
  },
]

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('blog')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
      setPosts(placeholderPosts)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const displayPosts = posts.length > 0 ? posts : placeholderPosts

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332536/image7_grnhha.jpg"
            alt="Blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/60 block mb-6">
              ▬ Insights & Stories
            </span>
            <h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85]"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              THE BLOG
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {displayPosts.length > 0 && (
        <section className="py-24 lg:py-32 bg-white">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <span className="text-xs font-bold uppercase tracking-widest block mb-6" style={{ color: 'rgba(0, 0, 128, 0.4)' }}>
                ▬ Featured
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/blog/${displayPosts[0].slug}`}>
                <div className="group grid lg:grid-cols-2 gap-0" style={{ backgroundColor: '#000080' }}>
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <Image
                      src={displayPosts[0].featured_image}
                      alt={displayPosts[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
                      Latest Research
                    </span>
                    <h2 
                      className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.95]"
                      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                    >
                      {displayPosts[0].title}
                    </h2>
                    <p className="text-white/60 text-lg mb-8 leading-relaxed">
                      {displayPosts[0].excerpt}
                    </p>
                    <div className="flex items-center text-sm text-white/40">
                      <span className="font-medium">{displayPosts[0].author}</span>
                      <span className="mx-3">—</span>
                      <span>{new Date(displayPosts[0].created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-24 lg:py-32 text-white" style={{ backgroundColor: '#000080' }}>
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-6">
              ▬ All Articles
            </span>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9]"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              LATEST RESEARCH
            </h2>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-8 animate-pulse" style={{ backgroundColor: '#000080' }}>
                  <div className="aspect-[16/10] bg-white/10 mb-6"></div>
                  <div className="h-6 bg-white/10 mb-4 w-3/4"></div>
                  <div className="h-4 bg-white/10 w-full"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {displayPosts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block group hover:bg-white/5 transition-colors h-full" style={{ backgroundColor: '#000080' }}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.featured_image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 lg:p-8">
                      <h3 
                        className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-4 leading-[0.95]"
                        style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-white/50 text-sm mb-6 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-white/30">
                        <span>{post.author}</span>
                        <span className="mx-2">—</span>
                        <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: '#000080' }}
            >
              STAY INFORMED
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-12" style={{ color: 'rgba(0, 0, 128, 0.6)' }}>
              Get the latest research insights, stories, and updates delivered straight to your inbox.
            </p>
            <motion.a
              href="https://forms.gle/uu5CLy6QoC9kWsBH8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 text-white font-semibold text-lg transition-all"
              style={{ backgroundColor: '#000080' }}
            >
              Subscribe to Newsletter
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
