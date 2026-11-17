import { useEffect, useRef } from 'react'

export function useScrollEffects() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const revealTargets = root.querySelectorAll('.reveal, .work-card')
    let revealObserver: IntersectionObserver | undefined
    if ('IntersectionObserver' in window) {
      root.classList.add('has-scroll-motion')
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('visible', 'is-in-view')
            revealObserver?.unobserve(entry.target)
          })
        },
        { threshold: 0.1 },
      )
      revealTargets.forEach((element) => revealObserver?.observe(element))
    } else {
      revealTargets.forEach((element) =>
        element.classList.add('visible', 'is-in-view'),
      )
    }

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
      revealObserver?.disconnect()
      root.classList.remove('has-scroll-motion')
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return { rootRef }
}
