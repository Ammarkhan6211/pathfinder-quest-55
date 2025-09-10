import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, IndianRupee } from "lucide-react";

interface Company {
  id: number;
  name: string;
  logo: string;
  role: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  skills: string[];
  description: string;
  eligibility: string;
}

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{company.logo}</div>
          <div>
            <CardTitle className="text-lg">{company.name}</CardTitle>
            <CardDescription>{company.role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{company.location}</span>
          </div>
          <Badge variant={company.type === "Internship" ? "secondary" : "default"}>
            {company.type}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-1 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{company.duration}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
            <span>{company.stipend}</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{company.description}</p>
          <div className="flex flex-wrap gap-1">
            {company.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Button className="w-full">Apply Now</Button>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;