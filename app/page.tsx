"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

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
        <div className="absolute bottom-24 left-0 right-0 z-20 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tight whitespace-nowrap"
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

      {/* What is Youth Forge Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          {/* Top Row - Subheading and Main Heading side by side */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20 lg:mb-28">
            {/* Left - Subheading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-start gap-3"
            >
              <span className="text-black font-bold">▬</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-black">
                What is Youth Forge?
              </span>
            </motion.div>

            {/* Right - Main Heading */}
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight"
            >
              Youth Forge is a global research org uncovering challenges young entrepreneurs face.
            </motion.h2>
          </div>

          {/* Bottom Row - Images, Description, Flags (smaller scale) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
                transition={{ delay: 0.2 }}
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
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                We bridge data gaps for young founders to break systemic age barriers in innovation across policy tables, age restrictions for mentorship resources, and networking opportunities and funding access.
              </p>

              {/* Countries Section */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-black mb-4">
                  Already engaging with founders from
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {countries.map((country, index) => (
                    <motion.div
                      key={country.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
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
              </div>

              {/* Bigger Image - Mobile Only (after flags) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
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

      {/* CTA Section - Join the Movement */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-yf-primary via-yf-primary-400 to-yf-primary-500 text-white relative overflow-hidden">
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
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Search className="w-16 h-16 sm:w-20 sm:h-20 text-white/90" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Help us create a more supportive environment where young founders
              can thrive and contribute meaningfully to the economy and society.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-yf-primary-700 rounded-lg font-semibold hover:bg-yf-primary-50 transition-all hover:shadow-2xl shadow-xl"
                >
                  Get Involved
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
