export const studentProgress = {
  overall: {
    coursesCompleted: 75,
    quizScore: 85,
    skillsUnlocked: 60,
    gamesCompleted: 40,
    totalXP: 1250,
    level: 8,
    nextLevelXP: 1500
  },
  categories: {
    technology: {
      progress: 80,
      courses: 3,
      completed: 2,
      xp: 450
    },
    communication: {
      progress: 65,
      courses: 2,
      completed: 1,
      xp: 200
    },
    leadership: {
      progress: 45,
      courses: 4,
      completed: 1,
      xp: 150
    },
    creativity: {
      progress: 90,
      courses: 2,
      completed: 2,
      xp: 300
    }
  },
  achievements: [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first course",
      icon: "🎯",
      earned: true,
      earnedDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Quiz Master",
      description: "Score above 80% in 5 quizzes",
      icon: "🧠",
      earned: true,
      earnedDate: "2024-02-01"
    },
    {
      id: 3,
      name: "Game Champion",
      description: "Complete 10 learning games",
      icon: "🏆",
      earned: false,
      earnedDate: null
    },
    {
      id: 4,
      name: "Consistent Learner",
      description: "Study for 30 consecutive days",
      icon: "📅",
      earned: false,
      earnedDate: null
    }
  ],
  streaks: {
    current: 7,
    longest: 15,
    weeklyGoal: 5,
    weeklyProgress: 4
  },
  recentActivity: [
    {
      id: 1,
      action: "Completed course",
      item: "Web Development Fundamentals",
      date: "2024-03-10",
      xp: 50
    },
    {
      id: 2,
      action: "Passed quiz",
      item: "HTML & CSS Basics",
      date: "2024-03-09",
      xp: 25
    },
    {
      id: 3,
      action: "Played game",
      item: "Code Memory Match",
      date: "2024-03-08",
      xp: 15
    }
  ]
};