import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Progress } from '@/components/ui/progress'

const PagePreloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 25 + 10
      })
    }, 80)

    // Reduced from 1200ms to 600ms for faster FCP
    const exitTimer = setTimeout(() => {
      setProgress(100)
      setIsExiting(true)

      setTimeout(() => {
        setIsLoading(false)
        document.body.style.overflow = ''
      }, 300)
    }, 600)

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
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-300',
        isExiting && 'opacity-0 scale-105'
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          'flex flex-col items-center justify-center space-y-6 transition-all duration-200',
          isExiting && 'scale-95 opacity-0'
        )}
      >
        <div className="relative">
          <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-2xl blur-xl animate-pulse" />
          <img
            src="/logo.png"
            alt="RGSK Technologies"
            width={80}
            height={80}
            className="relative w-20 h-20 rounded-2xl object-contain animate-pulse shadow-lg shadow-primary/20"
          />
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-foreground" aria-label="RGSK Technologies loading">
            RGSK <span className="text-primary">Technologies</span>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {isExiting ? 'Welcome!' : 'Loading...'}
          </p>
        </div>

        <div className="w-48">
          <Progress value={Math.min(progress, 100)} className="h-1.5 bg-muted" />
        </div>

        <div className="flex gap-1" aria-hidden="true">
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

export { PagePreloader, PagePreloader as Preloader }
