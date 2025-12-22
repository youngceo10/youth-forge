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

      {/* CTA Section removed per request */}
    </div>
  )
}
