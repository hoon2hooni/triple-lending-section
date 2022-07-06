import { useState, useEffect, useRef } from 'react'

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
  const currentTimeRef = useRef(0)

  // 1frame이란 1초에 60번 이기에 상수로 지정
  const FRAME_RATE_UNIT_SEC = 1 / 60
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(increaseCountUntilMax(currentTimeRef.current, max))
      currentTimeRef.current += FRAME_RATE_UNIT_SEC
      // setInterval은 ms단위이기에 * 1000을 해주었음
    }, FRAME_RATE_UNIT_SEC * 1000)
    return () => clearInterval(timer)
  }, [FRAME_RATE_UNIT_SEC, max])
  return count
}

export default useIncrementCount
