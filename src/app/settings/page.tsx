
"use client"

import { Header } from "@/components/Header";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Palette, LifeBuoy, Hospital } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SettingsPage() {
    const { translations } = useLanguage();
    const t = translations.settingsPage;

    return (
        <div className="flex flex-col min-h-screen bg-muted/40">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8">{t.settings}</h1>
                    
                    <div className="space-y-8">
                        <Card className="shadow-lg rounded-2xl border-none">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Palette className="h-6 w-6 text-primary" />
                                    {t.appearance}
                                </CardTitle>
                                <CardDescription>{t.appearanceDesc}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                                    <p className="font-semibold text-base">{t.theme}</p>
                                    <ThemeSwitcher />
                                </div>
                            </CardContent>
                        </Card>

                         <Card className="shadow-lg rounded-2xl border-none">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <LifeBuoy className="h-6 w-6 text-primary" />
                                    {t.helpAndSupport}
                                </CardTitle>
                                <CardDescription>{t.helpAndSupportDesc}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-3 text-base">{t.customerService}</h4>
                                    <div className="space-y-3">
                                        <a href="tel:9771264784" className="flex items-center gap-4 text-muted-foreground p-4 bg-muted rounded-xl hover:bg-primary/10 hover:text-primary transition-colors">
                                            <Phone className="h-5 w-5" />
                                            <span className="font-medium text-base">9771264784</span>
                                        </a>
                                        <a href="tel:9007355062" className="flex items-center gap-4 text-muted-foreground p-4 bg-muted rounded-xl hover:bg-primary/10 hover:text-primary transition-colors">
                                            <Phone className="h-5 w-5" />
                                            <span className="font-medium text-base">9007355062</span>
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <footer className="bg-transparent p-6 text-center text-muted-foreground text-sm">
                <p>Produced by Satyam Vikash Singh</p>
            </footer>
        </div>
    )
}
