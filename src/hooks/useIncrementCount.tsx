import { useState, useEffect, useRef, useCallback } from 'react'

import { easeOutExpo } from '@utils/easeOut'

const increaseCountUntilMax =
  (currTime: number, maxNum: number) => (state: number) => {
    if (state >= maxNum) {
      return maxNum
    }
    return Math.floor(easeOutExpo(currTime, 0, maxNum, 2))
  }

const useIncrementCount = (max: number) => {
  const [count, setCount] = useState(0)
  const requestId = useRef<number>()
  const prevTimeRef = useRef<number>()
  const currentTimeRef = useRef<number>(0)

  const animate = useCallback(
    (time: number) => {
      if (prevTimeRef.current) {
        const deltaTime = (time - prevTimeRef.current) / 1000
        setCount(increaseCountUntilMax(currentTimeRef.current, max))
        currentTimeRef.current += deltaTime
      }
      prevTimeRef.current = time
      requestId.current = requestAnimationFrame(animate)
    },
    [max],
  )

  useEffect(() => {
    requestId.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestId.current as number)
  }, [max, animate])
  return count
}

export default useIncrementCount
