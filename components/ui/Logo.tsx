function LogoIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
      {/* Purple circle background */}
      <circle cx="22" cy="22" r="22" fill="#7c3aed" />

      {/* Crayon — vertical, pointing down */}

      {/* Flat top cap */}
      <rect x="15" y="3" width="14" height="5" rx="2" fill="#E5B800" />

      {/* Main yellow body */}
      <rect x="15" y="8" width="14" height="24" fill="#FFD700" />

      {/* Label band */}
      <rect x="15" y="22" width="14" height="7" fill="#FFC107" />
      {/* Label lines */}
      <line x1="17" y1="24.5" x2="27" y2="24.5" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
      <line x1="17" y1="27"   x2="27" y2="27"   stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />

      {/* Wooden sharpened cone */}
      <polygon points="15,32 29,32 22,41" fill="#D4A843" />
      {/* Wood grain highlight */}
      <line x1="22" y1="32" x2="22" y2="40" stroke="#C49030" strokeWidth="0.8" opacity="0.5" />

      {/* Colored tip */}
      <polygon points="19,39.5 25,39.5 22,43" fill="#FF3366" />
    </svg>
  )
}

interface LogoProps {
  iconSize?: number
  className?: string
  textClassName?: string
}

export default function Logo({ iconSize = 44, className = '', textClassName = 'text-2xl' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon size={iconSize} />
      <span className={`font-bold leading-none ${textClassName}`}>
        <span style={{ color: '#FF3366' }}>C</span>
        <span style={{ color: '#FF8800' }}>o</span>
        <span style={{ color: '#FFB300' }}>l</span>
        <span style={{ color: '#22CC44' }}>o</span>
        <span style={{ color: '#3399FF' }}>r</span>
        <span style={{ color: '#7c3aed' }}> A Story</span>
      </span>
    </div>
  )
}
