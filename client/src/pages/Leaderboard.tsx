import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Zap, Target, Coins, Gift, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { UserCurrency } from "@/types";

const leaderboard = [
  { rank: 1, name: "Alex Johnson", points: 2450, badge: "🏆", streak: 45, avatar: "AJ", isUser: false },
  { rank: 2, name: "Maria Garcia", points: 2380, badge: "🥈", streak: 38, avatar: "MG", isUser: false },
  { rank: 3, name: "David Kim", points: 2210, badge: "🥉", streak: 32, avatar: "DK", isUser: false },
  { rank: 4, name: "John (You)", points: 1890, badge: "⭐", streak: 12, avatar: "JD", isUser: true },
  { rank: 5, name: "Lisa Wong", points: 1750, badge: "⭐", streak: 28, avatar: "LW", isUser: false },
  { rank: 6, name: "Chris Lee", points: 1680, badge: "⭐", streak: 24, avatar: "CL", isUser: false },
  { rank: 7, name: "Emma Wilson", points: 1620, badge: "⭐", streak: 20, avatar: "EW", isUser: false },
  { rank: 8, name: "Ryan Brown", points: 1550, badge: "⭐", streak: 18, avatar: "RB", isUser: false },
];

const recentActivity = [
  { id: 1, action: "Earned 50 coins", details: "Completed JavaScript Fundamentals", time: "5 min ago", points: 50, type: "course" },
  { id: 2, action: "Achievement Unlocked", details: "Speed Learner Badge", time: "2 hours ago", points: 100, type: "achievement" },
  { id: 3, action: "Streak Milestone", details: "12 day streak maintained", time: "1 day ago", points: 25, type: "streak" },
];

export default function Leaderboard() {
  const [userCurrency] = useState<UserCurrency>({
    coins: 450,
    earnedToday: 25,
    canRedeem: true
  });

  const rewardShop = [
    { id: 1, name: "Premium Course Access", cost: 500, icon: "🎓" },
    { id: 2, name: "Certificate Frame", cost: 300, icon: "🖼️" },
    { id: 3, name: "1-on-1 Mentoring Session", cost: 1000, icon: "👨‍🏫" },
    { id: 4, name: "Course Bundle Discount", cost: 200, icon: "💰" },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">
          Leaderboard 🏆
        </h1>
        <p className="text-lg text-muted-foreground">
          Compete with fellow learners, earn coins, and unlock rewards
        </p>
      </motion.div>

      {/* Coins Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Coins className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-sm font-medium text-muted-foreground">Your Coins</h3>
                </div>
                <p className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  {userCurrency.coins} 🪙
                </p>
                <p className="text-sm text-muted-foreground">
                  +{userCurrency.earnedToday} earned today
                </p>
              </div>
              <Button size="lg" className="gap-2">
                <ShoppingBag className="w-5 h-5" />
                Redeem Coins
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-background rounded-lg text-center">
                <p className="text-2xl font-bold">10 🪙</p>
                <p className="text-sm text-muted-foreground mt-1">Complete a lesson</p>
              </div>
              <div className="p-4 bg-background rounded-lg text-center">
                <p className="text-2xl font-bold">25 🪙</p>
                <p className="text-sm text-muted-foreground mt-1">Pass a quiz</p>
              </div>
              <div className="p-4 bg-background rounded-lg text-center">
                <p className="text-2xl font-bold">50 🪙</p>
                <p className="text-sm text-muted-foreground mt-1">Review a project</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Your Rank</p>
                <p className="text-3xl font-bold text-foreground">#4</p>
                <p className="text-sm text-success">↑ 2 from last week</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Total Points</p>
                <p className="text-3xl font-bold text-foreground">1,890</p>
                <p className="text-sm text-info">+125 this week</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Current Streak</p>
                <p className="text-3xl font-bold text-foreground">12 days</p>
                <p className="text-sm text-warning">🔥 Keep it going!</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Leaderboard Rankings */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Top Learners This Month</h2>
          <div className="space-y-3">
            {leaderboard.map((user, index) => (
              <motion.div
                key={user.rank}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <Card className={user.isUser ? "bg-gradient-to-r from-primary to-blue-600 text-white" : ""}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold w-8">{user.badge}</div>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          user.isUser 
                            ? "bg-white/20" 
                            : "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                        }`}>
                          {user.avatar}
                        </div>
                        <div>
                          <div className={`font-bold ${user.isUser ? "text-white" : "text-foreground"}`}>
                            {user.name}
                          </div>
                          <div className={`text-sm flex items-center gap-1 ${
                            user.isUser ? "text-white/80" : "text-muted-foreground"
                          }`}>
                            <Zap className="w-4 h-4" /> {user.streak} day streak
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${user.isUser ? "text-white" : "text-foreground"}`}>
                          {user.points.toLocaleString()}
                        </div>
                        <div className={`text-xs ${user.isUser ? "text-white/80" : "text-muted-foreground"}`}>
                          points
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Reward Shop */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <Gift className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Reward Shop</h2>
            </div>
            <div className="space-y-3">
              {rewardShop.map((reward, index) => (
                <motion.div
                  key={reward.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-3xl">{reward.icon}</div>
                        <Badge variant="outline" className="text-sm font-bold">
                          {reward.cost} 🪙
                        </Badge>
                      </div>
                      <h3 className="font-bold text-sm mb-2">{reward.name}</h3>
                      <Button 
                        size="sm"
                        variant="outline" 
                        className="w-full"
                        disabled={userCurrency.coins < reward.cost}
                      >
                        {userCurrency.coins >= reward.cost ? 'Redeem' : 'Not Enough Coins'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Recent Activity */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Recent Activity</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'achievement' ? 'bg-yellow-100' :
                      activity.type === 'course' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {activity.type === 'achievement' && <Trophy className="w-5 h-5 text-yellow-600" />}
                      {activity.type === 'course' && <Target className="w-5 h-5 text-blue-600" />}
                      {activity.type === 'streak' && <Zap className="w-5 h-5 text-green-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {activity.details}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                    <Badge variant="secondary">+{activity.points} pts</Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
