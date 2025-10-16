import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 1800)

    // Remove preloader
    const removeTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2300)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/5 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Animated Ring */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: '3s' }}>
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
          <div className="absolute inset-2 w-28 h-28 md:w-36 md:h-36">
            <svg
              className="w-full h-full animate-spin"
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
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl bg-card">
              <img
                src="/logo.png"
                alt="RGSK Technologies"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* Company Name with Animation */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                RGSK
              </span>
              <span className="text-foreground"> Technologies</span>
            </h1>
            <Sparkles className="w-5 h-5 text-accent animate-pulse delay-300" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground font-medium">
            Crafting Digital Excellence
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80">
          <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {progress}%
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
