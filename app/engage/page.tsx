'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const opportunities = [
  {
    title: 'BECOME A SPEAKER',
    description: 'Share your entrepreneurial journey and inspire the next generation of young founders.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=80',
    link: 'https://forms.gle/99zrr8BKh37ATNmdA',
  },
  {
    title: 'YOUTH BUSINESS ADVOCATE',
    description: 'Champion the cause of young entrepreneurs and help break down systemic barriers.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80',
    link: 'https://forms.gle/4CtwpPqMAf8VUsnH7',
  },
  {
    title: 'JOIN OUR NEWSLETTER',
    description: 'Stay updated with the latest research, insights, and opportunities from Youth Forge.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
    link: 'https://forms.gle/uu5CLy6QoC9kWsBH8',
  },
  {
    title: 'FOUNDERS WALL',
    description: 'Are you a young entrepreneur under 18? Get featured and inspire others with your story.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfrJBYljfrjyauUxCg-PpYDne72psIwn7Xhs0OIXK_0CAB1CQ/viewform',
  },
]

export default function EngagePage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
            alt="Get Engaged"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 128, 0.6)' }} />
        </div>
        
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/60 block mb-6">
              ▬ Get Involved
            </span>
            <h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85]"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              ENGAGE
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed max-w-4xl"
            style={{ color: '#000080' }}
          >
            Ready to make an impact? Choose how you want to contribute to the future of youth entrepreneurship.
          </motion.p>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
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
                className="relative group bg-white overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={opp.image}
                    alt={opp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                    style={{ backgroundColor: 'rgba(0, 0, 128, 0.5)' }}
                  />
                  
                  {/* Title Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <h2 
                      className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter text-center leading-[0.9]"
                      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                    >
                      {opp.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 lg:p-8 bg-white">
                  <p className="leading-relaxed mb-4" style={{ color: 'rgba(0, 0, 128, 0.6)' }}>
                    {opp.description}
                  </p>
                  <div className="flex items-center gap-2 transition-colors" style={{ color: '#000080' }}>
                    <span className="text-sm font-semibold uppercase tracking-wider">Apply Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Research Survey CTA */}
      <section className="py-24 lg:py-32 text-white" style={{ backgroundColor: '#000080' }}>
        <div className="w-full px-6 lg:px-12 xl:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-6">
              ▬ Contribute to Research
            </span>
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              TAKE OUR SURVEY
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
              Help us uncover the challenges faced by young entrepreneurs. Your voice matters.
            </p>
            <motion.a
              href="https://forms.gle/pR3r11pRsuguAks26"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white font-semibold text-lg hover:bg-gray-100 transition-all"
              style={{ color: '#000080' }}
            >
              Start Survey
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
