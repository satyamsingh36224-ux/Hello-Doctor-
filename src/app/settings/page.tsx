"use client";

import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone, Settings as SettingsIcon, Info, PhoneCall, ShieldCheck, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function SettingsPage() {
    const { translations } = useLanguage();
    const t = translations.settingsPage;

    const userData = {
        name: "SATYAM VIAKSH SINGH",
        phone: "7091472879"
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8 mb-10">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8 animate-fade-in-up">
                        <p className="text-2xl sm:text-3xl font-cursive text-primary font-extrabold tracking-wider drop-shadow-[0_2px_10px_rgba(14,165,233,0.3)] animate-pulse-slow">
                            NAMH PARVATI PATYE HAR HAR MAHADEV
                        </p>
                        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-2"></div>
                    </div>

                    <Card className="shadow-2xl rounded-[2.5rem] border-none overflow-hidden bg-white mb-6">
                        <CardHeader className="text-center items-center bg-primary/5 pb-8 pt-10">
                            <div className="p-5 bg-primary/10 rounded-full inline-block shadow-inner ring-4 ring-primary/5">
                                <SettingsIcon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-3xl font-extrabold pt-4 tracking-tight">{t.title}</CardTitle>
                            <CardDescription className="text-base">{t.profileInfo}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 px-6 pb-10">
                            <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
                                <div className="p-4 bg-white rounded-2xl shadow-sm">
                                    <User className="h-7 w-7 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{t.name}</span>
                                    <span className="text-xl font-bold text-slate-700 italic tracking-wide">
                                        {userData.name}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
                                <div className="p-4 bg-white rounded-2xl shadow-sm">
                                    <Phone className="h-7 w-7 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{t.phone}</span>
                                    <span className="text-lg font-bold font-mono tracking-tighter text-slate-700">{userData.phone}</span>
                                </div>
                            </div>

                            {/* Privacy Policy Link for Store Review */}
                            <Link href="/privacy-policy" className="flex items-center justify-between p-5 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-all hover:bg-primary/5 active:scale-95">
                                <div className="flex items-center gap-5">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm text-primary">
                                        <ShieldCheck className="h-7 w-7" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold text-slate-700">Privacy Policy</span>
                                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">गोपनीयता और डेटा सुरक्षा</span>
                                    </div>
                                </div>
                                <ChevronRight className="h-6 w-6 text-slate-300" />
                            </Link>
                            
                            <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/20 space-y-4 shadow-inner">
                                <div className="flex items-center gap-3 text-primary">
                                    <Info className="h-6 w-6" />
                                    <h3 className="text-lg font-black tracking-tight">{t.helplineTitle}</h3>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                    {t.bookingInfo}
                                </p>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-primary/10 shadow-sm">
                                    <PhoneCall className="h-6 w-6 text-primary" />
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