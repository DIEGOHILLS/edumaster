import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Sessions from "./pages/Sessions";
import InstructorDashboard from "./pages/InstructorDashboard";
import FeedbackDashboard from "./pages/FeedbackDashboard";
import Leaderboard from "./pages/Leaderboard";
import StudyGroups from "./pages/StudyGroups";
import Forums from "./pages/Forums";
import Achievements from "./pages/Achievements";
import CalendarPage from "./pages/CalendarPage";
import SettingsPage from "./pages/SettingsPage";
import ABTesting from "./pages/ABTesting";
import PeerReview from "./pages/PeerReview";
import NotFound from "./pages/NotFound";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Header } from "@/components/layout/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/signup" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              {/* --- Default landing page redirects to signup --- */}
              <Route path="/" element={<Navigate to="/signup" replace />} />

              {/* --- Public routes --- */}
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />

              {/* --- Protected routes --- */}
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <SidebarProvider>
                      <div className="min-h-screen flex w-full bg-background">
                        <AppSidebar />
                        <div className="flex-1 flex flex-col">
                          <Header />
                          <main className="flex-1">
                            <Routes>
                              <Route index element={<Dashboard />} />
                              <Route path="courses" element={<Courses />} />
                              <Route path="sessions" element={<Sessions />} />
                              <Route path="instructor" element={<InstructorDashboard />} />
                              <Route path="feedback" element={<FeedbackDashboard />} />
                              <Route path="leaderboard" element={<Leaderboard />} />
                              <Route path="study-groups" element={<StudyGroups />} />
                              <Route path="forums" element={<Forums />} />
                              <Route path="achievements" element={<Achievements />} />
                              <Route path="calendar" element={<CalendarPage />} />
                              <Route path="settings" element={<SettingsPage />} />
                              <Route path="ab-testing" element={<ABTesting />} />
                              <Route path="peer-review" element={<PeerReview />} />
                              <Route path="404" element={<NotFound />} />
                              <Route path="*" element={<Navigate to="/404" replace />} />
                            </Routes>
                          </main>
                        </div>
                      </div>
                      <Toaster />
                      <Sonner />
                    </SidebarProvider>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}
