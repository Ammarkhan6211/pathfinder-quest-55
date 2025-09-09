import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Gamepad2, GraduationCap, Building2, CreditCard, MapPin } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Career Counseling",
      description: "Get personalized career recommendations based on your interests, skills, and personality through interactive AI conversations.",
      badge: "Smart",
      color: "primary"
    },
    {
      icon: CreditCard,
      title: "Scholarship Matching",
      description: "Discover scholarships you're eligible for based on your academic performance, background, and career goals.",
      badge: "Financial Aid",
      color: "success"
    },
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      description: "Engage with career exploration through fun, interactive games and challenges that keep you motivated.",
      badge: "Engaging",
      color: "warning"
    },
    {
      icon: MapPin,
      title: "Rural Student Focus",
      description: "Specially designed resources and opportunities for students in rural areas with limited access to career guidance.",
      badge: "Inclusive",
      color: "accent"
    },
    {
      icon: GraduationCap,
      title: "Smart Student Profile",
      description: "Create a comprehensive profile that matches your academic percentage to various career paths and opportunities.",
      badge: "Personalized",
      color: "info"
    },
    {
      icon: Building2,
      title: "Company Partnerships",
      description: "Direct connections with companies for course design, skill development, and guaranteed placement opportunities.",
      badge: "Career Ready",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Career Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and guidance you need to make informed career decisions and achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-muted/30"
            >
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${feature.color}/10 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                </div>
                <div className="mb-2">
                  <Badge variant="secondary" className="mb-2">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;