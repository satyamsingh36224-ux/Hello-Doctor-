"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, HeartPulse } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";
import { Logo } from "@/components/Logo";

const GoogleIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12V14.51H18.35C18.04 16.12 17.23 17.51 15.99 18.39V21.3H19.9C21.67 19.67 22.56 17.14 22.56 14.08V12.25Z" fill="#4285F4"/>
        <path d="M12 23C15.11 23 17.73 21.94 19.9 20.21L15.99 17.32C14.93 18.01 13.59 18.42 12 18.42C9.21 18.42 6.83 16.57 5.92 14.1H1.9V17.09C3.72 20.69 7.55 23 12 23Z" fill="#34A853"/>
        <path d="M5.92 14.1C5.69 13.41 5.56 12.67 5.56 11.9C5.56 11.13 5.69 10.39 5.92 9.7H1.9V6.71C0.7 8.93 0 11.23 0 13.9C0 16.57 0.7 18.87 1.9 21.09L5.92 18.1V14.1Z" fill="#FBBC05"/>
        <path d="M12 5.58C13.74 5.58 15.22 6.22 16.21 7.15L20.08 3.28C17.73 1.25 15.11 0 12 0C7.55 0 3.72 2.31 1.9 5.91L5.92 8.7C6.83 6.23 9.21 4.42 12 4.42V5.58Z" fill="#EA4335"/>
        <path d="M12 5.58C13.74 5.58 15.22 6.22 16.21 7.15L20.08 3.28C17.73 1.25 15.11 0 12 0C7.55 0 3.72 2.31 1.9 5.91L5.92 8.7C6.83 6.23 9.21 4.42 12 4.42V5.58Z" fill="#EA4335"/>
    </svg>
)

const FacebookIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12.062C22 6.505 17.523 2 12 2S2 6.505 2 12.062C2 17.06 5.69 21.213 10.438 22V14.969H7.898V12.062H10.438V9.847C10.438 7.324 11.93 5.938 14.223 5.938C15.308 5.938 16.274 6.023 16.5 6.052V8.562H15.197C13.99 8.562 13.562 9.333 13.562 10.124V12.062H16.336L15.896 14.969H13.562V22C18.31 21.213 22 17.06 22 12.062Z"/>
    </svg>
)

export default function LoginPage() {
  const { language, setLanguage, translations } = useLanguage();
  const t = translations.loginPage;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
       <div className="absolute top-4 right-4 z-20">
            <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
                <SelectTrigger className="w-auto rounded-full border-border/50 bg-background/80 backdrop-blur-sm text-sm h-10 px-4">
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
        <CardHeader className="text-center flex flex-col items-center gap-4 pt-8">
          <div className="flex w-full justify-center items-start">
              <div className="flex items-center gap-2">
                  <Logo />
                  <div className="text-left">
                    <CardTitle className="text-2xl">Hello Doctor</CardTitle>
                    <CardDescription className="text-xs">{t.signInPrompt}</CardDescription>
                  </div>
              </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button variant="outline" className="w-full justify-center py-5 rounded-full text-sm font-semibold bg-background hover:bg-muted">
            <GoogleIcon />
            <span className="ml-2">{t.continueWithGoogle}</span>
          </Button>
          <Button variant="outline" className="w-full justify-center py-5 rounded-full text-sm font-semibold bg-background hover:bg-muted">
            <FacebookIcon />
            <span className="ml-2">{t.continueWithFacebook}</span>
          </Button>
          <div className="relative my-2">
            <Separator />
            <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-card px-2 text-sm text-muted-foreground">
              {t.or}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Input id="phone" type="tel" placeholder={t.phonePlaceholder} className="py-5 rounded-full bg-background" required />
            <Button asChild className="w-full py-5 rounded-full text-sm font-semibold">
                <Link href="/select-specialization">{t.continueWithPhone}</Link>
            </Button>
            <Button asChild variant="secondary" className="w-full py-5 rounded-full text-sm font-semibold">
                <Link href="/other-services">
                    <HeartPulse className="mr-2 h-4 w-4" />
                    {t.otherServices}
                </Link>
            </Button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">
            {t.noAccount} <Link href="#" className="text-primary hover:underline font-semibold">{t.signUp}</Link>
          </p>
        </CardContent>
      </Card>

    </div>
  );
}
