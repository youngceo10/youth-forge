import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string
  author: string
  created_at: string
  published: boolean
}
