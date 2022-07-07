import {
  useState,
  useRef,
  useCallback,
  MutableRefObject,
  useLayoutEffect,
} from 'react'

import { easeOutExpo } from '@utils/easeOut'

const increaseCountUntilMax =
  (elapsedTime: number, target: number, ref: MutableRefObject<boolean>) =>
  (state: number) => {
    if (state >= target) {
      ref.current = false
      return target
    }
    return Math.floor(easeOutExpo(elapsedTime, 0, target, 2))
  }

const useIncrementCount = (target: number) => {
  const [count, setCount] = useState(0)
  const prevTimeRef = useRef<number>()
  const rafRef = useRef<number>()
  const elapsedTimeRef = useRef<number>(0)
  const flagRef = useRef<boolean>(true)
  const animate = useCallback(
    (currentTime: number) => {
      setCount(increaseCountUntilMax(elapsedTimeRef.current, target, flagRef))
      if (prevTimeRef.current) {
        const deltaTime = (currentTime - prevTimeRef.current) / 1000
        elapsedTimeRef.current += deltaTime
      }
      prevTimeRef.current = currentTime
      rafRef.current = requestAnimationFrame(animate)
      if (!flagRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    },
    [target],
  )

  useLayoutEffect(() => {
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      rafRef.current && cancelAnimationFrame(rafRef.current)
    }
  }, [target, animate])
  return count
}

export default useIncrementCount
