import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'

export const UpdateNotification = () => {
  const [showUpdate, setShowUpdate] = useState(false)
  const [offlineReady, setOfflineReady] = useState(false)

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Listen for updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setShowUpdate(true)
      })

      // Check if offline ready
      navigator.serviceWorker.ready.then(() => {
        setOfflineReady(true)
        setTimeout(() => setOfflineReady(false), 3000)
      })
    }
  }, [])

  const handleUpdate = () => {
    window.location.reload()
  }

  const handleClose = () => {
    setShowUpdate(false)
    setOfflineReady(false)
  }

  if (offlineReady && !showUpdate) {
    return (
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-slide-up">
        <div className="bg-card border border-border rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground">App is ready to work offline</p>
            </div>
            <Button onClick={handleClose} size="sm" variant="ghost">
              OK
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!showUpdate) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-slide-up">
      <div className="bg-card border border-border rounded-lg shadow-lg p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">New version available!</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Click reload to update to the latest version
            </p>
            <div className="flex gap-2">
              <Button onClick={handleUpdate} size="sm" className="flex-1">
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload
              </Button>
              <Button onClick={handleClose} size="sm" variant="outline">
                Later
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
