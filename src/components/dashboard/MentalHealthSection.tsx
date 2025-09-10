import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Heart, Smile, Frown, Meh, RefreshCw, BookOpen, Video, Headphones } from "lucide-react";
import { mentalHealthTips, motivationalQuotes, mentalHealthResources, dailyExercises } from "@/data/mentalHealth";

const MentalHealthSection = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [currentQuote] = useState(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);

  const handleExerciseToggle = (exerciseId: number) => {
    setCompletedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const completionPercentage = (completedExercises.length / dailyExercises.length) * 100;

  const moodOptions = [
    { value: "great", label: "Great", icon: "😄", color: "text-green-500" },
    { value: "good", label: "Good", icon: "😊", color: "text-blue-500" },
    { value: "okay", label: "Okay", icon: "😐", color: "text-yellow-500" },
    { value: "low", label: "Low", icon: "😔", color: "text-orange-500" },
    { value: "struggling", label: "Struggling", icon: "😢", color: "text-red-500" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            Mental Health & Wellness
          </h2>
          <p className="text-muted-foreground">Take care of your mental well-being</p>
        </div>
      </div>

      {/* Daily Mood Tracker */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smile className="h-5 w-5" />
            Daily Mood Tracker
          </CardTitle>
          <CardDescription>How are you feeling today?</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedMood} onValueChange={setSelectedMood}>
            <div className="grid grid-cols-5 gap-4">
              {moodOptions.map((mood) => (
                <div key={mood.value} className="text-center">
                  <RadioGroupItem
                    value={mood.value}
                    id={mood.value}
                    className="sr-only"
                  />
                  <Label
                    htmlFor={mood.value}
                    className={`cursor-pointer flex flex-col items-center space-y-2 p-3 rounded-lg border-2 transition-colors ${
                      selectedMood === mood.value 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border hover:bg-muted/50'
                    }`}
                  >
                    <span className="text-2xl">{mood.icon}</span>
                    <span className="text-sm font-medium">{mood.label}</span>
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
          {selectedMood && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                Thanks for sharing! Remember, it's okay to have different feelings throughout the day.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Daily Wellness Exercises */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Daily Wellness Exercises
            </span>
            <Badge variant="outline">
              {completedExercises.length}/{dailyExercises.length} Complete
            </Badge>
          </CardTitle>
          <CardDescription>
            Complete these activities to boost your mental well-being
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={completionPercentage} className="mb-4" />
          
          {dailyExercises.map((exercise) => (
            <div key={exercise.id} className="flex items-start space-x-3 p-3 border rounded-lg">
              <Checkbox
                id={`exercise-${exercise.id}`}
                checked={completedExercises.includes(exercise.id)}
                onCheckedChange={() => handleExerciseToggle(exercise.id)}
                className="mt-1"
              />
              <div className="flex-1">
                <Label
                  htmlFor={`exercise-${exercise.id}`}
                  className={`font-medium cursor-pointer ${
                    completedExercises.includes(exercise.id) ? 'line-through text-muted-foreground' : ''
                  }`}
                >
                  {exercise.name}
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  {exercise.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Motivational Quote */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-pink-500" />
            Daily Inspiration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="text-lg italic text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
            "{currentQuote.quote}"
            <footer className="text-sm text-muted-foreground mt-3">
              — {currentQuote.author}
            </footer>
          </blockquote>
        </CardContent>
      </Card>

      {/* Stress Management Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentalHealthTips.map((tip) => (
          <Card key={tip.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{tip.title}</CardTitle>
              <CardDescription>{tip.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <Badge variant="secondary">{tip.category}</Badge>
                <span className="text-muted-foreground">{tip.duration}</span>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Instructions:</p>
                <ol className="text-sm text-muted-foreground space-y-1">
                  {tip.instructions.slice(0, 3).map((instruction, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2">{index + 1}.</span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <Button variant="outline" className="w-full">
                Try This Exercise
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mental Health Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Mental Health Resources
          </CardTitle>
          <CardDescription>
            Helpful articles, videos, and podcasts for your well-being
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {mentalHealthResources.map((resource) => (
            <div key={resource.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-primary">
                  {resource.type === "Article" && <BookOpen className="h-5 w-5" />}
                  {resource.type === "Video" && <Video className="h-5 w-5" />}
                  {resource.type === "Podcast" && <Headphones className="h-5 w-5" />}
                </div>
                <div>
                  <p className="font-medium">{resource.title}</p>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {resource.type}
                </Badge>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MentalHealthSection;