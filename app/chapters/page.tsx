'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { MapSkeleton } from '@/components/SkeletonLoader'

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <MapSkeleton />,
})

export default function ChaptersPage() {
  const chapters = [
    { id: 1, city: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832, members: 24, status: 'Active', founded: '2025', lead: 'National HQ Lead' },
    { id: 2, city: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, members: 18, status: 'Active', founded: '2025', lead: 'National HQ Lead' },
    { id: 3, city: 'Athens', country: 'Greece', lat: 37.9838, lng: 23.7275, members: 15, status: 'Growing', founded: '2025', lead: 'National HQ Lead' },
    { id: 4, city: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, members: 22, status: 'Active', founded: '2025', lead: 'National HQ Lead' },
    { id: 5, city: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011, members: 19, status: 'Active', founded: '2025', lead: 'National HQ Lead' },
    { id: 6, city: 'Kampala', country: 'Uganda', lat: 0.3476, lng: 32.5825, members: 16, status: 'Growing', founded: '2025', lead: 'National HQ Lead' },
    { id: 7, city: 'Lagos', country: 'Nigeria', lat: 6.5244, lng: 3.3792, members: 21, status: 'Active', founded: '2025', lead: 'National HQ Lead' },
    { id: 8, city: 'Accra', country: 'Ghana', lat: 5.6037, lng: -0.1870, members: 17, status: 'Active', founded: '2025', lead: 'National HQ Lead' },
    { id: 9, city: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, members: 26, status: 'Active', founded: '2025', lead: 'National HQ Lead' },
  ]

  const stats = [
    { number: '9+', label: 'COUNTRIES' },
    { number: '178', label: 'VOLUNTEERS' },
  ]

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332532/image3_cueois.jpg"
            alt="Research Network"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85]"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
          >
            RESEARCH NETWORK
          </motion.h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 text-white" style={{ backgroundColor: '#000080' }}>
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-2"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-black/40 block mb-6">
              ▬ Global Presence
            </span>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-black uppercase tracking-tighter leading-[0.9]"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              WHERE WE OPERATE
            </h2>
          </motion.div>

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

      {/* Cities List */}
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
              ▬ Active Cities
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-8 group hover:bg-white/5 transition-colors" style={{ backgroundColor: '#000080' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 
                    className="text-2xl sm:text-3xl font-black uppercase tracking-tighter"
                    style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                  >
                    {chapter.city}
                  </h3>
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 ${
                    chapter.status === 'Active' ? 'bg-white/10 text-white' : 'bg-white/5 text-white/60'
                  }`}>
                    {chapter.status}
                  </span>
                </div>
                <p className="text-white/60 mb-4">{chapter.country}</p>
                <div className="text-sm text-white/40">
                  <span>Est. {chapter.founded}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              LAUNCH A NATIONAL HQ
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: 'rgba(0, 0, 128, 0.6)' }}>
              Lead the change in your country, collaborate with leading policy makers, founders and leaders. 
              We provide you with a mentor to provide you with the right tools along the way.
            </p>
            <motion.a
              href="https://forms.gle/pR3r11pRsuguAks26"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 text-white font-semibold text-lg transition-all"
              style={{ backgroundColor: '#000080' }}
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}