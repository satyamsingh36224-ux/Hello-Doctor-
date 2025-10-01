
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, HeartPulse, Shield, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";
import { Logo } from "@/components/Logo";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";


export default function LoginPage() {
  const { language, setLanguage, translations } = useLanguage();
  const router = useRouter();
  const t = translations.loginPage;
  const { toast } = useToast();

  const [password, setPassword] = useState('');
  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1616') {
        toast({
            title: "लॉगिन सफल",
            description: "एडमिन डैशबोर्ड में आपका स्वागत है।",
        });
        router.push('/admin');
        setIsAdminDialogOpen(false);
    } else {
        toast({
            title: "गलत पासवर्ड",
            description: "कृपया सही पासवर्ड डालें।",
            variant: "destructive",
        });
    }
    setPassword('');
  };


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-4 right-4 z-20">
        <Select
          value={language}
          onValueChange={(value: Language) => setLanguage(value)}
        >
          <SelectTrigger
            suppressHydrationWarning
            className="w-auto rounded-full border-border/50 bg-background/80 backdrop-blur-sm text-sm h-10 px-4"
          >
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
          <CardTitle className="text-3xl font-bold tracking-tight">
            Hello Doctor
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground px-4">
            आपके स्वास्थ्य का भरोसेमंद साथी
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
             <Button
              suppressHydrationWarning
              variant="outline"
              onClick={() => toast({ title: 'कार्यक्षमता अक्षम', description: 'Google साइन-इन अभी उपलब्ध नहीं है।', variant: 'destructive' })}
              className="w-full py-5 rounded-full text-sm font-semibold"
            >
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.2 172.9 56.7L368.7 128C330.5 94.5 292.2 78.2 248 78.2c-101.7 0-184.4 82.7-184.4 184.4S146.3 437 248 437c58.4 0 106.3-24.2 138.6-56.6 27.8-27.5 41.6-67.7 44-114.8H248v-85.3h236.1c2.3 12.7 3.9 26.9 3.9 41.8z"></path></svg>
              {t.continueWithGoogle}
            </Button>
            <Button
              suppressHydrationWarning
              variant="outline"
              onClick={() => toast({ title: 'कार्यक्षमता अक्षम', description: 'Facebook साइन-इन अभी उपलब्ध नहीं है।', variant: 'destructive' })}
              className="w-full py-5 rounded-full text-sm font-semibold"
            >
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
              {t.continueWithFacebook}
            </Button>
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">{t.or}</span>
              </div>
            </div>
             <Input
              suppressHydrationWarning
              id="phone"
              type="tel"
              placeholder={t.phonePlaceholder}
              className="py-5 rounded-full bg-background"
              required
            />
            <Button
              suppressHydrationWarning
              asChild
              className="w-full py-5 rounded-full text-sm font-semibold"
            >
              <Link href="/select-specialization">
                {t.continueWithPhone}
              </Link>
            </Button>
             <Button
              suppressHydrationWarning
              asChild
              variant="outline"
              className="w-full py-5 rounded-full text-sm font-semibold mt-2 text-primary border-primary/50 hover:bg-primary/5 hover:text-primary"
            >
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
      
      <div className="absolute bottom-4">
         <Dialog open={isAdminDialogOpen} onOpenChange={setIsAdminDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                    <Shield className="mr-2 h-4 w-4" />
                    एडमिन लॉगिन
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>एडमिन पैनल</DialogTitle>
                    <DialogDescription>
                        जारी रखने के लिए कृपया एडमिन पासवर्ड डालें।
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAdminLogin} className="space-y-4 pt-4">
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="पासवर्ड"
                            className="pl-10 rounded-full py-6"
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="w-full rounded-full">
                            लॉगिन करें
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
      </div>

    </div>
  );
}
