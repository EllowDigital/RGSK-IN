import { Lightbulb, FileSearch, Code, Rocket, CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const processSteps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Discovery & Planning',
    description: 'We understand your business goals and project requirements through detailed consultation.',
    features: ['Requirement Analysis', 'Market Research', 'Project Roadmap'],
  },
  {
    icon: FileSearch,
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our creative team crafts intuitive designs and interactive prototypes.',
    features: ['UI/UX Design', 'Wireframing', 'Prototype Creation'],
  },
  {
    icon: Code,
    number: '03',
    title: 'Development',
    description: 'Expert developers transform designs into robust, scalable solutions.',
    features: ['Clean Code', 'Agile Development', 'Quality Assurance'],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Testing & Launch',
    description: 'Rigorous testing ensures flawless performance before deployment.',
    features: ['Cross-browser Testing', 'Performance Optimization', 'Deployment'],
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'Support & Maintenance',
    description: 'Continuous support and updates to keep your project running smoothly.',
    features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring'],
  },
]

export const Process = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation()

  return (
    <section id="process" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-12 sm:mb-16 lg:mb-20",
            headerVisible ? "scroll-visible" : "scroll-hidden"
          )}
        >
          <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wider">Our Process</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            How We
            <span className="text-primary"> Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            A streamlined approach that transforms your ideas into exceptional digital experiences
          </p>
        </div>

        {/* Process Steps */}
        <div 
          ref={stepsRef}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "group relative flex gap-4 sm:gap-6",
                  stepsVisible ? "scroll-visible" : "scroll-hidden"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-sm sm:text-base group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-4 sm:pb-6">
                  <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-4 sm:p-6 hover:border-primary/30 transition-all duration-300 hover-lift">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="sm:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-xs sm:text-sm font-bold text-primary">{step.number}</span>
                      </div>
                      <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{step.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {step.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 bg-muted rounded-full text-2xs sm:text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
