import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Progress } from '@/components/ui/progress'

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    // Start exit animation after minimum display time
    const exitTimer = setTimeout(() => {
      setProgress(100)
      setIsExiting(true)

      // Complete exit after animation
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.overflow = ''
      }, 400)
    }, 1200)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(exitTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-400',
        isExiting && 'opacity-0 scale-105'
      )}
    >
      <div
        className={cn(
          'flex flex-col items-center justify-center space-y-6 transition-all duration-300',
          isExiting && 'scale-95 opacity-0'
        )}
      >
        {/* Logo with pulse and glow */}
        <div className="relative">
          <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-2xl blur-xl animate-pulse" />
          <img
            src="/logo.png"
            alt="RGSK Technologies"
            className={cn(
              'relative w-20 h-20 rounded-2xl object-contain',
              'animate-pulse shadow-lg shadow-primary/20'
            )}
          />
        </div>

        {/* Company Name */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">
            RGSK <span className="text-primary">Technologies</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {isExiting ? 'Welcome!' : 'Loading...'}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48">
          <Progress value={Math.min(progress, 100)} className="h-1.5 bg-muted" />
        </div>

        {/* Loading dots */}
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
