import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Users, Award } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 mr-3" />
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Transform Your Future?
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
            Join thousands of students who discovered their dream careers and secured their future with our AI-powered guidance.
          </p>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-primary-foreground/80">Students Guided</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">₹50 Cr+</div>
                <div className="text-primary-foreground/80">Scholarships Awarded</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-primary-foreground/80">Success Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Watch Success Stories
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/70 mt-8">
            No credit card required • Free consultation • Available in Hindi & English
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;