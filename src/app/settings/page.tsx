
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
                    <Card className="shadow-lg rounded-3xl border-none overflow-hidden bg-white/90 backdrop-blur-md">
                        <CardHeader className="text-center items-center bg-gradient-to-b from-primary/5 to-transparent pb-8 pt-10">
                            <div className="p-5 bg-primary/10 rounded-full inline-block shadow-inner ring-4 ring-primary/5">
                                <SettingsIcon className="h-12 w-12 text-primary animate-spin-slow" />
                            </div>
                            <CardTitle className="text-3xl font-extrabold pt-4 tracking-tight">{t.title}</CardTitle>
                            <CardDescription className="text-base">{t.profileInfo}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8 px-6 pb-10">
                            <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-primary/10 shadow-sm transition-transform hover:scale-[1.02]">
                                <div className="p-4 bg-primary/10 rounded-2xl shadow-sm">
                                    <User className="h-7 w-7 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t.name}</span>
                                    <span className="text-2xl font-cursive text-primary font-bold italic tracking-wide">
                                        {userData.name}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-primary/10 shadow-sm transition-transform hover:scale-[1.02]">
                                <div className="p-4 bg-primary/10 rounded-2xl shadow-sm">
                                    <Phone className="h-7 w-7 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t.phone}</span>
                                    <span className="text-xl font-bold font-mono tracking-tighter">{userData.phone}</span>
                                </div>
                            </div>
                            
                            <div className="p-6 bg-primary/5 rounded-3xl border border-primary/20 space-y-4 shadow-inner">
                                <div className="flex items-center gap-3 text-primary">
                                    <Info className="h-6 w-6" />
                                    <h3 className="text-lg font-bold">{t.helplineTitle}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                    {t.bookingInfo}
                                </p>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/10 shadow-sm group">
                                    <PhoneCall className="h-6 w-6 text-primary group-hover:animate-bounce" />
                                    <span className="text-lg font-black text-primary tracking-widest">
                                        {t.helplineNumbers}
                                    </span>
                                </div>
                            </div>
                            
                            <Separator className="opacity-50" />
                            
                            <div className="text-center text-xs text-muted-foreground/60 font-medium">
                                <p>© 2024 Hello Doctor - All Rights Reserved</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
