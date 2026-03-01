import { useEffect, useState } from 'react'

interface UseContentLoadingOptions {
  minDelay?: number
  initialDelay?: number
}

interface UseContentLoadingReturn {
  isLoading: boolean
  isReady: boolean
  setLoaded: () => void
}

export function useContentLoading(options: UseContentLoadingOptions = {}): UseContentLoadingReturn {
  const { minDelay = 300, initialDelay = 0 } = options
  const [isLoading, setIsLoading] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const [loadTriggered, setLoadTriggered] = useState(false)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    if (loadTriggered) {
      const elapsed = Date.now() - startTime
      const remainingDelay = Math.max(0, minDelay - elapsed)

      const timer = setTimeout(() => {
        setIsLoading(false)

        // Small delay before showing content for smooth transition
        setTimeout(() => {
          setIsReady(true)
        }, 50)
      }, remainingDelay)

      return () => clearTimeout(timer)
    }
  }, [loadTriggered, minDelay, startTime])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadTriggered(true)
    }, initialDelay)

    return () => clearTimeout(timer)
  }, [initialDelay])

  const setLoaded = () => {
    setLoadTriggered(true)
  }

  return { isLoading, isReady, setLoaded }
}

// Hook for image loading with skeleton fallback
export function useImageLoading(src: string) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!src) return

    const img = new Image()
    img.onload = () => setIsLoaded(true)
    img.onerror = () => setError(true)
    img.src = src

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { isLoaded, error }
}
