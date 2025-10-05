import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users, TrendingUp, Award, Rocket } from "lucide-react";
import founderImage from "@/assets/founder.png";

export const About = () => {
  const values = [
    { 
      icon: Target, 
      title: "Mission Driven", 
      description: "Empowering businesses with innovative digital solutions" 
    },
    { 
      icon: Lightbulb, 
      title: "Innovation First", 
      description: "Leading with cutting-edge technology and creative thinking" 
    },
    { 
      icon: Users, 
      title: "Client Focused", 
      description: "Your success is our priority, always" 
    }
  ];

  const achievements = [
    { icon: Rocket, number: "50+", label: "Projects Delivered" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: TrendingUp, number: "98%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-accent/5 to-secondary/5">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Transforming Ideas
            </span>
            <br />
            <span className="text-foreground">Into Digital Reality</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            RGSK Technologies is a forward-thinking digital solutions company committed to helping 
            businesses thrive in the digital age through innovative technology and strategic communication services.
          </p>
        </div>

        {/* Founder Section */}
        <Card className="p-8 md:p-12 mb-16 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 shadow-xl animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <img
                  src={founderImage}
                  alt="Er. Awanish Kannaujia - Founder & Director"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Er. Awanish Kannaujia
                </h3>
                <p className="text-xl text-primary font-semibold mb-4">
                  Founder & Director
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                With a vision to revolutionize digital communication and web solutions, 
                Er. Awanish Kannaujia founded RGSK Technologies to bridge the gap between 
                businesses and cutting-edge technology. Under his leadership, the company 
                has grown to become a trusted partner for digital transformation.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border hover:border-primary/50 transition-colors">
                    <achievement.icon className="w-6 h-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">{achievement.number}</p>
                    <p className="text-xs text-muted-foreground">{achievement.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
