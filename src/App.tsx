import { useCallback, useEffect, useState } from 'react'
import Background from './components/Background'
import Header from './components/Header'
import Intro from './components/Intro'
import { useMotionPreference } from './hooks/useMotionPreference'
import { useScrollEffects } from './hooks/useScrollEffects'
import Hero from './sections/Hero'

export default function App() {
  const { rootRef } = useScrollEffects()
  const { paused, toggleMotion } = useMotionPreference()
  const [showIntro, setShowIntro] = useState(
    () =>
      !paused && !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const finishIntro = useCallback(() => setShowIntro(false), [])

  useEffect(() => {
    if (!showIntro) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotionChange = () => {
      if (reducedMotion.matches) finishIntro()
    }
    reducedMotion.addEventListener('change', onMotionChange)
    const timer = window.setTimeout(finishIntro, 5200)
    return () => {
      reducedMotion.removeEventListener('change', onMotionChange)
      window.clearTimeout(timer)
    }
  }, [finishIntro, showIntro])

  return (
    <div
      className={`site-shell${paused ? ' motion-off' : ''}${showIntro ? ' intro-active' : ''}`}
      ref={rootRef}
    >
      {showIntro && <Intro onFinish={finishIntro} />}
      <div inert={showIntro}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="scroll-progress" aria-hidden="true" />
        <Background />
        <Header paused={paused} toggleMotion={toggleMotion} />
        <main id="main">
          <Hero />
        </main>
      </div>
    </div>
  )
}
