'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase, BlogPost } from '@/lib/supabase'
import Image from 'next/image'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'research' | 'stories' | 'insights'>('all')

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
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
      // Use placeholder data if Supabase isn't set up yet
      setPosts(placeholderPosts)
    } finally {
      setLoading(false)
    }
  }

  // Placeholder posts for demo
  const placeholderPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Breaking Barriers: Teen Entrepreneurs in Canada',
      slug: 'breaking-barriers-canada',
      excerpt: 'Our latest research reveals the unique challenges faced by young founders in the Canadian startup ecosystem.',
      content: '',
      featured_image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
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
      featured_image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
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
      featured_image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
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
      featured_image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800',
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
      featured_image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800',
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
      featured_image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      author: 'Youth Forge Team',
      created_at: '2024-10-12',
      published: true,
    },
  ]

  const displayPosts = posts.length > 0 ? posts : placeholderPosts

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-yf-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-yf-blue-300 mb-6">
              Insights & Research
            </h1>
            <p className="text-xl text-yf-blue-200/80 leading-relaxed">
              Exploring the challenges, opportunities, and stories of young entrepreneurs 
              around the world through data-driven research and advocacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {displayPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/blog/${displayPosts[0].slug}`}>
                <div className="group relative bg-gradient-to-br from-yf-blue-50/50 to-white rounded-2xl overflow-hidden border-2 border-yf-blue-50 hover:border-yf-blue-100 transition-all hover:shadow-2xl">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <Image
                        src={displayPosts[0].featured_image}
                        alt={displayPosts[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="inline-block px-3 py-1 bg-yf-accent-green/10 text-yf-accent-green text-xs font-semibold rounded-full mb-4 w-fit">
                        Featured
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-yf-blue-300 mb-4 group-hover:text-yf-blue-200 transition-colors">
                        {displayPosts[0].title}
                      </h2>
                      <p className="text-yf-blue-200/80 mb-6 leading-relaxed">
                        {displayPosts[0].excerpt}
                      </p>
                      <div className="flex items-center text-sm text-yf-blue-200/70">
                        <span className="font-medium">{displayPosts[0].author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(displayPosts[0].created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-yf-blue-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yf-blue-300 mb-12">
              Latest Articles
            </h2>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden border border-yf-blue-50 animate-pulse">
                    <div className="h-48 bg-yf-blue-50"></div>
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-yf-blue-50 rounded w-3/4"></div>
                      <div className="h-4 bg-yf-blue-50 rounded"></div>
                      <div className="h-4 bg-yf-blue-50 rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayPosts.slice(1).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="group bg-white rounded-xl overflow-hidden border-2 border-yf-blue-50 hover:border-yf-blue-100 transition-all hover:shadow-xl h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.featured_image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="text-xl font-bold text-yf-blue-300 mb-3 group-hover:text-yf-blue-200 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-yf-blue-200/70 text-sm mb-4 flex-grow leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-yf-blue-200/60 pt-4 border-t border-yf-blue-50">
                            <span className="font-medium">{post.author}</span>
                            <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-yf-blue-300 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Get the latest research insights and stories delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-4 rounded-lg text-yf-blue-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-yf-blue-300 rounded-lg font-medium hover:bg-yf-blue-50 transition-all hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
