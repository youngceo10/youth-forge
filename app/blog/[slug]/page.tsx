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
        <section className="relative py-24 bg-gradient-to-b from-yf-blue-50/30 to-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div>
              <Link href="/blog" className="inline-flex items-center text-yf-blue-200 hover:text-yf-blue-300 mb-8 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yf-blue-300 mb-6">{post.title}</h1>

              <div className="flex items-center text-yf-blue-200/70 mb-8">
                <span className="font-medium">{post.author}</span>
                <span className="mx-3">•</span>
                <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image src={post.featured_image} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <article className="prose prose-lg prose-yf max-w-none">
              <div className="text-yf-blue-200/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }} />
            </article>
          </div>
        </section>

        <section className="py-16 bg-yf-blue-50/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-yf-blue-300 mb-4">Want to contribute to our research?</h3>
              <p className="text-yf-blue-200/80 mb-8">Join Youth Forge and help us uncover the challenges facing young entrepreneurs.</p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-yf-blue-300 text-white rounded-lg font-medium hover:bg-yf-blue-200 transition-all hover:shadow-lg">Get Involved</Link>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (err) {
    console.error('Error fetching post:', err)
    notFound()
  }
}
