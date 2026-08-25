"use client";

import { WifiOff, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OfflineScreen() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white p-6 text-center animate-fade-in-up">
      <div className="mb-6 p-6 bg-red-50 rounded-full">
        <WifiOff className="h-16 w-16 text-red-500" />
      </div>
      <h1 className="text-2xl font-black text-slate-900 mb-2">इंटरनेट कनेक्शन नहीं है</h1>
      <p className="text-slate-500 max-w-[250px] mb-8 leading-relaxed">
        कृपया अपना डेटा कनेक्शन या वाई-फाई चेक करें और पुनः प्रयास करें।
      </p>
      <Button 
        onClick={handleRetry} 
        className="w-full max-w-[200px] py-7 rounded-2xl text-lg font-black shadow-lg shadow-primary/20"
      >
        <RefreshCw className="mr-2 h-5 w-5" />
        पुनः प्रयास करें
      </Button>
    </div>
  );
}