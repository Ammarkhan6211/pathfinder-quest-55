import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Award, Target, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Personalized</span> Career Journey Starts Here
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover your perfect career path with AI-powered guidance, scholarship opportunities, and direct company connections. Built especially for rural students.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary/5 transition-all duration-300">
                Explore Scholarships
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mx-auto mb-2">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Scholarships</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-info/10 mx-auto mb-2">
                  <Target className="h-6 w-6 text-info" />
                </div>
                <div className="text-2xl font-bold text-info">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warning/10 mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-warning" />
                </div>
                <div className="text-2xl font-bold text-warning">200+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <Card className="overflow-hidden bg-gradient-to-br from-white to-muted/30 shadow-2xl border-0">
              <img 
                src={heroImage} 
                alt="Students learning with modern technology and career guidance" 
                className="w-full h-auto object-cover"
              />
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent to-success rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;