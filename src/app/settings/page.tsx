
"use client"

import { Header } from "@/components/Header";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, UploadCloud } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SettingsPage() {
    const { translations } = useLanguage();
    const t = translations.settingsPage;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">{t.settings}</h1>
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>{t.appearance}</CardTitle>
                            <CardDescription>{t.appearanceDesc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">{t.theme}</p>
                                <ThemeSwitcher />
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>{t.helpAndSupport}</CardTitle>
                            <CardDescription>{t.helpAndSupportDesc}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">{t.customerService}</h4>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Phone className="h-4 w-4 text-primary" />
                                    <a href="tel:9771264784" className="hover:text-primary">9771264784</a>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground mt-2">
                                    <Phone className="h-4 w-4 text-primary" />
                                    <a href="tel:9007355062" className="hover:text-primary">9007355062</a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>{t.publishApp}</CardTitle>
                            <CardDescription>{t.publishAppDesc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                                {t.publishAppDetails}
                            </p>
                            <Button asChild className="w-full">
                                <a href="https://play.google.com/console/signup" target="_blank" rel="noopener noreferrer">
                                    <UploadCloud className="mr-2 h-4 w-4" />
                                    {t.goToPlayConsole}
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
