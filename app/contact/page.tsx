'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FlaskConical, Globe, BarChart, Pencil } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'general',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const opportunities = [
    {
      icon: FlaskConical,
      title: 'Research Intern',
      description: 'Join our research team and help conduct surveys and analyze data from young entrepreneurs worldwide.',
      color: 'yf-accent-green'
    },
    {
      icon: Globe,
      title: 'Chapter Leader',
      description: 'Start or lead a Youth Forge chapter in your city and build a community of young entrepreneurs.',
      color: 'yf-accent-blue'
    },
    {
      icon: BarChart,
      title: 'Data Analyst',
      description: 'Help us process and visualize research data to create impactful reports and presentations.',
      color: 'yf-accent-yellow'
    },
    {
      icon: Pencil,
      title: 'Content Creator',
      description: 'Share stories and insights from our research through blog posts, social media, and publications.',
      color: 'yf-accent-red'
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-yf-primary-100/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-yf-primary-700 mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-yf-primary-600/80 leading-relaxed">
              Join our global movement to break down barriers for young entrepreneurs. 
              Whether you&apos;re a researcher, founder, or advocate, there&apos;s a place for you at Youth Forge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-yf-primary-700 mb-6">
              Ways to Contribute
            </h2>
            <p className="text-xl text-yf-primary-600/80 max-w-3xl mx-auto">
              We&apos;re always looking for passionate young people to join our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {opportunities.map((opp, index) => {
              const Icon = opp.icon
              return (
                <motion.div
                  key={opp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 border-2 border-yf-primary-100 hover:border-yf-primary-200 hover:shadow-xl transition-all group"
                >
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ 
                      backgroundColor: opp.color === 'yf-accent-green' ? '#7BC04310' :
                                      opp.color === 'yf-accent-blue' ? '#0074D910' :
                                      opp.color === 'yf-accent-yellow' ? '#FFDC0010' : '#EF3E3610'
                    }}
                  >
                    <Icon 
                      className="w-7 h-7" 
                      style={{ 
                        color: opp.color === 'yf-accent-green' ? '#7BC043' :
                               opp.color === 'yf-accent-blue' ? '#0074D9' :
                               opp.color === 'yf-accent-yellow' ? '#FFDC00' : '#EF3E36'
                      }} 
                    />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ 
                      color: opp.color === 'yf-accent-green' ? '#7BC043' :
                             opp.color === 'yf-accent-blue' ? '#0074D9' :
                             opp.color === 'yf-accent-yellow' ? '#FFDC00' : '#EF3E36'
                    }}
                  >
                    {opp.title}
                  </h3>
                  <p className="text-yf-primary-600/70 text-sm leading-relaxed">
                    {opp.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-white to-yf-primary-100/20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-yf-primary-700 mb-6">
                Send Us a Message
              </h2>
              <p className="text-yf-primary-600/80 mb-8">
                Have questions or want to learn more? Fill out the form and we&apos;ll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-yf-primary-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-yf-primary-100 rounded-lg focus:outline-none focus:border-yf-primary-700 focus:ring-2 focus:ring-yf-primary-700/20 transition-colors"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-yf-primary-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-yf-primary-100 rounded-lg focus:outline-none focus:border-yf-primary-700 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-yf-primary-700 mb-2">
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-yf-primary-100 rounded-lg focus:outline-none focus:border-yf-primary-700 transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="research">Research Internship</option>
                    <option value="chapter">Starting a Chapter</option>
                    <option value="partnership">Partnership</option>
                    <option value="volunteer">Volunteering</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-yf-primary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-yf-primary-100 rounded-lg focus:outline-none focus:border-yf-primary-700 transition-colors resize-none"
                    placeholder="Tell us more about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-yf-primary-700 text-white rounded-lg font-medium hover:bg-yf-primary-600 transition-all hover:shadow-lg"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl p-8 border-2 border-yf-primary-100">
                <h3 className="text-2xl font-bold text-yf-primary-700 mb-6">
                  Quick Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-yf-accent-blue/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-yf-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-yf-primary-700 mb-1">Email</div>
                      <a href="mailto:hello@youthforge.org" className="text-yf-primary-600/70 hover:text-yf-primary-700 transition-colors">
                        hello@youthforge.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-yf-accent-green/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-yf-accent-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-yf-primary-700 mb-1">Response Time</div>
                      <div className="text-yf-primary-600/70">
                        Within 48 hours
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-yf-accent-yellow/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-yf-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-yf-primary-700 mb-1">Global Presence</div>
                      <div className="text-yf-primary-600/70">
                        8+ countries worldwide
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yf-primary-700 to-yf-primary-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Join Our Community
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Connect with young entrepreneurs and researchers from around the world. 
                  Share experiences, learn from each other, and build lasting relationships.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center font-medium transition-all"
                  >
                    Join Discord
                  </a>
                  <a 
                    href="#" 
                    className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center font-medium transition-all"
                  >
                    Follow Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
