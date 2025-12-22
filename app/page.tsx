"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Globe2, ArrowRight, BarChart3, Target, Search } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import TypewriterText from "@/components/TypewriterText";

export default function Home() {
  const stats = [
    { number: 8, label: "Countries", color: "#7BC043", suffix: "+" },
    { number: 50, label: "Young Researchers", color: "#9ACDE6", suffix: "+" },
    { number: 1000, label: "Youth Surveyed", color: "#EF3E36", suffix: "+" },
    { number: 25, label: "Max Age Focus", color: "#FFDC00", suffix: "" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Magnifying Glass Animation */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-yf-primary-50 to-white overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-yf-primary-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-yf-primary-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text with Magnifying Glass Animation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mb-8"
              >
                {/* Tagline with Typewriter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-4 text-xl sm:text-2xl font-semibold text-yf-primary-600"
                >
                  <TypewriterText text="Challenging the status quo" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-yf-primary-100/50 rounded-full"
              >
                <Globe2 className="w-4 h-4 text-yf-primary-600" />
                <span className="text-sm font-medium text-yf-primary-700">
                  Operating in 8+ Countries Worldwide
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                A global research network uncovering the hidden challenges faced
                by young entrepreneurs under 18, breaking down barriers through
                data-driven advocacy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-yf-primary text-white font-semibold rounded-lg hover:bg-yf-primary-600 transition-all hover:shadow-lg hover:shadow-yf-primary/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yf-primary focus:ring-offset-2"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/chapters"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-yf-primary-700 font-semibold rounded-lg border-2 border-yf-primary hover:bg-yf-primary-50 transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yf-primary focus:ring-offset-2"
                >
                  Research Network
                  <Globe2 className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image - Diverse Youth Collaborating */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Young entrepreneur writing business plan and research notes"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yf-primary/20 to-transparent"></div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-yf-accent-yellow rounded-full opacity-80 blur-xl"
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-yf-accent-green/60 rounded-full opacity-70 blur-2xl"
              ></motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-16 sm:mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center p-6 rounded-xl bg-white shadow-lg border border-yf-primary-100 hover:shadow-xl hover:shadow-yf-primary/10 transition-all"
                >
                  <div
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
