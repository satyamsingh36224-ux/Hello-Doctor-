"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, HeartPulse } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";
import { Logo } from "@/components/Logo";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const { language, setLanguage, translations } = useLanguage();
  const { user } = useAuth();
  const router = useRouter();
  const t = translations.loginPage;

  useEffect(() => {
    if (user) {
      router.push('/select-specialization');
    }
  }, [user, router]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
       <div className="absolute top-4 right-4 z-20">
            <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
                <SelectTrigger suppressHydrationWarning className="w-auto rounded-full border-border/50 bg-background/80 backdrop-blur-sm text-sm h-10 px-4">
                    <Globe className="h-4 w-4 mr-2" />
                    <SelectValue placeholder={t.selectLanguage} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="hi">हिन्दी</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="bho">भोजपुरी</SelectItem>
                </SelectContent>
            </Select>
       </div>
      <Card className="max-w-sm w-full shadow-2xl rounded-2xl border-border/50 bg-card/80 backdrop-blur-sm z-10">
        <CardHeader className="text-center flex flex-col items-center gap-2 pt-8">
            <Logo />
            <CardTitle className="text-3xl font-bold tracking-tight">Hello Doctor</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">बिहार का सबसे भरोसेमंद हेल्थकेयर ऐप</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Input suppressHydrationWarning id="phone" type="tel" placeholder={t.phonePlaceholder} className="py-5 rounded-full bg-background" required />
            <Button suppressHydrationWarning asChild className="w-full py-5 rounded-full text-sm font-semibold">
                <Link href="/select-specialization">{t.continueWithPhone}</Link>
            </Button>
            <Button suppressHydrationWarning asChild variant="secondary" className="w-full py-5 rounded-full text-sm font-semibold">
                <Link href="/other-services">
                    <HeartPulse className="mr-2 h-4 w-4" />
                    {t.otherServices}
                </Link>
            </Button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">
            {t.signInPrompt}
          </p>
        </CardContent>
      </Card>

    </div>
  );
}
