"use client";

import { Logo } from "./Logo";

export function SplashScreen() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-sky-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 overflow-hidden">
      {/* Background Decorative Elements for premium look */}
      <div className="absolute top-[-5%] -left-[-5%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-5%] -right-[-5%] w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <div className="animate-fade-in-up flex flex-col items-center gap-4 text-center">
          <div className="animate-pulse-slow drop-shadow-[0_0_20px_rgba(14,165,233,0.4)]">
              <Logo size={100} className="text-primary" />
          </div>
          
          <div className="flex flex-col items-center">
              <h1 className="text-5xl font-extrabold text-primary tracking-tight sm:text-6xl mb-1 drop-shadow-sm">
                Hello Doctor
              </h1>
              <div className="flex items-center gap-3 w-full max-w-[280px]">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/40"></div>
                <p className="text-sm font-black text-primary/80 tracking-[0.3em] uppercase">
                  GOPALGANJ SIWAN
                </p>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/40"></div>
              </div>
          </div>
        </div>
      </div>
      
      <div className="animate-fade-in-up-delay absolute bottom-12 flex flex-col items-center gap-1">
        <p className="text-3xl font-cursive text-primary/90 drop-shadow-sm">
          Produced by Hello Group
        </p>
        <div className="h-0.5 w-16 bg-primary/30 rounded-full mt-3"></div>
      </div>
    </div>
  );
}
