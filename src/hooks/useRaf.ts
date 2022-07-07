import { useState, useRef, useCallback, useLayoutEffect } from 'react'

const useRaf = (until: number) => {
  const [elapsedTime, setElapsedTime] = useState(0)
  const prevTimeRef = useRef<number>()
  const rafRef = useRef<number>()
  const animate = useCallback(
    (currentTime: number) => {
      if (prevTimeRef.current) {
        const deltaTime = (currentTime - prevTimeRef.current) / 1000
        setElapsedTime((elapsedTime) => {
          if (elapsedTime >= until) {
            rafRef.current && cancelAnimationFrame(rafRef.current)
            return elapsedTime
          } else {
            return elapsedTime + deltaTime
          }
        })
      }
      prevTimeRef.current = currentTime
      rafRef.current = requestAnimationFrame(animate)
    },
    [until],
  )

  useLayoutEffect(() => {
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      rafRef.current && cancelAnimationFrame(rafRef.current)
    }
  }, [animate])
  return elapsedTime
}

export default useRaf
