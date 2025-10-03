import { Header } from "@/components/Header";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { SEO } from "@/components/SEO";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Users } from "lucide-react";
import tentExpoThumb from "@/assets/projects/tent-expo-thumb.jpg";
import ecommerceThumb from "@/assets/projects/project-ecommerce.jpg";
import appThumb from "@/assets/projects/project-app.jpg";
import marketingThumb from "@/assets/projects/project-marketing.jpg";

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "tent-decor-expo",
      title: "Tent Decor Expo UP 2025",
      description: "Event Registration & Entry Management System",
      category: "Web Application",
      year: "2025",
      client: "Tent, Caterers & Decorators Welfare Association of UP",
      image: tentExpoThumb,
      link: "/projects/tent-decor-expo",
      stats: { registrations: "2,500+", exhibitors: "50+" },
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description: "Modern online store with seamless shopping experience",
      category: "Web Development",
      year: "2024",
      client: "Retail Business",
      image: ecommerceThumb,
      link: "#",
      stats: { products: "1,000+", orders: "5,000+" },
    },
    {
      id: "food-app",
      title: "Food Delivery App",
      description: "Mobile app for restaurant ordering & delivery tracking",
      category: "Mobile App",
      year: "2024",
      client: "Restaurant Chain",
      image: appThumb,
      link: "#",
      stats: { downloads: "10K+", restaurants: "100+" },
    },
    {
      id: "marketing-dashboard",
      title: "Marketing Analytics Dashboard",
      description: "Real-time social media performance tracking & insights",
      category: "Dashboard",
      year: "2024",
      client: "Digital Marketing Agency",
      image: marketingThumb,
      link: "#",
      stats: { campaigns: "200+", insights: "Real-time" },
    },
  ];

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
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Our <span className="text-primary">Portfolio</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Discover how we've helped businesses transform their digital presence with innovative solutions
                </p>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => project.link !== "#" && navigate(project.link)}
                  >
                    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
                      <div className="relative overflow-hidden h-64">
                        <div className="absolute top-4 left-4 z-20">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                        </div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {project.client}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex gap-4 text-sm">
                            {Object.entries(project.stats).map(([key, value]) => (
                              <div key={key}>
                                <div className="font-bold text-primary">{value}</div>
                                <div className="text-muted-foreground capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                          {project.link !== "#" && (
                            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                              View Case Study <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <EnhancedFooter />
      </div>
    </>
  );
};

export default Portfolio;
