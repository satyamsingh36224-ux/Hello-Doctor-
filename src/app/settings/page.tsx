
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
                    <Card className="shadow-sm border-border/50">
                        <CardHeader>
                            <CardTitle>{t.publishApp}</CardTitle>
                            <CardDescription>{t.publishAppDesc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <Button asChild variant="outline">
                                    <Link href="/DEPLOYMENT_GUIDE.md" target="_blank">
                                        <Globe className="mr-2 h-4 w-4" />
                                        वेबसाइट गाइड
                                    </Link>
                                </Button>
                                 <Button asChild variant="default">
                                    <Link href="/BUILD_APP.md" target="_blank">
                                        <Wrench className="mr-2 h-4 w-4" />
                                        ऐप फ़ाइल बनाएँ (गाइड)
                                    </Link>
                                </Button>
                            </div>
                             <p className="text-sm text-muted-foreground mb-4">
                                ऐप फ़ाइल बनाने के बाद, उसे Play Store पर डालने के लिए इन निर्देशों का पालन करें।
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Button asChild variant="outline">
                                    <Link href="/PUBLISHING_GUIDE.md" target="_blank">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Play Store गाइड
                                    </Link>
                                </Button>
                                <Button asChild className="w-full" variant="secondary">
                                    <a href="https://play.google.com/console/signup" target="_blank" rel="noopener noreferrer">
                                        <UploadCloud className="mr-2 h-4 w-4" />
                                        {t.goToPlayConsole}
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
