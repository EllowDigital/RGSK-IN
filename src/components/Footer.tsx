import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="#"
              className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-background/80">
              © 2025 RGSK Technologies Pvt. Ltd. | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
