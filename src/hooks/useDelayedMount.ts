import { useState, useLayoutEffect } from 'react'

const useDelayedMount = (ms: number) => {
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    const id = setTimeout(() => {
      setIsMounted(true)
    }, ms)
    return () => clearTimeout(id)
  }, [ms])
  return isMounted
}

export default useDelayedMount
