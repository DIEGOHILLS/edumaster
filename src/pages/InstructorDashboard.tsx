import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, Target, Eye, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5100 },
  { month: "Mar", revenue: 4800 },
  { month: "Apr", revenue: 6200 },
  { month: "May", revenue: 7500 },
  { month: "Jun", revenue: 8900 },
];

const enrollmentData = [
  { course: "JavaScript", students: 15420, engagement: 92 },
  { course: "UI/UX", students: 12800, engagement: 88 },
  { course: "Data Science", students: 18900, engagement: 85 },
];

const completionData = [
  { name: "Completed", value: 68, color: "#8b5cf6" },
  { name: "In Progress", value: 25, color: "#ec4899" },
  { name: "Not Started", value: 7, color: "#64748b" },
];

const myCourses = [
  {
    id: 1,
    title: "Advanced JavaScript Mastery",
    students: 15420,
    revenue: 45890,
    rating: 4.8,
    completionRate: 68,
    engagement: 92,
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    students: 12800,
    revenue: 38400,
    rating: 4.9,
    completionRate: 73,
    engagement: 88,
  },
  {
    id: 3,
    title: "Data Science & ML",
    students: 18900,
    revenue: 56700,
    rating: 4.7,
    completionRate: 65,
    engagement: 85,
  },
];

export default function InstructorDashboard() {
  const totalRevenue = myCourses.reduce((sum, course) => sum + course.revenue, 0);
  const totalStudents = myCourses.reduce((sum, course) => sum + course.students, 0);
  const avgRating = (myCourses.reduce((sum, course) => sum + course.rating, 0) / myCourses.length).toFixed(1);
  const avgCompletion = Math.round(
    myCourses.reduce((sum, course) => sum + course.completionRate, 0) / myCourses.length
  );

  return (
    <div className="p-6 lg:p-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Instructor Dashboard 👨‍🏫</h1>
        <p className="text-lg text-muted-foreground">
          Track your teaching performance and student engagement
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">Total Revenue</p>
                <p className="text-3xl font-bold text-foreground">${totalRevenue.toLocaleString()}</p>
                <div className="flex items-center gap-1 text-success text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12.5%</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">Total Students</p>
                <p className="text-3xl font-bold text-foreground">{totalStudents.toLocaleString()}</p>
                <div className="flex items-center gap-1 text-success text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+8.2%</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">Avg Rating</p>
                <p className="text-3xl font-bold text-foreground">{avgRating} ⭐</p>
                <p className="text-sm text-muted-foreground">From 1,234 reviews</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">Completion Rate</p>
                <p className="text-3xl font-bold text-foreground">{avgCompletion}%</p>
                <Progress value={avgCompletion} className="h-2" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Completion Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Student Progress</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={completionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                >
                  {completionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Course Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Course Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {myCourses.map((course) => (
              <div
                key={course.id}
                className="p-4 rounded-lg border border-border hover:bg-accent transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{course.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>${course.revenue.toLocaleString()}</span>
                      </div>
                      <Badge variant="secondary">{course.rating} ⭐</Badge>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Completion Rate</span>
                      <span className="font-semibold text-foreground">{course.completionRate}%</span>
                    </div>
                    <Progress value={course.completionRate} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Engagement Score</span>
                      <span className="font-semibold text-foreground">{course.engagement}%</span>
                    </div>
                    <Progress value={course.engagement} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
