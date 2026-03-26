interface LogoProps {
  height?: number
  className?: string
}

/**
 * Full wordmark logo — a single SVG badge.
 * "Color" in bold rainbow letters, "a Story" in white, on a deep purple pill
 * with a sparkle star and subtle gloss shine.
 * Scale via the `height` prop (width auto-calculated from viewBox ratio).
 */
export default function Logo({ height = 42, className = '' }: LogoProps) {
  const VW = 248
  const VH = 52
  const width = Math.round((height / VH) * VW)

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${VW} ${VH}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      <defs>
        {/* Rich purple pill background */}
        <linearGradient id="cas-pill" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%"   stopColor="#9333EA" />
          <stop offset="100%" stopColor="#3B0764" />
        </linearGradient>

        {/* Top-half gloss to give the pill a shiny, 3-D feel */}
        <linearGradient id="cas-gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="0.22" />
          <stop offset="100%" stopColor="white" stopOpacity="0"    />
        </linearGradient>
      </defs>

      {/* ── Pill background ── */}
      <rect x="1" y="1" width="246" height="50" rx="25" fill="url(#cas-pill)" />

      {/* Gloss over top half only */}
      <rect x="1" y="1" width="246" height="26" rx="25" fill="url(#cas-gloss)" />

      {/* ── Wordmark text ── */}
      {/*
        "Color" — each letter its own bold rainbow colour
        "a Story" — white, slightly lighter weight
        All on one <text> baseline so letters sit flush together naturally.
      */}
      <text
        y="37"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
        fontWeight="900"
        letterSpacing="-0.5"
      >
        <tspan x="22"  fontSize="30" fill="#FF2D55">C</tspan>
        <tspan         fontSize="30" fill="#FF8C00">o</tspan>
        <tspan         fontSize="30" fill="#FFD700">l</tspan>
        <tspan         fontSize="30" fill="#22CC55">o</tspan>
        <tspan         fontSize="30" fill="#4DAAFF">r</tspan>
        <tspan         fontSize="23" fill="rgba(255,255,255,0.93)" fontWeight="800" dx="5">a Story</tspan>
      </text>

      {/* ── Decorations ── */}

      {/* 4-point sparkle star — sits top-right inside the pill */}
      <g transform="translate(228, 14)">
        <line x1="-5.5" y1="0"    x2="5.5"  y2="0"    stroke="white" strokeWidth="2"   strokeLinecap="round" opacity="0.85"/>
        <line x1="0"    y1="-5.5" x2="0"    y2="5.5"  stroke="white" strokeWidth="2"   strokeLinecap="round" opacity="0.85"/>
        <line x1="-3.2" y1="-3.2" x2="3.2"  y2="3.2"  stroke="white" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
        <line x1="3.2"  y1="-3.2" x2="-3.2" y2="3.2"  stroke="white" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
      </g>

      {/* Small dot top-left — balances the sparkle */}
      <circle cx="12"  cy="15" r="2.5" fill="white" opacity="0.3" />

      {/* Tiny dot bottom-right corner */}
      <circle cx="236" cy="39" r="1.8" fill="white" opacity="0.22" />

      {/* Rainbow underline arc beneath "Color" — subtle, colourful accent */}
      <path d="M 22 42 Q 72 50 122 42"  stroke="#FF2D55" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.35"/>
      <path d="M 24 42 Q 72 48 120 42"  stroke="#FF8C00" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.35"/>
      <path d="M 26 42 Q 72 47 118 42"  stroke="#FFD700" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.30"/>
      <path d="M 28 42 Q 72 46 116 42"  stroke="#22CC55" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.28"/>
      <path d="M 30 42 Q 72 45 114 42"  stroke="#4DAAFF" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.25"/>
    </svg>
  )
}
