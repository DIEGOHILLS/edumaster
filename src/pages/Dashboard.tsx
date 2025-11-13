import { StatsCards } from "@/components/dashboard/StatsCards";
import { CourseCard } from "@/components/courses/CourseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Course, UserStats } from "@/types";
import { Calendar, Users, ArrowRight, Play, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { courses } from "@/data/courses";

const stats: UserStats = {
  activeCourses: 5,
  completed: 8,
  streak: 12,
  totalHours: 87,
};

const upcomingSessions = [
  {
    id: 1,
    title: "Async/Await Deep Dive",
    instructor: "Sarah Chen",
    time: "Today, 2:00 PM",
    participants: 234,
    duration: "1.5 hours",
  },
  {
    id: 2,
    title: "Design System Workshop",
    instructor: "Mike Rodriguez",
    time: "Tomorrow, 10:00 AM",
    participants: 189,
    duration: "2 hours",
  },
];

const recentActivity = [
  { id: 1, action: "Completed", item: "JavaScript Promises", time: "2 hours ago", icon: "✅" },
  { id: 2, action: "Started", item: "React Hooks Deep Dive", time: "Yesterday", icon: "🚀" },
  { id: 3, action: "Earned", item: "Speed Learner Badge", time: "2 days ago", icon: "🏆" },
];

export default function Dashboard() {
  const activeCourses = courses.slice(0, 2);

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">
          Welcome back, John! 👋
        </h1>
        <p className="text-lg text-muted-foreground">
          Continue your learning journey where you left off
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <StatsCards stats={stats} />
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Continue Learning & Sessions */}
        <div className="lg:col-span-2 space-y-8">
          {/* Continue Learning */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Continue Learning</h2>
              <Button variant="ghost" className="gap-2 group">
                View All 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {activeCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Upcoming Live Sessions */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Upcoming Live Sessions</h2>
              <Button variant="ghost" className="gap-2">
                View Schedule <Calendar className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {upcomingSessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {session.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">{session.instructor}</p>
                        </div>
                        <Badge variant="secondary" className="gap-1 shrink-0">
                          <Users className="w-3 h-3" />
                          {session.participants}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{session.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{session.duration}</span>
                          </div>
                        </div>
                        <Button size="sm" className="gap-2 group/btn">
                          <Play className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                          Join Session
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Activity & Quick Stats */}
        <div className="space-y-8">
          {/* Recent Activity */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-foreground">Recent Activity</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-2xl">{activity.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {activity.item}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.section>

          {/* Learning Goals */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-foreground">Learning Goals</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Weekly Goal</span>
                    <span className="text-sm text-muted-foreground">12/15 hours</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-brand"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Course Completion</span>
                    <span className="text-sm text-muted-foreground">3/5 courses</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-success"
                    />
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-2 group">
                  <TrendingUp className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  View Progress
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
