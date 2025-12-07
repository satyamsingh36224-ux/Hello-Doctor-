
import { Bell, LogOut, Shield, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@/firebase";
import { signOut } from "firebase/auth";

export function Header() {
  const { language, translations } = useLanguage();
  const t = translations.loginPage;
  const router = useRouter();
  const auth = useAuth();
  const { user } = useUser();

  const handleLogout = async () => {
    if (auth) {
      await signOut(auth);
      router.push('/');
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <SidebarTrigger className="md:hidden" />
        </div>
        <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="#" className="flex items-center justify-center">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">सूचनाएं</span>
                </a>
            </Button>
            {user ? (
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                            <AvatarFallback><User /></AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {user.displayName || "User"}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email || user.phoneNumber}
                        </p>
                    </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>लॉगआउट</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            ) : (
             <Button asChild variant="outline" size="sm" className="rounded-full">
               <Link href="/">{language === 'hi' ? 'लॉग इन करें' : 'Login'}</Link>
            </Button>
            )}
        </div>
      </div>
    </header>
  );
}
