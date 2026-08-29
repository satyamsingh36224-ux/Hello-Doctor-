
"use client";

import { useState, useEffect } from "react";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Globe, HeartPulse, Loader2, MapPin, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";
import { useLocation } from "@/context/LocationContext";
import { Logo } from "@/components/Logo";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { SplashScreen } from "@/components/SplashScreen";
import { useUser } from "@/firebase";

export default function LoginPage() {
  const [showSplash, setShowSplash] = useState(true);
  const { language, setLanguage, translations } = useLanguage();
  const { location, setLocation } = useLocation();
  const router = useRouter();
  const t = translations?.loginPage || {};
  const tAdmin = translations?.admin || {};
  const { toast } = useToast();
  const { user, loading: userLoading } = useUser();
  const [loading, setLoading] = useState(false);

  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  useEffect(() => {
    if (!userLoading && user) {
      router.push("/select-specialization");
    }
  }, [user, userLoading, router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setLoading(true);
    toast({ 
      title: language === 'hi' ? "लॉगिन सफल!" : "Login Successful!", 
      description: `Welcome to Hello Doctor ${location === 'siwan' ? 'Siwan' : 'Gopalganj'}.` 
    });
    
    setTimeout(() => {
        router.push("/select-specialization");
        setLoading(false);
    }, 1000);
  }

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === "9007355062") {
        toast({ title: "Admin Login Successful!" });
        router.push("/admin");
    } else {
        toast({ 
            title: language === 'hi' ? "गलत पासवर्ड" : "Incorrect Password", 
            description: language === 'hi' ? "कृपया सही पासवर्ड डालें।" : "Please enter the correct password.",
            variant: "destructive" 
        });
    }
  };

  if (showSplash || (userLoading && !user)) {
    return <SplashScreen />;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-950 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-60"></div>

      <div className="absolute top-6 right-6 z-20 flex gap-2">
        <Select
          value={language}
          onValueChange={(value: Language) => setLanguage(value)}
        >
          <SelectTrigger
            className="w-auto rounded-full border-primary/20 bg-white/60 backdrop-blur-md text-xs h-9 px-4 shadow-sm"
          >
            <Globe className="h-3.5 w-3.5 mr-2 text-primary" />
            <SelectValue placeholder={t.selectLanguage || "Language"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hi">हिन्दी</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="bho">भोजपुरी</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full max-w-sm mb-6 z-10 animate-fade-in-up">
         <div className="flex bg-white/60 backdrop-blur-md p-1.5 rounded-full border border-primary/10 shadow-xl">
            <button
                onClick={() => setLocation('siwan')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${location === 'siwan' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:bg-primary/5'}`}
            >
                <MapPin className="h-3.5 w-3.5" />
                {t.siwan || "Siwan"}
            </button>
            <button
                onClick={() => setLocation('gopalganj')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${location === 'gopalganj' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:bg-primary/5'}`}
            >
                <MapPin className="h-3.5 w-3.5" />
                {t.gopalganj || "Gopalganj"}
            </button>
         </div>
      </div>

        <Card className="max-w-sm w-full shadow-2xl rounded-[2.5rem] border-white/20 bg-white/70 backdrop-blur-xl z-10 animate-fade-in-up overflow-hidden">
                <CardHeader className="text-center flex flex-col items-center gap-3 pt-10 pb-4">
                    <div className="flex flex-col items-center gap-2">
                      <div onClick={() => setIsAdminDialogOpen(true)} className="cursor-pointer hover:scale-110 transition-all duration-300 p-4 bg-primary/10 rounded-full shadow-inner">
                        <Logo size={48} />
                      </div>
                      <CardTitle className="text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
                          Hello Doctor
                      </CardTitle>
                      <div className="flex items-center gap-1.5 text-primary font-black bg-primary/10 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest border border-primary/5">
                         <MapPin className="h-3 w-3" />
                         {location === 'siwan' ? (t.siwan || 'Siwan') : (t.gopalganj || 'Gopalganj')}
                      </div>
                    </div>
                    <CardDescription className="text-sm font-medium text-slate-500 dark:text-slate-400 px-6 mt-2 leading-relaxed">
                        {t.subTitle || "Your Health Partner"}
                    </CardDescription>
                </CardHeader>
          <CardContent className="flex flex-col gap-5 px-8 pb-10">
            <div className="flex flex-col gap-3">
               <Button
                variant="outline"
                onClick={handleLogin}
                disabled={loading}
                className="w-full py-6 rounded-2xl text-xs font-bold border-slate-200 bg-white hover:bg-primary/5 hover:border-primary/20 transition-all shadow-sm"
              >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {!loading && <svg className="mr-3 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="#4285F4" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.2 172.9 56.7L368.7 128C330.5 94.5 292.2 78.2 248 78.2c-101.7 0-184.4 82.7-184.4 184.4S146.3 437 248 437c58.4 0 106.3-24.2 138.6-56.6 27.8-27.5 41.6-67.7 44-114.8H248v-85.3h236.1c2.3 12.7 3.9 26.9 3.9 41.8z"></path></svg>}
                {t.continueWithGoogle || "Continue with Google"}
              </Button>
              
              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-bold">
                    <span className="bg-white/80 px-3 text-slate-400 tracking-widest">{t.or || "OR"}</span>
                </div>
              </div>

                <div className="space-y-4">
                   <div className="relative group">
                     <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                     <Input
                        id="phone"
                        type="tel"
                        placeholder={t.phonePlaceholder || "Phone Number"}
                        className="py-7 rounded-2xl bg-white border-slate-200 focus:border-primary/50 text-center text-base font-bold shadow-inner pl-10"
                        required
                      />
                   </div>
                  <Button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full py-7 rounded-2xl text-base font-black shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                    {language === 'hi' ? 'जारी रखें' : language === 'bho' ? 'आगे बढ़ीं' : 'CONTINUE'}
                  </Button>
                </div>

               <Button
                asChild
                variant="ghost"
                className="w-full py-6 rounded-2xl text-xs font-black mt-2 text-primary hover:bg-primary/5 tracking-wider"
              >
                <Link href="/other-services">
                  <HeartPulse className="mr-2 h-4 w-4" />
                  {(t.otherServices || "Other Services").toUpperCase()}
                </Link>
              </Button>
            </div>
            <div className="text-center text-[10px] text-slate-400 mt-2 font-medium tracking-tight">
                <p>{t.signInPrompt || "Sign in to continue."}</p>
            </div>
          </CardContent>
        </Card>

        <Dialog open={isAdminDialogOpen} onOpenChange={setIsAdminDialogOpen}>
            <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-none shadow-2xl bg-white/95 backdrop-blur-md">
                <DialogHeader className="items-center pb-2">
                    <div className="p-4 bg-primary/10 rounded-full mb-3 shadow-inner">
                        <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <DialogTitle className="text-2xl font-black tracking-tighter">
                        {tAdmin?.title || "Admin"}
                    </DialogTitle>
                    <DialogDescription className="text-center font-medium">
                        {tAdmin?.enterPassword || "Enter Password"}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAdminLogin} className="space-y-5 py-4">
                    <Input
                        type="password"
                        placeholder={tAdmin?.passwordPlaceholder || "Password"}
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="rounded-2xl py-7 text-center text-xl tracking-[0.5em] border-slate-200 focus:border-primary font-bold shadow-inner"
                        autoFocus
                    />
                    <DialogFooter className="sm:justify-center">
                        <Button type="submit" className="w-full rounded-2xl py-7 font-black text-lg shadow-xl shadow-primary/20 tracking-widest">
                            {(tAdmin?.loginButton || "LOGIN").toUpperCase()}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>

        <p className="absolute bottom-8 text-primary/60 font-cursive text-2xl tracking-wide opacity-90">
            {t.createdBy || "By Hello Group"}
        </p>
    </div>
  );
}
