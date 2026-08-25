"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Hospital, BriefcaseMedical, Settings, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "होम", href: "/doctors" },
  { icon: Hospital, label: "अस्पताल", href: "/hospitals" },
  { icon: BriefcaseMedical, label: "विजिट", href: "/home-visit" },
  { icon: HelpCircle, label: "मदद", href: "/support" },
  { icon: Settings, label: "सेटिंग्स", href: "/settings" },
];

export function BottomNav() {
  const pathname = usePathname();

  // Don't show bottom nav on login or splash
  if (pathname === "/" || pathname === "/other-services") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around px-2 py-3 pb-6 md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 transition-all duration-300 relative",
              isActive ? "text-primary scale-110" : "text-slate-400"
            )}
          >
            <item.icon className={cn("h-6 w-6", isActive ? "stroke-[2.5px]" : "stroke-2")} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            {isActive && (
              <span className="absolute -top-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#0ea5e9]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}