
"use client";

import { Logo } from "./Logo";

export function SplashScreen() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-200 dark:from-slate-900 dark:via-background dark:to-blue-950">
      <div className="animate-fade-in-up flex flex-col items-center gap-4">
        <div className="animate-pulse-slow">
            <Logo />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Hello Doctor
        </h1>
      </div>
      <p className="animate-fade-in-up-delay absolute bottom-8 text-sm text-muted-foreground">
        Produce by Hello Group
      </p>
    </div>
  );
}
