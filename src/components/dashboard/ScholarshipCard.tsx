import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, IndianRupee, Clock } from "lucide-react";

interface Scholarship {
  id: number;
  name: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string[];
  description: string;
  category: string;
  renewableYears: number;
  applicationLink: string;
}

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

const ScholarshipCard = ({ scholarship }: ScholarshipCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{scholarship.name}</CardTitle>
            <CardDescription>{scholarship.provider}</CardDescription>
          </div>
          <Badge className="bg-success text-success-foreground">
            {scholarship.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm font-medium">
            <IndianRupee className="h-4 w-4 text-accent" />
            <span>{scholarship.amount}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{scholarship.renewableYears} years</span>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-sm">
          <Calendar className="h-4 w-4 text-destructive" />
          <span className="text-destructive font-medium">Deadline: {scholarship.deadline}</span>
        </div>

        <p className="text-sm text-muted-foreground">{scholarship.description}</p>

        <div className="space-y-2">
          <p className="text-sm font-medium">Eligibility:</p>
          <div className="flex flex-wrap gap-1">
            {scholarship.eligibility.map((criteria, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {criteria}
              </Badge>
            ))}
          </div>
        </div>

        <Button className="w-full" variant="outline">
          View Details & Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default ScholarshipCard;