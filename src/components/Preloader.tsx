import { useEffect, useState } from "react";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Logo with animation */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl animate-pulse" />
          <img
            src="/logo.png"
            alt="RGSK Technologies"
            className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-4 border-primary/40 shadow-2xl relative z-10 animate-bounce mx-auto"
          />
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              RGSK
            </span>
            <span className="text-foreground"> Technologies</span>
          </h1>
          <p className="text-sm text-muted-foreground">Digital Solutions</p>
        </div>

        {/* Loading Spinner */}
        <div className="flex justify-center gap-2">
          <div className="h-3 w-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="h-3 w-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="h-3 w-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
};
