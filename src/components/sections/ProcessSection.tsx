import { Lightbulb, FileSearch, Code, Rocket, CheckCircle, Settings } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import { Helmet } from 'react-helmet-async'

const processSteps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Discovery & Planning',
    description:
      'We understand your business goals and project requirements through detailed consultation.',
    features: ['Requirement Analysis', 'Market Research', 'Project Roadmap'],
    color: 'bg-primary',
  },
  {
    icon: FileSearch,
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our creative team crafts intuitive designs and interactive prototypes.',
    features: ['UI/UX Design', 'Wireframing', 'Prototype Creation'],
    color: 'bg-accent',
  },
  {
    icon: Code,
    number: '03',
    title: 'Development',
    description: 'Expert developers transform designs into robust, scalable solutions.',
    features: ['Clean Code', 'Agile Development', 'Quality Assurance'],
    color: 'bg-primary',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Testing & Launch',
    description: 'Rigorous testing ensures flawless performance before deployment.',
    features: ['Cross-browser Testing', 'Performance Optimization', 'Deployment'],
    color: 'bg-accent',
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'Support & Maintenance',
    description: 'Continuous support and updates to keep your project running smoothly.',
    features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring'],
    color: 'bg-primary',
  },
]

export const Process = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation()

  const howToStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How RGSK Technologies Builds Your Digital Product',
    description:
      'A streamlined 5-step process that transforms your ideas into exceptional digital experiences, from discovery to ongoing support.',
    totalTime: 'P30D',
    step: processSteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      url: `https://rgsktechnologies.in/#process`,
    })),
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(howToStructuredData)}</script>
      </Helmet>
      <section id="process" className="section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container relative z-10">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={cn(
              'text-center mb-12 sm:mb-16 lg:mb-20',
              headerVisible ? 'scroll-visible' : 'scroll-hidden'
            )}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
              <Settings className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
                Our Process
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
              How We
              <span className="text-primary"> Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
              A streamlined approach that transforms your ideas into exceptional digital experiences
            </p>
          </div>

          {/* Process Steps */}
          <div ref={stepsRef} className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={cn(
                    'group relative flex gap-4 sm:gap-6',
                    stepsVisible ? 'scroll-visible' : 'scroll-hidden'
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Timeline */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-sm sm:text-base group-hover:scale-110 transition-all shadow-lg`}
                    >
                      {step.number}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-border to-transparent mt-2" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-4 sm:pb-6">
                    <div className="bg-card rounded-2xl sm:rounded-3xl border border-border p-4 sm:p-6 hover:border-primary/40 transition-all duration-300 hover-lift">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div
                          className={`sm:hidden w-10 h-10 rounded-lg ${step.color} flex items-center justify-center`}
                        >
                          <span className="text-xs font-bold text-white">{step.number}</span>
                        </div>
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${step.color}/10 flex items-center justify-center`}
                        >
                          <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {step.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-muted rounded-full text-2xs sm:text-xs font-medium text-muted-foreground"
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
    </>
  )
}
