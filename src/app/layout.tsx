
import type {Metadata, Viewport} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Home, LifeBuoy, BriefcaseMedical, History, Settings, Hospital, TestTube } from 'lucide-react';
import Link from 'next/link';
import { LanguageProvider } from '@/context/LanguageContext';
import { LocationProvider } from '@/context/LocationContext';
import { Logo } from '@/components/Logo';
import { FirebaseClientProvider } from '@/firebase/client-provider';


export const metadata: Metadata = {
  title: 'Hello Doctor',
  description: 'Hello Doctor - बिहार में डॉक्टर से अपॉइंटमेंट बुक करें।',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/20" suppressHydrationWarning>
        <LanguageProvider>
          <LocationProvider>
            <FirebaseClientProvider>
                <SidebarProvider>
                    <Sidebar className="border-r border-border/50">
                        <SidebarHeader className="p-6 flex flex-row items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-xl">
                                <Logo className="h-8 w-8" />
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
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary transition-transform group-hover:scale-110"><Home className="h-5 w-5" /></div> 
                                            होम
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/hospitals" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary transition-transform group-hover:scale-110"><Hospital className="h-5 w-5" /></div> 
                                            अस्पताल
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/home-visit" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary transition-transform group-hover:scale-110"><BriefcaseMedical className="h-5 w-5" /></div> 
                                            होम विज़िट
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                 <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/lab-test" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary transition-transform group-hover:scale-110"><TestTube className="h-5 w-5" /></div> 
                                            लैब टेस्ट
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/history" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary transition-transform group-hover:scale-110"><History className="h-5 w-5" /></div> 
                                            हिस्ट्री
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/settings" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary transition-transform group-hover:scale-110"><Settings className="h-5 w-5" /></div> 
                                            सेटिंग्स
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                 <SidebarMenuItem>
                                    <SidebarMenuButton asChild className="hover:bg-primary/5">
                                        <Link href="/support" className="flex items-center gap-3 font-medium">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary transition-transform group-hover:scale-110"><LifeBuoy className="h-5 w-5" /></div> 
                                            सहायता
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarContent>
                    </Sidebar>
                    <SidebarInset className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-950">
                        {children}
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
