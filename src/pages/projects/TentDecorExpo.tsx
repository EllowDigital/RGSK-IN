import { Header } from "@/components/Header";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Users, Building2, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/projects/tent-expo-hero.jpg";

const TentDecorExpo = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Users,
      value: "2,500+",
      label: "Registrations",
      color: "text-primary",
    },
    {
      icon: Building2,
      value: "50+",
      label: "Exhibitors Onboarded",
      color: "text-secondary",
    },
    {
      icon: Coffee,
      value: "Countless",
      label: "Cups of Water Consumed",
      color: "text-primary",
    },
  ];

  return (
    <>
      <SEO
        title="Tent Decor Expo UP 2025 Case Study - RGSK Technologies"
        description="Event Registration & Entry Management System for Tent, Caterers & Decorators Welfare Association of UP"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
            <div className="container mx-auto px-4 relative z-10">
              <Button
                variant="ghost"
                onClick={() => navigate("/portfolio")}
                className="mb-8 hover:bg-primary/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Web Application • 2025
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Tent Decor Expo <span className="text-primary">UP 2025</span>
                  </h1>
                  <p className="text-2xl text-muted-foreground mb-8">
                    Event Registration & Entry Management System
                  </p>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
                    <p className="text-lg font-medium">
                      Special thanks to{" "}
                      <span className="text-primary">
                        Tent, Caterers & Decorators Welfare Association of UP
                      </span>
                    </p>
                  </div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={heroImage}
                      alt="Tent Decor Expo Dashboard"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Accomplished */}
          <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-bold mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                  Mission Accomplished
                </div>
                <h2 className="text-4xl font-bold mb-4">A Successful Event Delivered</h2>
                <p className="text-xl text-muted-foreground">
                  RGSK Technologies developed a comprehensive event management platform that streamlined registration, exhibitor onboarding, and entry management for the Tent Decor Expo UP 2025
                </p>
              </div>
            </div>
          </section>

          {/* Success Highlights */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Success <span className="text-primary">Highlights</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Key achievements that made this event a massive success
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-8 bg-card rounded-xl shadow-lg border border-border hover:shadow-2xl transition-all animate-fade-in hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-6">
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-lg text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">
                  Project <span className="text-primary">Overview</span>
                </h2>

                <div className="space-y-12">
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-2 h-8 bg-primary rounded-full" />
                      The Challenge
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The Tent, Caterers & Decorators Welfare Association of UP needed a robust digital solution to manage registrations, exhibitor onboarding, and entry management for their annual expo. The system had to handle thousands of registrations efficiently while providing real-time insights and seamless check-in experiences.
                    </p>
                  </div>

                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-2 h-8 bg-primary rounded-full" />
                      Our Solution
                    </h3>
                    <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
                      <ul className="space-y-4">
                        {[
                          "Online registration portal with real-time form validation",
                          "Exhibitor management dashboard with booth assignment",
                          "QR code-based entry system for quick check-ins",
                          "Real-time analytics and reporting dashboard",
                          "Automated email confirmations and reminders",
                          "Mobile-responsive design for on-the-go access",
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-2 h-8 bg-primary rounded-full" />
                      The Results
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      The platform successfully handled over 2,500 registrations and onboarded 50+ exhibitors with zero downtime. The QR code entry system reduced check-in times by 80%, creating a smooth experience for all attendees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing Message */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">
                  That's a wrap on <span className="text-primary">2025!</span>
                </h2>
                <p className="text-2xl text-muted-foreground mb-8">
                  A huge applause to the entire team for making it happen.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => navigate("/portfolio")}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    View More Projects
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate("/")}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <EnhancedFooter />
      </div>
    </>
  );
};

export default TentDecorExpo;
