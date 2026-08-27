"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageSquare, LifeBuoy, Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export default function SupportPage() {
    const { translations } = useLanguage();
    const t = translations.supportPage;
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate sending a support request
        setTimeout(() => {
            setLoading(false);
            toast({
                title: "संदेश भेज दिया गया!",
                description: "हमारी टीम आपसे जल्द ही संपर्क करेगी।",
            });
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="text-center space-y-2 animate-fade-in-up">
                        <div className="p-4 bg-primary/10 rounded-full inline-block mb-2">
                            <LifeBuoy className="h-10 w-10 text-primary" />
                        </div>
                        <h1 className="text-3xl font-black tracking-tight">{t.title}</h1>
                        <p className="text-muted-foreground">{t.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="shadow-xl rounded-3xl border-none">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">संपर्क सूत्र</CardTitle>
                                <CardDescription>हमसे सीधे बात करें</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <a href="tel:9771264784" className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border hover:bg-primary/5 transition-all group">
                                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:text-primary"><Phone className="h-5 w-5" /></div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-slate-400">कॉल करें</p>
                                        <p className="font-bold">9771264784</p>
                                    </div>
                                </a>
                                <a href="mailto:satyamsingh36224@gmail.com" className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border hover:bg-primary/5 transition-all group">
                                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:text-primary"><Mail className="h-5 w-5" /></div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-slate-400">ईमेल भेजें</p>
                                        <p className="font-bold text-sm truncate">satyamsingh36224@gmail.com</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border">
                                    <div className="p-3 bg-white rounded-xl shadow-sm"><MessageSquare className="h-5 w-5" /></div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-slate-400">व्हाट्सएप</p>
                                        <p className="font-bold">9771264784</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl rounded-3xl border-none">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">मैसेज भेजें</CardTitle>
                                <CardDescription>अपनी समस्या यहाँ लिखें</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <Input placeholder="आपका नाम" required className="rounded-xl" />
                                    <Input placeholder="ईमेल या फोन नंबर" required className="rounded-xl" />
                                    <Textarea placeholder="आपकी समस्या या सुझाव..." rows={4} required className="rounded-xl" />
                                    <Button type="submit" disabled={loading} className="w-full rounded-full py-6 font-bold shadow-lg shadow-primary/20">
                                        {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
                                        मैसेज भेजें
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
