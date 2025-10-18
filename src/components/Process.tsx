import { Lightbulb, FileSearch, Code, Rocket, CheckCircle, Sparkles } from 'lucide-react'

const processSteps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Discovery & Planning',
    description:
      'We begin by understanding your business goals, target audience, and project requirements through detailed consultation.',
    features: ['Requirement Analysis', 'Market Research', 'Project Roadmap', 'Timeline Planning'],
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-500',
  },
  {
    icon: FileSearch,
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Our creative team crafts intuitive designs and interactive prototypes that bring your vision to life.',
    features: ['UI/UX Design', 'Wireframing', 'Prototype Creation', 'Design Review'],
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-500',
  },
  {
    icon: Code,
    number: '03',
    title: 'Development',
    description:
      'Expert developers transform designs into robust, scalable solutions using cutting-edge technologies.',
    features: ['Clean Code', 'Agile Development', 'Regular Updates', 'Quality Assurance'],
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-500',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Testing & Launch',
    description:
      'Rigorous testing ensures flawless performance before we deploy your project to production.',
    features: [
      'Cross-browser Testing',
      'Performance Optimization',
      'Security Audit',
      'Smooth Deployment',
    ],
    color: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-500',
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'Support & Maintenance',
    description:
      'Post-launch, we provide continuous support and updates to ensure your project stays ahead.',
    features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Technical Assistance'],
    color: 'from-indigo-500/20 to-blue-500/20',
    iconColor: 'text-indigo-500',
  },
]

export const Process = () => {
  return (
    <section id="process" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Proven Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              How We Work
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined approach that transforms your ideas into exceptional digital experiences
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content Side */}
                  <div
                    className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'}`}
                  >
                    <div className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <span className="text-4xl font-bold text-muted-foreground/30">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color.replace('/20', '')}`}
                            />
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
                      <div
                        className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} backdrop-blur-xl border-4 border-background flex items-center justify-center shadow-lg`}
                      >
                        <span className={`text-3xl font-bold ${step.iconColor}`}>
                          {step.number}
                        </span>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-block p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20">
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
