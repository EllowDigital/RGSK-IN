import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MediaFrameProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  caption?: ReactNode
}

export const MediaFrame = ({ children, caption, className, ...props }: MediaFrameProps) => {
  return (
    <div
      className={cn(
        'rounded-[1.75rem] border border-border/70 bg-card p-3 shadow-xl overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
      {caption && <div className="px-2 pt-4 pb-1">{caption}</div>}
    </div>
  )
}