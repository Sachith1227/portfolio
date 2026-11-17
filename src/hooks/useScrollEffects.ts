import { useEffect, useRef } from 'react'

export function useScrollEffects() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.1 },
    )
    root
      .querySelectorAll('.reveal')
      .forEach((element) => revealObserver.observe(element))

    let frame = 0
    const updateProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight
      root.style.setProperty(
        '--progress',
        String(maxScroll > 0 ? window.scrollY / maxScroll : 0),
      )
    }
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        updateProgress()
        frame = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    updateProgress()

    return () => {
      revealObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return { rootRef }
}
