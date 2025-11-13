export interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  duration: string;
  lessons: number;
  completedLessons: number;
  category: string;
  rating: number;
  enrolled: number;
  thumbnail: string;
  nextLesson: string;
  description?: string;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  type: 'video' | 'quiz' | 'reading' | 'project';
}

export interface Project {
  id: number;
  title: string;
  status: 'In Progress' | 'In Review' | 'Completed';
  submitted: string | null;
  score: number | null;
  dueDate?: string;
}

export interface Achievement {
  id: number;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
  progress?: number;
  date?: string;
}

export interface LiveSession {
  id: number;
  title: string;
  instructor: string;
  time: string;
  participants: number;
  duration: string;
  course: string;
}

export interface UserStats {
  activeCourses: number;
  completed: number;
  streak: number;
  totalHours: number;
}

export interface UserCurrency {
  coins: number;
  earnedToday: number;
  canRedeem: boolean;
}

export interface PeerReview {
  id: number;
  project: string;
  reviewer: string;
  rating: number | null;
  feedback: string | null;
  status: 'pending' | 'completed';
}

export interface ABTest {
  id: number;
  courseId: number;
  element: string;
  variantA: string;
  variantB: string;
  clicksA: number;
  clicksB: number;
  status: 'running' | 'completed';
}

export interface ForumThread {
  id: number;
  courseId: number;
  title: string;
  author: string;
  replies: number;
  views: number;
  lastActive: string;
  solved: boolean;
}

export interface StudyGroup {
  id: number;
  name: string;
  members: number;
  course: string;
  type: 'public' | 'private';
  activity: 'active' | 'moderate' | 'low';
}
