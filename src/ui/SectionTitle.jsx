import { motion } from 'framer-motion'
import GradientText from './GradientText'

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        <GradientText>{title}</GradientText>
      </h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
    </motion.div>
  )
}
