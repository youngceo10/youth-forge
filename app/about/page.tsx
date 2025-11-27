'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Globe2, BarChart3, Rocket, Search, TrendingUp, Lightbulb, Sparkles } from 'lucide-react'
import CA from 'country-flag-icons/react/3x2/CA'
import AE from 'country-flag-icons/react/3x2/AE'
import GR from 'country-flag-icons/react/3x2/GR'
import JP from 'country-flag-icons/react/3x2/JP'
import PK from 'country-flag-icons/react/3x2/PK'
import UG from 'country-flag-icons/react/3x2/UG'
import NG from 'country-flag-icons/react/3x2/NG'
import GH from 'country-flag-icons/react/3x2/GH'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Youth-Led',
      description: 'Operated entirely by young directors and interns who understand the challenges firsthand.',
      color: '#7BC043'
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Research and partnerships across India, Japan, Canada, Ghana, Uganda, and beyond.',
      color: '#0074D9'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven',
      description: 'Evidence-based advocacy through comprehensive market research and analysis.',
      color: '#FFDC00'
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'Championing youth innovation and entrepreneurship regardless of age barriers.',
      color: '#EF3E36'
    }
  ]

  const timeline = [
    {
      phase: 'Research',
      description: 'Conduct comprehensive surveys and interviews with young entrepreneurs across multiple countries',
      icon: Search
    },
    {
      phase: 'Analysis',
      description: 'Process data to identify patterns, barriers, and opportunities for youth entrepreneurship',
      icon: TrendingUp
    },
    {
      phase: 'Advocacy',
      description: 'Present findings to policymakers, investors, and ecosystem builders',
      icon: Lightbulb
    },
    {
      phase: 'Impact',
      description: 'Break down barriers through policy change, mentorship programs, and funding access',
      icon: Sparkles
    }
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-yf-blue-300 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-yf-blue-200/80 leading-relaxed">
              Youth Forge is a global market research organization focused on uncovering the 
              hidden challenges faced by young entrepreneurs under the age of 25, with a special 
              focus on under 18 founders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-yf-blue-100/20 rounded-full blur-2xl"></div>
                <div className="relative bg-yf-blue-300 text-white rounded-2xl p-12">
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg leading-relaxed text-white/90 mb-6">
                    We provide a platform for youth voices and shape the future of entrepreneurship 
                    by advocating for youth innovation and inclusion regardless of age.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Our mission centers on breaking down the systemic barriers that prevent young 
                    dreamers from becoming successful founders, creating a more supportive environment 
                    where they can thrive and contribute meaningfully to the economy and society.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-yf-blue-50/50 to-white border border-yf-blue-100/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-yf-blue-300 mb-4">Why We Exist</h3>
                <p className="text-yf-blue-200/80 leading-relaxed">
                  A large majority of teens dream of entrepreneurship, but very few realize this 
                  dream early due to systemic barriers. We exist to change that reality.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yf-blue-50/50 to-white border border-yf-blue-100/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-yf-blue-300 mb-4">What Makes Us Different</h3>
                <p className="text-yf-blue-200/80 leading-relaxed">
                  We focus specifically on founders under 25, often overlooked by other research 
                  entities, involving young researchers and experts collaborating to challenge the 
                  status quo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-white to-yf-blue-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-yf-blue-300 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-yf-blue-200/80 max-w-3xl mx-auto">
              The principles that guide our work and define our approach to youth entrepreneurship research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className="bg-white rounded-xl p-8 transition-all border-2 border-yf-blue-50/50 hover:border-yf-blue-100/50 group"
                >
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: value.color }}>
                    {value.title}
                  </h3>
                  <p className="text-yf-blue-200/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yf-blue-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yf-blue-100/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-yf-blue-300 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-yf-blue-200/80 max-w-3xl mx-auto">
              Our systematic approach to creating meaningful change for young entrepreneurs worldwide.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Curved Connecting Line */}
              <svg 
                className="hidden lg:block absolute left-0 top-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#619bb6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#37738d" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#619bb6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50% 8% Q 70% 30%, 50% 35% Q 30% 40%, 50% 52% Q 70% 64%, 50% 85%"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  opacity="0.5"
                />
              </svg>

              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    className={`relative mb-20 lg:mb-24 flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                    style={{ zIndex: 1 }}
                  >
                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block w-1/2"></div>
                    
                    {/* Card */}
                    <motion.div 
                      whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        boxShadow: '0 25px 50px rgba(0,78,102,0.2)' 
                      }}
                      className={`w-full lg:w-5/12 bg-gradient-to-br from-white to-yf-blue-50/30 border-2 border-yf-blue-50 rounded-2xl p-8 hover:border-yf-blue-200 transition-all shadow-lg ${
                        index % 2 === 0 ? 'lg:-ml-16' : 'lg:-mr-16'
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yf-blue-300 to-yf-blue-200 text-white rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <Icon className="w-8 h-8" />
                        </motion.div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs font-bold text-yf-blue-200 bg-yf-blue-50 px-3 py-1 rounded-full">
                              STEP {index + 1}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-yf-blue-300 mb-3">
                            {item.phase}
                          </h3>
                          <p className="text-yf-blue-200/80 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center circle indicator */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-yf-blue-300 rounded-full border-4 border-white shadow-lg items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-yf-blue-300 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research Countries
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our global reach spans multiple continents and diverse entrepreneurial ecosystems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: 'Canada', Flag: CA },
              { name: 'UAE', Flag: AE },
              { name: 'Greece', Flag: GR },
              { name: 'Japan', Flag: JP },
              { name: 'Pakistan', Flag: PK },
              { name: 'Uganda', Flag: UG },
              { name: 'Nigeria', Flag: NG },
              { name: 'Ghana', Flag: GH }
            ].map(({ name, Flag }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all group cursor-pointer"
              >
                <div className="mb-3 overflow-hidden rounded-md shadow-lg group-hover:shadow-xl transition-shadow">
                  <Flag className="w-full h-12 object-cover" />
                </div>
                <div className="font-medium text-sm">{name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
