import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Share2, Phone, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies to establish your online presence.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications designed for seamless user experiences.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social media campaigns to grow your brand and engage with your audience.",
  },
  {
    icon: Phone,
    title: "Bulk SMS & Voice Call",
    description: "Reliable bulk messaging and voice call services for effective customer outreach.",
  },
  {
    icon: MessageCircle,
    title: "Bulk WhatsApp",
    description: "Mass WhatsApp messaging solutions to connect with customers instantly.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
