interface LogoProps {
  height?: number
  className?: string
}

/**
 * Wordmark logo — each letter of "Color" lives in its own
 * bold coloured circle badge (slightly tilted, sticker-style),
 * with "a Story" as a subtitle underneath.
 *
 * Inspired by top kids apps (Toca Boca, Khan Academy Kids):
 * bold single shapes, vivid saturated colours, playful tilt.
 */
export default function Logo({ height = 44, className = '' }: LogoProps) {
  const VW = 228
  const VH = 72
  const width = Math.round((height / VH) * VW)

  // Each letter: character, x-center, fill colour, slight rotation for personality
  const letters = [
    { ch: 'C', cx: 22,  fill: '#FF2D55', rot: -7  },
    { ch: 'o', cx: 68,  fill: '#FF8C00', rot:  5  },
    { ch: 'l', cx: 114, fill: '#F59E0B', rot: -4  },
    { ch: 'o', cx: 160, fill: '#22CC55', rot:  6  },
    { ch: 'r', cx: 206, fill: '#3B9EFF', rot: -5  },
  ]

  const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
  const CY = 27   // circle centre y
  const R  = 22   // circle radius

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${VW} ${VH}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      {letters.map(({ ch, cx, fill, rot }) => {
        // Slightly darker shade for a thin bottom shadow on each circle
        const shadowFill = fill + '55'   // same hue, 1/3 opacity
        return (
          <g key={cx} transform={`rotate(${rot}, ${cx}, ${CY})`}>
            {/* Soft drop shadow — offset circle beneath */}
            <circle cx={cx + 1.5} cy={CY + 2.5} r={R} fill={shadowFill} />

            {/* Main coloured circle */}
            <circle cx={cx} cy={CY} r={R} fill={fill} />

            {/* Top-left gloss highlight — makes it feel like a shiny sticker */}
            <ellipse
              cx={cx - R * 0.28}
              cy={CY - R * 0.32}
              rx={R * 0.42}
              ry={R * 0.28}
              fill="white"
              opacity={0.28}
              transform={`rotate(-35, ${cx - R * 0.28}, ${CY - R * 0.32})`}
            />

            {/* The letter */}
            <text
              x={cx}
              y={CY}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={ch === 'l' ? 32 : 27}
              fontWeight="900"
              fill="white"
              fontFamily={font}
              style={{ userSelect: 'none' }}
            >
              {ch}
            </text>
          </g>
        )
      })}

      {/* ── "a Story" subtitle ── */}
      <text
        x={VW / 2}
        y={62}
        textAnchor="middle"
        fontSize={15}
        fontWeight="800"
        letterSpacing="1.5"
        fill="#5B21B6"
        fontFamily={font}
        style={{ userSelect: 'none' }}
      >
        ✦ a Story ✦
      </text>
    </svg>
  )
}
