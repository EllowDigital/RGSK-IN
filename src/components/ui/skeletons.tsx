import { cn } from '@/lib/utils'

// Base skeleton with shimmer animation
const SkeletonBase = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'animate-shimmer rounded-md bg-gradient-to-r from-muted via-muted-foreground/10 to-muted bg-[length:200%_100%]',
      className
    )}
    {...props}
  />
)

// Text skeleton for paragraphs and headings
export const TextSkeleton = ({ 
  lines = 3, 
  className 
}: { 
  lines?: number
  className?: string 
}) => (
  <div className={cn('space-y-3', className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonBase
        key={i}
        className={cn(
          'h-4',
          i === lines - 1 ? 'w-3/4' : 'w-full'
        )}
      />
    ))}
  </div>
)

// Heading skeleton
export const HeadingSkeleton = ({ 
  size = 'md',
  className 
}: { 
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string 
}) => {
  const heights = {
    sm: 'h-5',
    md: 'h-7',
    lg: 'h-10',
    xl: 'h-14'
  }
  
  return (
    <SkeletonBase className={cn(heights[size], 'w-2/3', className)} />
  )
}

// Card skeleton for service cards, testimonial cards
export const CardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn('p-6 bg-card rounded-2xl border border-border space-y-4', className)}>
    {/* Icon */}
    <SkeletonBase className="w-14 h-14 rounded-xl" />
    
    {/* Title */}
    <SkeletonBase className="h-6 w-3/4" />
    
    {/* Description */}
    <div className="space-y-2">
      <SkeletonBase className="h-4 w-full" />
      <SkeletonBase className="h-4 w-5/6" />
      <SkeletonBase className="h-4 w-4/6" />
    </div>
    
    {/* Features */}
    <div className="space-y-2 pt-2">
      <SkeletonBase className="h-3 w-1/2" />
      <SkeletonBase className="h-3 w-2/5" />
      <SkeletonBase className="h-3 w-1/3" />
    </div>
  </div>
)

// Image skeleton with aspect ratio
export const ImageSkeleton = ({ 
  aspectRatio = '4/5',
  className 
}: { 
  aspectRatio?: string
  className?: string 
}) => (
  <SkeletonBase 
    className={cn('rounded-xl', className)}
    style={{ aspectRatio }}
  />
)

// Stat skeleton for hero stats
export const StatSkeleton = ({ className }: { className?: string }) => (
  <div className={cn('text-center space-y-2', className)}>
    <SkeletonBase className="h-12 w-20 mx-auto rounded-lg" />
    <SkeletonBase className="h-4 w-24 mx-auto" />
  </div>
)

// Form skeleton for contact form
export const FormSkeleton = ({ className }: { className?: string }) => (
  <div className={cn('space-y-6', className)}>
    {/* Input fields */}
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <SkeletonBase className="h-4 w-16" />
        <SkeletonBase className="h-12 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <SkeletonBase className="h-4 w-20" />
        <SkeletonBase className="h-12 w-full rounded-lg" />
      </div>
    </div>
    
    {/* Email */}
    <div className="space-y-2">
      <SkeletonBase className="h-4 w-12" />
      <SkeletonBase className="h-12 w-full rounded-lg" />
    </div>
    
    {/* Textarea */}
    <div className="space-y-2">
      <SkeletonBase className="h-4 w-16" />
      <SkeletonBase className="h-32 w-full rounded-lg" />
    </div>
    
    {/* Button */}
    <SkeletonBase className="h-12 w-40 rounded-lg" />
  </div>
)

// Testimonial card skeleton
export const TestimonialSkeleton = ({ className }: { className?: string }) => (
  <div className={cn('p-6 bg-card rounded-2xl border border-border space-y-4', className)}>
    {/* Rating */}
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <SkeletonBase key={i} className="w-5 h-5 rounded" />
      ))}
    </div>
    
    {/* Quote */}
    <div className="space-y-2">
      <SkeletonBase className="h-4 w-full" />
      <SkeletonBase className="h-4 w-full" />
      <SkeletonBase className="h-4 w-3/4" />
    </div>
    
    {/* Author */}
    <div className="border-t border-border pt-4 space-y-2">
      <SkeletonBase className="h-5 w-32" />
      <SkeletonBase className="h-3 w-24" />
      <SkeletonBase className="h-3 w-40" />
    </div>
  </div>
)

// Badge skeleton
export const BadgeSkeleton = ({ className }: { className?: string }) => (
  <SkeletonBase className={cn('h-8 w-24 rounded-full', className)} />
)

// Stat grid skeleton for hero section
export const StatsGridSkeleton = ({ className }: { className?: string }) => (
  <div className={cn('grid grid-cols-3 gap-8', className)}>
    {Array.from({ length: 3 }).map((_, i) => (
      <StatSkeleton key={i} />
    ))}
  </div>
)

export { SkeletonBase }
