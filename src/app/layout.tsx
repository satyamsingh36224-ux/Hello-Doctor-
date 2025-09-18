import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Home, Settings, BriefcaseMedical, History, Pill, TestTube } from 'lucide-react';
import Link from 'next/link';
import { LanguageProvider } from '@/context/LanguageContext';
import { Logo } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Hello Doctor',
  description: 'Hello Doctor - बिहार में डॉक्टर से अपॉइंटमेंट बुक करें।',
  manifest: '/manifest.json',
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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          <SidebarProvider>
              <Sidebar>
                  <SidebarHeader className="p-4 flex items-center gap-2">
                      <Logo />
                      <div className="flex flex-col">
                        <h2 className="text-lg font-semibold text-sidebar-foreground">Hello Doctor</h2>
                        <p className="text-xs text-sidebar-foreground/70">आपका स्वास्थ्य, हमारी प्राथमिकता</p>
                      </div>
                  </SidebarHeader>
                  <SidebarContent>
                      <SidebarMenu>
                          <SidebarMenuItem>
                              <SidebarMenuButton asChild>
                                  <Link href="/doctors"><Home /> होम</Link>
                              </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                              <SidebarMenuButton asChild>
                                  <Link href="/home-visit"><BriefcaseMedical /> डॉक्टर होम विज़िट</Link>
                              </SidebarMenuButton>
                          </SidebarMenuItem>
                           <SidebarMenuItem>
                              <SidebarMenuButton asChild>
                                <Link href="/medicine"><Pill /> दवा</Link>
                              </SidebarMenuButton>
                          </SidebarMenuItem>
                           <SidebarMenuItem>
                              <SidebarMenuButton asChild>
                                  <Link href="/settings"><Settings /> सेटिंग्स</Link>
                              </SidebarMenuButton>
                          </SidebarMenuItem>
                           <SidebarMenuItem>
                              <SidebarMenuButton asChild>
                                <Link href="/lab-test"><TestTube /> लैब टेस्ट</Link>
                              </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                              <SidebarMenuButton asChild>
                                  <Link href="/history"><History /> अपॉइंटमेंट हिस्ट्री</Link>
                              </SidebarMenuButton>
                          </SidebarMenuItem>
                      </SidebarMenu>
                  </SidebarContent>
              </Sidebar>
              <SidebarInset>
                  {children}
              </SidebarInset>
          </SidebarProvider>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
