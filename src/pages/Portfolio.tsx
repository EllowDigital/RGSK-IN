import { SEO } from '@/components/common'
import { Header, EnhancedFooter } from '@/components/layout'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Calendar, Users, Star, TrendingUp, Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import tentExpoThumb from '@/assets/projects/tent-expo-thumb.jpg'
import ecommerceThumb from '@/assets/projects/project-ecommerce.jpg'
import marketingThumb from '@/assets/projects/project-marketing.jpg'

const Portfolio = () => {
  const navigate = useNavigate()

  const projects = [
    {
      id: 'tent-decor-expo',
      title: 'Tent Decor Expo UP 2025',
      description:
        'Event Registration & Entry Management System with real-time analytics and QR-based check-in functionality',
      category: 'Web Application',
      year: '2025',
      client: 'Tent, Caterers & Decorators Welfare Association of UP',
      image: tentExpoThumb,
      link: '/projects/tent-decor-expo',
      gradient: 'from-primary to-primary-glow',
      stats: { registrations: '2,500+', exhibitors: '50+' },
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      description:
        'Modern online store with seamless shopping experience and secure payment integration',
      category: 'Web Development',
      year: '2024',
      client: 'Retail Business',
      image: ecommerceThumb,
      link: '#',
      gradient: 'from-accent to-secondary',
      stats: { products: '1,000+', orders: '5,000+' },
    },
    {
      id: 'marketing-dashboard',
      title: 'Marketing Analytics Dashboard',
      description:
        'Real-time social media performance tracking & insights with AI-powered recommendations',
      category: 'Dashboard',
      year: '2024',
      client: 'Digital Marketing Agency',
      image: marketingThumb,
      link: '#',
      gradient: 'from-secondary to-primary',
      stats: { campaigns: '200+', insights: 'Real-time' },
    },
  ]

  const allStats = [
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '98%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '200%', label: 'Average Growth' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
  ]

  return (
    <>
      <SEO
        title="Portfolio - RGSK Technologies Pvt. Ltd."
        description="Explore our portfolio of successful web development, mobile app, and digital solutions projects"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Star className="w-4 h-4 fill-current" />
                  Our Work
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Portfolio
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Discover how we've helped businesses transform their digital presence with
                  innovative, scalable solutions
                </p>

                <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-background/75 backdrop-blur-xl border border-border/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                    12+
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">
                      Selected Digital Case Studies
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Focused outcomes, clearer delivery stories, and scalable execution.
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
                  {allStats.map((stat, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <stat.icon className={`w-6 h-6 mx-auto mb-2 text-primary`} />
                      <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 animate-fade-in max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium mb-5 border border-border/70">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Selected Work
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                  Explore our diverse range of successful projects across different industries
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => project.link !== '#' && navigate(project.link)}
                  >
                    <article
                      className={`relative h-full bg-card rounded-[28px] border border-border/80 transition-all duration-300 overflow-hidden ${project.link !== '#' ? 'cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:border-primary/35' : 'opacity-95'}`}
                    >
                      <div className="p-4 sm:p-5">
                        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/40 aspect-[16/10]">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                            <Badge
                              className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}
                            >
                              {project.category}
                            </Badge>
                            <div className="rounded-full bg-black/40 text-white text-xs font-medium px-3 py-1.5 backdrop-blur-md border border-white/15">
                              {project.year}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-5 sm:px-6 pb-6 sm:pb-7">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/70 border border-border/70">
                            <Users className="w-4 h-4" />
                            <span className="line-clamp-1">{project.client}</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-2xl sm:text-[1.75rem] leading-tight font-bold tracking-tight group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed line-clamp-3 max-w-[58ch]">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div
                              key={key}
                              className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-background border border-border/80 shadow-sm"
                            >
                              <TrendingUp className="w-4 h-4 text-primary" />
                              <div>
                                <div className="text-sm font-semibold leading-none">{value}</div>
                                <div className="text-[11px] text-muted-foreground capitalize mt-1">
                                  {key}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between gap-4">
                          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            Delivery snapshot for {project.year}
                          </div>
                          <div
                            className={`inline-flex items-center font-semibold transition-all ${project.link !== '#' ? 'text-primary group-hover:gap-2' : 'text-muted-foreground'}`}
                          >
                            {project.link !== '#' ? 'View Case Study' : 'Private Project'}
                            {project.link !== '#' && (
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center mt-16 animate-fade-in">
                <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-border">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Have a Project in Mind?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how we can help transform your ideas into reality
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg"
                    onClick={() => {
                      navigate('/')
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <EnhancedFooter />
      </div>
    </>
  )
}

export default Portfolio
