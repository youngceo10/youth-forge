'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-yf-blue-50/20 to-white px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold text-yf-blue-300/20 leading-none">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yf-blue-50/50 rounded-full mb-4">
              <Search className="w-4 h-4 text-yf-blue-200" />
              <span className="text-sm font-medium text-yf-blue-200">
                Page Not Found
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-yf-blue-300 mb-4">
              Looks Like You&apos;ve Wandered Off Course
            </h2>

            <p className="text-lg text-yf-blue-200/80 max-w-lg mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Let&apos;s get you back on track to breaking down barriers for young entrepreneurs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-yf-blue-300 text-white rounded-lg font-medium hover:bg-yf-blue-200 transition-all hover:shadow-lg hover:shadow-yf-blue-300/30"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yf-blue-300 text-yf-blue-300 rounded-lg font-medium hover:bg-yf-blue-50/50 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Learn About Us
                </Link>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="pt-12 border-t border-yf-blue-50 mt-12">
              <p className="text-sm text-yf-blue-200/70 mb-4">
                Looking for something specific?
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { label: 'Chapters', href: '/chapters' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-yf-blue-300 hover:text-yf-blue-200 hover:bg-yf-blue-50/30 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
