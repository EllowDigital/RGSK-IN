import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    // Complete loading after 2s
    const completeTimer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = ''
    }, 2000)

    return () => {
      clearTimeout(completeTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center space-y-6 px-4">
        {/* Icon (uses public/logo.png) — no background container, larger size */}
        <div>
          <img
            src="/logo.png"
            alt="RGSK Technologies logo"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
        </div>

        {/* Company Name + minimal business line */}
        <div className="text-center">
          <h1 className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            RGSK Technologies
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">Transforming your digital presence</p>
        </div>

        {/* Small spinner */}
        <div className="flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-primary animate-spin" aria-hidden />
        </div>
      </div>
    </div>
  )
}
