
"use client"

import { Header } from "@/components/Header";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, UploadCloud, FileText, Globe, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function SettingsPage() {
    const { translations } = useLanguage();
    const t = translations.settingsPage;

    return (
        <div className="flex flex-col min-h-screen bg-muted/40">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">{t.settings}</h1>
                    <Card className="mb-6 shadow-sm border-border/50">
                        <CardHeader>
                            <CardTitle>{t.appearance}</CardTitle>
                            <CardDescription>{t.appearanceDesc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                                <p className="font-medium">{t.theme}</p>
                                <ThemeSwitcher />
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="mb-6 shadow-sm border-border/50">
                        <CardHeader>
                            <CardTitle>{t.helpAndSupport}</CardTitle>
                            <CardDescription>{t.helpAndSupportDesc}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">{t.customerService}</h4>
                                <div className="flex items-center gap-3 text-muted-foreground p-3 bg-muted rounded-lg">
                                    <Phone className="h-4 w-4 text-primary" />
                                    <a href="tel:9771264784" className="hover:text-primary">9771264784</a>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground mt-2 p-3 bg-muted rounded-lg">
                                    <Phone className="h-4 w-4 text-primary" />
                                    <a href="tel:9007355062" className="hover:text-primary">9007355062</a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <footer className="bg-transparent p-6 text-center text-muted-foreground text-sm">
                <p>Produced by Satyam Vikash Singh</p>
            </footer>
        </div>
    )
}
