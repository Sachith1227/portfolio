const drops = Array.from({ length: 90 }, (_, index) => {
  const size = 4 + ((index * 7) % 9)
  return {
    left: `${1 + ((index * 37 + (index % 5) * 11) % 98)}%`,
    top: `${2 + ((index * 47 + (index % 9) * 13) % 96)}%`,
    width: `${size}px`,
    height: `${Math.round(size * 1.25)}px`,
    animationDuration: `${8 + (index % 5) * 2}s`,
    animationDelay: `${-(index % 11)}s`,
    sliding: index % 6 === 0,
  }
})

export default function RainGlass() {
  return (
    <div className="rain-glass">
      {drops.map(({ sliding, ...style }, index) => (
        <span
          key={index}
          className={`rain-drop${sliding ? ' rain-drop-sliding' : ''}`}
          style={style}
        />
      ))}
    </div>
  )
}
