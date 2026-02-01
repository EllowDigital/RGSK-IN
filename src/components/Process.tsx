import { Lightbulb, FileSearch, Code, Rocket, CheckCircle } from 'lucide-react'

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
  return (
    <section id="process" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            How We
            <span className="text-primary"> Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A streamlined approach that transforms your ideas into exceptional digital experiences
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative flex gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-6">
                  <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all duration-300 hover-lift">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="sm:hidden w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{step.number}</span>
                      </div>
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
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
