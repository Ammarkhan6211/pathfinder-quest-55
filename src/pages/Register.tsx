import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight } from "lucide-react";

const interests = [
  "Technology", "Healthcare", "Education", "Business", "Arts & Design",
  "Engineering", "Science", "Finance", "Marketing", "Law",
  "Agriculture", "Environment", "Sports", "Media", "Tourism"
];

const Register = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Step 1 data
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    age: "",
    contact: "",
    alternateContact: "",
    email: "",
    password: ""
  });

  // Step 2 data
  const [detailsInfo, setDetailsInfo] = useState({
    interests: [] as string[],
    marks: ""
  });

  const handleInterestToggle = (interest: string) => {
    setDetailsInfo(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, age, contact, email, password } = basicInfo;
    
    if (!name || !age || !contact || !email || !password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setStep(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (detailsInfo.interests.length === 0 || !detailsInfo.marks) {
      toast({
        title: "Missing Information",
        description: "Please select at least one interest and enter your marks.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call to store user data
    setTimeout(() => {
      const userData = { ...basicInfo, ...detailsInfo };
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", basicInfo.email);
      
      toast({
        title: "Registration Successful!",
        description: "Welcome to CareerPath. Your journey starts now!",
      });
      
      navigate("/dashboard");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary">CareerPath</h1>
          <p className="text-muted-foreground">Start your personalized learning journey</p>
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                1
              </div>
              <div className={`w-8 h-1 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                2
              </div>
            </div>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>
              {step === 1 ? "Personal Information" : "Learning Preferences"}
            </CardTitle>
            <CardDescription>
              {step === 1 
                ? "Tell us about yourself to get started" 
                : "Help us personalize your learning experience"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 ? (
              <form onSubmit={handleStep1Submit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={basicInfo.name}
                    onChange={(e) => setBasicInfo(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={basicInfo.age}
                    onChange={(e) => setBasicInfo(prev => ({ ...prev, age: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="Enter your contact number"
                    value={basicInfo.contact}
                    onChange={(e) => setBasicInfo(prev => ({ ...prev, contact: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alternateContact">Alternate Contact Number</Label>
                  <Input
                    id="alternateContact"
                    type="tel"
                    placeholder="Enter alternate contact (optional)"
                    value={basicInfo.alternateContact}
                    onChange={(e) => setBasicInfo(prev => ({ ...prev, alternateContact: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={basicInfo.email}
                    onChange={(e) => setBasicInfo(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={basicInfo.password}
                    onChange={(e) => setBasicInfo(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            ) : (
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label>Career Interests & Skills *</Label>
                  <p className="text-sm text-muted-foreground">Select areas that interest you (choose multiple)</p>
                  <div className="grid grid-cols-2 gap-2">
                    {interests.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={detailsInfo.interests.includes(interest)}
                          onCheckedChange={() => handleInterestToggle(interest)}
                        />
                        <Label htmlFor={interest} className="text-sm">{interest}</Label>
                      </div>
                    ))}
                  </div>
                  {detailsInfo.interests.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {detailsInfo.interests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="marks">Latest Academic Performance *</Label>
                  <Input
                    id="marks"
                    type="number"
                    placeholder="Enter your percentage or CGPA"
                    value={detailsInfo.marks}
                    onChange={(e) => setDetailsInfo(prev => ({ ...prev, marks: e.target.value }))}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter your latest exam percentage or CGPA
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button type="submit" className="flex-1" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </div>
              </form>
            )}
            
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;