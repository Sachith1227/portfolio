import { useState } from 'react'

const storageKey = 'portfolio-motion'

export function useMotionPreference() {
  const [paused, setPaused] = useState(() => {
    try {
      return localStorage.getItem(storageKey) === 'paused'
    } catch {
      return false
    }
  })

  const toggleMotion = () => {
    const nextPaused = !paused
    try {
      localStorage.setItem(storageKey, nextPaused ? 'paused' : 'playing')
    } catch {
      // The control still works when browser storage is unavailable.
    }
    setPaused(nextPaused)
  }

  return { paused, toggleMotion }
}
