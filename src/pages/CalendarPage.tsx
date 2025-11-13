import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Video, Clock, Users, Plus } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  { id: 1, title: "React Advanced Patterns", type: "live", time: "2:00 PM", duration: "1.5 hours", instructor: "Sarah Chen", participants: 234, color: "from-blue-500 to-cyan-500" },
  { id: 2, title: "UI/UX Workshop", type: "workshop", time: "10:00 AM", duration: "2 hours", instructor: "Mike Rodriguez", participants: 189, color: "from-blue-600 to-blue-400" },
];

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">Learning Calendar 📅</h1>
          <p className="text-lg text-muted-foreground">Schedule your learning sessions</p>
        </div>
        <Button className="gap-2"><Plus className="w-4 h-4" />Add Event</Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>January 2024</CardTitle></CardHeader>
          <CardContent><Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border w-full" /></CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle>Upcoming Events</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {events.map((e, i) => (
                <motion.div key={e.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${e.color} flex items-center justify-center`}><Video className="w-5 h-5 text-white" /></div>
                    <div className="flex-1"><h4 className="font-medium text-sm mb-1">{e.title}</h4><p className="text-xs text-muted-foreground mb-2">{e.time}</p><Badge variant="secondary" className="text-xs">{e.type}</Badge></div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
