import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ABTest } from "@/types";

const mockABTests: ABTest[] = [
  { id: 1, courseId: 1, element: 'Thumbnail', variantA: 'Original', variantB: 'New Design', clicksA: 234, clicksB: 289, status: 'running' },
  { id: 2, courseId: 1, element: 'Title', variantA: 'Advanced JS', variantB: 'Master JavaScript', clicksA: 156, clicksB: 198, status: 'running' },
  { id: 3, courseId: 2, element: 'CTA Button', variantA: 'Enroll Now', variantB: 'Start Learning', clicksA: 89, clicksB: 112, status: 'completed' },
];

export default function ABTesting() {
  const [tests] = useState<ABTest[]>(mockABTests);

  const getWinner = (test: ABTest) => {
    const totalA = test.clicksA;
    const totalB = test.clicksB;
    const percentageA = (totalA / (totalA + totalB)) * 100;
    const percentageB = (totalB / (totalA + totalB)) * 100;
    return { percentageA, percentageB, winner: totalB > totalA ? 'B' : 'A' };
  };

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">
            🧪 A/B Testing Dashboard
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Optimize your courses with data-driven experiments
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-5 h-5" />
          Create New Test
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {tests.map((test, index) => {
          const { percentageA, percentageB, winner } = getWinner(test);
          return (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">Testing: {test.element}</CardTitle>
                      <p className="text-sm text-muted-foreground">Course ID: {test.courseId}</p>
                    </div>
                    <Badge variant={test.status === 'running' ? 'default' : 'secondary'}>
                      {test.status.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Variant A */}
                    <div className="space-y-4">
                      <div className="p-4 bg-accent/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-medium text-muted-foreground">Variant A (Control)</p>
                          {winner === 'A' && <TrendingUp className="w-4 h-4 text-green-600" />}
                        </div>
                        <p className="font-bold text-lg mb-1">{test.variantA}</p>
                        <p className="text-3xl font-bold mb-2">{test.clicksA}</p>
                        <p className="text-sm text-muted-foreground">clicks</p>
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground">Conversion</span>
                            <span className={`text-lg font-bold ${winner === 'A' ? 'text-green-600' : 'text-foreground'}`}>
                              {percentageA.toFixed(1)}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${winner === 'A' ? 'bg-green-600' : 'bg-primary'} transition-all`}
                              style={{ width: `${percentageA}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Variant B */}
                    <div className="space-y-4">
                      <div className="p-4 bg-accent/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-medium text-muted-foreground">Variant B (Test)</p>
                          {winner === 'B' && <TrendingUp className="w-4 h-4 text-green-600" />}
                        </div>
                        <p className="font-bold text-lg mb-1">{test.variantB}</p>
                        <p className="text-3xl font-bold mb-2">{test.clicksB}</p>
                        <p className="text-sm text-muted-foreground">clicks</p>
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground">Conversion</span>
                            <span className={`text-lg font-bold ${winner === 'B' ? 'text-green-600' : 'text-foreground'}`}>
                              {percentageB.toFixed(1)}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${winner === 'B' ? 'bg-green-600' : 'bg-primary'} transition-all`}
                              style={{ width: `${percentageB}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                    {test.status === 'running' && (
                      <Button className="flex-1">
                        End Test & Apply Winner
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
