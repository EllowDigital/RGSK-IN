import { Lightbulb, FileSearch, Code, Rocket, CheckCircle, Sparkles } from 'lucide-react'

const processSteps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Discovery & Planning',
    description:
      'We begin by understanding your business goals, target audience, and project requirements through detailed consultation.',
    features: ['Requirement Analysis', 'Market Research', 'Project Roadmap', 'Timeline Planning'],
  },
  {
    icon: FileSearch,
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Our creative team crafts intuitive designs and interactive prototypes that bring your vision to life.',
    features: ['UI/UX Design', 'Wireframing', 'Prototype Creation', 'Design Review'],
  },
  {
    icon: Code,
    number: '03',
    title: 'Development',
    description:
      'Expert developers transform designs into robust, scalable solutions using cutting-edge technologies.',
    features: ['Clean Code', 'Agile Development', 'Regular Updates', 'Quality Assurance'],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Testing & Launch',
    description:
      'Rigorous testing ensures flawless performance before we deploy your project to production.',
    features: ['Cross-browser Testing', 'Performance Optimization', 'Security Audit', 'Smooth Deployment'],
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'Support & Maintenance',
    description:
      'Post-launch, we provide continuous support and updates to ensure your project stays ahead.',
    features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Technical Assistance'],
  },
]

export const Process = () => {
  return (
    <section id="process" className="relative py-16 md:py-24 bg-background">
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Proven Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-primary">How We Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined approach that transforms your ideas into exceptional digital experiences
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content Side */}
                  <div
                    className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'}`}
                  >
                    <div className="group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-4xl font-bold text-muted-foreground/30">{step.number}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                      <ul className="space-y-2">
                        {step.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Number/Icon Side */}
                  <div
                    className={`hidden lg:flex ${index % 2 === 0 ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'} justify-center`}
                  >
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center shadow-sm">
                        <span className="text-3xl font-bold text-primary">{step.number}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-block p-6 bg-primary/10 rounded-2xl border border-primary/20">
            <p className="text-lg font-medium mb-2">Ready to start your project?</p>
            <p className="text-muted-foreground text-sm">
              Let's discuss how we can bring your vision to life
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
