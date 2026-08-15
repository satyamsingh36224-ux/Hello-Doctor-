
"use client";

import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone, Settings as SettingsIcon, Info, PhoneCall } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
    const { translations } = useLanguage();
    const t = translations.settingsPage;

    // Requested User Data
    const userData = {
        name: "SATYAM VIAKSH SINGH",
        phone: "7091472879"
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    {/* Devotional Header - NAMH PARVATI PATYE HAR HAR MAHADEV */}
                    <div className="text-center mb-8 animate-fade-in-up">
                        <p className="text-2xl sm:text-3xl font-cursive text-primary font-extrabold tracking-wider drop-shadow-[0_2px_10px_rgba(14,165,233,0.3)] animate-pulse-slow">
                            NAMH PARVATI PATYE HAR HAR MAHADEV
                        </p>
                        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-2"></div>
                    </div>

                    <Card className="shadow-2xl rounded-[2.5rem] border-none overflow-hidden bg-white/90 backdrop-blur-md">
                        <CardHeader className="text-center items-center bg-gradient-to-b from-primary/5 to-transparent pb-8 pt-10">
                            <div className="p-5 bg-primary/10 rounded-full inline-block shadow-inner ring-4 ring-primary/5">
                                <SettingsIcon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-3xl font-extrabold pt-4 tracking-tight">{t.title}</CardTitle>
                            <CardDescription className="text-base">{t.profileInfo}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8 px-6 pb-10">
                            <div className="flex items-center gap-5 p-5 bg-white rounded-3xl border border-primary/10 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                                <div className="p-4 bg-primary/10 rounded-2xl shadow-sm">
                                    <User className="h-7 w-7 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{t.name}</span>
                                    <span className="text-2xl font-cursive text-primary font-bold italic tracking-wide">
                                        {userData.name}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 p-5 bg-white rounded-3xl border border-primary/10 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                                <div className="p-4 bg-primary/10 rounded-2xl shadow-sm">
                                    <Phone className="h-7 w-7 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{t.phone}</span>
                                    <span className="text-xl font-bold font-mono tracking-tighter text-slate-700">{userData.phone}</span>
                                </div>
                            </div>
                            
                            <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/20 space-y-4 shadow-inner relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Info className="h-20 w-20 text-primary" />
                                </div>
                                <div className="flex items-center gap-3 text-primary relative z-10">
                                    <Info className="h-6 w-6" />
                                    <h3 className="text-lg font-black tracking-tight">{t.helplineTitle}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium relative z-10">
                                    {t.bookingInfo}
                                </p>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-primary/10 shadow-sm group relative z-10">
                                    <PhoneCall className="h-6 w-6 text-primary group-hover:animate-bounce" />
                                    <span className="text-lg font-black text-primary tracking-widest">
                                        {t.helplineNumbers}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}

