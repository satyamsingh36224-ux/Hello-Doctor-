import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="bg-transparent sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <SidebarTrigger className="md:hidden" />
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="person" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-center gap-2">
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
