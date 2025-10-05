import { useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl md:text-8xl font-bold text-primary">404</h1>
        <p className="mb-6 text-xl md:text-2xl text-foreground">Oops! Page not found</p>
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
