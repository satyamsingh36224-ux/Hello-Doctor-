"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Hospital, BriefcaseMedical, Settings, HelpCircle, History } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "होम", href: "/doctors" },
  { icon: Hospital, label: "अस्पताल", href: "/hospitals" },
  { icon: BriefcaseMedical, label: "विजिट", href: "/home-visit" },
  { icon: History, label: "इतिहास", href: "/history" },
  { icon: Settings, label: "सेटिंग्स", href: "/settings" },
];

export function BottomNav() {
  const pathname = usePathname();

  // लॉगिन और स्प्लैश स्क्रीन पर नेविगेशन बार नहीं दिखाएंगे
  if (pathname === "/" || pathname === "/other-services") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around px-2 py-3 pb-8 md:hidden shadow-[0_-8px_30px_rgb(0,0,0,0.08)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 transition-all duration-300 relative px-3 py-1 rounded-2xl",
              isActive ? "text-primary scale-110" : "text-slate-400 hover:text-primary/70"
            )}
          >
            <item.icon className={cn("h-6 w-6", isActive ? "stroke-[2.5px]" : "stroke-2")} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            {isActive && (
              <span className="absolute -top-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#0ea5e9] animate-pulse" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
