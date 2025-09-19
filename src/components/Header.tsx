import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <SidebarTrigger className="md:hidden" />
          <Avatar className="h-10 w-10 border-2 border-primary/50">
            <AvatarImage src="https://picsum.photos/seed/user/100/100" alt="User" data-ai-hint="person" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="#" className="flex items-center justify-center">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">सूचनाएं</span>
                </a>
            </Button>
        </div>
      </div>
    </header>
  );
}
