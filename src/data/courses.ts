export const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, JavaScript and build your first website",
    progress: 75,
    xpPoints: 250,
    totalXP: 500,
    badges: ["HTML Master", "CSS Ninja"],
    level: 3,
    nextLevel: 4,
    modules: [
      { name: "HTML Basics", completed: true, xp: 50 },
      { name: "CSS Styling", completed: true, xp: 75 },
      { name: "JavaScript Fundamentals", completed: true, xp: 100 },
      { name: "Responsive Design", completed: false, xp: 75 },
      { name: "Final Project", completed: false, xp: 200 }
    ],
    category: "Technology",
    difficulty: "Beginner",
    estimatedHours: 40
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    description: "Master social media, SEO, and online advertising strategies",
    progress: 60,
    xpPoints: 180,
    totalXP: 400,
    badges: ["Social Media Pro"],
    level: 2,
    nextLevel: 3,
    modules: [
      { name: "Social Media Basics", completed: true, xp: 60 },
      { name: "Content Creation", completed: true, xp: 80 },
      { name: "SEO Fundamentals", completed: true, xp: 40 },
      { name: "Paid Advertising", completed: false, xp: 100 },
      { name: "Analytics & Reporting", completed: false, xp: 120 }
    ],
    category: "Marketing",
    difficulty: "Intermediate",
    estimatedHours: 35
  },
  {
    id: 3,
    title: "Data Science with Python",
    description: "Analyze data, create visualizations, and build machine learning models",
    progress: 30,
    xpPoints: 90,
    totalXP: 600,
    badges: [],
    level: 1,
    nextLevel: 2,
    modules: [
      { name: "Python Basics", completed: true, xp: 80 },
      { name: "Data Manipulation", completed: false, xp: 120 },
      { name: "Data Visualization", completed: false, xp: 150 },
      { name: "Machine Learning", completed: false, xp: 200 },
      { name: "Final Project", completed: false, xp: 50 }
    ],
    category: "Data Science",
    difficulty: "Advanced",
    estimatedHours: 60
  }
];

export const games = [
  {
    id: 1,
    name: "Code Memory Match",
    description: "Match programming concepts with their definitions",
    category: "Memory",
    xpReward: 25,
    difficulty: "Easy",
    playCount: 0,
    bestScore: 0,
    completed: false
  },
  {
    id: 2,
    name: "Career Path Quiz",
    description: "Test your knowledge about different career options",
    category: "Quiz",
    xpReward: 50,
    difficulty: "Medium",
    playCount: 0,
    bestScore: 0,
    completed: false
  },
  {
    id: 3,
    name: "Skill Builder Puzzle",
    description: "Drag and drop skills to match job requirements",
    category: "Puzzle",
    xpReward: 40,
    difficulty: "Medium",
    playCount: 0,
    bestScore: 0,
    completed: false
  }
];