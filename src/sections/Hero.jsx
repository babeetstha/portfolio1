import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'

const roles = [
  'Software Engineer',
  'SQL Developer',
  'Backend Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 100)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60)
      } else {
        timeout = setTimeout(() => {
          setRoleIndex(i => (i + 1) % roles.length)
          setTyping(true)
        }, 300)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-70 scale-105" />
            <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-5xl font-bold gradient-text">
                BS
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            BABIT SHRESTHA
          </span>
        </motion.h1>

        {/* Role typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-6 h-8"
        >
          <span className="text-blue-400 font-mono">{displayed}</span>
          <span className="animate-pulse text-purple-400">|</span>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Building efficient data-driven solutions with strong expertise in SQL, ETL, and backend systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <FiDownload /> Download CV
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-5 justify-center"
        >
          {[
            { icon: <FiGithub size={22} />, href: 'https://github.com/babeetstha', label: 'GitHub' },
            { icon: <FiLinkedin size={22} />, href: 'https://www.linkedin.com/in/babit-shrestha-052837178/', label: 'LinkedIn' },
            { icon: <FiMail size={22} />, href: 'mailto:babeetstha@gmail.com', label: 'Email' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
