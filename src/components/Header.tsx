
import { Bell, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useAuth, useUser } from "@/firebase";
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
import { getAuth, signOut as firebaseSignOut } from 'firebase/auth';

export function Header() {
  const { user } = useUser();
  const { language } = useLanguage();
  const auth = useAuth();


  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    const nameParts = name.split(' ');
    if (nameParts.length > 1) {
      return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase();
    }
    return name.charAt(0).toUpperCase();
  }

  const handleSignOut = () => {
    if (auth) {
      firebaseSignOut(auth);
    }
  }

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
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                      <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.displayName}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                   <Link href="/admin">
                     <DropdownMenuItem>
                        <Shield className="mr-2 h-4 w-4" />
                        <span>Admin</span>
                      </DropdownMenuItem>
                   </Link>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>लॉग आउट</span>
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
