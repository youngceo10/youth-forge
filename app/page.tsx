"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";
import ScrollTextSection from "@/components/ScrollTextSection";
import { useState, useRef } from "react";

// CTA Section Component with cursor image reveal
function CTASection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredWord, setHoveredWord] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastImageChange = useRef(0);

  const images = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  ];

  const words = "READY TO RESHAPE SYSTEMS WHERE AGE IS IRRELEVANT FOR INNOVATION?".split(" ");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      
      // Change image every 150ms of movement
      const now = Date.now();
      if (now - lastImageChange.current > 150) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        lastImageChange.current = now;
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white min-h-screen flex items-center">
      <div className="w-full px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Interactive Text Container */}
          <div
            ref={containerRef}
            className="relative cursor-none mb-12 sm:mb-16"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setHoveredWord(null);
            }}
          >
            {/* Text with individually hoverable words */}
            <h2
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] relative z-10 flex flex-wrap justify-center gap-x-[0.2em] max-w-7xl mx-auto"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              {words.map((word, index) => (
                <span
                  key={index}
                  className="transition-all duration-200 inline-block"
                  style={{
                    color: hoveredWord === index ? 'transparent' : '#000080',
                    WebkitTextStroke: hoveredWord === index ? '2px #000080' : 'none',
                    textShadow: hoveredWord === index ? '0 0 30px rgba(0, 0, 128, 0.3)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredWord(index)}
                  onMouseLeave={() => setHoveredWord(null)}
                >
                  {word}
                </span>
              ))}
            </h2>

            {/* Cursor Following Image */}
            <AnimatePresence>
              {isHovering && hoveredWord !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="pointer-events-none absolute z-20"
                  style={{
                    left: mousePos.x - 100,
                    top: mousePos.y - 75,
                    width: 200,
                    height: 150,
                  }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={images[currentImageIndex]}
                      alt="Youth Forge"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                    {/* Icy overlay effect */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(0,0,128,0.2) 50%, rgba(255,255,255,0.4) 100%)',
                        backdropFilter: 'blur(1px)',
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/engage"
              className="inline-flex items-center gap-2 px-10 py-5 text-white rounded-lg font-semibold transition-all text-lg"
              style={{ backgroundColor: '#000080' }}
            >
              Get Engaged
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const countries = [
    { name: "USA", code: "us" },
    { name: "Canada", code: "ca" },
    { name: "India", code: "in" },
    { name: "Pakistan", code: "pk" },
    { name: "Greece", code: "gr" },
    { name: "Japan", code: "jp" },
    { name: "UAE", code: "ae" },
    { name: "Ghana", code: "gh" },
    { name: "Nigeria", code: "ng" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            crossOrigin="anonymous"
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/djrdh7thl/video/upload/v1768330462/Untitled-2_icd2xt.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-24 left-0 right-0 z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tight"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
          >
            YOUTH FORGE
          </motion.h1>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/60 uppercase tracking-widest">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Sponsored & Recognized By Strip */}
      <section className="py-4 overflow-hidden" style={{ backgroundColor: '#000080' }}>
        <div className="flex items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/60 px-6 whitespace-nowrap">
            Sponsored & Recognized by
          </span>
          <div className="flex-1 overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ 
                repeat: Infinity, 
                duration: 15, 
                ease: 'linear' 
              }}
              className="flex items-center whitespace-nowrap"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-white font-bold text-lg uppercase tracking-wider px-6">TEDx</span>
                  <span className="text-white/40">◆</span>
                  <span className="text-white font-bold text-lg uppercase tracking-wider px-6">Rogers TV</span>
                  <span className="text-white/40">◆</span>
                  <span className="text-white font-bold text-lg uppercase tracking-wider px-6">Toronto News</span>
                  <span className="text-white/40">◆</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Youth Forge Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          {/* Top Row - Subheading and Main Heading side by side */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-12 lg:mb-16">
            {/* Left - Subheading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-start gap-3"
            >
              <span className="font-bold" style={{ color: '#000080' }}>▬</span>
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#000080' }}>
                What is Youth Forge?
              </span>
            </motion.div>

            {/* Right - Main Heading */}
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
              style={{ color: '#000080' }}
            >
              A global research org uncovering challenges young entrepreneurs face.
            </motion.h2>
          </div>

          {/* Bottom Row - Images, Description, Flags (smaller scale) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content - Smaller text and image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:max-w-md"
            >
              {/* Smaller Image - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6 hidden lg:block"
              >
                <Image
                  src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332542/EDYN9_ew0crh.png"
                  alt="Youth Forge community"
                  width={400}
                  height={240}
                  className="rounded object-cover w-full"
                />
              </motion.div>

              {/* Description - Smaller text */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-base text-gray-600 leading-relaxed mb-8"
              >
                We bridge data gaps for young founders to break systemic age barriers in innovation across policy tables, age restrictions for mentorship resources, and networking opportunities and funding access.
              </motion.p>

              {/* Countries Section */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#000080' }}>
                  Already engaging with founders from
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {countries.map((country, index) => (
                    <motion.div
                      key={country.name}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={`https://flagcdn.com/w80/${country.code}.png`}
                        alt={country.name}
                        width={50}
                        height={34}
                        className="rounded-sm shadow-md border border-gray-200"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Bigger Image - Mobile Only (after flags) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 lg:hidden"
              >
                <Image
                  src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332531/image2_tdasui.jpg"
                  alt="Young entrepreneurs collaborating"
                  width={700}
                  height={500}
                  className="rounded object-cover w-full"
                />
              </motion.div>
            </motion.div>

            {/* Right Image - Larger (Desktop Only) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-full"
            >
              <Image
                src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332531/image2_tdasui.jpg"
                alt="Young entrepreneurs collaborating"
                width={700}
                height={900}
                className="rounded object-cover w-full h-full sticky top-24"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* White Space */}
      <div className="h-16 lg:h-24 bg-white"></div>

      {/* Scroll Text Over Images Section */}
      <ScrollTextSection />

      {/* CTA Section - Ready to Contribute */}
      <CTASection />
    </div>
  );
}
