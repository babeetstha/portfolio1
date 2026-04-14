import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import GlassCard from '../ui/GlassCard'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact" subtitle="Let's work together" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Get In Touch</h3>
              <p className="text-gray-400 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <a href="mailto:babeetstha@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Email</p>
                    <p className="text-gray-200 group-hover:text-blue-400 transition-colors">babeetstha@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Phone</p>
                    <p className="text-gray-200">+977 9803258844</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a href="https://github.com/babeetstha" className="p-3 rounded-xl bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all" aria-label="GitHub">
                  <FiGithub size={20} />
                </a>
                <a href="https://linkedin.com" className="p-3 rounded-xl bg-white/5 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all" aria-label="LinkedIn">
                  <FiLinkedin size={20} />
                </a>
                <a href="mailto:babeetstha@gmail.com" className="p-3 rounded-xl bg-white/5 text-gray-300 hover:text-red-400 hover:bg-red-500/10 transition-all" aria-label="Email">
                  <FiMail size={20} />
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FiSend /> {sent ? 'Message Sent! ✓' : 'Send Message'}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
