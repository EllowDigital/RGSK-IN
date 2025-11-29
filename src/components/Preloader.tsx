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
        {/* Logo (uses public/logo.png) */}
        <div className="relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg overflow-hidden">
            <img
              src="/logo.png"
              alt="RGSK Technologies logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 blur-lg -z-10" />
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
