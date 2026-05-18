import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import GlassCard from '../ui/GlassCard'
import { FiMapPin } from 'react-icons/fi'

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies', value: '15+' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <div className="flex items-center gap-2 mb-4 text-blue-400">
                <FiMapPin />
                <span className="text-gray-600 dark:text-gray-400">Kathmandu, Nepal</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                Detail-oriented Software Engineer with hands-on experience in SQL development, database design, and ETL processes within enterprise environments. Skilled in writing optimized queries, stored procedures, and functions to support high-performance applications. Experienced in Pentaho Data Integration for building reliable data pipelines. Strong analytical mindset with a solid academic background in Information Technology and a passion for solving complex data problems.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">SQL Developer</span>
                <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">ETL Specialist</span>
                <span className="px-3 py-1 rounded-full text-xs bg-pink-500/20 text-pink-300 border border-pink-500/30">Backend Engineer</span>
                <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300 border border-green-500/30">Data Engineer</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <GlassCard className="p-6 flex items-center gap-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
