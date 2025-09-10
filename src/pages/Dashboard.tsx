import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Users, 
  GraduationCap,
  Gamepad2,
  MessageCircle,
  Brain,
  Heart,
  TrendingUp,
  Star,
  Award,
  Zap
} from "lucide-react";
import { companies } from "@/data/companies";
import { scholarships } from "@/data/scholarships";
import { courses, games } from "@/data/courses";
import { studentProgress } from "@/data/progress";
import { mentalHealthTips } from "@/data/mentalHealth";
import CompanyCard from "@/components/dashboard/CompanyCard";
import ScholarshipCard from "@/components/dashboard/ScholarshipCard";
import CourseCard from "@/components/dashboard/CourseCard";
import GameCard from "@/components/dashboard/GameCard";
import MentalHealthSection from "@/components/dashboard/MentalHealthSection";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {userData.name ? userData.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2) : 'ST'}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold">Welcome back, {userData.name || 'Student'}!</h1>
                <p className="text-muted-foreground">Continue your learning journey</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{studentProgress.overall.level}</div>
                <div className="text-sm text-muted-foreground">Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{studentProgress.overall.totalXP}</div>
                <div className="text-sm text-muted-foreground">XP Points</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="companies" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Companies
            </TabsTrigger>
            <TabsTrigger value="scholarships" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Scholarships
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              Learning
            </TabsTrigger>
            <TabsTrigger value="counseling" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Counseling
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Quiz
            </TabsTrigger>
            <TabsTrigger value="wellness" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Wellness
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Progress Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{studentProgress.overall.coursesCompleted}%</div>
                  <Progress value={studentProgress.overall.coursesCompleted} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Quiz Score</CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{studentProgress.overall.quizScore}%</div>
                  <Progress value={studentProgress.overall.quizScore} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Skills Unlocked</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{studentProgress.overall.skillsUnlocked}%</div>
                  <Progress value={studentProgress.overall.skillsUnlocked} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Games Completed</CardTitle>
                  <Gamepad2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{studentProgress.overall.gamesCompleted}%</div>
                  <Progress value={studentProgress.overall.gamesCompleted} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity & Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {studentProgress.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.item}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">+{activity.xp} XP</Badge>
                        <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {studentProgress.achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium">{achievement.name}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.earned ? (
                        <Badge className="bg-success text-success-foreground">Earned</Badge>
                      ) : (
                        <Badge variant="outline">Locked</Badge>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="companies" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Company Connections</h2>
                <p className="text-muted-foreground">Explore job opportunities and internships</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scholarships" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Scholarship Advisor</h2>
                <p className="text-muted-foreground">Find scholarships that match your profile</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Gamified Learning</h2>
                <p className="text-muted-foreground">Learn through interactive courses and games</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Learning Games</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="counseling" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Personal Counseling</h2>
                <p className="text-muted-foreground">Get personalized guidance for your career</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    AI Career Counselor
                  </CardTitle>
                  <CardDescription>
                    Chat with our AI counselor for instant career guidance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4 h-40 overflow-y-auto">
                    <p className="text-sm text-muted-foreground italic">
                      Start a conversation with our AI counselor...
                    </p>
                  </div>
                  <Button className="w-full">Start Conversation</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Book Mentor Session
                  </CardTitle>
                  <CardDescription>
                    Schedule a one-on-one session with industry experts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Dr. Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Technology Career Expert</p>
                      </div>
                      <Button variant="outline" size="sm">Book</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Mr. Raj Patel</p>
                        <p className="text-sm text-muted-foreground">Business & Finance Mentor</p>
                      </div>
                      <Button variant="outline" size="sm">Book</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Quiz & Aptitude Tests</h2>
                <p className="text-muted-foreground">Test your knowledge and discover your strengths</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Career Aptitude Test</CardTitle>
                  <CardDescription>Discover which career path suits you best</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm"><strong>Duration:</strong> 15 minutes</p>
                    <p className="text-sm"><strong>Questions:</strong> 30</p>
                    <p className="text-sm"><strong>Type:</strong> Multiple Choice</p>
                  </div>
                  <Button className="w-full">Start Test</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>General Knowledge Quiz</CardTitle>
                  <CardDescription>Test your general awareness and current affairs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm"><strong>Duration:</strong> 10 minutes</p>
                    <p className="text-sm"><strong>Questions:</strong> 20</p>
                    <p className="text-sm"><strong>Type:</strong> Mixed</p>
                  </div>
                  <Button className="w-full">Start Quiz</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skill Assessment</CardTitle>
                  <CardDescription>Evaluate your technical and soft skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm"><strong>Duration:</strong> 20 minutes</p>
                    <p className="text-sm"><strong>Questions:</strong> 25</p>
                    <p className="text-sm"><strong>Type:</strong> Practical</p>
                  </div>
                  <Button className="w-full">Start Assessment</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Quiz Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Technology Skills Quiz</p>
                      <p className="text-sm text-muted-foreground">Completed 2 days ago</p>
                    </div>
                    <Badge className="bg-success text-success-foreground">85%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Career Aptitude Test</p>
                      <p className="text-sm text-muted-foreground">Completed 1 week ago</p>
                    </div>
                    <Badge className="bg-info text-info-foreground">78%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wellness" className="space-y-6">
            <MentalHealthSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;