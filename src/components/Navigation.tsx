import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl">CareerPath</h1>
              <Badge variant="secondary" className="text-xs">AI Powered</Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#scholarships" className="text-foreground hover:text-primary transition-colors">Scholarships</a>
            <a href="#success-stories" className="text-foreground hover:text-primary transition-colors">Success Stories</a>
            <a href="#companies" className="text-foreground hover:text-primary transition-colors">Companies</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="hover:bg-primary/5">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#scholarships" className="text-foreground hover:text-primary transition-colors">Scholarships</a>
              <a href="#success-stories" className="text-foreground hover:text-primary transition-colors">Success Stories</a>
              <a href="#companies" className="text-foreground hover:text-primary transition-colors">Companies</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost">Sign In</Button>
                <Button className="bg-gradient-to-r from-primary to-accent">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;