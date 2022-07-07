import { useState, useEffect } from 'react'

const useDelayedMount = (ms: number) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      setIsMounted(true)
    }, ms)
    return () => clearTimeout(id)
  }, [ms])
  return isMounted
}

export default useDelayedMount
