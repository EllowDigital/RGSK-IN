import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

// Import your video and a poster image
import introVideo from "@/assets/intro.mp4";
import videoPoster from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to smoothly scroll to the contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to toggle the video's mute state
  const toggleMute = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Video Background & Overlay Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={videoPoster} // Shows this image while video loads
          className="w-full h-full object-cover"
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-accent/75" />
      </div>

      {/* Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-24 right-8 z-20 p-3 bg-background/20 backdrop-blur-sm hover:bg-background/30 rounded-full transition-all duration-300 border border-white/20"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Hero Content */}
      <div className="container relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Empowering Your Digital Growth
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
          Innovative Solutions for Web, Mobile & Digital Communication
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="text-base md:text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform duration-300 shadow-xl"
        >
          Get in Touch
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>

    </section>
  );
};