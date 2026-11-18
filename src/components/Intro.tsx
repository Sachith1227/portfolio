type IntroProps = {
  onFinish: () => void
}

const leftCode = [
  '01  const create = (idea) => {',
  '02    return idea.build()',
  '03  }',
  '04',
  '05  function explore() {',
  "06    return ['design', 'develop']",
  '07  }',
  '08',
  '09  while (curious) {',
  '10    keepCreating()',
  '11  }',
]

const rightCode = [
  '01  <portfolio>',
  '02    <ideas meet="code" />',
  '03    <work with="purpose" />',
  '04  </portfolio>',
  '05',
  '06  // made to be explored',
  '07  const next = new Project()',
  '08  next.start()',
  '09',
  '10  design + build + repeat',
]

export default function Intro({ onFinish }: IntroProps) {
  return (
    <section
      className="intro-screen"
      aria-label="Portfolio introduction"
      onAnimationEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.animationName === 'intro-exit'
        ) {
          onFinish()
        }
      }}
    >
      <div className="intro-atmosphere" aria-hidden="true" />
      <div className="intro-grid" aria-hidden="true" />
      <div className="intro-code intro-code-left" aria-hidden="true">
        {leftCode.map((line, index) => (
          <span key={index}>{line || '\u00a0'}</span>
        ))}
      </div>
      <div className="intro-code intro-code-right" aria-hidden="true">
        {rightCode.map((line, index) => (
          <span key={index}>{line || '\u00a0'}</span>
        ))}
      </div>
      <div className="intro-scan" aria-hidden="true" />

      <div className="intro-topline" aria-hidden="true">
        <span>
          CHAMALKA <b>/</b> PORTFOLIO
        </span>
        <span>EST. 2026</span>
      </div>
      <button className="intro-skip" type="button" onClick={onFinish}>
        Skip intro <span aria-hidden="true">↗</span>
      </button>

      <div className="intro-center">
        <div className="intro-emblem" aria-hidden="true">
          <div className="intro-orbit intro-orbit-outer" />
          <div className="intro-orbit intro-orbit-inner" />
          <div className="intro-logo-glow" />
          <img
            className="intro-logo"
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt=""
          />
        </div>
        <div className="intro-wordmark" aria-label="CHAMALKA">
          {'CHAMALKA'.split('').map((letter, index) => (
            <span
              key={index}
              aria-hidden="true"
              style={{ animationDelay: `${0.85 + index * 0.15}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
        <p className="intro-subtitle" aria-hidden="true">
          DEVELOPER <span> / </span> CREATOR
        </p>
        <div className="intro-loading" aria-hidden="true">
          <div className="intro-loading-track">
            <span />
          </div>
          <div className="intro-loading-label">
            <span>LOADING EXPERIENCE</span>
            <span>●</span>
          </div>
        </div>
      </div>

      <div className="intro-bottomline" aria-hidden="true">
        <span>DESIGNED TO CREATE</span>
        <span>WELCOME_</span>
      </div>
    </section>
  )
}
