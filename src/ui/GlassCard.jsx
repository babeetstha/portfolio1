export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200/80 dark:border-white/10 rounded-2xl ${className}`}>
      {children}
    </div>
  )
}
