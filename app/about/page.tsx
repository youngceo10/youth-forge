'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const values = [
    { title: 'YOUTH-LED', description: 'Operated entirely by young directors and interns who understand the challenges firsthand.' },
    { title: 'GLOBAL REACH', description: 'Research and partnerships across India, Japan, Canada, Ghana, Uganda, and beyond.' },
    { title: 'DATA-DRIVEN', description: 'Evidence-based advocacy through comprehensive market research and analysis.' },
    { title: 'INNOVATION', description: 'Championing youth innovation and entrepreneurship regardless of age barriers.' },
  ]

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Full Screen with Parallax Image */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332533/image5_gsyag5.png"
            alt="Youth Forge About"
            fill
            className="object-cover"
            style={{ transform: `translateY(${offsetY}px)` }}
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
            WHO WE ARE
          </motion.h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(0, 0, 128, 0.4)' }}>
                ▬ Our Mission
              </span>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: '#000080' }}
              >
                BREAKING DOWN BARRIERS FOR YOUNG FOUNDERS
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0, 0, 128, 0.6)' }}>
                Youth Forge is breaking age restrictions in innovation through market research, 
                uncovering the hidden challenges faced by young entrepreneurs under the age of 18. 
                Barriers that have been long invisible to business policy makers, a problem cited 
                by Global Entrepreneurship Monitor, reinforcing traditional innovation systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Width Image with Parallax Text */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332543/image1_azeopc.webp"
            alt="Young entrepreneurs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter text-center px-6"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
          >
            CHALLENGING THE STATUS QUO
          </motion.h2>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 lg:py-32 text-white" style={{ backgroundColor: '#000080' }}>
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">
              ▬ Our Values
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 lg:p-12" style={{ backgroundColor: '#000080' }}
              >
                <h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest block mb-6" style={{ color: 'rgba(0, 0, 128, 0.4)' }}>
                ▬ Why We Exist
              </span>
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: '#000080' }}
              >
                A LARGE MAJORITY OF TEENS DREAM OF ENTREPRENEURSHIP
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(0, 0, 128, 0.6)' }}>
                But very few realize this dream early due to systemic barriers. We exist to change 
                that reality by providing data-driven advocacy and creating pathways for young founders.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0, 0, 128, 0.6)' }}>
                We focus specifically on founders under 18, often overlooked by other research entities, 
                involving young researchers and experts collaborating to challenge the status quo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <Image
                src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332531/image2_tdasui.jpg"
                alt="Young entrepreneurs collaborating"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-white" style={{ borderTop: '1px solid rgba(0, 0, 128, 0.1)' }}>
        <div className="w-full px-6 lg:px-12 xl:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: '#000080' }}
            >
              JOIN THE MOVEMENT
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://forms.gle/pR3r11pRsuguAks26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-white font-semibold text-lg transition-all"
                style={{ backgroundColor: '#000080' }}
              >
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
