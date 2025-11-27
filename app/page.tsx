'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import { Globe2, ArrowRight, BarChart3, Target } from 'lucide-react'
import LogoAnimation from '@/components/LogoAnimation'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function Home() {
  const stats = [
    { number: 8, label: 'Countries', color: '#7BC043', suffix: '+' },
    { number: 100, label: 'Young Researchers', color: '#0074D9', suffix: '+' },
    { number: 1000, label: 'Youth Surveyed', color: '#EF3E36', suffix: '+' },
    { number: 25, label: 'Max Age Focus', color: '#FFDC00', suffix: '' },
  ]



  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-yf-blue-50/20 to-white pt-20" aria-label="Hero section">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-yf-blue-50/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-yf-blue-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-yf-blue-50/50 rounded-full"
              >
                <Globe2 className="w-4 h-4 text-yf-blue-200" />
                <span className="text-sm font-medium text-yf-blue-200">
                  Operating in 8+ Countries Worldwide
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yf-blue-300 mb-6 leading-tight">
                <TypeAnimation
                  sequence={[
                    'Challenging the Status Quo',
                    3000,
                    'Empowering Youth Entrepreneurs',
                    3000,
                    'Breaking Down Barriers',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  className="block"
                />
              </h1>

              <p className="text-lg sm:text-xl text-yf-blue-200/80 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Uncovering the hidden challenges faced by young entrepreneurs under 25, 
                advocating for youth innovation and inclusion regardless of age.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-yf-blue-300 text-white rounded-lg font-medium hover:bg-yf-blue-200 transition-all hover:shadow-lg hover:shadow-yf-blue-300/30 focus:outline-none focus:ring-2 focus:ring-yf-blue-300 focus:ring-offset-2"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/chapters"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yf-blue-300 text-yf-blue-300 rounded-lg font-medium hover:bg-yf-blue-50/50 transition-all focus:outline-none focus:ring-2 focus:ring-yf-blue-300 focus:ring-offset-2"
                  >
                    View Chapters
                  </Link>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: stat.color }}>
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs sm:text-sm text-yf-blue-200/70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <LogoAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yf-blue-300 mb-6">
              Our Two-Step Solution
            </h2>
            <p className="text-lg sm:text-xl text-yf-blue-200/80 max-w-3xl mx-auto">
              We&apos;re building a global movement to support youth entrepreneurship through 
              research-driven advocacy and policy change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yf-accent-green/20 rounded-full blur-2xl"></div>
              <motion.div 
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(123, 192, 67, 0.15)' }}
                className="relative bg-white border-2 border-yf-blue-50 rounded-2xl p-8 hover:border-yf-accent-green/30 transition-all"
              >
                <div className="w-16 h-16 bg-yf-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-yf-accent-green" />
                </div>
                <div className="text-yf-accent-green font-bold text-sm mb-2">STEP #1</div>
                <h3 className="text-2xl font-bold text-yf-blue-300 mb-4">
                  Global Research
                </h3>
                <p className="text-yf-blue-200/80 leading-relaxed">
                  We conduct comprehensive research across multiple countries including Canada, UAE, 
                  Greece, Japan, Pakistan, Uganda, Nigeria, and Ghana to advocate the critical 
                  challenges faced by teen entrepreneurs and build awareness.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yf-accent-blue/20 rounded-full blur-2xl"></div>
              <motion.div 
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 116, 217, 0.15)' }}
                className="relative bg-white border-2 border-yf-blue-50 rounded-2xl p-8 hover:border-yf-accent-blue/30 transition-all"
              >
                <div className="w-16 h-16 bg-yf-accent-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-yf-accent-blue" />
                </div>
                <div className="text-yf-accent-blue font-bold text-sm mb-2">STEP #2</div>
                <h3 className="text-2xl font-bold text-yf-blue-300 mb-4">
                  Policy Advocacy
                </h3>
                <p className="text-yf-blue-200/80 leading-relaxed">
                  We utilize our data by sharing it with policy tables to break barriers for young 
                  founders, opening doors to mentorship, funding, and meaningful participation in 
                  entrepreneurial ecosystems.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-yf-blue-300 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Help us create a more supportive environment where young founders can thrive 
              and contribute meaningfully to the economy and society.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-yf-blue-300 rounded-lg font-medium hover:bg-yf-blue-50 transition-all hover:shadow-xl"
                >
                  Get Involved
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
                >
                  Read Our Blog
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
