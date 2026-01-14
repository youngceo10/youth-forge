'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    id: 1,
    name: 'Sarina Mohammadi',
    role: 'Founder',
    headshot: '/sarina.jpg',
    linkedin: 'https://linkedin.com/in/sarina-mohammadi',
    instagram: 'https://instagram.com/sarina.mohammadi',
  },
  {
    id: 2,
    name: 'Opekeresam Miebaka',
    role: 'Business Advocate',
    headshot: '/opekeresam.jpeg',
    linkedin: 'https://linkedin.com/in/opekeresam-miebaka',
    instagram: 'https://instagram.com/opekeresam',
  },
  {
    id: 3,
    name: 'Oduro Yeboah',
    role: 'Market Researcher',
    headshot: '/oduro.jpg',
    linkedin: 'https://linkedin.com/in/oduro-yeboah',
    instagram: 'https://instagram.com/oduro.yeboah',
  },
]

const roles = [
  { title: 'FOUNDERS', count: 1 },
  { title: 'ADVOCATES', count: 8 },
  { title: 'RESEARCHERS', count: 12 },
  { title: 'PARTNERS', count: 5 },
]

export default function TeamPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332537/image64_uhmeal.webp"
            alt="Youth Forge Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/60 block mb-6">
              ▬ The People
            </span>
            <h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85]"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              MEET THE TEAM
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-black font-medium leading-relaxed"
            >
              A global team of young researchers, advocates, and entrepreneurs united by a 
              shared mission: breaking down barriers for the next generation of business leaders.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Roles Counter */}
      <section className="py-16 text-white" style={{ backgroundColor: '#000080' }}>
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="text-5xl sm:text-6xl font-black tracking-tighter mb-2"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  {role.count}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/50">
                  {role.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
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
              ▬ Core Team
            </span>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9]"
              style={{ color: '#000080' }}
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              LEADERSHIP
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(0, 0, 128, 0.1)' }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={member.headshot}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-white" style={{ backgroundColor: '#000080' }}>
                  <h3 
                    className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-1"
                    style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-4">{member.role}</p>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                        <span>Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332533/image5_gsyag5.png"
            alt="Join the Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 128, 0.7)' }} />
        </div>
        
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              JOIN US
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
              Ready to make an impact and shape the future of entrepreneurship?
            </p>
            <Link href="/engage">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-5 bg-white font-semibold text-lg hover:bg-gray-100 transition-all"
                style={{ color: '#000080' }}
              >
                Get Engaged
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
