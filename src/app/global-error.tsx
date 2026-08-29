
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('App Crash Error:', error);
  }, [error]);

  return (
    <html>
      <body className="flex h-screen w-screen flex-col items-center justify-center bg-white p-6 text-center">
        <div className="mb-6 p-6 bg-red-50 rounded-full">
            <AlertCircle className="h-16 w-16 text-red-500" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-2">ओह! कुछ गलत हो गया।</h2>
        <p className="text-slate-500 max-w-[300px] mb-8 leading-relaxed">
            ऐप लोड करने में समस्या आई है। कृपया इसे पुनः शुरू करें।
        </p>
        <Button 
            onClick={() => reset()}
            className="w-full max-w-[200px] py-7 rounded-2xl text-lg font-black shadow-lg shadow-primary/20"
        >
            <RefreshCw className="mr-2 h-5 w-5" />
            फिर से शुरू करें
        </Button>
      </body>
    </html>
  );
}
