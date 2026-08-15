"use client";

import { Logo } from "./Logo";

export function SplashScreen() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-sky-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] -left-[-10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] -right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="animate-fade-in-up flex flex-col items-center gap-6">
          <div className="animate-pulse-slow drop-shadow-[0_0_25px_rgba(14,165,233,0.3)]">
              <Logo size={120} className="text-primary" />
          </div>
          
          <div className="flex flex-col items-center text-center">
              <h1 className="text-6xl font-extrabold text-primary tracking-tighter sm:text-7xl mb-2 drop-shadow-sm">
                Hello Doctor
              </h1>
              <div className="flex items-center gap-4 w-full">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-primary/30 rounded-full"></div>
                <p className="text-lg font-black text-primary tracking-[0.4em] uppercase opacity-90">
                  GOPALGANJ SIWAN
                </p>
                <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-primary/30 rounded-full"></div>
              </div>
          </div>
        </div>
      </div>
      
      <div className="animate-fade-in-up-delay absolute bottom-16 flex flex-col items-center gap-1">
        <p className="text-4xl font-cursive text-primary drop-shadow-sm">
          Produced by Hello Group
        </p>
        <div className="h-1 w-24 bg-primary/20 rounded-full mt-4"></div>
      </div>
    </div>
  );
}
