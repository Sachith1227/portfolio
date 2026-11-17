export default function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="background-grid" />
      <div className="background-glow" />
      <svg
        className="light-trails"
        viewBox="0 0 1600 1100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="trail">
            <stop stopColor="#ff3b45" stopOpacity="0" />
            <stop offset=".5" stopColor="#ff3b45" stopOpacity=".65" />
            <stop offset="1" stopColor="#ff3b45" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbon">
            <stop stopColor="#ff3b45" stopOpacity=".02" />
            <stop offset=".6" stopColor="#ff617b" stopOpacity=".13" />
            <stop offset="1" stopColor="#ff3b45" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="trail-one">
          <path
            d="M-120 430Q100 90 860 -140L400 -170Q20 0-120 250Z"
            fill="url(#ribbon)"
          />
          <path
            d="M-120 430Q100 90 860 -140"
            fill="none"
            stroke="url(#trail)"
          />
        </g>
        <g className="trail-two">
          <path
            d="M650 1150Q1430 850 1770 350L1800 550Q1350 1120 650 1150Z"
            fill="url(#ribbon)"
          />
          <path
            d="M650 1150Q1430 850 1770 350"
            fill="none"
            stroke="url(#trail)"
          />
        </g>
      </svg>
    </div>
  )
}
