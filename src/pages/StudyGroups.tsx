import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, Search, Plus, Lock, Globe } from "lucide-react";
import { motion } from "framer-motion";

const studyGroups = [
  { id: 1, name: "JS Warriors", members: 12, course: "Advanced JavaScript", type: "public", activity: "active", description: "Daily practice and code reviews" },
  { id: 2, name: "Design Masters", members: 8, course: "UI/UX Design Pro", type: "private", activity: "active", description: "Weekly design critiques" },
  { id: 3, name: "Data Science Club", members: 15, course: "Data Science & ML", type: "public", activity: "moderate", description: "Projects and discussions" },
  { id: 4, name: "React Experts", members: 20, course: "Advanced JavaScript", type: "public", activity: "active", description: "Building real-world projects" },
  { id: 5, name: "Figma Wizards", members: 10, course: "UI/UX Design Pro", type: "private", activity: "moderate", description: "Component library creation" },
  { id: 6, name: "ML Enthusiasts", members: 18, course: "Data Science & ML", type: "public", activity: "active", description: "Kaggle competitions" },
];

export default function StudyGroups() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "public" | "private">("all");

  const filteredGroups = studyGroups.filter((group) => {
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         group.course.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || group.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 lg:p-8 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">👥 Study Groups</h1>
        <p className="text-lg text-muted-foreground">
          Join or create study groups to learn together
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Your Groups</p>
                <p className="text-3xl font-bold text-foreground">3</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Active Members</p>
                <p className="text-3xl font-bold text-foreground">35</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Study Sessions</p>
                <p className="text-3xl font-bold text-foreground">12</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search groups or courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={filterType === "all" ? "default" : "outline"}
            onClick={() => setFilterType("all")}
          >
            All
          </Button>
          <Button
            variant={filterType === "public" ? "default" : "outline"}
            onClick={() => setFilterType("public")}
          >
            <Globe className="w-4 h-4 mr-2" />
            Public
          </Button>
          <Button
            variant={filterType === "private" ? "default" : "outline"}
            onClick={() => setFilterType("private")}
          >
            <Lock className="w-4 h-4 mr-2" />
            Private
          </Button>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Group
        </Button>
      </div>

      {/* Study Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="group hover:shadow-lg transition-all h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                  <Badge variant={group.type === "public" ? "default" : "secondary"}>
                    {group.type === "public" ? <Globe className="w-3 h-3 mr-1" /> : <Lock className="w-3 h-3 mr-1" />}
                    {group.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{group.course}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{group.members} members</span>
                  </div>
                  <Badge variant={group.activity === "active" ? "default" : "secondary"}>
                    {group.activity}
                  </Badge>
                </div>
                <Button className="w-full">Join Group</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredGroups.length === 0 && (
        <Card className="p-12 text-center">
          <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">No groups found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create New Group
          </Button>
        </Card>
      )}
    </div>
  );
}
