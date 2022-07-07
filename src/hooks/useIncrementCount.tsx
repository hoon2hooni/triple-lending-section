import {
  useState,
  useEffect,
  useRef,
  useCallback,
  MutableRefObject,
} from 'react'

import { easeOutExpo } from '@utils/easeOut'

const increaseCountUntilMax =
  (
    currTime: number,
    maxNum: number,
    ref: MutableRefObject<number | undefined>,
  ) =>
  (state: number) => {
    if (state >= maxNum) {
      ref.current = undefined
      return maxNum
    }
    return Math.floor(easeOutExpo(currTime, 0, maxNum, 2))
  }

const useIncrementCount = (max: number) => {
  const [count, setCount] = useState(0)
  const prevTimeRef = useRef<number>()
  const requestRef = useRef<number>()
  const currentTimeRef = useRef<number>(0)

  const animate = useCallback(
    (time: number) => {
      if (!requestRef.current) {
        return
      }
      setCount(increaseCountUntilMax(currentTimeRef.current, max, requestRef))
      if (prevTimeRef.current) {
        const deltaTime = (time - prevTimeRef.current) / 1000
        currentTimeRef.current += deltaTime
      }
      prevTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    },
    [max],
  )

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current as number)
  }, [max, animate])
  return count
}

export default useIncrementCount
