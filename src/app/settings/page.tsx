"use client";

import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone, Settings as SettingsIcon, Info, PhoneCall, ShieldCheck, ChevronRight, FileText, HelpCircle, Mail, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
            <main className="flex-1 container mx-auto px-4 py-8 mb-24">
                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="text-center mb-8 animate-fade-in-up">
                        <p className="text-2xl sm:text-3xl font-cursive text-primary font-extrabold tracking-wider drop-shadow-[0_2px_10px_rgba(14,165,233,0.3)] animate-pulse-slow">
                            NAMH PARVATI PATYE HAR HAR MAHADEV
                        </p>
                        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-2"></div>
                    </div>

                    <Card className="shadow-2xl rounded-[2.5rem] border-none overflow-hidden bg-white">
                        <CardHeader className="text-center items-center bg-primary/5 pb-8 pt-10">
                            <div className="p-5 bg-primary/10 rounded-full inline-block shadow-inner ring-4 ring-primary/5">
                                <SettingsIcon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-3xl font-extrabold pt-4 tracking-tight">{t.title}</CardTitle>
                            <CardDescription className="text-base font-bold text-slate-400">{t.profileInfo}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 px-6 pb-10 pt-6">
                            <div className="grid gap-3">
                                <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm text-primary"><User className="h-6 w-6" /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t.name}</span>
                                        <span className="text-lg font-black text-slate-700 italic">{userData.name}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm text-primary"><Phone className="h-6 w-6" /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t.phone}</span>
                                        <span className="text-lg font-black font-mono text-slate-700 tracking-tighter">{userData.phone}</span>
                                    </div>
                                </div>
                            </div>

                            <Separator className="my-6" />

                            <div className="grid gap-2">
                                <Link href="/support" className="flex items-center justify-between p-5 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-primary/5 active:scale-95">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-primary"><HelpCircle className="h-5 w-5" /></div>
                                        <span className="font-bold text-slate-700">Help & Support</span>
                                    </div>
                                    <ChevronRight className="h-5 w-5 text-slate-300" />
                                </Link>
                                <Link href="/privacy-policy" className="flex items-center justify-between p-5 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-primary/5 active:scale-95">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-primary"><ShieldCheck className="h-5 w-5" /></div>
                                        <span className="font-bold text-slate-700">Privacy Policy</span>
                                    </div>
                                    <ChevronRight className="h-5 w-5 text-slate-300" />
                                </Link>
                                <Link href="/terms-of-service" className="flex items-center justify-between p-5 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-primary/5 active:scale-95">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-primary"><FileText className="h-5 w-5" /></div>
                                        <span className="font-bold text-slate-700">Terms of Service</span>
                                    </div>
                                    <ChevronRight className="h-5 w-5 text-slate-300" />
                                </Link>
                            </div>

                            {/* Developer Info Section */}
                            <div className="mt-8 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] text-white space-y-6 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <ExternalLink className="h-20 w-20" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80">Developer Profile</p>
                                    <h3 className="text-2xl font-black italic tracking-tight">{t.developerName}</h3>
                                </div>
                                <div className="grid gap-4">
                                    <a href="mailto:satyamsingh36224@gmail.com" className="flex items-center gap-4 group">
                                        <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-primary/20 transition-colors"><Mail className="h-5 w-5" /></div>
                                        <span className="font-bold text-slate-300 group-hover:text-white transition-colors">satyamsingh36224@gmail.com</span>
                                    </a>
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/10 rounded-2xl"><MapPin className="h-5 w-5" /></div>
                                        <span className="font-bold text-slate-300 italic">Gopalganj, Bihar, India</span>
                                    </div>
                                </div>
                                <Badge className="bg-primary text-white border-none rounded-full px-6 py-1.5 font-black uppercase text-[10px] tracking-widest shadow-lg shadow-primary/20">
                                    Approved Provider
                                </Badge>
                            </div>
                            
                            <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/20 space-y-4 shadow-inner mt-4">
                                <div className="flex items-center gap-3 text-primary">
                                    <PhoneCall className="h-6 w-6" />
                                    <h3 className="text-lg font-black tracking-tight">{t.helplineTitle}</h3>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed font-bold italic">
                                    {t.bookingInfo}
                                </p>
                                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-primary/10 shadow-md">
                                    <span className="text-xl font-black text-primary tracking-widest">
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
