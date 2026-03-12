import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom'
import tentExpoThumb from '@/assets/projects/tent-expo-thumb.jpg'
import ecommerceThumb from '@/assets/projects/project-ecommerce.jpg'
import appThumb from '@/assets/projects/project-app.jpg'

export const Portfolio = () => {
  const navigate = useNavigate()

  const projects = [
    {
      id: 'tent-decor-expo',
      title: 'Tent Decor Expo UP 2025',
      description: 'Event Registration & Entry Management System',
      category: 'Web Application',
      image: tentExpoThumb,
      link: '/projects/tent-decor-expo',
      gradient: 'from-primary to-primary-glow',
      stats: [
        { label: 'Registrations', value: '2,500+' },
        { label: 'Exhibitors', value: '50+' },
      ],
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      description: 'Modern online store with seamless shopping experience',
      category: 'Web Development',
      image: ecommerceThumb,
      link: '/portfolio',
      gradient: 'from-accent to-secondary',
      stats: [
        { label: 'Products', value: '1,000+' },
        { label: 'Orders', value: '5,000+' },
      ],
    },
  ]

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Recent Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our portfolio of successful projects that have helped businesses transform
            digitally
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(project.link)}
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-2xl hover:-translate-y-2">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-30">
                  <Badge
                    className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Image Section */}
                <div className="relative overflow-hidden h-72">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-4 pb-4 border-b border-border/50">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <div>
                          <div className="text-sm font-bold">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    View Case Study
                    <ArrowRight className="w-5 h-5 ml-1 group-hover:ml-2 transition-all group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            onClick={() => navigate('/portfolio')}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
