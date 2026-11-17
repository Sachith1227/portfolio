import type { CSSProperties } from 'react'

// A stable distribution avoids a visible repeating pattern across the page.
const random = (seed: number) => {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return value - Math.floor(value)
}

const drops = Array.from({ length: 180 }, (_, index) => {
  const size = 3 + Math.round(Math.pow(random(index * 4 + 2), 2) * 12)
  const sliding = index % 10 === 0
  return {
    left: `${1 + random(index * 4) * 98}%`,
    top: `${1 + random(index * 4 + 1) * 96}%`,
    width: `${size}px`,
    height: `${Math.round(size * (sliding ? 1.35 : 1.1))}px`,
    animationDuration: `${10 + Math.round(random(index * 4 + 3) * 9)}s`,
    animationDelay: `${-Math.round(random(index * 4 + 4) * 15)}s`,
    '--trail-length': `${24 + Math.round(random(index * 4 + 5) * 48)}px`,
    sliding,
  }
})

export default function RainGlass() {
  return (
    <div className="rain-glass">
      {drops.map(({ sliding, ...style }, index) => (
        <span
          key={index}
          className={`rain-drop${sliding ? ' rain-drop-sliding' : ''}`}
          style={style as CSSProperties}
        />
      ))}
    </div>
  )
}
