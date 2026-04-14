import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const projects = [
  {
    title: 'School Management System',
    description: 'A comprehensive system to manage student records, grades, attendance, and academic operations in educational institutions.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500',
    icon: '🏫',
  },
  {
    title: 'Online Food Ordering System',
    description: 'Full-featured food ordering platform with menu management, cart functionality, and order tracking built with Django.',
    tech: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
    color: 'from-purple-500 to-pink-500',
    icon: '🍔',
  },
  {
    title: 'Online Shop',
    description: 'E-commerce application with product listings, user authentication, shopping cart, and checkout functionality.',
    tech: ['Python', 'Django', 'SQLite', 'CSS'],
    color: 'from-green-500 to-teal-500',
    icon: '🛒',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projects" subtitle="Things I've built" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-default"
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 rounded-md text-xs bg-gray-800 text-gray-300 border border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
