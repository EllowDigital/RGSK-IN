import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Prevent scrolling when the preloader is active
    document.body.style.overflow = 'hidden'

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Use a non-linear increment for a more dynamic feel
        return prev + 1 + prev * 0.05
      })
    }, 40)

    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 1800)

    const removeTimer = setTimeout(() => {
      setIsLoading(false)
      // Re-enable scrolling when the preloader is removed
      document.body.style.overflow = ''
    }, 2300)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
      // Ensure scrolling is re-enabled if the component unmounts early
      document.body.style.overflow = ''
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-4 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      // Accessibility attributes for screen readers
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center justify-center text-center">
        {/* Animated Ring & Logo */}
        {/* Using relative units (w-2/5) and max-w for better scaling */}
        <div className="relative mb-8 flex h-auto w-2/5 max-w-[160px] items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0">
            <svg className="h-full w-full animate-spin" style={{ animationDuration: '3s' }}>
              <circle
                className="opacity-20"
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Inner rotating ring */}
          {/* Scaled down with inset */}
          <div className="absolute inset-[8%]">
            <svg
              className="h-full w-full animate-spin"
              style={{ animationDuration: '2s', animationDirection: 'reverse' }}
            >
              <circle
                className="opacity-30"
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="60 40"
              />
              <defs>
                <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Logo Container */}
          {/* aspect-square ensures it remains a perfect square */}
          <div className="relative flex h-full w-full items-center justify-center aspect-square">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl animate-pulse" />
            <div className="relative w-3/5 h-3/5 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl bg-card">
              <img src="/logo.png" alt="RGSK Technologies" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* Company Name with Animation */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse" />
            {/* Using clamp for fluid typography */}
            <h1 className="font-bold text-[clamp(1.75rem,5vw,2.25rem)] leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                RGSK
              </span>
              <span className="text-foreground"> Technologies</span>
            </h1>
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-accent animate-pulse delay-300" />
          </div>
          <p className="text-sm text-muted-foreground font-medium md:text-base">
            Crafting Digital Excellence
          </p>
        </div>

        {/* Progress Bar */}
        {/* Switched to w-full and max-w for responsiveness */}
        <div className="w-full max-w-xs">
          <div className="relative h-2 overflow-hidden rounded-full bg-muted/30 backdrop-blur-sm">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }} // Ensure width never exceeds 100%
            >
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {Math.floor(Math.min(progress, 100))}%
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-xs text-muted-foreground animate-pulse">
          Loading your experience...
        </p>
      </div>
    </div>
  )
}
