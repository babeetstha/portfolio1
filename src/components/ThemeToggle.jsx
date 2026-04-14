import { FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FiSun size={18} className="text-yellow-400" /> : <FiMoon size={18} className="text-blue-600" />}
    </motion.button>
  )
}
