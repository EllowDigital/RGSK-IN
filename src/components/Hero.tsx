import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp, Users, Award } from 'lucide-react'

export const Hero = () => {
  // Function to smoothly scroll to the contact section
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const floatingStats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: TrendingUp, value: '500+', label: 'Projects Done' },
  ]

  const features = [
    { icon: Zap, text: 'Lightning Fast' },
    { icon: Shield, text: 'Secure & Reliable' },
    { icon: Sparkles, text: 'Modern Design' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Leading Digital Innovation
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-foreground">Your Digital</span>
                <br />
                <span className="text-foreground">Presence</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Empowering businesses with cutting-edge web, mobile, and digital communication
                solutions that drive growth and innovation.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card backdrop-blur-sm rounded-full border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-card-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToAbout}
                className="text-base px-8 py-6 border-2 hover:bg-accent/10"
              >
                Learn More
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {floatingStats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="relative hidden lg:block animate-fade-in delay-200">
            <div className="relative w-full h-[600px]">
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500 p-8 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Innovation First</h3>
                  <p className="text-muted-foreground">
                    Delivering cutting-edge solutions that transform your business vision into
                    reality
                  </p>
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">24/7</p>
                      <p className="text-xs text-muted-foreground">Support</p>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <div className="text-center">
                      <p className="text-3xl font-bold text-accent">100%</p>
                      <p className="text-xs text-muted-foreground">Quality</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-12 right-12 w-48 h-32 bg-card backdrop-blur-xl rounded-2xl border border-border shadow-xl p-4 animate-float">
                <Zap className="w-8 h-8 text-primary mb-2" />
                <p className="text-sm font-semibold text-card-foreground">Fast Development</p>
                <p className="text-xs text-muted-foreground mt-1">Rapid deployment</p>
              </div>

              <div className="absolute bottom-12 left-12 w-48 h-32 bg-card backdrop-blur-xl rounded-2xl border border-border shadow-xl p-4 animate-float delay-300">
                <Shield className="w-8 h-8 text-accent mb-2" />
                <p className="text-sm font-semibold text-card-foreground">Enterprise Security</p>
                <p className="text-xs text-muted-foreground mt-1">Bank-grade protection</p>
              </div>

              <div className="absolute top-1/2 -right-4 w-40 h-40 bg-gradient-to-br from-secondary/30 to-primary/30 backdrop-blur-xl rounded-full border border-white/20 shadow-xl flex items-center justify-center animate-pulse">
                <Sparkles className="w-12 h-12 text-white" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 left-20 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 right-20 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center items-start p-2">
          <div className="w-1 h-3 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
