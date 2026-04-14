import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import GlassCard from '../ui/GlassCard'
import { FiDatabase, FiCode, FiTool } from 'react-icons/fi'

const skillGroups = [
  {
    title: 'Databases',
    icon: <FiDatabase className="text-blue-400" size={22} />,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'MS SQL Server', level: 95 },
      { name: 'Oracle', level: 80 },
    ],
  },
  {
    title: 'SQL',
    icon: <FiCode className="text-purple-400" size={22} />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Complex Queries & Joins', level: 95 },
      { name: 'Stored Procedures', level: 92 },
      { name: 'Query Optimization', level: 88 },
      { name: 'Subqueries & CTEs', level: 90 },
    ],
  },
  {
    title: 'ETL & Data Integration',
    icon: <FiTool className="text-green-400" size={22} />,
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'Pentaho Data Integration', level: 88 },
      { name: 'Data Pipelines', level: 85 },
      { name: 'Data Transformation', level: 87 },
    ],
  },
  {
    title: 'Programming & Tools',
    icon: <FiCode className="text-orange-400" size={22} />,
    color: 'from-orange-500 to-yellow-500',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 70 },
      { name: 'Bash Scripting', level: 75 },
      { name: 'C / C++', level: 65 },
      { name: 'GitHub', level: 85 },
    ],
  },
]

function SkillBar({ name, level, color, delay }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="text-gray-500 text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  {group.icon}
                  <h3 className={`font-semibold text-lg bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                    {group.title}
                  </h3>
                </div>
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.07}
                  />
                ))}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
