import { useEffect, useState } from 'react'

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    // Fade out after 1.5s, remove after 2s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500)
    const removeTimer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = ''
    }, 2000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 text-center">
        {/* Animated Logo Circle */}
        <div className="relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-8">
          {/* Outer animated ring */}
          <span className="absolute inset-0 rounded-full border-4 border-primary animate-spin-slow" />
          {/* Inner pulse */}
          <span className="absolute inset-4 rounded-full bg-primary/20 blur-xl animate-pulse" />
          {/* Logo */}
          <span className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg border-2 border-primary bg-card">
            <img src="/logo.png" alt="RGSK Technologies" className="w-full h-full object-cover" />
          </span>
        </div>

        {/* Company Name & Tagline */}
        <h1 className="font-extrabold text-[clamp(2rem,6vw,2.75rem)] leading-tight mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          RGSK Technologies
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground font-medium mb-6 animate-fade-in">
          Crafting Digital Excellence
        </p>

        {/* Loading animation dots */}
        <div className="flex items-center justify-center gap-1 mt-2">
          <span
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-accent animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-secondary animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Loading, please wait...</p>
      </div>
    </div>
  )
}
