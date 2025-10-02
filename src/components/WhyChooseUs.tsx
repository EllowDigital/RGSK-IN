import { Card, CardContent } from "@/components/ui/card";
import { Zap, Headphones, DollarSign, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Scalable Solutions",
    description: "Cutting-edge technology delivering high-performance results that grow with your business.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock dedicated support ensuring your operations run smoothly at all times.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates without compromising quality, making technology accessible for all.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled professionals with years of expertise delivering exceptional digital solutions.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence through innovation, dedication, and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/30"
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
