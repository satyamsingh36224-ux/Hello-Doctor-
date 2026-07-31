
"use client";

import { Logo } from "./Logo";

export function SplashScreen() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-blue-950 overflow-hidden">
      <div className="animate-fade-in-up flex flex-col items-center gap-6">
        <div className="animate-pulse-slow">
            <Logo size={100} className="drop-shadow-2xl text-primary" />
        </div>
        <div className="flex flex-col items-center">
            <h1 className="text-5xl font-extrabold text-primary tracking-tighter">Hello Doctor</h1>
            <div className="h-1 w-12 bg-primary/20 rounded-full mt-2"></div>
        </div>
      </div>
      
      <div className="animate-fade-in-up-delay absolute bottom-12 flex flex-col items-center gap-1">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.3em] opacity-40">
          Mobile Health App
        </p>
        <p className="text-3xl font-cursive text-primary mt-2">
          Produced by Hello Group
        </p>
      </div>
    </div>
  );
}
