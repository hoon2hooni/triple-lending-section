import { useState, useRef, useCallback, useLayoutEffect } from 'react'

/**
 * 모든 단위는 초 단위입니다.
 */

const useRaf = (duration: number, delay = 0): number => {
  const [elapsed, setElapsed] = useState(0)
  const prevRef = useRef<number>()
  const rafRef = useRef<number>()
  const elapsedWithDelayRef = useRef<number>(0)
  const animate = useCallback(
    (curr: number) => {
      if (prevRef.current) {
        const delta = (curr - prevRef.current) / 1000
        elapsedWithDelayRef.current += delta
        const elapsedWithoutDelay =
          elapsedWithDelayRef.current - delay >= duration
            ? duration
            : elapsedWithDelayRef.current - delay

        if (elapsedWithoutDelay >= 0) {
          setElapsed(elapsedWithoutDelay)
        }

        if (elapsedWithoutDelay === duration && rafRef.current) {
          cancelAnimationFrame(rafRef.current)
        }
      }
      prevRef.current = curr
      rafRef.current = requestAnimationFrame(animate)
    },
    [duration, delay],
  )

  useLayoutEffect(() => {
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      rafRef.current && cancelAnimationFrame(rafRef.current)
    }
  }, [animate])
  return elapsed
}

export default useRaf
