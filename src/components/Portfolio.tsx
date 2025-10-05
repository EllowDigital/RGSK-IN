import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
      image: tentExpoThumb,
      link: '/projects/tent-decor-expo',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      description: 'Modern online store with seamless shopping experience',
      image: ecommerceThumb,
      link: '/portfolio',
    },
    // {
    //   id: "food-app",
    //   title: "Food Delivery App",
    //   description: "Mobile app for restaurant ordering & delivery tracking",
    //   image: appThumb,
    //   link: "/portfolio",
    // },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have helped businesses grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(project.link)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    View Project{' '}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => navigate('/portfolio')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
