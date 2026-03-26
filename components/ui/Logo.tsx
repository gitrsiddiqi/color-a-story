function LogoIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Deep purple radial gradient background — lighter top-left, darker bottom-right */}
        <radialGradient id="cas-bg" cx="38%" cy="32%" r="68%">
          <stop offset="0%"   stopColor="#A855F7" />
          <stop offset="100%" stopColor="#3B0764" />
        </radialGradient>

        {/* Rainbow vertical gradient for the heart */}
        <linearGradient id="cas-heart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FF2D55" />
          <stop offset="22%"  stopColor="#FF7A00" />
          <stop offset="44%"  stopColor="#FFD700" />
          <stop offset="66%"  stopColor="#34D058" />
          <stop offset="84%"  stopColor="#2F80ED" />
          <stop offset="100%" stopColor="#9B59B6" />
        </linearGradient>

        {/* Soft white gloss for 3-D shine on heart */}
        <linearGradient id="cas-gloss" x1="0.2" y1="0" x2="0.5" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="0"    />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="22" cy="22" r="22" fill="url(#cas-bg)" />

      {/* ── Rainbow heart ── */}
      {/*
          Symmetric cubic-bezier heart:
            bottom tip → up left side → top-left lobe
            → V notch → top-right lobe → down right side → back to tip
      */}
      <path
        d="M 22 38
           C 5 29 4 15 14 12
           C 17 10 20 12 22 16
           C 24 12 27 10 30 12
           C 40 15 39 29 22 38 Z"
        fill="url(#cas-heart)"
      />

      {/* Gloss overlay — top-left shine makes heart feel dimensional */}
      <path
        d="M 22 16
           C 20 12 17 10 14 12
           C 11 14 9 18 10 22
           C 14 17 18 14 22 16 Z"
        fill="url(#cas-gloss)"
      />

      {/* ── Sparkles ── */}

      {/* Big 4-point star — top-right outside heart */}
      <g transform="translate(35,9)">
        <line x1="-3.8" y1="0"    x2="3.8"  y2="0"    stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="0"    y1="-3.8" x2="0"    y2="3.8"  stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="-2.2" y1="-2.2" x2="2.2"  y2="2.2"  stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.75" />
        <line x1="2.2"  y1="-2.2" x2="-2.2" y2="2.2"  stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.75" />
      </g>

      {/* Medium plus — top-left outside heart */}
      <g transform="translate(8,14)" opacity="0.9">
        <line x1="-2.2" y1="0"    x2="2.2"  y2="0"    stroke="white" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="0"    y1="-2.2" x2="0"    y2="2.2"  stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      </g>

      {/* Small dot — lower-right corner */}
      <circle cx="35" cy="31" r="1.6" fill="white" opacity="0.55" />

      {/* Tiny dot — lower-left */}
      <circle cx="8"  cy="30" r="1"   fill="white" opacity="0.45" />
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
      <span className={`font-extrabold leading-none tracking-tight ${textClassName}`}>
        <span style={{ color: '#FF2D55' }}>C</span>
        <span style={{ color: '#FF7A00' }}>o</span>
        <span style={{ color: '#F59E0B' }}>l</span>
        <span style={{ color: '#34D058' }}>o</span>
        <span style={{ color: '#2F80ED' }}>r</span>
        <span style={{ color: '#7C3AED' }}> a Story</span>
      </span>
    </div>
  )
}
