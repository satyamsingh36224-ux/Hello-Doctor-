
"use client"

import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, LifeBuoy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SupportPage() {
    const { translations } = useLanguage();
    const t = translations.supportPage;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <LifeBuoy className="h-12 w-12 text-primary" />
                        </div>
                        <h1 className="text-4xl font-bold">{t.title}</h1>
                        <p className="text-muted-foreground mt-2">{t.description}</p>
                    </div>
                    
                    <div className="space-y-8">
                         <Card className="shadow-lg rounded-2xl border-none overflow-hidden">
                            <CardHeader className="bg-muted/50 p-6">
                                <CardTitle className="flex items-center gap-4 text-xl">
                                    <LifeBuoy className="h-6 w-6 text-primary" />
                                    <span>{t.title}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div>
                                    <h4 className="font-semibold mb-4 text-base">{t.customerService}</h4>
                                    <div className="space-y-3">
                                        <a href="tel:9771264784" className="flex items-center gap-4 p-4 bg-background rounded-xl hover:bg-primary/10 hover:text-primary transition-colors border">
                                            <div className="p-2 bg-primary/10 rounded-lg"><Phone className="h-5 w-5 text-primary" /></div>
                                            <span className="font-medium text-base">9771264784</span>
                                        </a>
                                        <a href="tel:9007355062" className="flex items-center gap-4 p-4 bg-background rounded-xl hover:bg-primary/10 hover:text-primary transition-colors border">
                                            <div className="p-2 bg-primary/10 rounded-lg"><Phone className="h-5 w-5 text-primary" /></div>
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
                <p className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                    Produced by Satyam Vikash Singh
                </p>
            </footer>
        </div>
    )
}
