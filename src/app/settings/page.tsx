
"use client";

import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone, Settings as SettingsIcon } from "lucide-react";
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
                    <Card className="shadow-lg rounded-2xl border-none">
                        <CardHeader className="text-center items-center">
                            <div className="p-4 bg-primary/10 rounded-full inline-block">
                                <SettingsIcon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-2xl pt-2">{t.title}</CardTitle>
                            <CardDescription>{t.profileInfo}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-2xl border">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-muted-foreground">{t.name}</span>
                                    <span className="text-lg font-bold">{userData.name}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-2xl border">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-muted-foreground">{t.phone}</span>
                                    <span className="text-lg font-bold">{userData.phone}</span>
                                </div>
                            </div>
                            
                            <Separator />
                            
                            <div className="text-center text-sm text-muted-foreground">
                                <p>© 2024 Hello Doctor - All Rights Reserved</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
