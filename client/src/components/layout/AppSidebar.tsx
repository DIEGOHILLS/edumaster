import { NavLink } from "@/components/NavLink";
import { BookOpen, Video, Award, Calendar, BarChart3, Settings, LogOut, Users, MessageSquare, Home, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  role?: "student" | "instructor" | "both";
}

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/", icon: Home, role: "both" },
  { name: "My Courses", href: "/courses", icon: BookOpen, role: "student" },
  { name: "Instructor", href: "/instructor", icon: BarChart3, role: "instructor" },
  { name: "Live Sessions", href: "/sessions", icon: Video, role: "both" },
  { name: "Feedback", href: "/feedback", icon: MessageSquare, role: "instructor" },
  { name: "Leaderboard", href: "/leaderboard", icon: Award, role: "student" },
  { name: "Study Groups", href: "/study-groups", icon: Users, role: "both" },
  { name: "Forums", href: "/forums", icon: MessageSquare, role: "both" },
  { name: "Peer Review", href: "/peer-review", icon: Eye, role: "student" },
  { name: "A/B Testing", href: "/ab-testing", icon: TrendingUp, role: "instructor" },
  { name: "Calendar", href: "/calendar", icon: Calendar, role: "both" },
];

interface AppSidebarProps {
  userRole?: "student" | "instructor";
}

export function AppSidebar({ userRole = "student" }: AppSidebarProps) {
  const { open } = useSidebar();

  const filteredNavigation = navigation.filter(
    (item) => !item.role || item.role === "both" || item.role === userRole
  );

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Logo */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            {open && (
              <div className="overflow-hidden">
                <h1 className="text-xl font-bold text-foreground truncate">EduMaster</h1>
                <p className="text-xs text-muted-foreground truncate">Learn & Grow</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredNavigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.href}
                          className="flex items-center gap-3"
                          activeClassName="!bg-accent !text-primary font-semibold"
                        >
                          <item.icon className="w-5 h-5 shrink-0" />
                          <span>{item.name}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    {!open && (
                      <TooltipContent side="right">
                        <p>{item.name}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings & Logout */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to="/settings"
                        className="flex items-center gap-3"
                        activeClassName="!bg-accent !text-primary font-semibold"
                      >
                        <Settings className="w-5 h-5 shrink-0" />
                        <span>Settings</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  {!open && (
                    <TooltipContent side="right">
                      <p>Settings</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <LogOut className="w-5 h-5 shrink-0" />
                        <span>Sign Out</span>
                      </Button>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  {!open && (
                    <TooltipContent side="right">
                      <p>Sign Out</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
