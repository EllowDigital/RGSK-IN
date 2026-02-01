import { useEffect, useState } from 'react'

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = ''
    }, 1500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="RGSK Technologies"
          className="w-16 h-16 rounded-xl object-contain animate-pulse"
        />

        {/* Company Name */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-foreground">
            RGSK <span className="text-primary">Technologies</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Loading...</p>
        </div>

        {/* Simple loader bar */}
        <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-[loading_1.5s_ease-in-out_infinite]" 
               style={{ 
                 animation: 'loading 1.5s ease-in-out infinite',
                 width: '50%'
               }} 
          />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}
