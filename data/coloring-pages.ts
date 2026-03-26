import { ColoringPage } from '@/types'

export const coloringPages: ColoringPage[] = [
  // ─── ANIMALS ────────────────────────────────────────────────────────────────
  {
    id: 'cat',
    name: 'Cat',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="210" rx="80" ry="65" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="115" r="58" fill="white" stroke="black" stroke-width="3"/>
      <path d="M100 75 L78 32 L128 65 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M200 75 L222 32 L172 65 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M104 70 L88 40 L122 63 Z" fill="white" stroke="black" stroke-width="2"/>
      <path d="M196 70 L212 40 L178 63 Z" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="125" cy="105" rx="12" ry="14" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="175" cy="105" rx="12" ry="14" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="125" cy="107" rx="5" ry="9" fill="white" stroke="black" stroke-width="1.5"/>
      <ellipse cx="175" cy="107" rx="5" ry="9" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M143 128 L150 135 L157 128 Z" fill="white" stroke="black" stroke-width="2"/>
      <path d="M150 135 Q141 142 133 139" fill="none" stroke="black" stroke-width="2"/>
      <path d="M150 135 Q159 142 167 139" fill="none" stroke="black" stroke-width="2"/>
      <line x1="88" y1="120" x2="138" y2="126" stroke="black" stroke-width="1.5"/>
      <line x1="88" y1="130" x2="138" y2="130" stroke="black" stroke-width="1.5"/>
      <line x1="88" y1="140" x2="138" y2="134" stroke="black" stroke-width="1.5"/>
      <line x1="212" y1="120" x2="162" y2="126" stroke="black" stroke-width="1.5"/>
      <line x1="212" y1="130" x2="162" y2="130" stroke="black" stroke-width="1.5"/>
      <line x1="212" y1="140" x2="162" y2="134" stroke="black" stroke-width="1.5"/>
      <path d="M225 245 Q270 225 262 178 Q254 140 232 158" fill="none" stroke="black" stroke-width="3.5" stroke-linecap="round"/>
      <ellipse cx="108" cy="272" rx="26" ry="11" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="192" cy="272" rx="26" ry="11" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'dog',
    name: 'Dog',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="75" y="165" width="150" height="100" rx="20" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="120" r="55" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="100" cy="100" rx="22" ry="38" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="200" cy="100" rx="22" ry="38" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="128" cy="110" rx="12" ry="10" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="172" cy="110" rx="12" ry="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="128" cy="112" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="172" cy="112" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <ellipse cx="150" cy="138" rx="18" ry="12" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="150" cy="142" rx="10" ry="7" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="140" cy="125" r="3" fill="black"/>
      <circle cx="160" cy="125" r="3" fill="black"/>
      <rect x="95" y="265" width="28" height="22" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <rect x="133" y="265" width="28" height="22" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <rect x="140" y="258" width="28" height="22" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <rect x="178" y="258" width="28" height="22" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <path d="M225 185 Q265 175 255 155" fill="none" stroke="black" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'fish',
    name: 'Fish',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="140" cy="150" rx="95" ry="65" fill="white" stroke="black" stroke-width="3"/>
      <path d="M240 150 L285 100 L285 200 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M100 100 Q130 80 140 85" fill="none" stroke="black" stroke-width="2"/>
      <path d="M100 200 Q130 220 140 215" fill="none" stroke="black" stroke-width="2"/>
      <circle cx="75" cy="140" r="12" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="72" cy="138" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M63 155 Q72 162 80 155" fill="none" stroke="black" stroke-width="2"/>
      <path d="M130 125 Q150 120 170 125" stroke="black" stroke-width="1.5" fill="none"/>
      <path d="M120 140 Q150 135 180 140" stroke="black" stroke-width="1.5" fill="none"/>
      <path d="M130 155 Q150 150 170 155" stroke="black" stroke-width="1.5" fill="none"/>
      <path d="M120 170 Q150 165 180 170" stroke="black" stroke-width="1.5" fill="none"/>
    </svg>`,
  },
  {
    id: 'butterfly',
    name: 'Butterfly',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M150 80 Q80 20 30 60 Q10 100 60 130 Q100 155 150 150 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M150 80 Q220 20 270 60 Q290 100 240 130 Q200 155 150 150 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M150 150 Q80 160 50 200 Q40 240 100 240 Q140 235 150 220 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M150 150 Q220 160 250 200 Q260 240 200 240 Q160 235 150 220 Z" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="150" cy="150" rx="10" ry="75" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="80" r="8" fill="white" stroke="black" stroke-width="2"/>
      <path d="M148 72 Q138 50 128 42" fill="none" stroke="black" stroke-width="2"/>
      <path d="M152 72 Q162 50 172 42" fill="none" stroke="black" stroke-width="2"/>
      <circle cx="128" cy="41" r="4" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="172" cy="41" r="4" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="95" cy="90" r="14" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="205" cy="90" r="14" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="85" cy="185" r="10" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="215" cy="185" r="10" fill="white" stroke="black" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: 'elephant',
    name: 'Elephant',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="155" cy="175" rx="100" ry="80" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="120" cy="110" r="65" fill="white" stroke="black" stroke-width="3"/>
      <path d="M58 80 Q20 50 15 100 Q10 135 50 140 Q75 145 85 125" fill="white" stroke="black" stroke-width="3"/>
      <path d="M180 75 Q215 55 210 95 Q208 120 190 125" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M85 145 Q75 175 78 210 Q80 225 90 225" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="93" cy="138" rx="14" ry="11" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="90" cy="136" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="88" cy="134" r="2" fill="black"/>
      <circle cx="145" cy="102" r="5" fill="black"/>
      <rect x="80" y="245" width="30" height="38" rx="6" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="120" y="245" width="30" height="38" rx="6" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="170" y="248" width="30" height="38" rx="6" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="210" y="248" width="30" height="38" rx="6" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M250 195 Q272 185 268 170" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'rabbit',
    name: 'Rabbit',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="210" rx="75" ry="65" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="130" r="52" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="115" cy="68" rx="18" ry="50" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="185" cy="68" rx="18" ry="50" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="115" cy="68" rx="9" ry="40" fill="white" stroke="black" stroke-width="1.5"/>
      <ellipse cx="185" cy="68" rx="9" ry="40" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="130" cy="122" r="11" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="170" cy="122" r="11" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="130" cy="124" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="170" cy="124" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="150" cy="142" r="6" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M150 148 Q141 155 133 152" fill="none" stroke="black" stroke-width="2"/>
      <path d="M150 148 Q159 155 167 152" fill="none" stroke="black" stroke-width="2"/>
      <line x1="95" y1="138" x2="142" y2="142" stroke="black" stroke-width="1.5"/>
      <line x1="95" y1="148" x2="142" y2="148" stroke="black" stroke-width="1.5"/>
      <line x1="205" y1="138" x2="158" y2="142" stroke="black" stroke-width="1.5"/>
      <line x1="205" y1="148" x2="158" y2="148" stroke="black" stroke-width="1.5"/>
      <circle cx="210" cy="218" r="12" fill="white" stroke="black" stroke-width="2"/>
      <rect x="95" y="263" width="28" height="25" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <rect x="177" y="263" width="28" height="25" rx="6" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'turtle',
    name: 'Turtle',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="155" rx="90" ry="75" fill="white" stroke="black" stroke-width="3"/>
      <path d="M80 120 Q55 95 40 115 Q30 135 55 148 Q70 155 85 148" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M220 120 Q245 95 260 115 Q270 135 245 148 Q230 155 215 148" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M88 220 Q65 240 70 258 Q75 270 92 268 Q108 265 110 248" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M212 220 Q235 240 230 258 Q225 270 208 268 Q192 265 190 248" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="150" cy="105" rx="32" ry="24" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="138" cy="98" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="136" cy="97" r="2" fill="black"/>
      <path d="M148 112 Q158 118 168 112" fill="none" stroke="black" stroke-width="2"/>
      <path d="M90 115 Q120 85 150 80 Q180 85 210 115" fill="none" stroke="black" stroke-width="2"/>
      <path d="M90 155 Q120 125 150 120 Q180 125 210 155" fill="none" stroke="black" stroke-width="2"/>
      <path d="M96 190 Q120 175 150 172 Q180 175 204 190" fill="none" stroke="black" stroke-width="2"/>
      <line x1="150" y1="80" x2="150" y2="220" stroke="black" stroke-width="2"/>
      <line x1="90" y1="115" x2="210" y2="195" stroke="black" stroke-width="2"/>
      <line x1="210" y1="115" x2="90" y2="195" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'frog',
    name: 'Frog',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="185" rx="95" ry="75" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="150" cy="130" rx="65" ry="52" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="105" cy="98" r="28" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="195" cy="98" r="28" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="105" cy="98" r="16" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="195" cy="98" r="16" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="102" cy="96" r="6" fill="black"/>
      <circle cx="192" cy="96" r="6" fill="black"/>
      <circle cx="100" cy="94" r="2" fill="white"/>
      <circle cx="190" cy="94" r="2" fill="white"/>
      <path d="M122 152 Q150 162 178 152" fill="none" stroke="black" stroke-width="2.5"/>
      <path d="M55 240 Q30 270 20 255 Q15 240 40 230 L70 220" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M245 240 Q270 270 280 255 Q285 240 260 230 L230 220" fill="white" stroke="black" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'bird',
    name: 'Bird',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="145" cy="175" rx="75" ry="55" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="175" cy="110" r="50" fill="white" stroke="black" stroke-width="3"/>
      <path d="M70 155 Q40 115 50 80 Q90 120 120 155" fill="white" stroke="black" stroke-width="3"/>
      <path d="M210 120 Q235 105 255 115 Q245 130 225 130" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M70 210 Q60 240 55 255 Q65 260 85 250 L100 220" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M120 220 Q125 250 130 260 Q140 262 148 252 L145 220" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="190" cy="100" r="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="188" cy="98" r="4" fill="black"/>
      <circle cx="186" cy="97" r="1.5" fill="white"/>
    </svg>`,
  },
  {
    id: 'lion',
    name: 'Lion',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <circle cx="150" cy="140" r="80" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="140" r="55" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="150" cy="220" rx="70" ry="50" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="125" cy="150" rx="14" ry="12" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="175" cy="150" rx="14" ry="12" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="125" cy="152" r="6" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="175" cy="152" r="6" fill="white" stroke="black" stroke-width="1.5"/>
      <ellipse cx="150" cy="172" rx="22" ry="16" fill="white" stroke="black" stroke-width="2"/>
      <path d="M150 178 Q140 186 130 183" fill="none" stroke="black" stroke-width="2"/>
      <path d="M150 178 Q160 186 170 183" fill="none" stroke="black" stroke-width="2"/>
      <line x1="95" y1="165" x2="138" y2="170" stroke="black" stroke-width="1.5"/>
      <line x1="95" y1="175" x2="138" y2="175" stroke="black" stroke-width="1.5"/>
      <line x1="205" y1="165" x2="162" y2="170" stroke="black" stroke-width="1.5"/>
      <line x1="205" y1="175" x2="162" y2="175" stroke="black" stroke-width="1.5"/>
      <rect x="90" y="257" width="30" height="28" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <rect x="180" y="257" width="30" height="28" rx="6" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },

  // ─── VEHICLES ────────────────────────────────────────────────────────────────
  {
    id: 'car',
    name: 'Car',
    category: 'Vehicles',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="20" y="170" width="260" height="80" rx="15" fill="white" stroke="black" stroke-width="3"/>
      <path d="M60 170 L90 110 L210 110 L240 170 Z" fill="white" stroke="black" stroke-width="3"/>
      <rect x="95" y="118" width="48" height="44" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <rect x="157" y="118" width="48" height="44" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="75" cy="255" r="32" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="225" cy="255" r="32" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="75" cy="255" r="16" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="225" cy="255" r="16" fill="white" stroke="black" stroke-width="2"/>
      <rect x="22" y="190" width="30" height="18" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="248" y="190" width="30" height="18" rx="4" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'bus',
    name: 'Bus',
    category: 'Vehicles',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="20" y="100" width="260" height="150" rx="12" fill="white" stroke="black" stroke-width="3"/>
      <rect x="20" y="100" width="260" height="28" rx="12" fill="white" stroke="black" stroke-width="2"/>
      <rect x="35" y="120" width="38" height="42" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <rect x="85" y="120" width="38" height="42" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <rect x="135" y="120" width="38" height="42" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <rect x="185" y="120" width="38" height="42" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <rect x="232" y="120" width="38" height="42" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <rect x="220" y="175" width="50" height="55" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="70" cy="260" r="28" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="230" cy="260" r="28" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="70" cy="260" r="14" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="230" cy="260" r="14" fill="white" stroke="black" stroke-width="2"/>
      <rect x="22" y="185" width="25" height="14" rx="3" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'airplane',
    name: 'Airplane',
    category: 'Vehicles',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M20 155 Q80 130 160 140 L270 135 Q290 148 270 162 L160 158 Q80 168 20 145 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M80 140 Q95 90 130 82 Q145 82 148 95 L148 140 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M80 158 Q95 208 130 218 Q145 218 148 205 L148 158 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M210 138 Q225 118 240 115 Q248 115 250 122 L248 138 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M210 162 Q225 180 240 185 Q248 185 250 178 L248 162 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="200" cy="148" r="14" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="235" cy="148" r="14" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'rocket',
    name: 'Rocket',
    category: 'Vehicles',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M150 30 Q180 50 188 120 L188 220 Q188 235 150 240 Q112 235 112 220 L112 120 Q120 50 150 30 Z" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="140" r="28" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M112 195 Q85 210 78 240 L112 230 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M188 195 Q215 210 222 240 L188 230 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M120 255 Q135 268 150 270 Q165 268 180 255 L188 255 Q188 280 150 285 Q112 280 112 255 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="150" cy="262" rx="25" ry="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="150" cy="140" r="15" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'boat',
    name: 'Sailboat',
    category: 'Vehicles',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M40 210 Q80 235 150 240 Q220 235 260 210 L240 185 L60 185 Z" fill="white" stroke="black" stroke-width="3"/>
      <line x1="150" y1="50" x2="150" y2="190" stroke="black" stroke-width="3"/>
      <path d="M150 55 L150 185 L65 185 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M150 70 L150 180 L230 160 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M30 220 Q80 240 150 245 Q220 240 270 220" fill="none" stroke="black" stroke-width="2.5"/>
    </svg>`,
  },

  // ─── FOOD ────────────────────────────────────────────────────────────────────
  {
    id: 'apple',
    name: 'Apple',
    category: 'Food',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M150 80 Q210 70 240 120 Q270 165 255 215 Q240 260 200 268 Q175 275 150 265 Q125 275 100 268 Q60 260 45 215 Q30 165 60 120 Q90 70 150 80 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M150 80 Q148 55 162 40 Q172 30 180 35 Q170 48 165 62 Q160 73 150 80 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M162 42 Q178 25 195 32" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M150 268 L150 180" fill="none" stroke="black" stroke-width="2" stroke-dasharray="4,3"/>
    </svg>`,
  },
  {
    id: 'ice-cream',
    name: 'Ice Cream',
    category: 'Food',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M95 175 L150 290 L205 175 Z" fill="white" stroke="black" stroke-width="3"/>
      <line x1="108" y1="195" x2="192" y2="195" stroke="black" stroke-width="1.5"/>
      <line x1="120" y1="218" x2="180" y2="218" stroke="black" stroke-width="1.5"/>
      <line x1="133" y1="242" x2="167" y2="242" stroke="black" stroke-width="1.5"/>
      <path d="M125 195 L150 290" stroke="black" stroke-width="1.5"/>
      <path d="M175 195 L150 290" stroke="black" stroke-width="1.5"/>
      <ellipse cx="150" cy="140" rx="60" ry="55" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="108" cy="112" rx="40" ry="38" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="192" cy="112" rx="40" ry="38" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="72" r="10" fill="white" stroke="black" stroke-width="2"/>
      <line x1="150" y1="62" x2="150" y2="55" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'cupcake',
    name: 'Cupcake',
    category: 'Food',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M80 185 Q85 250 100 265 L200 265 Q215 250 220 185 Z" fill="white" stroke="black" stroke-width="3"/>
      <line x1="107" y1="185" x2="113" y2="265" stroke="black" stroke-width="1.5"/>
      <line x1="134" y1="185" x2="136" y2="265" stroke="black" stroke-width="1.5"/>
      <line x1="162" y1="185" x2="160" y2="265" stroke="black" stroke-width="1.5"/>
      <line x1="190" y1="185" x2="182" y2="265" stroke="black" stroke-width="1.5"/>
      <path d="M78 185 Q90 155 110 158 Q120 145 135 155 Q145 140 155 152 Q165 140 175 152 Q190 142 205 158 Q222 155 222 185 Z" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="148" r="10" fill="white" stroke="black" stroke-width="2"/>
      <line x1="150" y1="138" x2="150" y2="128" stroke="black" stroke-width="2"/>
      <path d="M148 128 Q145 118 150 112 Q155 106 152 98" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'pizza',
    name: 'Pizza',
    category: 'Food',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <circle cx="150" cy="155" r="120" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="155" r="105" fill="white" stroke="black" stroke-width="1.5"/>
      <line x1="150" y1="50" x2="150" y2="260" stroke="black" stroke-width="2"/>
      <line x1="50" y1="205" x2="250" y2="105" stroke="black" stroke-width="2"/>
      <line x1="50" y1="105" x2="250" y2="205" stroke="black" stroke-width="2"/>
      <circle cx="130" cy="120" r="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="175" cy="130" r="8" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="148" cy="165" r="9" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="115" cy="175" r="7" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="185" cy="175" r="8" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="160" cy="200" r="7" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },

  // ─── FANTASY ─────────────────────────────────────────────────────────────────
  {
    id: 'dragon',
    name: 'Dragon',
    category: 'Fantasy',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="190" rx="80" ry="60" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="195" cy="115" r="50" fill="white" stroke="black" stroke-width="3"/>
      <path d="M155 85 L140 40 L175 70 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M195 72 L195 28 L220 60 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M100 145 Q55 110 40 135 Q30 160 65 165 Q85 168 100 158" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M200 145 Q245 110 260 135 Q270 160 235 165 Q215 168 200 158" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="180" cy="112" rx="12" ry="10" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="210" cy="112" rx="12" ry="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="180" cy="114" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="210" cy="114" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M185 138 Q195 148 215 138 L215 145 Q195 158 185 145 Z" fill="white" stroke="black" stroke-width="2"/>
      <path d="M215 145 Q235 150 245 143" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M70 235 Q50 260 60 275 L90 260 L85 245" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M230 235 Q250 260 240 275 L210 260 L215 245" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M225 220 Q265 215 270 195 Q268 175 245 180" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'unicorn',
    name: 'Unicorn',
    category: 'Fantasy',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="145" cy="195" rx="95" ry="65" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="210" cy="120" r="52" fill="white" stroke="black" stroke-width="3"/>
      <path d="M222 72 L238 20 L248 70 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M195 85 Q215 55 225 68" fill="none" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <path d="M198 78 Q222 52 230 62" fill="none" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="192" cy="118" rx="12" ry="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="190" cy="120" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="188" cy="118" r="2" fill="black"/>
      <path d="M200 138 Q212 148 222 140" fill="none" stroke="black" stroke-width="2"/>
      <path d="M165 85 Q155 55 155 40 Q165 50 175 60 Q178 50 185 48 Q183 60 182 70 Q185 60 195 55 Q190 68 185 80" fill="white" stroke="black" stroke-width="2"/>
      <rect x="75" y="248" width="28" height="42" rx="8" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="115" y="248" width="28" height="42" rx="8" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="165" y="248" width="28" height="42" rx="8" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="205" y="248" width="28" height="42" rx="8" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M55 215 Q35 195 38 175 Q48 165 65 175 Q75 170 80 180" fill="white" stroke="black" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'castle',
    name: 'Castle',
    category: 'Fantasy',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="50" y="130" width="200" height="155" fill="white" stroke="black" stroke-width="3"/>
      <rect x="20" y="80" width="70" height="205" fill="white" stroke="black" stroke-width="3"/>
      <rect x="210" y="80" width="70" height="205" fill="white" stroke="black" stroke-width="3"/>
      <rect x="20" y="55" width="15" height="30" fill="white" stroke="black" stroke-width="2"/>
      <rect x="44" y="55" width="15" height="30" fill="white" stroke="black" stroke-width="2"/>
      <rect x="68" y="55" width="15" height="30" fill="white" stroke="black" stroke-width="2"/>
      <rect x="210" y="55" width="15" height="30" fill="white" stroke="black" stroke-width="2"/>
      <rect x="234" y="55" width="15" height="30" fill="white" stroke="black" stroke-width="2"/>
      <rect x="258" y="55" width="15" height="30" fill="white" stroke="black" stroke-width="2"/>
      <rect x="108" y="105" width="18" height="28" fill="white" stroke="black" stroke-width="2"/>
      <rect x="136" y="105" width="18" height="28" fill="white" stroke="black" stroke-width="2"/>
      <rect x="164" y="105" width="18" height="28" fill="white" stroke="black" stroke-width="2"/>
      <path d="M120 230 L120 285 L180 285 L180 230 Q165 218 150 222 Q135 218 120 230 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="38" y="148" width="36" height="36" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="226" y="148" width="36" height="36" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="112" y="150" width="30" height="30" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="158" y="150" width="30" height="30" rx="4" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'fairy',
    name: 'Fairy',
    category: 'Fantasy',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <circle cx="150" cy="75" r="35" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M130 108 Q108 130 112 175 Q115 195 150 198 Q185 195 188 175 Q192 130 170 108 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M112 175 Q100 200 102 220 L118 215 Q120 195 130 185" fill="white" stroke="black" stroke-width="2"/>
      <path d="M188 175 Q200 200 198 220 L182 215 Q180 195 170 185" fill="white" stroke="black" stroke-width="2"/>
      <path d="M112 130 Q75 100 55 115 Q45 135 75 148 Q98 158 115 148" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M188 130 Q225 100 245 115 Q255 135 225 148 Q202 158 185 148" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="138" cy="68" r="6" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="162" cy="68" r="6" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M140 85 Q150 92 160 85" fill="none" stroke="black" stroke-width="2"/>
      <path d="M200 80 L218 62 L212 75 L228 65" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="228" cy="65" r="6" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },

  // ─── NATURE ──────────────────────────────────────────────────────────────────
  {
    id: 'flower',
    name: 'Flower',
    category: 'Nature',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="144" y="175" width="12" height="100" rx="4" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M144 240 Q120 235 108 220" fill="none" stroke="black" stroke-width="2.5"/>
      <ellipse cx="118" cy="215" rx="20" ry="10" transform="rotate(-30 118 215)" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="150" cy="130" rx="25" ry="40" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="150" cy="130" rx="25" ry="40" transform="rotate(45 150 130)" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="150" cy="130" rx="25" ry="40" transform="rotate(90 150 130)" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="150" cy="130" rx="25" ry="40" transform="rotate(135 150 130)" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="150" cy="130" r="28" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="130" r="14" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'mushroom',
    name: 'Mushroom',
    category: 'Nature',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="118" y="192" width="64" height="80" rx="10" fill="white" stroke="black" stroke-width="3"/>
      <path d="M55 200 Q50 155 80 120 Q110 80 150 72 Q190 80 220 120 Q250 155 245 200 Z" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="118" cy="130" r="20" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="175" cy="115" r="16" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="148" cy="158" r="14" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="90" cy="165" r="12" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="210" cy="160" r="12" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'tree',
    name: 'Tree',
    category: 'Nature',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="128" y="215" width="44" height="70" rx="6" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="150" cy="175" rx="80" ry="60" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="110" cy="145" rx="60" ry="48" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="190" cy="145" rx="60" ry="48" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="150" cy="115" rx="55" ry="45" fill="white" stroke="black" stroke-width="3"/>
    </svg>`,
  },
  {
    id: 'sun',
    name: 'Sun',
    category: 'Nature',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <circle cx="150" cy="150" r="60" fill="white" stroke="black" stroke-width="3"/>
      <line x1="150" y1="40" x2="150" y2="70" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <line x1="150" y1="230" x2="150" y2="260" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <line x1="40" y1="150" x2="70" y2="150" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <line x1="230" y1="150" x2="260" y2="150" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <line x1="72" y1="72" x2="93" y2="93" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <line x1="207" y1="207" x2="228" y2="228" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <line x1="228" y1="72" x2="207" y2="93" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <line x1="93" y1="207" x2="72" y2="228" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <circle cx="150" cy="150" r="38" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },

  // ─── SPACE ───────────────────────────────────────────────────────────────────
  {
    id: 'planet',
    name: 'Planet',
    category: 'Space',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="150" rx="130" ry="40" fill="none" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="150" r="75" fill="white" stroke="black" stroke-width="3"/>
      <path d="M105 98 Q130 92 155 100" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M95 118 Q125 112 160 118" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M90 140 Q120 134 165 140" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M95 162 Q130 156 170 162" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M108 182 Q135 176 168 182" fill="none" stroke="black" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: 'star',
    name: 'Star',
    category: 'Space',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M150 30 L168 108 L248 108 L183 158 L207 235 L150 188 L93 235 L117 158 L52 108 L132 108 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M150 75 L162 118 L205 118 L172 142 L184 185 L150 162 L116 185 L128 142 L95 118 L138 118 Z" fill="white" stroke="black" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: 'astronaut',
    name: 'Astronaut',
    category: 'Space',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <circle cx="150" cy="90" r="55" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="150" cy="90" rx="40" ry="38" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="150" cy="90" r="25" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="150" cy="195" rx="65" ry="75" fill="white" stroke="black" stroke-width="3"/>
      <path d="M88 148 Q58 148 50 170 Q48 192 70 198 Q85 202 92 188" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M212 148 Q242 148 250 170 Q252 192 230 198 Q215 202 208 188" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="100" y="255" width="35" height="35" rx="10" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="165" y="255" width="35" height="35" rx="10" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="122" y="165" width="56" height="40" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="140" cy="82" r="6" fill="black"/>
      <circle cx="160" cy="82" r="6" fill="black"/>
      <path d="M140" cy="100" Q150 108 160 100" fill="none" stroke="black" stroke-width="2"/>
    </svg>`,
  },

  // ─── BACKDROPS ───────────────────────────────────────────────────────────────
  {
    id: 'beach',
    name: 'Beach',
    category: 'Outdoors',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="none"/>
      <rect x="0" y="0" width="600" height="220" fill="white" stroke="black" stroke-width="1"/>
      <circle cx="520" cy="60" r="45" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="80" cy="80" rx="70" ry="30" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="250" cy="55" rx="90" ry="35" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="420" cy="130" rx="65" ry="25" fill="white" stroke="black" stroke-width="2"/>
      <path d="M0 220 Q100 200 200 215 Q300 228 400 210 Q500 195 600 215 L600 290 Q500 270 400 285 Q300 298 200 282 Q100 268 0 285 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M0 285 Q100 268 200 282 Q300 298 400 285 Q500 270 600 285 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <line x1="150" y1="290" x2="150" y2="260" stroke="black" stroke-width="2"/>
      <path d="M150 260 L185 275 L150 278 Z" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M200 310 Q240 305 280 310" fill="none" stroke="black" stroke-width="2"/>
      <path d="M350 320 Q390 316 430 320" fill="none" stroke="black" stroke-width="2"/>
      <circle cx="80" cy="330" r="15" fill="white" stroke="black" stroke-width="2"/>
      <path d="M0 355 Q100 345 200 355 Q300 365 400 355 Q500 345 600 355" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M0 375 Q100 365 200 375 Q300 385 400 375 Q500 365 600 375" fill="none" stroke="black" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: 'forest',
    name: 'Forest',
    category: 'Outdoors',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white"/>
      <rect x="0" y="0" width="600" height="200" fill="white" stroke="black" stroke-width="1"/>
      <ellipse cx="50" cy="150" rx="55" ry="80" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="38" y="220" width="24" height="80" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="160" cy="120" rx="65" ry="95" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="148" y="205" width="24" height="90" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="290" cy="130" rx="70" ry="90" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="278" y="210" width="24" height="90" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="420" cy="115" rx="65" ry="88" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="408" y="195" width="24" height="95" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="550" cy="145" rx="58" ry="82" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="538" y="218" width="24" height="82" fill="white" stroke="black" stroke-width="2"/>
      <path d="M0 310 Q150 295 300 305 Q450 315 600 305 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M0 290 Q80 282 160 288 Q240 294 320 288 Q400 282 480 288 Q540 294 600 290" fill="none" stroke="black" stroke-width="2"/>
      <circle cx="100" cy="350" r="10" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="115" cy="360" r="8" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="88" cy="362" r="8" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="350" cy="345" r="10" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="365" cy="355" r="8" fill="white" stroke="black" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: 'space-backdrop',
    name: 'Outer Space',
    category: 'Fantasy',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="80" cy="80" r="5" fill="black"/>
      <circle cx="180" cy="40" r="3" fill="black"/>
      <circle cx="300" cy="70" r="4" fill="black"/>
      <circle cx="420" cy="30" r="3" fill="black"/>
      <circle cx="520" cy="90" r="5" fill="black"/>
      <circle cx="150" cy="150" r="3" fill="black"/>
      <circle cx="450" cy="120" r="4" fill="black"/>
      <circle cx="560" cy="200" r="3" fill="black"/>
      <circle cx="30" cy="250" r="4" fill="black"/>
      <circle cx="250" cy="200" r="3" fill="black"/>
      <circle cx="380" cy="180" r="5" fill="black"/>
      <circle cx="100" cy="320" r="3" fill="black"/>
      <circle cx="480" cy="300" r="4" fill="black"/>
      <circle cx="330" cy="340" r="3" fill="black"/>
      <circle cx="570" cy="350" r="4" fill="black"/>
      <circle cx="200" cy="280" r="3" fill="black"/>
      <circle cx="60" cy="170" r="5" fill="black"/>
      <ellipse cx="480" cy="220" rx="70" ry="55" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="480" cy="220" rx="90" ry="28" fill="none" stroke="black" stroke-width="2.5"/>
      <path d="M455 178 Q465 168 475 175" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M490 175 Q498 165 508 172" fill="none" stroke="black" stroke-width="1.5"/>
      <circle cx="130" cy="200" r="42" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="115" cy="185" r="10" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="135" cy="178" r="7" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="148" cy="208" r="8" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M290 150 L300 50 L310 150 Z" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="300" cy="152" rx="12" ry="8" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'underwater',
    name: 'Underwater',
    category: 'Fantasy',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="2"/>
      <path d="M0 0 Q150 30 300 10 Q450 -10 600 20 L600 0 Z" fill="white" stroke="black" stroke-width="2"/>
      <path d="M50 380 Q55 340 60 380 Q65 340 70 380" fill="none" stroke="black" stroke-width="2"/>
      <path d="M120 390 Q125 345 130 390 Q135 345 140 390" fill="none" stroke="black" stroke-width="2"/>
      <path d="M250 385 Q258 330 266 385 Q274 330 282 385" fill="none" stroke="black" stroke-width="2"/>
      <path d="M400 390 Q408 340 416 390 Q424 340 432 390" fill="none" stroke="black" stroke-width="2"/>
      <path d="M520 388 Q528 342 536 388 Q544 342 552 388" fill="none" stroke="black" stroke-width="2"/>
      <ellipse cx="100" cy="360" rx="35" ry="20" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="80" cy="350" rx="20" ry="12" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="200" cy="370" rx="28" ry="16" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="450" cy="355" rx="40" ry="22" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="480" cy="345" rx="25" ry="14" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="160" cy="220" r="5" fill="none" stroke="black" stroke-width="1.5"/>
      <circle cx="165" cy="200" r="7" fill="none" stroke="black" stroke-width="1.5"/>
      <circle cx="158" cy="180" r="5" fill="none" stroke="black" stroke-width="1.5"/>
      <circle cx="340" cy="150" r="6" fill="none" stroke="black" stroke-width="1.5"/>
      <circle cx="348" cy="128" r="8" fill="none" stroke="black" stroke-width="1.5"/>
      <circle cx="340" cy="108" r="5" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M0 350 Q150 335 300 345 Q450 355 600 340 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'farm',
    name: 'Farm',
    category: 'Outdoors',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="1"/>
      <rect x="0" y="0" width="600" height="190" fill="white" stroke="black" stroke-width="1"/>
      <circle cx="480" cy="65" r="40" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="100" cy="90" rx="75" ry="32" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="330" cy="70" rx="85" ry="38" fill="white" stroke="black" stroke-width="2"/>
      <path d="M0 240 Q200 225 400 235 Q500 240 600 232 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="2"/>
      <rect x="50" y="190" width="100" height="100" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M40 195 L100 148 L160 195 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="88" y="240" width="24" height="50" fill="white" stroke="black" stroke-width="2"/>
      <rect x="60" y="205" width="30" height="28" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="110" y="205" width="30" height="28" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="400" y="210" width="80" height="70" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M390 215 L440 178 L490 215 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <line x1="200" y1="290" x2="200" y2="260" stroke="black" stroke-width="2"/>
      <line x1="200" y1="260" x2="180" y2="275" stroke="black" stroke-width="2"/>
      <line x1="200" y1="260" x2="220" y2="270" stroke="black" stroke-width="2"/>
      <line x1="280" y1="400" x2="280" y2="250" stroke="black" stroke-width="2"/>
      <line x1="320" y1="400" x2="320" y2="250" stroke="black" stroke-width="2"/>
      <line x1="280" y1="270" x2="320" y2="270" stroke="black" stroke-width="2"/>
      <line x1="280" y1="300" x2="320" y2="300" stroke="black" stroke-width="2"/>
      <line x1="280" y1="330" x2="320" y2="330" stroke="black" stroke-width="2"/>
      <line x1="280" y1="360" x2="320" y2="360" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'city',
    name: 'City Street',
    category: 'Outdoors',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="1"/>
      <rect x="0" y="0" width="600" height="200" fill="white" stroke="black" stroke-width="1"/>
      <rect x="20" y="100" width="100" height="280" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="140" y="60" width="120" height="320" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="280" y="80" width="90" height="300" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="390" y="40" width="100" height="340" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="510" y="110" width="80" height="270" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="35" y="115" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="68" y="115" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="35" y="148" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="68" y="148" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="155" y="78" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="190" y="78" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="225" y="78" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="155" y="112" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="190" y="112" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="225" y="112" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="405" y="58" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="440" y="58" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="475" y="58" width="22" height="18" rx="2" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M0 300 L600 300" stroke="black" stroke-width="3"/>
      <path d="M0 300 L600 300 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="1"/>
      <line x1="0" y1="330" x2="600" y2="330" stroke="black" stroke-width="1" stroke-dasharray="30,20"/>
    </svg>`,
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    category: 'Indoors',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="2"/>
      <rect x="0" y="0" width="600" height="10" fill="white" stroke="black" stroke-width="2"/>
      <rect x="0" y="390" width="600" height="10" fill="white" stroke="black" stroke-width="2"/>
      <rect x="0" y="0" width="10" height="400" fill="white" stroke="black" stroke-width="2"/>
      <rect x="590" y="0" width="10" height="400" fill="white" stroke="black" stroke-width="2"/>
      <rect x="20" y="270" width="260" height="120" rx="10" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="20" y="260" width="260" height="30" rx="5" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="50" y="220" width="80" height="50" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <rect x="170" y="220" width="80" height="50" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="90" cy="218" rx="30" ry="30" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="210" cy="218" rx="30" ry="30" fill="white" stroke="black" stroke-width="2"/>
      <rect x="370" y="180" width="200" height="210" rx="8" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="390" y="195" width="75" height="90" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="480" y="195" width="75" height="90" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="390" y="300" width="75" height="75" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="480" y="300" width="75" height="75" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="100" y="50" width="120" height="150" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <rect x="110" y="60" width="100" height="130" rx="3" fill="white" stroke="black" stroke-width="1.5"/>
      <line x1="160" y1="60" x2="160" y2="190" stroke="black" stroke-width="1.5"/>
      <line x1="110" y1="125" x2="210" y2="125" stroke="black" stroke-width="1.5"/>
      <rect x="250" y="80" width="70" height="80" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <line x1="285" y1="160" x2="285" y2="190" stroke="black" stroke-width="2"/>
      <circle cx="285" cy="195" r="8" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'jungle',
    name: 'Jungle',
    category: 'Outdoors',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="1"/>
      <rect x="0" y="0" width="600" height="180" fill="white" stroke="black" stroke-width="1"/>
      <path d="M0 130 Q40 80 80 100 Q60 60 100 50 Q130 65 120 100 Q155 55 190 70 Q175 40 210 32 Q240 45 230 80 Q265 40 295 55 Q285 85 300 100" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M300 100 Q320 55 355 65 Q345 40 375 35 Q400 50 390 80 Q420 45 455 60 Q440 95 460 110 Q490 65 520 75 Q510 105 530 120 Q560 80 590 95 L600 120 L600 400 L0 400 L0 130 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <line x1="50" y1="400" x2="80" y2="180" stroke="black" stroke-width="4"/>
      <line x1="80" y1="180" x2="30" y2="130" stroke="black" stroke-width="2.5"/>
      <line x1="80" y1="180" x2="130" y2="155" stroke="black" stroke-width="2.5"/>
      <line x1="80" y1="190" x2="20" y2="170" stroke="black" stroke-width="2.5"/>
      <line x1="200" y1="400" x2="220" y2="200" stroke="black" stroke-width="4"/>
      <line x1="220" y1="200" x2="160" y2="155" stroke="black" stroke-width="2.5"/>
      <line x1="220" y1="200" x2="270" y2="168" stroke="black" stroke-width="2.5"/>
      <line x1="450" y1="400" x2="470" y2="190" stroke="black" stroke-width="4"/>
      <line x1="470" y1="190" x2="410" y2="148" stroke="black" stroke-width="2.5"/>
      <line x1="470" y1="190" x2="525" y2="162" stroke="black" stroke-width="2.5"/>
      <path d="M0 310 Q150 290 300 300 Q450 310 600 295 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="2.5"/>
    </svg>`,
  },

  // ─── MORE ANIMALS ────────────────────────────────────────────────────────────
  {
    id: 'monkey',
    name: 'Monkey',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="200" rx="75" ry="65" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="115" r="55" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="95" cy="118" r="30" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="205" cy="118" r="30" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="150" cy="135" rx="30" ry="22" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="132" cy="105" r="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="168" cy="105" r="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="132" cy="107" r="4" fill="black"/>
      <circle cx="168" cy="107" r="4" fill="black"/>
      <ellipse cx="144" cy="130" rx="5" ry="4" fill="black"/>
      <ellipse cx="156" cy="130" rx="5" ry="4" fill="black"/>
      <path d="M138 140 Q150 148 162 140" fill="none" stroke="black" stroke-width="2"/>
      <path d="M80 175 Q55 155 48 130 Q45 110 60 115 Q70 118 75 135" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <path d="M220 175 Q245 155 252 130 Q255 110 240 115 Q230 118 225 135" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <rect x="100" y="255" width="28" height="35" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <rect x="172" y="255" width="28" height="35" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <path d="M225 230 Q265 240 268 260 Q262 268 248 258 L230 250" fill="white" stroke="black" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'penguin',
    name: 'Penguin',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="185" rx="72" ry="90" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="150" cy="185" rx="42" ry="65" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="150" cy="90" r="52" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="150" cy="95" rx="30" ry="38" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="133" cy="78" r="9" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="167" cy="78" r="9" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="133" cy="80" r="4" fill="black"/>
      <circle cx="167" cy="80" r="4" fill="black"/>
      <path d="M142 100 L150 108 L158 100 Z" fill="white" stroke="black" stroke-width="2"/>
      <path d="M80 170 Q55 160 50 190 Q48 210 70 215 Q90 218 95 200" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M220 170 Q245 160 250 190 Q252 210 230 215 Q210 218 205 200" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="118" cy="268" rx="28" ry="12" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="182" cy="268" rx="28" ry="12" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'whale',
    name: 'Whale',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M30 155 Q50 100 120 90 Q180 82 230 100 Q270 115 275 150 Q280 185 250 205 Q200 228 140 222 Q80 215 50 200 Q20 185 30 155 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M255 195 Q280 210 290 240 Q275 245 258 228 L248 210" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M255 195 Q285 185 295 160 Q280 158 262 172 L250 188" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M75 130 Q90 108 115 112" fill="none" stroke="black" stroke-width="2.5"/>
      <circle cx="88" cy="118" r="8" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="86" cy="117" r="3" fill="black"/>
      <path d="M150 88 Q158 65 155 45" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <path d="M155 45 Q162 38 168 45 Q162 55 155 52" fill="white" stroke="black" stroke-width="2"/>
      <path d="M100 200 Q140 210 180 205" fill="none" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'horse',
    name: 'Horse',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="148" cy="175" rx="95" ry="62" fill="white" stroke="black" stroke-width="3"/>
      <path d="M210 130 Q225 85 215 60 Q205 40 215 28 Q225 22 228 35 Q232 50 225 65 Q240 55 245 42 Q248 55 238 70 Q250 72 250 85 Q238 88 232 100 Q240 110 235 125" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="215" cy="118" r="40" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="205" cy="112" rx="10" ry="9" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="203" cy="111" r="4" fill="black"/>
      <path d="M200 130 Q215 140 228 132" fill="none" stroke="black" stroke-width="2"/>
      <ellipse cx="228" cy="125" rx="8" ry="5" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="60" y="228" width="24" height="55" rx="6" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="100" y="228" width="24" height="55" rx="6" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="158" y="228" width="24" height="55" rx="6" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="198" y="228" width="24" height="55" rx="6" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M60 190 Q40 180 35 162 Q38 148 52 158 Q58 162 62 175" fill="white" stroke="black" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'bear',
    name: 'Bear',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="200" rx="80" ry="70" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="118" r="60" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="100" cy="85" r="28" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="200" cy="85" r="28" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="100" cy="88" r="15" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="200" cy="88" r="15" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="130" cy="110" r="12" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="170" cy="110" r="12" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="130" cy="112" r="5" fill="black"/>
      <circle cx="170" cy="112" r="5" fill="black"/>
      <ellipse cx="150" cy="135" rx="20" ry="14" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="150" cy="140" rx="10" ry="8" fill="white" stroke="black" stroke-width="1.5"/>
      <rect x="90" y="258" width="32" height="30" rx="8" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="178" y="258" width="32" height="30" rx="8" fill="white" stroke="black" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'snake',
    name: 'Snake',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M50 260 Q30 230 50 200 Q75 170 110 180 Q145 190 155 165 Q165 140 145 120 Q125 100 130 75 Q135 50 155 45 Q175 40 185 55 Q195 70 180 88 Q165 105 170 125 Q178 148 200 150 Q230 152 245 130 Q260 108 250 85" fill="none" stroke="black" stroke-width="18" stroke-linecap="round"/>
      <path d="M50 260 Q30 230 50 200 Q75 170 110 180 Q145 190 155 165 Q165 140 145 120 Q125 100 130 75 Q135 50 155 45 Q175 40 185 55 Q195 70 180 88 Q165 105 170 125 Q178 148 200 150 Q230 152 245 130 Q260 108 250 85" fill="none" stroke="white" stroke-width="12" stroke-linecap="round"/>
      <path d="M50 260 Q30 230 50 200 Q75 170 110 180 Q145 190 155 165 Q165 140 145 120 Q125 100 130 75 Q135 50 155 45 Q175 40 185 55 Q195 70 180 88 Q165 105 170 125 Q178 148 200 150 Q230 152 245 130 Q260 108 250 85" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-dasharray="20,12"/>
      <ellipse cx="248" cy="82" rx="16" ry="12" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="244" cy="78" r="4" fill="black"/>
      <path d="M260 82 L275 76 M260 84 L275 90" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'crab',
    name: 'Crab',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="165" rx="82" ry="62" fill="white" stroke="black" stroke-width="3"/>
      <path d="M70 145 Q40 130 25 108 Q22 90 38 95 Q52 100 60 118 L72 135" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="28" cy="95" rx="18" ry="12" fill="white" stroke="black" stroke-width="2"/>
      <path d="M230 145 Q260 130 275 108 Q278 90 262 95 Q248 100 240 118 L228 135" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="272" cy="95" rx="18" ry="12" fill="white" stroke="black" stroke-width="2"/>
      <path d="M88 148 Q72 165 68 185" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <path d="M105 158 Q92 178 90 200" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <path d="M212 148 Q228 165 232 185" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <path d="M195 158 Q208 178 210 200" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <circle cx="122" cy="142" r="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="178" cy="142" r="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="120" cy="140" r="4" fill="black"/>
      <circle cx="176" cy="140" r="4" fill="black"/>
      <path d="M130 175 Q150 185 170 175" fill="none" stroke="black" stroke-width="2.5"/>
      <line x1="115" y1="162" x2="185" y2="162" stroke="black" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: 'owl',
    name: 'Owl',
    category: 'Animals',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="185" rx="70" ry="85" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="115" r="55" fill="white" stroke="black" stroke-width="3"/>
      <path d="M110 68 L95 30 L130 62 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M190 68 L205 30 L170 62 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="128" cy="108" r="20" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="172" cy="108" r="20" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="128" cy="108" r="12" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="172" cy="108" r="12" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="126" cy="106" r="5" fill="black"/>
      <circle cx="170" cy="106" r="5" fill="black"/>
      <circle cx="124" cy="104" r="2" fill="white"/>
      <circle cx="168" cy="104" r="2" fill="white"/>
      <path d="M143 128 L150 135 L157 128 Z" fill="white" stroke="black" stroke-width="2"/>
      <path d="M88 195 Q65 205 62 225 Q68 238 85 232 Q98 225 100 212" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M212 195 Q235 205 238 225 Q232 238 215 232 Q202 225 200 212" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="118" cy="268" rx="28" ry="12" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="182" cy="268" rx="28" ry="12" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },

  // ─── MORE VEHICLES ───────────────────────────────────────────────────────────
  {
    id: 'firetruck',
    name: 'Fire Truck',
    category: 'Vehicles',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="15" y="155" width="270" height="85" rx="10" fill="white" stroke="black" stroke-width="3"/>
      <path d="M160 155 L175 110 L285 110 L285 155 Z" fill="white" stroke="black" stroke-width="3"/>
      <rect x="175" y="118" width="48" height="30" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="232" y="118" width="44" height="30" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="18" y="165" width="50" height="30" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="78" y="165" width="50" height="30" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="70" cy="248" r="32" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="70" cy="248" r="16" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="230" cy="248" r="32" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="230" cy="248" r="16" fill="white" stroke="black" stroke-width="2"/>
      <rect x="18" y="140" width="30" height="16" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <line x1="120" y1="108" x2="120" y2="80" stroke="black" stroke-width="3"/>
      <ellipse cx="120" cy="78" rx="18" ry="8" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'helicopter',
    name: 'Helicopter',
    category: 'Vehicles',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M55 155 Q60 130 95 125 L210 125 Q245 130 250 155 Q245 178 210 182 L95 182 Q60 178 55 155 Z" fill="white" stroke="black" stroke-width="3"/>
      <rect x="95" y="133" width="70" height="42" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="130" cy="154" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
      <line x1="150" y1="125" x2="150" y2="100" stroke="black" stroke-width="3"/>
      <line x1="40" y1="100" x2="260" y2="100" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="40" cy="100" rx="12" ry="6" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="260" cy="100" rx="12" ry="6" fill="white" stroke="black" stroke-width="2"/>
      <path d="M210 182 L230 220 L250 220 L240 182" fill="white" stroke="black" stroke-width="2.5"/>
      <line x1="230" y1="220" x2="230" y2="240" stroke="black" stroke-width="2.5"/>
      <line x1="250" y1="220" x2="250" y2="240" stroke="black" stroke-width="2.5"/>
      <line x1="215" y1="240" x2="270" y2="240" stroke="black" stroke-width="2.5"/>
      <path d="M55 155 Q35 165 28 180 L60 182" fill="white" stroke="black" stroke-width="2"/>
      <line x1="28" y1="195" x2="75" y2="195" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'submarine',
    name: 'Submarine',
    category: 'Vehicles',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M40 155 Q40 115 75 105 L225 105 Q265 108 268 140 L270 165 Q268 195 230 198 L75 198 Q40 195 40 155 Z" fill="white" stroke="black" stroke-width="3"/>
      <rect x="130" y="72" width="50" height="34" rx="6" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="148" y="50" width="14" height="24" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="120" cy="152" r="22" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="120" cy="152" r="13" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="190" cy="152" r="18" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="190" cy="152" r="10" fill="white" stroke="black" stroke-width="2"/>
      <path d="M40 155 Q20 152 15 165 Q18 178 38 175" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M268 148 Q285 145 288 158 Q285 170 268 168" fill="white" stroke="black" stroke-width="2.5"/>
      <line x1="80" y1="198" x2="80" y2="218" stroke="black" stroke-width="2"/>
      <line x1="150" y1="198" x2="150" y2="220" stroke="black" stroke-width="2"/>
      <line x1="220" y1="198" x2="220" y2="218" stroke="black" stroke-width="2"/>
    </svg>`,
  },

  // ─── MORE FOOD ───────────────────────────────────────────────────────────────
  {
    id: 'strawberry',
    name: 'Strawberry',
    category: 'Food',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M150 80 Q210 75 240 120 Q265 158 255 210 Q242 258 200 272 Q175 280 150 275 Q125 280 100 272 Q58 258 45 210 Q35 158 60 120 Q90 75 150 80 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M150 80 Q140 55 145 35 Q155 28 162 38 Q165 52 155 68 Q165 55 175 50 Q185 52 182 65 Q175 75 162 78" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M142 60 Q132 50 128 38 Q136 30 144 40" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="120" cy="145" r="8" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="155" cy="130" r="7" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="185" cy="148" r="8" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="105" cy="175" r="7" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="148" cy="168" r="8" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="190" cy="182" r="7" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="125" cy="210" r="7" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="168" cy="215" r="8" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'watermelon',
    name: 'Watermelon',
    category: 'Food',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M40 200 Q40 130 150 85 Q260 130 260 200 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M55 200 Q55 142 150 102 Q245 142 245 200 Z" fill="white" stroke="black" stroke-width="2"/>
      <line x1="40" y1="200" x2="260" y2="200" stroke="black" stroke-width="3"/>
      <ellipse cx="150" cy="200" rx="110" ry="16" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="110" cy="155" r="6" fill="black"/>
      <circle cx="145" cy="138" r="5" fill="black"/>
      <circle cx="180" cy="152" r="6" fill="black"/>
      <circle cx="125" cy="172" r="5" fill="black"/>
      <circle cx="165" cy="170" r="6" fill="black"/>
      <circle cx="150" cy="185" r="5" fill="black"/>
    </svg>`,
  },
  {
    id: 'donut',
    name: 'Donut',
    category: 'Food',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <circle cx="150" cy="150" r="110" fill="white" stroke="black" stroke-width="3"/>
      <circle cx="150" cy="150" r="55" fill="white" stroke="black" stroke-width="3"/>
      <path d="M60 110 Q80 75 120 68 Q160 62 200 78 Q230 92 245 118" fill="none" stroke="black" stroke-width="2.5" stroke-dasharray="12,8"/>
      <circle cx="108" cy="80" r="6" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="155" cy="68" r="6" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="200" cy="80" r="6" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="232" cy="108" r="6" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="82" cy="108" r="5" fill="white" stroke="black" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: 'hamburger',
    name: 'Hamburger',
    category: 'Food',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M55 148 Q55 112 150 105 Q245 112 245 148 Z" fill="white" stroke="black" stroke-width="3"/>
      <rect x="48" y="148" width="204" height="22" rx="4" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="48" y="170" width="204" height="18" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="45" y="188" width="210" height="25" rx="4" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M45 213 Q45 242 150 248 Q255 242 255 213 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M60 148 Q90 140 120 148" fill="none" stroke="black" stroke-width="2"/>
      <path d="M155 142 Q185 135 215 142" fill="none" stroke="black" stroke-width="2"/>
    </svg>`,
  },

  // ─── MORE FANTASY ────────────────────────────────────────────────────────────
  {
    id: 'wizard',
    name: 'Wizard',
    category: 'Fantasy',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M105 248 Q108 190 130 165 L170 165 Q192 190 195 248 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="150" cy="145" r="40" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M110 145 Q108 105 150 62 Q192 105 190 145 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="150" cy="145" rx="42" ry="10" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="136" cy="140" r="7" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="164" cy="140" r="7" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="134" cy="139" r="3" fill="black"/>
      <circle cx="162" cy="139" r="3" fill="black"/>
      <path d="M140 158 Q150 164 160 158" fill="none" stroke="black" stroke-width="2"/>
      <path d="M115 148 Q100 145 88 150" fill="none" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <path d="M185 148 Q200 145 212 150" fill="none" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <path d="M195 210 L220 180 L225 192 L240 168" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="242" cy="166" r="8" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="135" cy="88" r="6" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="160" cy="75" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="148" cy="95" r="4" fill="white" stroke="black" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: 'mermaid',
    name: 'Mermaid',
    category: 'Fantasy',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M120 200 Q108 240 100 265 Q115 275 130 260 Q140 248 150 240 Q160 248 170 260 Q185 275 200 265 Q192 240 180 200 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M95 268 Q88 280 92 290 L115 282 L108 270" fill="white" stroke="black" stroke-width="2"/>
      <path d="M205 268 Q212 280 208 290 L185 282 L192 270" fill="white" stroke="black" stroke-width="2"/>
      <path d="M125 200 Q130 170 150 162 Q170 170 175 200" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="150" cy="115" r="48" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="132" cy="108" r="8" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="168" cy="108" r="8" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="130" cy="107" r="3" fill="black"/>
      <circle cx="166" cy="107" r="3" fill="black"/>
      <path d="M138 128 Q150 136 162 128" fill="none" stroke="black" stroke-width="2"/>
      <path d="M118 80 Q108 55 112 40 Q122 35 128 48 Q132 38 142 40 Q144 52 138 65 Q148 50 158 50 Q162 62 152 72 Q162 60 172 62 Q170 75 158 80" fill="white" stroke="black" stroke-width="2"/>
      <path d="M125 162 Q105 155 95 140" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M175 162 Q195 155 205 140" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'superhero',
    name: 'Superhero',
    category: 'Fantasy',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="108" y="155" width="84" height="105" rx="10" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M108 200 Q85 210 72 240 L108 240" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M192 200 Q215 210 228 240 L192 240" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="115" y="255" width="28" height="38" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <rect x="157" y="255" width="28" height="38" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="150" cy="108" r="48" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="133" cy="100" r="9" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="167" cy="100" r="9" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="131" cy="99" r="4" fill="black"/>
      <circle cx="165" cy="99" r="4" fill="black"/>
      <path d="M136 122 Q150 130 164 122" fill="none" stroke="black" stroke-width="2"/>
      <path d="M135 75 Q130 58 140 50 Q150 45 155 55 Q160 45 170 52 Q175 62 165 72" fill="white" stroke="black" stroke-width="2"/>
      <path d="M130 172 L150 158 L170 172 L162 188 L138 188 Z" fill="white" stroke="black" stroke-width="2"/>
      <path d="M72 240 Q55 250 52 268 L85 265 L88 248" fill="white" stroke="black" stroke-width="2"/>
      <path d="M228 240 Q245 250 248 268 L215 265 L212 248" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },

  // ─── MORE NATURE & SPACE ─────────────────────────────────────────────────────
  {
    id: 'rainbow',
    name: 'Rainbow',
    category: 'Nature',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <path d="M20 240 Q20 80 150 80 Q280 80 280 240" fill="none" stroke="black" stroke-width="18"/>
      <path d="M20 240 Q20 80 150 80 Q280 80 280 240" fill="none" stroke="white" stroke-width="12"/>
      <path d="M38 240 Q38 100 150 100 Q262 100 262 240" fill="none" stroke="black" stroke-width="14"/>
      <path d="M38 240 Q38 100 150 100 Q262 100 262 240" fill="none" stroke="white" stroke-width="8"/>
      <path d="M55 240 Q55 118 150 118 Q245 118 245 240" fill="none" stroke="black" stroke-width="12"/>
      <path d="M55 240 Q55 118 150 118 Q245 118 245 240" fill="none" stroke="white" stroke-width="6"/>
      <path d="M72 240 Q72 135 150 135 Q228 135 228 240" fill="none" stroke="black" stroke-width="10"/>
      <path d="M72 240 Q72 135 150 135 Q228 135 228 240" fill="none" stroke="white" stroke-width="4"/>
      <path d="M90 240 Q90 152 150 152 Q210 152 210 240" fill="none" stroke="black" stroke-width="8"/>
      <path d="M90 240 Q90 152 150 152 Q210 152 210 240" fill="none" stroke="white" stroke-width="2"/>
      <ellipse cx="58" cy="212" rx="35" ry="28" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="45" cy="222" rx="28" ry="22" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="242" cy="212" rx="35" ry="28" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="255" cy="222" rx="28" ry="22" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'cactus',
    name: 'Cactus',
    category: 'Nature',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="128" y="100" width="44" height="175" rx="20" fill="white" stroke="black" stroke-width="3"/>
      <rect x="60" y="148" width="70" height="38" rx="18" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="60" y="110" width="38" height="82" rx="18" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="170" y="148" width="70" height="38" rx="18" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="202" y="108" width="38" height="82" rx="18" fill="white" stroke="black" stroke-width="2.5"/>
      <line x1="138" y1="115" x2="130" y2="108" stroke="black" stroke-width="1.5"/>
      <line x1="150" y1="110" x2="150" y2="100" stroke="black" stroke-width="1.5"/>
      <line x1="162" y1="115" x2="170" y2="108" stroke="black" stroke-width="1.5"/>
      <line x1="138" y1="145" x2="130" y2="138" stroke="black" stroke-width="1.5"/>
      <line x1="162" y1="145" x2="170" y2="138" stroke="black" stroke-width="1.5"/>
      <line x1="138" y1="180" x2="130" y2="173" stroke="black" stroke-width="1.5"/>
      <line x1="162" y1="180" x2="170" y2="173" stroke="black" stroke-width="1.5"/>
      <ellipse cx="150" cy="278" rx="60" ry="10" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'alien',
    name: 'Alien',
    category: 'Space',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <ellipse cx="150" cy="195" rx="70" ry="75" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="150" cy="110" rx="65" ry="72" fill="white" stroke="black" stroke-width="3"/>
      <ellipse cx="118" cy="98" rx="22" ry="28" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="182" cy="98" rx="22" ry="28" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="116" cy="96" rx="12" ry="16" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="180" cy="96" rx="12" ry="16" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="114" cy="94" rx="5" ry="8" fill="black"/>
      <ellipse cx="178" cy="94" rx="5" ry="8" fill="black"/>
      <circle cx="112" cy="91" r="2" fill="white"/>
      <circle cx="176" cy="91" r="2" fill="white"/>
      <ellipse cx="150" cy="140" rx="8" ry="6" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M132 155 Q150 162 168 155" fill="none" stroke="black" stroke-width="2"/>
      <path d="M83 180 Q60 168 50 182 Q48 198 70 196 L85 192" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M217 180 Q240 168 250 182 Q252 198 230 196 L215 192" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="110" y="255" width="25" height="30" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <rect x="165" y="255" width="25" height="30" rx="6" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'birthday-cake',
    name: 'Birthday Cake',
    category: 'Food',
    type: 'object',
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="35" y="190" width="230" height="80" rx="10" fill="white" stroke="black" stroke-width="3"/>
      <rect x="60" y="148" width="180" height="45" rx="8" fill="white" stroke="black" stroke-width="2.5"/>
      <rect x="85" y="120" width="130" height="30" rx="6" fill="white" stroke="black" stroke-width="2"/>
      <path d="M35 190 Q150 178 265 190" fill="none" stroke="black" stroke-width="2"/>
      <path d="M60 148 Q150 138 240 148" fill="none" stroke="black" stroke-width="2"/>
      <line x1="100" y1="120" x2="100" y2="95" stroke="black" stroke-width="2.5"/>
      <line x1="150" y1="120" x2="150" y2="92" stroke="black" stroke-width="2.5"/>
      <line x1="200" y1="120" x2="200" y2="95" stroke="black" stroke-width="2.5"/>
      <path d="M97 95 Q100 86 103 95" fill="white" stroke="black" stroke-width="2"/>
      <path d="M147 92 Q150 82 153 92" fill="white" stroke="black" stroke-width="2"/>
      <path d="M197 95 Q200 86 203 95" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="100" cy="83" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="150" cy="80" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <circle cx="200" cy="83" r="5" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M35 215 Q80 205 125 215 Q170 225 215 215 Q240 210 265 215" fill="none" stroke="black" stroke-width="2"/>
    </svg>`,
  },

  // ─── MORE BACKDROPS ──────────────────────────────────────────────────────────
  {
    id: 'arctic',
    name: 'Arctic Snow',
    category: 'Outdoors',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="1"/>
      <rect x="0" y="0" width="600" height="200" fill="white" stroke="black" stroke-width="1"/>
      <circle cx="300" cy="60" r="48" fill="white" stroke="black" stroke-width="2.5"/>
      <line x1="300" y1="2" x2="300" y2="22" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <line x1="300" y1="118" x2="300" y2="138" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <line x1="242" y1="60" x2="222" y2="60" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <line x1="358" y1="60" x2="378" y2="60" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <line x1="259" y1="19" x2="245" y2="5" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <line x1="341" y1="19" x2="355" y2="5" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <line x1="259" y1="101" x2="245" y2="115" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <line x1="341" y1="101" x2="355" y2="115" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <path d="M0 240 Q80 225 150 235 Q220 245 300 235 Q380 225 450 235 Q520 245 600 230 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M0 270 Q100 258 200 268 Q300 278 400 268 Q500 258 600 265" fill="none" stroke="black" stroke-width="2"/>
      <path d="M50 238 L80 195 L110 238 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M150 232 L188 175 L226 232 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M380 235 L415 182 L450 235 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M480 240 L508 195 L536 240 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="80" cy="310" r="18" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="65" cy="318" r="14" fill="white" stroke="black" stroke-width="2"/>
      <line x1="80" y1="328" x2="80" y2="342" stroke="black" stroke-width="2"/>
      <line x1="65" y1="332" x2="65" y2="342" stroke="black" stroke-width="2"/>
      <line x1="58" y1="342" x2="88" y2="342" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'night-sky',
    name: 'Night Sky',
    category: 'Fantasy',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="1"/>
      <path d="M320 45 Q290 28 282 55 Q265 42 268 68 Q252 62 255 82 Q275 92 295 80 Q305 98 325 90 Q342 102 355 85 Q372 88 368 68 Q385 58 375 38 Q355 30 340 45 Z" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="80" cy="80" r="3" fill="black"/>
      <circle cx="150" cy="45" r="2" fill="black"/>
      <circle cx="220" cy="70" r="3" fill="black"/>
      <circle cx="50" cy="130" r="2" fill="black"/>
      <circle cx="180" cy="115" r="3" fill="black"/>
      <circle cx="120" cy="155" r="2" fill="black"/>
      <circle cx="450" cy="55" r="3" fill="black"/>
      <circle cx="510" cy="90" r="2" fill="black"/>
      <circle cx="540" cy="40" r="3" fill="black"/>
      <circle cx="480" cy="130" r="2" fill="black"/>
      <circle cx="420" cy="150" r="3" fill="black"/>
      <circle cx="560" cy="160" r="2" fill="black"/>
      <circle cx="250" cy="145" r="3" fill="black"/>
      <circle cx="380" cy="130" r="2" fill="black"/>
      <path d="M70" cy="85" fill="none"/>
      <path d="M65 82 L70 72 L75 82 L85 83 L78 90 L80 100 L70 95 L60 100 L62 90 L55 83 Z" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M495 62 L500 52 L505 62 L515 63 L508 70 L510 80 L500 75 L490 80 L492 70 L485 63 Z" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M0 280 Q150 265 300 272 Q450 280 600 268 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M0 310 Q100 298 200 305 Q300 312 400 305 Q500 298 600 305" fill="none" stroke="black" stroke-width="1.5"/>
      <rect x="30" y="240" width="55" height="42" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="110" y="220" width="70" height="62" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="205" y="232" width="55" height="50" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="420" y="225" width="65" height="57" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="510" y="240" width="55" height="42" rx="4" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'playground',
    name: 'Playground',
    category: 'Outdoors',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="1"/>
      <rect x="0" y="0" width="600" height="220" fill="white" stroke="black" stroke-width="1"/>
      <circle cx="500" cy="65" r="42" fill="white" stroke="black" stroke-width="2.5"/>
      <ellipse cx="120" cy="85" rx="75" ry="32" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="350" cy="65" rx="85" ry="35" fill="white" stroke="black" stroke-width="2"/>
      <path d="M0 285 Q150 270 300 278 Q450 286 600 272 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <line x1="80" y1="285" x2="80" y2="200" stroke="black" stroke-width="4"/>
      <line x1="180" y1="285" x2="180" y2="200" stroke="black" stroke-width="4"/>
      <line x1="55" y1="200" x2="205" y2="200" stroke="black" stroke-width="3"/>
      <line x1="80" y1="225" x2="105" y2="255" stroke="black" stroke-width="2.5"/>
      <line x1="180" y1="225" x2="155" y2="255" stroke="black" stroke-width="2.5"/>
      <rect x="100" y="255" width="60" height="8" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <line x1="280" y1="285" x2="280" y2="175" stroke="black" stroke-width="4"/>
      <line x1="380" y1="285" x2="380" y2="175" stroke="black" stroke-width="4"/>
      <line x1="255" y1="175" x2="405" y2="175" stroke="black" stroke-width="3"/>
      <line x1="295" y1="175" x2="295" y2="225" stroke="black" stroke-width="2"/>
      <line x1="320" y1="175" x2="320" y2="225" stroke="black" stroke-width="2"/>
      <line x1="345" y1="175" x2="345" y2="225" stroke="black" stroke-width="2"/>
      <line x1="370" y1="175" x2="370" y2="225" stroke="black" stroke-width="2"/>
      <line x1="450" y1="285" x2="480" y2="195" stroke="black" stroke-width="3"/>
      <line x1="550" y1="285" x2="520" y2="195" stroke="black" stroke-width="3"/>
      <line x1="460" y1="230" x2="540" y2="230" stroke="black" stroke-width="2.5"/>
      <ellipse cx="500" cy="228" rx="42" ry="8" fill="white" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'volcano',
    name: 'Volcano Island',
    category: 'Fantasy',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="1"/>
      <rect x="0" y="0" width="600" height="190" fill="white" stroke="black" stroke-width="1"/>
      <ellipse cx="80" cy="90" rx="72" ry="32" fill="white" stroke="black" stroke-width="2"/>
      <ellipse cx="420" cy="65" rx="88" ry="38" fill="white" stroke="black" stroke-width="2"/>
      <path d="M180 295 Q200 240 250 210 L350 210 Q400 240 420 295 Z" fill="white" stroke="black" stroke-width="3"/>
      <path d="M250 210 Q280 170 300 155 Q320 170 350 210 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M282 155 Q290 130 300 118 Q310 130 318 155" fill="none" stroke="black" stroke-width="2.5"/>
      <path d="M296 118 Q288 105 292 92 Q302 88 308 100 Q310 88 320 90 Q322 105 312 118" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M0 295 Q100 280 200 290 Q300 300 400 288 Q500 278 600 290 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M0 315 Q150 302 300 312 Q450 322 600 310" fill="none" stroke="black" stroke-width="2"/>
      <path d="M0 340 Q150 328 300 336 Q450 344 600 332" fill="none" stroke="black" stroke-width="1.5"/>
      <ellipse cx="80" cy="340" rx="45" ry="20" fill="white" stroke="black" stroke-width="2"/>
      <line x1="65" y1="320" x2="68" y2="290" stroke="black" stroke-width="3"/>
      <line x1="68" y1="290" x2="55" y2="270" stroke="black" stroke-width="2"/>
      <line x1="68" y1="290" x2="82" y2="272" stroke="black" stroke-width="2"/>
      <ellipse cx="520" cy="345" rx="50" ry="22" fill="white" stroke="black" stroke-width="2"/>
      <line x1="508" y1="323" x2="510" y2="295" stroke="black" stroke-width="3"/>
      <line x1="510" y1="295" x2="496" y2="275" stroke="black" stroke-width="2"/>
      <line x1="510" y1="295" x2="524" y2="277" stroke="black" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'carnival',
    name: 'Carnival',
    category: 'Fantasy',
    type: 'backdrop',
    svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect x="0" y="0" width="600" height="400" fill="white" stroke="black" stroke-width="1"/>
      <rect x="0" y="0" width="600" height="210" fill="white" stroke="black" stroke-width="1"/>
      <circle cx="480" cy="65" r="45" fill="white" stroke="black" stroke-width="2.5"/>
      <circle cx="480" cy="65" r="30" fill="white" stroke="black" stroke-width="2"/>
      <line x1="480" y1="35" x2="480" y2="20" stroke="black" stroke-width="2"/>
      <line x1="480" y1="95" x2="480" y2="110" stroke="black" stroke-width="2"/>
      <line x1="450" y1="65" x2="435" y2="65" stroke="black" stroke-width="2"/>
      <line x1="510" y1="65" x2="525" y2="65" stroke="black" stroke-width="2"/>
      <rect x="30" y="175" width="130" height="115" rx="5" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M25 178 L95 130 L165 178 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <line x1="95" y1="130" x2="95" y2="115" stroke="black" stroke-width="2"/>
      <rect x="55" y="220" width="35" height="70" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <rect x="100" y="230" width="35" height="60" rx="5" fill="white" stroke="black" stroke-width="2"/>
      <line x1="30" y1="195" x2="160" y2="195" stroke="black" stroke-width="1.5" stroke-dasharray="8,6"/>
      <rect x="210" y="185" width="150" height="105" rx="5" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M205 188 Q285 145 365 188 Z" fill="white" stroke="black" stroke-width="2.5"/>
      <path d="M225 188 Q285 158 345 188" fill="none" stroke="black" stroke-width="1.5" stroke-dasharray="8,5"/>
      <rect x="245" y="240" width="30" height="50" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <rect x="290" y="248" width="30" height="42" rx="4" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="340" cy="155" r="22" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="340" cy="155" r="12" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M0 310 Q150 295 300 305 Q450 315 600 300 L600 400 L0 400 Z" fill="white" stroke="black" stroke-width="2.5"/>
    </svg>`,
  },
]

export const objectPages = coloringPages.filter(p => p.type === 'object')
export const backdropPages = coloringPages.filter(p => p.type === 'backdrop')

export const objectCategories = [...new Set(objectPages.map(p => p.category))]
export const backdropCategories = [...new Set(backdropPages.map(p => p.category))]
