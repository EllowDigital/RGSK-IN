import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '500+', label: 'Projects Completed' },
  { number: '5+', label: 'Years Experience' },
  { number: '98%', label: 'Success Rate' },
]

export const Stats = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={cn(
                "text-center",
                isVisible ? "scroll-visible" : "scroll-hidden"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-primary-foreground/70 text-xs sm:text-sm lg:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
