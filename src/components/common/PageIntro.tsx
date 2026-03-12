import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageIntroProps {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  aside?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export const PageIntro = ({
  eyebrow,
  title,
  description,
  aside,
  align = 'center',
  className,
}: PageIntroProps) => {
  const isCentered = align === 'center'

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-background via-background to-secondary/30 shadow-xl',
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_28%),radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.08),transparent_32%)]" />
      <div
        className={cn('relative z-10 p-6 sm:p-8 lg:p-10', isCentered ? 'text-center' : 'text-left')}
      >
        <div className={cn('max-w-3xl', isCentered && 'mx-auto')}>
          {eyebrow && <div className="mb-5">{eyebrow}</div>}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground">
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                'mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed',
                isCentered && 'mx-auto max-w-2xl'
              )}
            >
              {description}
            </p>
          )}
          {aside && <div className={cn('mt-6', isCentered && 'mx-auto max-w-xl')}>{aside}</div>}
        </div>
      </div>
    </div>
  )
}
