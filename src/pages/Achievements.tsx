import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Star, Zap, Target, Award, Lock } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  { id: 1, title: "First Steps", description: "Complete your first lesson", icon: "🎯", unlocked: true, date: "Jan 15, 2024", points: 10, rarity: "common" },
  { id: 2, title: "Speed Learner", description: "Complete 3 courses in one week", icon: "⚡", unlocked: true, date: "Jan 22, 2024", points: 50, rarity: "rare" },
  { id: 3, title: "Streak Master", description: "Maintain a 30-day learning streak", icon: "🔥", unlocked: false, progress: 12, total: 30, points: 100, rarity: "epic" },
  { id: 4, title: "Knowledge Seeker", description: "Complete 10 different courses", icon: "📚", unlocked: true, date: "Feb 1, 2024", points: 75, rarity: "rare" },
];

const badges = [
  { id: 1, name: "Early Adopter", icon: "🌟", earned: true, date: "Jan 1, 2024" },
  { id: 2, name: "Night Owl", icon: "🦉", earned: true, date: "Jan 10, 2024" },
  { id: 3, name: "Weekend Warrior", icon: "⚔️", earned: true, date: "Jan 20, 2024" },
];

const milestones = [
  { id: 1, title: "100 Hours Learned", progress: 87, total: 100, reward: "50 points" },
  { id: 2, title: "10 Courses Completed", progress: 8, total: 10, reward: "Badge" },
];

export default function Achievements() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">Achievements 🏆</h1>
        <p className="text-lg text-muted-foreground">Track your learning milestones</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-6 flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center"><Trophy className="w-6 h-6 text-white" /></div><div><p className="text-2xl font-bold">385</p><p className="text-sm text-muted-foreground">Total Points</p></div></CardContent></Card>
        <Card><CardContent className="p-6 flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center"><Award className="w-6 h-6 text-white" /></div><div><p className="text-2xl font-bold">4</p><p className="text-sm text-muted-foreground">Achievements</p></div></CardContent></Card>
        <Card><CardContent className="p-6 flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"><Star className="w-6 h-6 text-white" /></div><div><p className="text-2xl font-bold">3</p><p className="text-sm text-muted-foreground">Badges</p></div></CardContent></Card>
        <Card><CardContent className="p-6 flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center"><Zap className="w-6 h-6 text-white" /></div><div><p className="text-2xl font-bold">12</p><p className="text-sm text-muted-foreground">Day Streak</p></div></CardContent></Card>
      </div>

      <Tabs defaultValue="achievements" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value="achievements" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div key={a.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
              <Card className={`relative ${a.unlocked ? 'hover:shadow-lg' : 'opacity-60'} transition-all`}>
                {!a.unlocked && <div className="absolute top-4 right-4"><Lock className="w-5 h-5 text-muted-foreground" /></div>}
                <CardHeader><div className="flex items-start gap-4"><div className="text-4xl">{a.icon}</div><div className="flex-1 space-y-2"><CardTitle className="text-lg">{a.title}</CardTitle><p className="text-sm text-muted-foreground">{a.description}</p></div></div></CardHeader>
                <CardContent><div className="space-y-3">{a.unlocked ? <div className="flex items-center justify-between"><Badge variant="secondary" className="gap-1"><Trophy className="w-3 h-3" />{a.points} pts</Badge><span className="text-xs text-muted-foreground">{a.date}</span></div> : a.progress !== undefined ? <div className="space-y-2"><div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Progress</span><span className="font-medium">{a.progress}/{a.total}</span></div><Progress value={(a.progress / a.total) * 100} /></div> : null}</div></CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="badges" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {badges.map((b, i) => (
            <motion.div key={b.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
              <Card className={`text-center ${b.earned ? 'hover:shadow-lg' : 'opacity-50'} transition-all`}><CardContent className="p-6 space-y-3"><div className="text-5xl">{b.icon}</div><h3 className="font-semibold">{b.name}</h3>{b.earned && <p className="text-xs text-muted-foreground">{b.date}</p>}</CardContent></Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="milestones" className="space-y-4">
          {milestones.map((m, i) => (
            <motion.div key={m.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
              <Card><CardContent className="p-6"><div className="space-y-4"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><Target className="w-5 h-5 text-primary" /><h3 className="font-semibold text-lg">{m.title}</h3></div><Badge variant="secondary">{m.reward}</Badge></div><div className="space-y-2"><div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Progress</span><span className="font-medium">{m.progress}/{m.total}</span></div><Progress value={(m.progress / m.total) * 100} /></div></div></CardContent></Card>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
