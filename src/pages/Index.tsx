import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 CareerPath. Empowering rural students across India with personalized career guidance.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
