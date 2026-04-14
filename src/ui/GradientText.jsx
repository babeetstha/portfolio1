export default function GradientText({ children, className = '' }) {
  return (
    <span className={`bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}
