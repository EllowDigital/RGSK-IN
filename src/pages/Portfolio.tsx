import { Header } from '@/components/Header'
import { EnhancedFooter } from '@/components/EnhancedFooter'
import { SEO } from '@/components/SEO'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Calendar, Users, Star, TrendingUp, Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import tentExpoThumb from '@/assets/projects/tent-expo-thumb.jpg'
import ecommerceThumb from '@/assets/projects/project-ecommerce.jpg'
import appThumb from '@/assets/projects/project-app.jpg'
import marketingThumb from '@/assets/projects/project-marketing.jpg'

const Portfolio = () => {
  const navigate = useNavigate()

  const projects = [
    {
      id: 'tent-decor-expo',
      title: 'Tent Decor Expo UP 2025',
      description: 'Event Registration & Entry Management System with real-time analytics and QR-based check-in functionality',
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
      description: 'Modern online store with seamless shopping experience and secure payment integration',
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
      description: 'Real-time social media performance tracking & insights with AI-powered recommendations',
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
    { icon: Award, value: '50+', label: 'Projects Completed' },
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
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our diverse range of successful projects across different industries
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => project.link !== '#' && navigate(project.link)}
                  >
                    <div className="bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                      {/* Image Section */}
                      <div className="relative overflow-hidden h-72">
                        <div className="absolute top-4 left-4 z-20">
                          <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}>
                            {project.category}
                          </Badge>
                        </div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span className="line-clamp-1">{project.client}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>

                        {/* Stats */}
                        <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-primary" />
                              <div>
                                <div className="text-sm font-bold">{value}</div>
                                <div className="text-xs text-muted-foreground capitalize">{key}</div>
                              </div>
                            </div>
                          ))}
                          {project.link !== '#' && (
                            <div className="ml-auto flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                              View
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all group-hover:translate-x-1" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Gradient Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                    </div>
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
