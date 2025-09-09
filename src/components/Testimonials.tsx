import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Developer",
      location: "Rural Rajasthan → Tech Hub Bangalore",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "CareerPath helped me discover my passion for coding when I had no idea what career to pursue. Now I'm working at a top tech company!",
      scholarship: "₹2.5L Scholarship Received"
    },
    {
      name: "Arjun Patel", 
      role: "Data Analyst",
      location: "Small Town Gujarat → Major City",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The AI counselor understood my strengths better than I did. The scholarship matching feature was a game-changer for my family.",
      scholarship: "₹1.8L Scholarship Received"
    },
    {
      name: "Sneha Reddy",
      role: "Digital Marketing Manager", 
      location: "Rural Telangana → Mumbai",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The gamified learning kept me motivated throughout my career exploration. I found my perfect match and got placed directly!",
      scholarship: "Direct Placement"
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span> from Rural India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real students who transformed their lives with personalized career guidance and achieved their dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-muted/20">
              <CardHeader className="text-center">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-primary font-medium">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>

                <div className="flex justify-center space-x-1 py-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
              </CardHeader>

              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  {testimonial.scholarship}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;