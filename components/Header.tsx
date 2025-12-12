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
    { name: 'Research Network', href: '/chapters' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-yf-primary-200/30 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
              <StaticLogo className="w-full h-full transition-transform group-hover:scale-105" />
            </div>
            <div>
              <div className="font-bold text-lg sm:text-xl text-yf-primary-700 tracking-tight">
                Youth Forge
              </div>
              <div className="hidden sm:block text-xs text-yf-primary-600 -mt-1">
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
                  className="px-4 py-2 text-sm font-medium text-yf-primary-700 hover:text-yf-primary-800 hover:bg-yf-primary-50 rounded transition-all"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="ml-4 px-6 py-2 bg-yf-primary text-white text-sm font-medium rounded hover:bg-yf-primary-600 transition-all shadow-sm hover:shadow-md"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-yf-primary-700 hover:bg-yf-primary-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-yf-primary focus:ring-offset-2"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
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
                    className="block px-4 py-2 text-sm font-medium text-yf-primary-700 hover:text-yf-primary-800 hover:bg-yf-primary-50 rounded transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mx-4 mt-4 px-6 py-2 bg-yf-primary text-white text-sm font-medium text-center rounded hover:bg-yf-primary-600 transition-all"
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
