
"use client";

import { useEffect, useState } from "react";
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Home, BriefcaseMedical, History, Settings, Hospital, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { LanguageProvider } from '@/context/LanguageContext';
import { LocationProvider } from '@/context/LocationContext';
import { Logo } from '@/components/Logo';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { BottomNav } from "@/components/BottomNav";
import { OfflineScreen } from "@/components/OfflineScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsOnline(navigator.onLine);
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="description" content="Hello Doctor - Bihar's trusted health partner for Siwan and Gopalganj." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/20 overflow-x-hidden bg-slate-50 min-h-screen" suppressHydrationWarning>
        {!isOnline && <OfflineScreen />}
        <LanguageProvider>
          <LocationProvider>
            <FirebaseClientProvider>
                <SidebarProvider>
                    <Sidebar className="border-r border-border/50 hidden md:flex">
                        <SidebarHeader className="p-6 flex flex-row items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-xl">
                                <Logo size={32} />
                            </div>
                            <div className="flex flex-col">
                              <h2 className="text-xl font-bold text-sidebar-foreground tracking-tight">Hello Doctor</h2>
                              <p className="text-[10px] text-sidebar-foreground/60 font-medium uppercase tracking-widest">Bihar Health Care</p>
                            </div>
                        </SidebarHeader>
                        <SidebarContent className="px-2">
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/doctors" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><Home className="h-5 w-5" /></div> 
                                            होम
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/hospitals" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><Hospital className="h-5 w-5" /></div> 
                                            अस्पताल
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/home-visit" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><BriefcaseMedical className="h-5 w-5" /></div> 
                                            होम विज़िट
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/history" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><History className="h-5 w-5" /></div> 
                                            अपॉइंटमेंट इतिहास
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/support" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><HelpCircle className="h-5 w-5" /></div> 
                                            मदद और सपोर्ट
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/settings" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><Settings className="h-5 w-5" /></div> 
                                            सेटिंग्स
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarContent>
                    </Sidebar>
                    <SidebarInset className="bg-slate-50 relative">
                        <div className="pb-32 md:pb-0">
                          {children}
                        </div>
                        <BottomNav />
                    </SidebarInset>
                </SidebarProvider>
                <Toaster />
            </FirebaseClientProvider>
          </LocationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
