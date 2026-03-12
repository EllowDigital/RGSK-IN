import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PremiumCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  interactive?: boolean
}

export const PremiumCard = ({
  children,
  className,
  interactive = false,
  ...props
}: PremiumCardProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.75rem] border border-border/75 bg-card shadow-md',
        interactive &&
          'transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/30',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--background)/0.18),transparent_40%,hsl(var(--primary)/0.04))] pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}