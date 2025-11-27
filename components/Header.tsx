'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import StaticLogo from './StaticLogo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Chapters', href: '/chapters' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-yf-blue-100/20">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex-shrink-0">
              <Image 
                src="/logo-transparent.png" 
                alt="Youth Forge Logo" 
                width={40}
                height={40}
                className="w-full h-full object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div>
              <div className="font-bold text-lg sm:text-xl text-yf-blue-300 tracking-tight">
                Youth Forge
              </div>
              <div className="hidden sm:block text-xs text-yf-blue-100 -mt-1">
                Challenging the status quo
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-yf-blue-200 hover:text-yf-blue-300 hover:bg-yf-blue-50/30 rounded transition-all"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="ml-4 px-6 py-2 bg-yf-blue-300 text-white text-sm font-medium rounded hover:bg-yf-blue-200 transition-all shadow-sm hover:shadow-md"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-yf-blue-300 hover:bg-yf-blue-50/30 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-yf-blue-300 focus:ring-offset-2"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-yf-blue-200 hover:text-yf-blue-300 hover:bg-yf-blue-50/30 rounded transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mx-4 mt-4 px-6 py-2 bg-yf-blue-300 text-white text-sm font-medium text-center rounded hover:bg-yf-blue-200 transition-all"
                >
                  Get Involved
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
