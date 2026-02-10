"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar after scrolling past the hero (100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY < heroHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Research", href: "/chapters" },
    { name: "Team", href: "/team" },
    { name: "$15K", href: "/rising-ventures" },
    { name: "Engage", href: "/engage" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 relative">
          {/* Logo - Positioned Left */}
          <div className="absolute left-0">
            <Link href="/">
              <Image
                src="/logo-transparent.png"
                alt="Youth Forge"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
              />
            </Link>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Get Engaged Button - Positioned Right */}
          <div className="hidden md:block absolute right-0">
            <Link
              href="/engage"
              className="px-6 py-2.5 border border-white text-white text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              Get Engaged
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-0 p-2 rounded transition-colors text-white hover:bg-white/10"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl -mx-6 px-6"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-base font-medium text-white/80 hover:text-white 
                             uppercase tracking-wider transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/engage"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-4 px-6 py-3 text-white text-base font-semibold 
                           text-center uppercase tracking-wider"
                  style={{ backgroundColor: '#000080' }}
                >
                  Get Engaged
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
