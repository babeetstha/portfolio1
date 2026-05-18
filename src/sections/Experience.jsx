import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import GlassCard from '../ui/GlassCard'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'CAS Total Solutions',
    duration: 'Nov 2022 – Present',
    type: 'Full-time',
    color: 'from-blue-500 to-purple-600',
    responsibilities: [
      'Developed and optimized SQL queries, stored procedures, and functions',
      'Built and maintained ETL workflows using Pentaho Data Integration',
      'Performed data extraction, transformation, and loading operations',
      'Improved query performance and handled database troubleshooting',
      'Automated repetitive tasks using Bash scripting',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'CAS Total Solutions',
    duration: 'Aug 2022 – Oct 2022',
    type: 'Internship',
    color: 'from-purple-500 to-pink-500',
    responsibilities: [
      'Assisted in SQL development and database maintenance tasks',
      'Supported ETL job execution, testing, and monitoring',
      'Learned enterprise data handling practices and standards',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience" subtitle="My professional journey" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 ring-4 ring-white dark:ring-gray-950 z-10 top-6" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 ${i % 2 === 0 ? 'md:pr-8 md:w-1/2' : 'md:pl-8 md:w-1/2 md:ml-auto'}`}>
                <GlassCard className="p-6 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className={`text-lg font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.role}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.duration}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">{exp.type}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, ri) => (
                      <li key={ri} className="flex gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
