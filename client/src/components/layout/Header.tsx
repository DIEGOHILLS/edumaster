import { Bell, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SearchCommand } from "./SearchCommand";
import { useState, useEffect } from "react";
import { initializeTheme, toggleTheme as toggleThemeUtil } from "@/lib/theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const initialTheme = initializeTheme();
    setTheme(initialTheme);
  }, []);

  const handleToggleTheme = () => {
    const newTheme = toggleThemeUtil(theme);
    setTheme(newTheme);
  };

  

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Sidebar trigger */}
        <SidebarTrigger />

        {/* Search */}
        <div className="flex-1 max-w-xl">
          <SearchCommand />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggleTheme}
            className="rounded-xl"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl relative"
          >
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-destructive">
              2
            </Badge>
          </Button>

          <Avatar className="w-9 h-9 cursor-pointer">
            <AvatarFallback className="bg-gradient-brand text-white font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
