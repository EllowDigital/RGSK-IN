import { Card } from "@/components/ui/card";
import founderImage from "@/assets/founder.jpg";

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              RGSK Technologies Pvt. Ltd. is a forward-thinking digital solutions company 
              committed to helping businesses thrive in the digital age through innovative 
              technology and strategic communication services.
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
                <img
                  src={founderImage}
                  alt="Er. Awanish Kannaujia - Founder & Director"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Er. Awanish Kannaujia
                </h3>
                <p className="text-primary font-semibold mb-4 text-lg">
                  Founder & Director
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a vision to revolutionize digital communication and web solutions, 
                  Er. Awanish Kannaujia founded RGSK Technologies to bridge the gap between 
                  businesses and cutting-edge technology. Under his leadership, the company 
                  has grown to become a trusted partner for digital transformation.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
