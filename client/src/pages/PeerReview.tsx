import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { PeerReview as PeerReviewType } from "@/types";

const mockReviews: PeerReviewType[] = [
  { id: 1, project: "E-commerce Dashboard", reviewer: "Alex Johnson", rating: 4, feedback: "Great design! Consider adding dark mode support for better accessibility.", status: "completed" },
  { id: 2, project: "Weather App", reviewer: "Maria Garcia", rating: 5, feedback: "Excellent API implementation! Clean code and great UX.", status: "completed" },
  { id: 3, project: "Task Manager", reviewer: "Pending", rating: null, feedback: null, status: "pending" },
  { id: 4, project: "Blog Platform", reviewer: "Pending", rating: null, feedback: null, status: "pending" },
];

export default function PeerReview() {
  const [reviews] = useState<PeerReviewType[]>(mockReviews);

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">
          👥 Peer Reviews
        </h1>
        <p className="text-lg text-muted-foreground">
          Get feedback on your projects and help others improve
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary rounded-xl">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Review Projects, Earn Rewards!</h3>
                <p className="text-muted-foreground">Get 50 coins for each detailed project review you provide</p>
              </div>
              <Button size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                Review a Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle>{review.project}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Reviewed by: {review.reviewer}
                    </p>
                  </div>
                  {review.status === 'completed' ? (
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < (review.rating || 0)
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  ) : (
                    <Badge variant="secondary">Pending</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {review.feedback ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-accent rounded-lg">
                      <p className="text-sm">{review.feedback}</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Full Review
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Waiting for peer reviews...
                    </p>
                    <Button className="w-full">
                      Request More Reviews (+10 🪙)
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="border-dashed hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="p-8 text-center">
            <Plus className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-bold text-lg mb-2">Submit a New Project for Review</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get valuable feedback from your peers
            </p>
            <Button>Submit Project</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
