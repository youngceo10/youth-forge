"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Globe2, ArrowRight, BarChart3, Target, Search } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  const stats = [
    { number: 8, label: "Countries", color: "#7BC043", suffix: "+" },
    { number: 50, label: "Young Researchers", color: "#9ACDE6", suffix: "+" },
    { number: 1000, label: "Youth Surveyed", color: "#EF3E36", suffix: "+" },
    { number: 25, label: "Max Age Focus", color: "#FFDC00", suffix: "" },
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

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-4xl sm:text-5xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yf-primary-700 mb-6">
              Our Two-Step Solution
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re building a global movement to support youth
              entrepreneurship through research-driven advocacy and policy
              change.
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
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(123, 192, 67, 0.15)",
                }}
                className="relative bg-white border-2 border-yf-primary-100 rounded-2xl p-8 hover:border-yf-accent-green/30 transition-all shadow-lg"
              >
                <div className="w-16 h-16 bg-yf-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-yf-accent-green" />
                </div>
                <div className="text-yf-accent-green font-bold text-sm mb-2">
                  STEP #1
                </div>
                <h3 className="text-2xl font-bold text-yf-primary-700 mb-4">
                  Global Research
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We conduct comprehensive research across multiple countries
                  including Canada, UAE, Greece, Japan, Pakistan, Uganda,
                  Nigeria, and Ghana to identify the critical challenges faced
                  by teen entrepreneurs and build awareness.
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
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 116, 217, 0.15)",
                }}
                className="relative bg-white border-2 border-yf-primary-100 rounded-2xl p-8 hover:border-yf-accent-blue/30 transition-all shadow-lg"
              >
                <div className="w-16 h-16 bg-yf-accent-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-yf-accent-blue" />
                </div>
                <div className="text-yf-accent-blue font-bold text-sm mb-2">
                  STEP #2
                </div>
                <h3 className="text-2xl font-bold text-yf-primary-700 mb-4">
                  Policy Advocacy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We utilize our data by sharing it with policy tables to break
                  barriers for young founders, opening doors to mentorship,
                  funding, and meaningful participation in entrepreneurial
                  ecosystems.
                </p>
              </motion.div>
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
