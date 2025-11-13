import { Course } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Star, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  course: Course;
  onContinue?: (course: Course) => void;
}

export function CourseCard({ course, onContinue }: CourseCardProps) {
  const getGradientClass = (category: string) => {
    const gradients: Record<string, string> = {
      Programming: "from-blue-600 to-blue-400",
      Design: "from-pink-500 to-rose-500",
      "Data Science": "from-cyan-500 to-teal-500",
      Business: "from-orange-500 to-red-500",
    };
    return gradients[category] || "from-blue-600 to-blue-400";
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className={`h-40 bg-gradient-to-br ${getGradientClass(course.category)} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
            {course.category}
          </Badge>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="lg"
            className="rounded-full bg-white/90 hover:bg-white text-foreground gap-2"
            onClick={() => onContinue?.(course)}
          >
            <Play className="w-4 h-4" />
            Continue
          </Button>
        </div>
      </div>

      <CardContent className="p-5">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-1 line-clamp-1">
              {course.title}
            </h3>
            <p className="text-sm text-muted-foreground">{course.instructor}</p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span>{course.rating}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold text-foreground">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>

          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              Next: <span className="text-foreground font-medium">{course.nextLesson}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
