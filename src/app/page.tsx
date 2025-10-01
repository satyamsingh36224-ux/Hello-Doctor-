"use client";

import { useEffect, useState } from "react";
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
import { useAuth } from "@/context/AuthContext";
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
  const { user } = useAuth();
  const router = useRouter();
  const t = translations.loginPage;
  const { toast } = useToast();

  const [password, setPassword] = useState('');
  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);

  useEffect(() => {
    if (user) {
      router.push('/select-specialization');
    }
  }, [user, router]);

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
              variant="secondary"
              className="w-full py-5 rounded-full text-sm font-semibold"
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
