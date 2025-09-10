import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Zap, Clock } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  xpPoints: number;
  totalXP: number;
  badges: string[];
  level: number;
  nextLevel: number;
  modules: Array<{
    name: string;
    completed: boolean;
    xp: number;
  }>;
  category: string;
  difficulty: string;
  estimatedHours: number;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const completedModules = course.modules.filter(m => m.completed).length;
  
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </div>
          <Badge variant={course.difficulty === "Beginner" ? "secondary" : course.difficulty === "Intermediate" ? "default" : "destructive"}>
            {course.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} />
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="flex items-center justify-center space-x-1">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{course.xpPoints}</span>
            </div>
            <p className="text-xs text-muted-foreground">XP Earned</p>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-1">
              <Trophy className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{course.level}</span>
            </div>
            <p className="text-xs text-muted-foreground">Level</p>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{course.estimatedHours}h</span>
            </div>
            <p className="text-xs text-muted-foreground">Duration</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Modules ({completedModules}/{course.modules.length})</p>
          <div className="space-y-1">
            {course.modules.slice(0, 3).map((module, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <span className={module.completed ? "text-muted-foreground line-through" : ""}>
                  {module.name}
                </span>
                <Badge variant={module.completed ? "secondary" : "outline"} className="text-xs">
                  {module.completed ? "✓" : `${module.xp} XP`}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {course.badges.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Badges Earned</p>
            <div className="flex flex-wrap gap-1">
              {course.badges.map((badge, index) => (
                <Badge key={index} className="text-xs bg-accent text-accent-foreground">
                  🏆 {badge}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Button className="w-full" variant={course.progress > 0 ? "default" : "outline"}>
          {course.progress > 0 ? "Continue Learning" : "Start Course"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;