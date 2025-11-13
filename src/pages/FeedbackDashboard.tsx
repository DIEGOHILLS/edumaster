import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MessageSquare, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "sonner";

interface Feedback {
  id: number;
  studentName: string;
  course: string;
  rating: number;
  comment: string;
  date: string;
  replied: boolean;
}

const feedbacks: Feedback[] = [
  {
    id: 1,
    studentName: "Alex Johnson",
    course: "Advanced JavaScript Mastery",
    rating: 5,
    comment: "Best course I've ever taken! The instructor explains complex concepts in such a simple way.",
    date: "2 hours ago",
    replied: false,
  },
  {
    id: 2,
    studentName: "Maria Garcia",
    course: "UI/UX Design Fundamentals",
    rating: 5,
    comment: "Amazing content and practical projects. I learned so much!",
    date: "5 hours ago",
    replied: true,
  },
  {
    id: 3,
    studentName: "David Chen",
    course: "Advanced JavaScript Mastery",
    rating: 4,
    comment: "Great course overall. Would love more advanced async patterns.",
    date: "1 day ago",
    replied: false,
  },
  {
    id: 4,
    studentName: "Sarah Williams",
    course: "Data Science & ML",
    rating: 5,
    comment: "The explanations are crystal clear. Highly recommend!",
    date: "2 days ago",
    replied: true,
  },
];

export default function FeedbackDashboard() {
  const [localFeedbacks, setLocalFeedbacks] = useState(feedbacks);

  const handleReply = (id: number) => {
    setLocalFeedbacks(localFeedbacks.map(f => 
      f.id === id ? { ...f, replied: true } : f
    ));
    toast.success("Reply sent successfully!");
  };

  const unrepliedCount = localFeedbacks.filter(f => !f.replied).length;
  const avgRating = (localFeedbacks.reduce((sum, f) => sum + f.rating, 0) / localFeedbacks.length).toFixed(1);
  const fiveStarPercentage = Math.round((localFeedbacks.filter(f => f.rating === 5).length / localFeedbacks.length) * 100);

  return (
    <div className="p-6 lg:p-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Student Feedback 💬</h1>
        <p className="text-lg text-muted-foreground">
          Manage ratings and comments from your students
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">Average Rating</p>
                <p className="text-3xl font-bold text-foreground">{avgRating} ⭐</p>
                <div className="flex items-center gap-1 text-success text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+0.3 this month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">Pending Replies</p>
                <p className="text-3xl font-bold text-foreground">{unrepliedCount}</p>
                <p className="text-sm text-muted-foreground">Need your response</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">5-Star Reviews</p>
                <p className="text-3xl font-bold text-foreground">{fiveStarPercentage}%</p>
                <p className="text-sm text-muted-foreground">Of all reviews</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All ({localFeedbacks.length})</TabsTrigger>
              <TabsTrigger value="unreplied">Unreplied ({unrepliedCount})</TabsTrigger>
              <TabsTrigger value="replied">Replied ({localFeedbacks.length - unrepliedCount})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {localFeedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} onReply={handleReply} />
              ))}
            </TabsContent>

            <TabsContent value="unreplied" className="space-y-4">
              {localFeedbacks.filter(f => !f.replied).map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} onReply={handleReply} />
              ))}
            </TabsContent>

            <TabsContent value="replied" className="space-y-4">
              {localFeedbacks.filter(f => f.replied).map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} onReply={handleReply} />
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function FeedbackCard({ 
  feedback, 
  onReply 
}: { 
  feedback: Feedback; 
  onReply: (id: number) => void;
}) {
  return (
    <div className="p-4 rounded-lg border border-border hover:bg-accent transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-semibold">
            {feedback.studentName.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="font-semibold text-foreground">{feedback.studentName}</p>
            <p className="text-sm text-muted-foreground">{feedback.course}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="gap-1">
            {feedback.rating} <Star className="w-3 h-3 fill-warning text-warning" />
          </Badge>
          {feedback.replied && (
            <Badge className="gap-1 bg-success/10 text-success border-success/20">
              <CheckCircle className="w-3 h-3" />
              Replied
            </Badge>
          )}
        </div>
      </div>
      
      <p className="text-foreground mb-3">{feedback.comment}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{feedback.date}</span>
        {!feedback.replied && (
          <Button size="sm" onClick={() => onReply(feedback.id)}>
            Reply to Student
          </Button>
        )}
      </div>
    </div>
  );
}
