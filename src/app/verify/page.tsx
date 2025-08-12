
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function VerifyPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
      <Card className="max-w-sm w-full shadow-lg rounded-2xl border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">फ़ोन सत्यापित करें</CardTitle>
          <CardDescription>हमने आपके नंबर पर एक OTP भेजा है।</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Input id="otp" type="text" placeholder="OTP दर्ज करें" className="py-5 rounded-full text-center tracking-widest" required />
            <Button asChild className="w-full py-5 rounded-full text-sm font-semibold">
                <Link href="/select-specialization">सत्यापित करें</Link>
            </Button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">
            OTP नहीं मिला? <Link href="#" className="text-primary hover:underline font-semibold">पुनः भेजें</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
