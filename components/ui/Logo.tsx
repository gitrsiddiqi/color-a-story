function LogoIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
      {/* Purple circle background */}
      <circle cx="22" cy="22" r="22" fill="#7c3aed" />

      {/* Rainbow arcs — outermost to innermost, drawn before the book */}
      <path d="M 7 27 Q 22 1 37 27"  stroke="#FF3366" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M 9 27 Q 22 5 35 27"  stroke="#FF8800" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M 11 27 Q 22 9 33 27"  stroke="#FFD700" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M 13 27 Q 22 13 31 27" stroke="#22CC44" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M 15 27 Q 22 17 29 27" stroke="#3399FF" strokeWidth="2.8" fill="none" strokeLinecap="round" />

      {/* Open book — sits at the bottom of the circle */}
      <rect x="6" y="26" width="32" height="14" rx="2.5" fill="white" />
      {/* Spine */}
      <line x1="22" y1="26" x2="22" y2="40" stroke="#ddd6fe" strokeWidth="1.5" />
      {/* Left page lines */}
      <line x1="9"  y1="31" x2="20" y2="31" stroke="#ede9fe" strokeWidth="1" />
      <line x1="9"  y1="34.5" x2="20" y2="34.5" stroke="#ede9fe" strokeWidth="1" />
      <line x1="9"  y1="38" x2="20" y2="38" stroke="#ede9fe" strokeWidth="1" />
      {/* Right page lines */}
      <line x1="24" y1="31" x2="35" y2="31" stroke="#ede9fe" strokeWidth="1" />
      <line x1="24" y1="34.5" x2="35" y2="34.5" stroke="#ede9fe" strokeWidth="1" />
      <line x1="24" y1="38" x2="35" y2="38" stroke="#ede9fe" strokeWidth="1" />
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
