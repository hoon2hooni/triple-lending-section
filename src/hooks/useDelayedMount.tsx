import { useState, useEffect } from 'react'

const useDelayedMount = (ms: number) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    }, ms)
  }, [ms])
  return isMounted
}

export default useDelayedMount
