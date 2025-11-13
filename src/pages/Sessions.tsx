import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video } from "lucide-react";
import { LiveSession } from "@/types";

const sessions: LiveSession[] = [
  {
    id: 1,
    title: "Async/Await Deep Dive Workshop",
    course: "Advanced JavaScript Mastery",
    instructor: "Sarah Chen",
    time: "Today, 2:00 PM",
    participants: 234,
    duration: "90 min",
  },
  {
    id: 2,
    title: "Design System Best Practices",
    course: "UI/UX Design Fundamentals",
    instructor: "Mike Rodriguez",
    time: "Tomorrow, 10:00 AM",
    participants: 189,
    duration: "120 min",
  },
  {
    id: 3,
    title: "Machine Learning Algorithms Q&A",
    course: "Data Science & Machine Learning",
    instructor: "Dr. Emily Watson",
    time: "Friday, 3:00 PM",
    participants: 312,
    duration: "60 min",
  },
  {
    id: 4,
    title: "Building Scalable APIs",
    course: "Full Stack Web Development",
    instructor: "Alex Kumar",
    time: "Saturday, 11:00 AM",
    participants: 275,
    duration: "90 min",
  },
];

export default function Sessions() {
  return (
    <div className="p-6 lg:p-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Live Sessions 🎥</h1>
        <p className="text-lg text-muted-foreground">
          Join live workshops and Q&A sessions with expert instructors
        </p>
      </div>

      {/* Sessions List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sessions.map((session) => (
          <Card key={session.id} className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{session.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{session.course}</p>
                  </div>
                  <Badge variant="secondary" className="gap-1 shrink-0">
                    <Users className="w-3 h-3" />
                    {session.participants}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-semibold">
                    {session.instructor.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{session.instructor}</p>
                    <p className="text-xs text-muted-foreground">Instructor</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{session.duration}</span>
                  </div>
                </div>
                <Button className="w-full gap-2">
                  <Video className="w-4 h-4" />
                  Join Session
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
