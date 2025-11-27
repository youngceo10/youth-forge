'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { MapSkeleton } from '@/components/SkeletonLoader'

// Dynamically import the Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <MapSkeleton />,
})

export default function ChaptersPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'growing'>('all')

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

  const filteredChapters = chapters.filter(chapter => {
    if (filter === 'all') return true
    if (filter === 'active') return chapter.status === 'Active'
    if (filter === 'growing') return chapter.status === 'Growing'
    return true
  })

  const stats = [
    { label: 'Total Chapters', value: chapters.length, color: 'yf-accent-blue' },
    { label: 'Active Chapters', value: chapters.filter(c => c.status === 'Active').length, color: 'yf-accent-green' },
    { label: 'Countries', value: new Set(chapters.map(c => c.country)).size, color: 'yf-accent-yellow' },
    { label: 'Total Members', value: chapters.reduce((sum, c) => sum + c.members, 0), color: 'yf-accent-red' },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-yf-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-yf-blue-300 mb-6">
              Our Global Chapters
            </h1>
            <p className="text-xl text-yf-blue-200/80 leading-relaxed">
              Youth Forge operates across multiple continents with passionate young researchers 
              and advocates working to break down barriers for teen entrepreneurs.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-yf-blue-50/50"
              >
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-yf-blue-200/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
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
            <Map chapters={filteredChapters} />
          </motion.div>
        </div>
      </section>

      {/* Chapter Filter & List */}
      <section className="py-20 bg-gradient-to-b from-white to-yf-blue-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-yf-blue-300 mb-4 md:mb-0">
                Chapter Directory
              </h2>
              
              {/* Filter Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    filter === 'all'
                      ? 'bg-yf-blue-300 text-white'
                      : 'bg-white text-yf-blue-300 border border-yf-blue-100 hover:border-yf-blue-300'
                  }`}
                >
                  All Chapters
                </button>
                <button
                  onClick={() => setFilter('active')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    filter === 'active'
                      ? 'bg-yf-accent-green text-white'
                      : 'bg-white text-yf-accent-green border border-yf-accent-green/30 hover:border-yf-accent-green'
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setFilter('growing')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    filter === 'growing'
                      ? 'bg-yf-accent-yellow text-gray-800'
                      : 'bg-white text-yf-accent-yellow border border-yf-accent-yellow/30 hover:border-yf-accent-yellow'
                  }`}
                >
                  Growing
                </button>
              </div>
            </div>

            {/* Chapter Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChapters.map((chapter, index) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-all border-2 border-yf-blue-50/50 hover:border-yf-blue-100/50 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-yf-blue-300 mb-1 group-hover:text-yf-blue-200 transition-colors">
                        {chapter.city}
                      </h3>
                      <p className="text-sm text-yf-blue-200/70">
                        {chapter.country}
                      </p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        chapter.status === 'Active'
                          ? 'bg-yf-accent-green/10 text-yf-accent-green'
                          : 'bg-yf-accent-yellow/10 text-yellow-700'
                      }`}
                    >
                      {chapter.status}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-yf-blue-200/70">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      {chapter.members} members
                    </div>
                    <div className="flex items-center text-sm text-yf-blue-200/70">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Founded {chapter.founded}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-yf-blue-50">
                    <button className="text-sm font-medium text-yf-blue-300 hover:text-yf-blue-200 transition-colors flex items-center group">
                      Learn more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Start a Chapter in Your City
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join our global network of young researchers and advocates. Help us uncover 
              the challenges facing teen entrepreneurs in your region.
            </p>
            <button className="px-8 py-4 bg-white text-yf-blue-300 rounded-lg font-medium hover:bg-yf-blue-50 transition-all hover:shadow-xl">
              Apply to Start a Chapter
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
