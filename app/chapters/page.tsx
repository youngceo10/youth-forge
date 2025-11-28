'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { MapSkeleton } from '@/components/SkeletonLoader'

// Dynamically import the Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <MapSkeleton />,
})

export default function ChaptersPage() {
  const chapters = [
    {
      id: 1,
      city: 'Toronto',
      country: 'Canada',
      lat: 43.6532,
      lng: -79.3832,
      members: 24,
      status: 'Active',
      founded: '2023',
      lead: 'Chapter Lead'
    },
    {
      id: 2,
      city: 'Dubai',
      country: 'UAE',
      lat: 25.2048,
      lng: 55.2708,
      members: 18,
      status: 'Active',
      founded: '2023',
      lead: 'Chapter Lead'
    },
    {
      id: 3,
      city: 'Athens',
      country: 'Greece',
      lat: 37.9838,
      lng: 23.7275,
      members: 15,
      status: 'Growing',
      founded: '2024',
      lead: 'Chapter Lead'
    },
    {
      id: 4,
      city: 'Tokyo',
      country: 'Japan',
      lat: 35.6762,
      lng: 139.6503,
      members: 22,
      status: 'Active',
      founded: '2023',
      lead: 'Chapter Lead'
    },
    {
      id: 5,
      city: 'Karachi',
      country: 'Pakistan',
      lat: 24.8607,
      lng: 67.0011,
      members: 19,
      status: 'Active',
      founded: '2023',
      lead: 'Chapter Lead'
    },
    {
      id: 6,
      city: 'Kampala',
      country: 'Uganda',
      lat: 0.3476,
      lng: 32.5825,
      members: 16,
      status: 'Growing',
      founded: '2024',
      lead: 'Chapter Lead'
    },
    {
      id: 7,
      city: 'Lagos',
      country: 'Nigeria',
      lat: 6.5244,
      lng: 3.3792,
      members: 21,
      status: 'Active',
      founded: '2023',
      lead: 'Chapter Lead'
    },
    {
      id: 8,
      city: 'Accra',
      country: 'Ghana',
      lat: 5.6037,
      lng: -0.1870,
      members: 17,
      status: 'Active',
      founded: '2024',
      lead: 'Chapter Lead'
    },
    {
      id: 9,
      city: 'Mumbai',
      country: 'India',
      lat: 19.0760,
      lng: 72.8777,
      members: 26,
      status: 'Active',
      founded: '2023',
      lead: 'Chapter Lead'
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-yf-primary-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-yf-primary-700 mb-6">
              Our Research Network
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Youth Forge operates across multiple continents with passionate young researchers 
              and advocates working to break down barriers for teen entrepreneurs under 18.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Map chapters={chapters} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Ready to Start a Chapter */}
      <section className="py-24 bg-gradient-to-br from-yf-primary via-yf-primary-400 to-yf-primary-500 text-white relative overflow-hidden">
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
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <svg className="w-20 h-20 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start a Chapter?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join our global research network of young researchers and advocates. Help us uncover 
              the challenges facing teen entrepreneurs in your region and drive meaningful policy change.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-yf-primary-700 rounded-lg font-semibold hover:bg-yf-primary-50 transition-all hover:shadow-2xl shadow-xl"
            >
              Apply to Start a Chapter
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
