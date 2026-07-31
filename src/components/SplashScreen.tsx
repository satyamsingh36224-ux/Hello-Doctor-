
"use client";

import { Logo } from "./Logo";

export function SplashScreen() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white dark:bg-slate-950 overflow-hidden">
      <div className="animate-fade-in-up flex flex-col items-center gap-6">
        <div className="animate-pulse-slow">
            <Logo size={120} className="drop-shadow-2xl" />
        </div>
      </div>
      <div className="animate-fade-in-up-delay absolute bottom-12 flex flex-col items-center gap-1">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Bihar Health Care
        </p>
        <p className="text-xs text-muted-foreground opacity-60">
          Produced by Hello Group
        </p>
      </div>
    </div>
  );
}
