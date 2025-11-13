import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Eye, Clock, Search, Plus, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const forumThreads = [
  { id: 1, courseId: 1, title: "How to debug async code effectively?", author: "Alex K.", replies: 12, views: 234, lastActive: "2 hours ago", solved: true, category: "Programming" },
  { id: 2, courseId: 1, title: "Best practices for error handling in JavaScript", author: "Maria G.", replies: 8, views: 156, lastActive: "5 hours ago", solved: false, category: "Programming" },
  { id: 3, courseId: 2, title: "Color theory questions for beginners", author: "David L.", replies: 15, views: 289, lastActive: "1 hour ago", solved: true, category: "Design" },
  { id: 4, courseId: 1, title: "Understanding closures and scope", author: "Lisa W.", replies: 20, views: 412, lastActive: "3 hours ago", solved: true, category: "Programming" },
  { id: 5, courseId: 2, title: "How to create accessible designs?", author: "Chris M.", replies: 6, views: 98, lastActive: "4 hours ago", solved: false, category: "Design" },
  { id: 6, courseId: 3, title: "Neural network architecture advice", author: "Emily R.", replies: 18, views: 345, lastActive: "1 day ago", solved: false, category: "Data Science" },
];

export default function Forums() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<"all" | "Programming" | "Design" | "Data Science">("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "solved" | "unsolved">("all");

  const filteredThreads = forumThreads.filter((thread) => {
    const matchesSearch = thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         thread.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || thread.category === filterCategory;
    const matchesStatus = filterStatus === "all" || 
                         (filterStatus === "solved" && thread.solved) ||
                         (filterStatus === "unsolved" && !thread.solved);
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="p-6 lg:p-8 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">💬 Course Forums</h1>
        <p className="text-lg text-muted-foreground">
          Ask questions and help your peers learn
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Your Posts</p>
                <p className="text-3xl font-bold text-foreground">8</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Helped Users</p>
                <p className="text-3xl font-bold text-foreground">24</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Reputation</p>
                <p className="text-3xl font-bold text-foreground">156</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filterCategory === "all" ? "default" : "outline"}
            onClick={() => setFilterCategory("all")}
            size="sm"
          >
            All Topics
          </Button>
          <Button
            variant={filterCategory === "Programming" ? "default" : "outline"}
            onClick={() => setFilterCategory("Programming")}
            size="sm"
          >
            Programming
          </Button>
          <Button
            variant={filterCategory === "Design" ? "default" : "outline"}
            onClick={() => setFilterCategory("Design")}
            size="sm"
          >
            Design
          </Button>
          <Button
            variant={filterCategory === "Data Science" ? "default" : "outline"}
            onClick={() => setFilterCategory("Data Science")}
            size="sm"
          >
            Data Science
          </Button>
          <div className="flex-1" />
          <Button
            variant={filterStatus === "all" ? "default" : "outline"}
            onClick={() => setFilterStatus("all")}
            size="sm"
          >
            All
          </Button>
          <Button
            variant={filterStatus === "solved" ? "default" : "outline"}
            onClick={() => setFilterStatus("solved")}
            size="sm"
          >
            Solved
          </Button>
          <Button
            variant={filterStatus === "unsolved" ? "default" : "outline"}
            onClick={() => setFilterStatus("unsolved")}
            size="sm"
          >
            Unsolved
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Discussion
          </Button>
        </div>
      </div>

      {/* Forum Threads */}
      <div className="space-y-3">
        {filteredThreads.map((thread, index) => (
          <motion.div
            key={thread.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
          >
            <Card className="group hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {thread.title}
                      </h3>
                      {thread.solved && (
                        <Badge variant="default" className="gap-1 bg-success">
                          <CheckCircle2 className="w-3 h-3" /> Solved
                        </Badge>
                      )}
                      <Badge variant="outline">{thread.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">by {thread.author}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" /> {thread.replies} replies
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" /> {thread.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {thread.lastActive}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredThreads.length === 0 && (
        <Card className="p-12 text-center">
          <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">No discussions found</h3>
          <p className="text-muted-foreground mb-4">Be the first to start a conversation!</p>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Start Discussion
          </Button>
        </Card>
      )}
    </div>
  );
}
