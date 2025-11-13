import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Trophy, Zap, Clock } from "lucide-react";
import { UserStats } from "@/types";

interface StatsCardsProps {
  stats: UserStats;
}

const statsConfig = [
  {
    title: "Active Courses",
    key: "activeCourses" as keyof UserStats,
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Completed",
    key: "completed" as keyof UserStats,
    icon: Trophy,
    gradient: "from-blue-600 to-blue-400",
  },
  {
    title: "Day Streak",
    key: "streak" as keyof UserStats,
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Total Hours",
    key: "totalHours" as keyof UserStats,
    icon: Clock,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsConfig.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    {stats[stat.key]}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
