'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Globe2, ArrowRight, BarChart3, Target, Search } from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'
import TypewriterText from '@/components/TypewriterText'

export default function Home() {
  const stats = [
    { number: 8, label: 'Countries', color: '#7BC043', suffix: '+' },
    { number: 50, label: 'Young Researchers', color: '#9ACDE6', suffix: '+' },
    { number: 1000, label: 'Youth Surveyed', color: '#EF3E36', suffix: '+' },
    { number: 18, label: 'Max Age Focus', color: '#FFDC00', suffix: '' },
  ]



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
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                  <span className="text-yf-primary-700">Youth</span>{' '}
                  <span className="text-yf-primary-600">Forge</span>
                </h1>

                {/* Animated Globe Icon */}
                <motion.div 
                  className="mb-6 flex"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-20 h-20 sm:w-24 sm:h-24"
                  >
                    <svg viewBox="0 0 502 502" className="w-full h-full drop-shadow-lg">
                      <path fill="#50A5DC" d="M122.632,388.606c-10.082-3.477-18.913-9.854-25.383-18.332l-16.297-21.354c-1.807-2.367-2.807-5.251-2.855-8.229l-0.731-45.341c-0.112-6.93,4.887-12.888,11.73-13.983c7.326-1.172,12.449-7.88,11.652-15.256l-1.392-12.88c-0.418-3.865-2.432-7.38-5.555-9.695l-10.27-7.614c-9.325-6.914-20.626-10.646-32.235-10.646h-6.779c-2.892,0-5.78-0.232-8.636-0.693l-23.646-3.822C10.772,230.649,10,240.741,10,251c0,81.638,47.847,152.971,119.109,191.536l5.029-35.085C135.318,399.223,130.49,391.316,122.632,388.606z"/>
                      <path fill="#50A5DC" d="M465.577,316.05l-1.403-1.733c-3.948-4.877-10.547-6.726-16.454-4.61l-10.666,3.821c-6.744,2.416-13.953,3.249-21.07,2.437l-3.132-0.358c-16.603-1.896-30.932-12.509-37.585-27.839c-3.781-8.713-4.819-18.371-2.975-27.688l6.45-32.595c1.738-8.781,5.959-16.878,12.163-23.33l2.546-2.648c10.63-11.055,26.005-16.193,41.145-13.751l16.915,2.728c0.375,0.061,0.748,0.135,1.118,0.225l32.596,7.878c-5.516-20.989-14.262-40.814-25.74-58.999l-20.491-2.941c-0.296-0.042-0.589-0.097-0.88-0.164l-22.428-5.15c-6.9-1.584-13.426,3.801-13.181,10.876c0.131,3.77-1.719,7.333-4.877,9.396l-14.522,9.484c-3.382,2.209-7.715,2.341-11.225,0.341l-20.453-11.649c-5.684-3.237-8.56-9.828-7.068-16.196l4.602-19.644c1.529-6.527,7.263-11.204,13.964-11.391l17.329-0.482c8.037-0.224,14.418-6.837,14.353-14.878l-0.118-14.557C354.402,45.221,304.759,29,251,29c-14.869,0-29.42,1.249-43.545,3.623c8.568,5.927,15.471,14.35,19.523,24.585l0.568,1.435c1.742,4.402,2.9,9.014,3.443,13.717l0.504,4.364c1.1,9.529-0.353,19.179-4.209,27.962l-5.439,12.388c-4.349,9.906-11.566,18.281-20.721,24.045l-6.776,4.266c-3.815,2.402-6.037,6.676-5.812,11.179l0.915,18.302c0.38,7.597-6.069,13.762-13.641,13.041c-4.148-0.395-7.825-2.835-9.8-6.504l-8.322-15.454c-1.608-2.986-4.363-5.189-7.63-6.101l-29.409-8.207c-5.476-1.528-11.315-1.076-16.49,1.276l-7.003,3.183c-10.463,4.756-16.127,16.225-13.542,27.424h0c1.018,4.412,3.255,8.448,6.457,11.65l19.107,19.107c1.328,1.328,2.587,2.725,3.77,4.184l13.1,16.157c3.87,4.773,9.694,7.538,15.839,7.519l35.689-0.109c7.246-0.022,13.956,3.818,17.607,10.077c2.879,4.935,7.702,8.429,13.289,9.626l13.372,2.866c5.785,1.24,10.742,4.94,13.575,10.134l6.459,11.841c1.611,2.954,4.079,5.351,7.078,6.875l30.352,15.425c6.262,3.182,9.855,9.95,8.984,16.92c-0.503,4.024-2.456,7.726-5.493,10.413l-11.53,10.2c-2.039,1.804-3.605,4.08-4.561,6.629l-2.512,6.7c-1.741,4.643-5.329,8.356-9.909,10.255l-12.28,5.092c-6.689,2.773-11.05,9.302-11.05,16.544c0,2.896-0.703,5.75-2.047,8.315l-35.003,66.774C212.211,470.813,231.327,473,251,473c96.678,0,180.045-52.447,218.44-128.132l-0.581-19.959C468.765,321.677,467.612,318.564,465.577,316.05z"/>
                      <path fill="#7AC943" d="M230.956,391.627c0-7.241,4.361-13.77,11.05-16.544l12.28-5.092c4.58-1.899,8.168-5.612,9.909-10.255l2.512-6.7c0.956-2.549,2.522-4.825,4.561-6.629l11.53-10.2c3.037-2.687,4.99-6.389,5.493-10.413c0.871-6.97-2.722-13.738-8.984-16.92l-30.352-15.425c-3-1.524-5.467-3.921-7.078-6.875l-6.459-11.841c-2.833-5.194-7.79-8.895-13.575-10.134l-13.372-2.866c-5.586-1.197-10.41-4.691-13.289-9.626c-3.651-6.259-10.36-10.099-17.607-10.077l-35.689,0.109c-6.145,0.019-11.969-2.746-15.839-7.519l-13.1-16.157c-1.183-1.459-2.441-2.856-3.77-4.184L90.07,195.174c-3.201-3.201-5.439-7.238-6.457-11.65h0c-2.584-11.199,3.079-22.668,13.542-27.424l7.003-3.183c5.175-2.352,11.014-2.804,16.49-1.276l29.409,8.207c3.267,0.912,6.022,3.115,7.63,6.101l8.322,15.454c1.975,3.669,5.652,6.109,9.8,6.504c7.572,0.721,14.021-5.444,13.641-13.041l-0.915-18.302c-0.225-4.503,1.997-8.777,5.812-11.179l6.776-4.266c9.155-5.764,16.372-14.139,20.721-24.045l5.439-12.388c3.856-8.783,5.309-18.433,4.209-27.962l-0.504-4.364c-0.543-4.703-1.7-9.315-3.443-13.717l-0.568-1.435c-4.051-10.235-10.955-18.658-19.523-24.585C105.722,49.726,26.298,125.663,12.235,220.76l23.646,3.822c2.855,0.461,5.743,0.693,8.636,0.693h6.779c11.609,0,22.91,3.732,32.235,10.646l10.27,7.614c3.123,2.315,5.137,5.83,5.555,9.695l1.392,12.88c0.797,7.376-4.325,14.084-11.652,15.256c-6.844,1.095-11.842,7.054-11.73,13.983l0.731,45.341c0.048,2.977,1.049,5.861,2.855,8.229l16.297,21.354c6.47,8.478,15.301,14.856,25.383,18.332c7.858,2.71,12.686,10.617,11.507,18.845l-5.029,35.085c19.943,10.793,41.719,19.015,64.797,24.18l35.003-66.774C230.253,397.376,230.956,394.523,230.956,391.627z"/>
                      <path fill="#7AC943" d="M380.255,102.065l-17.329,0.482c-6.701,0.186-12.435,4.864-13.964,11.391l-4.602,19.644c-1.492,6.368,1.384,12.959,7.068,16.196l20.453,11.649c3.51,1.999,7.843,1.867,11.225-0.341l14.522-9.484c3.158-2.063,5.008-5.626,4.877-9.396c-0.246-7.075,6.281-12.461,13.181-10.876l22.428,5.15c0.291,0.067,0.585,0.122,0.88,0.164l20.491,2.941c-16.53-26.19-38.705-48.98-64.995-66.956l0.118,14.557C394.673,95.228,388.292,101.842,380.255,102.065z"/>
                      <path fill="#7AC943" d="M485.225,198.585l-32.596-7.878c-0.37-0.089-0.742-0.164-1.118-0.225l-16.915-2.728c-15.141-2.442-30.516,2.697-41.145,13.751l-2.546,2.648c-6.204,6.452-10.426,14.549-12.163,23.33l-6.45,32.595c-1.844,9.317-0.806,18.975,2.975,27.688c6.653,15.33,20.982,25.943,37.585,27.839l3.132,0.358c7.117,0.813,14.326-0.021,21.07-2.437l10.666-3.821c5.907-2.116,12.506-0.267,16.454,4.61l1.403,1.733c2.035,2.514,3.188,5.626,3.282,8.859l0.581,19.959C483.905,316.355,492,284.551,492,251C492,232.942,489.642,215.393,485.225,198.585z"/>
                    </svg>
                  </motion.div>
                </motion.div>

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
                A global research network uncovering the hidden challenges faced by young 
                entrepreneurs under 18, breaking down barriers through data-driven advocacy.
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
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop&q=80"
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
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-yf-accent-yellow rounded-full opacity-80 blur-xl"
              ></motion.div>
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -10, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
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
                  <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: stat.color }}>
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
              We&apos;re building a global movement to support youth entrepreneurship through 
              research-driven advocacy and policy change.
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
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(123, 192, 67, 0.15)' }}
                className="relative bg-white border-2 border-yf-primary-100 rounded-2xl p-8 hover:border-yf-accent-green/30 transition-all shadow-lg"
              >
                <div className="w-16 h-16 bg-yf-accent-green/10 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-yf-accent-green" />
                </div>
                <div className="text-yf-accent-green font-bold text-sm mb-2">STEP #1</div>
                <h3 className="text-2xl font-bold text-yf-primary-700 mb-4">
                  Global Research
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We conduct comprehensive research across multiple countries including Canada, UAE, 
                  Greece, Japan, Pakistan, Uganda, Nigeria, and Ghana to identify the critical 
                  challenges faced by teen entrepreneurs and build awareness.
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
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 116, 217, 0.15)' }}
                className="relative bg-white border-2 border-yf-primary-100 rounded-2xl p-8 hover:border-yf-accent-blue/30 transition-all shadow-lg"
              >
                <div className="w-16 h-16 bg-yf-accent-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-yf-accent-blue" />
                </div>
                <div className="text-yf-accent-blue font-bold text-sm mb-2">STEP #2</div>
                <h3 className="text-2xl font-bold text-yf-primary-700 mb-4">
                  Policy Advocacy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We utilize our data by sharing it with policy tables to break barriers for young 
                  founders, opening doors to mentorship, funding, and meaningful participation in 
                  entrepreneurial ecosystems.
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
              Help us create a more supportive environment where young founders can thrive 
              and contribute meaningfully to the economy and society.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-yf-primary-700 rounded-lg font-semibold hover:bg-yf-primary-50 transition-all hover:shadow-2xl shadow-xl"
                >
                  Get Involved
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
  )
}
