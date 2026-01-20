'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { MapSkeleton } from '@/components/SkeletonLoader'
// metadata provided via app/layout.tsx

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <MapSkeleton />,
})

export default function ContactPage() {
  const chapters = [
    { id: 1, city: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832, members: 24, status: 'Active', founded: '2023', lead: 'Chapter Lead' },
    { id: 2, city: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, members: 18, status: 'Active', founded: '2023', lead: 'Chapter Lead' },
    { id: 3, city: 'Athens', country: 'Greece', lat: 37.9838, lng: 23.7275, members: 15, status: 'Growing', founded: '2024', lead: 'Chapter Lead' },
    { id: 4, city: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, members: 22, status: 'Active', founded: '2023', lead: 'Chapter Lead' },
    { id: 5, city: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011, members: 19, status: 'Active', founded: '2023', lead: 'Chapter Lead' },
    { id: 6, city: 'Lagos', country: 'Nigeria', lat: 6.5244, lng: 3.3792, members: 21, status: 'Active', founded: '2023', lead: 'Chapter Lead' },
    { id: 7, city: 'Accra', country: 'Ghana', lat: 5.6037, lng: -0.1870, members: 17, status: 'Active', founded: '2024', lead: 'Chapter Lead' },
    { id: 8, city: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, members: 26, status: 'Active', founded: '2023', lead: 'Chapter Lead' },
  ]

  const opportunities = [
    {
      title: 'RESEARCH SURVEY',
      description: 'Share your entrepreneurial journey and help us uncover the challenges young founders face.',
      link: 'https://forms.gle/pR3r11pRsuguAks26',
    },
    {
      title: 'NEWSLETTER',
      description: 'Stay updated with our latest research findings, events, and opportunities.',
      link: 'https://forms.gle/uu5CLy6QoC9kWsBH8',
    },
    {
      title: 'BECOME A SPEAKER',
      description: 'Share your expertise and inspire young entrepreneurs at our events.',
      link: 'https://forms.gle/99zrr8BKh37ATNmdA',
    },
    {
      title: 'YOUTH ADVOCATE',
      description: 'Join our team of advocates championing youth entrepreneurship worldwide.',
      link: 'https://forms.gle/4CtwpPqMAf8VUsnH7',
    },
  ]

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            alt="Get Involved"
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
            GET INVOLVED
          </motion.h1>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(0, 0, 128, 0.4)' }}>
              ▬ Ways to Contribute
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(0, 0, 128, 0.1)' }}>
            {opportunities.map((opp, index) => (
              <motion.a
                key={opp.title}
                href={opp.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 lg:p-12 group transition-all duration-300"
                style={{ ['--hover-bg' as string]: '#000080' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000080'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                <h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  {opp.title}
                </h3>
                <p className="leading-relaxed mb-6 group-hover:text-white/70 transition-colors" style={{ color: 'rgba(0, 0, 128, 0.6)' }}>
                  {opp.description}
                </p>
                <div className="flex items-center gap-2 group-hover:text-white transition-colors" style={{ color: '#000080' }}>
                  <span className="text-sm font-semibold uppercase tracking-wider">Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Wall CTA */}
      <section className="py-24 lg:py-32 text-white" style={{ backgroundColor: '#000080' }}>
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-6">
                ▬ Featured
              </span>
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
              >
                JOIN THE FOUNDERS WALL
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Are you a young entrepreneur under 18? Apply to be featured on our Founders Wall 
                and inspire the next generation of innovators.
              </p>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfrJBYljfrjyauUxCg-PpYDne72psIwn7Xhs0OIXK_0CAB1CQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white font-semibold text-lg hover:bg-gray-100 transition-all"
                style={{ color: '#000080' }}
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
                alt="Young founders"
                fill
                className="object-cover"
              />
            </motion.div>
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
            <span className="text-xs font-bold uppercase tracking-widest block mb-6" style={{ color: 'rgba(0, 0, 128, 0.4)' }}>
              ▬ Our Global Presence
            </span>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9]"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: '#000080' }}
            >
              FIND US WORLDWIDE
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

      {/* Contact Info */}
      <section className="py-24 lg:py-32 text-white" style={{ backgroundColor: '#000080' }}>
        <div className="w-full px-6 lg:px-12 xl:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-6">
              ▬ Direct Contact
            </span>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              REACH OUT
            </h2>
            <a 
              href="mailto:hello@youthforge.org"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/80 hover:text-white transition-colors"
            >
              hello@youthforge.org
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
