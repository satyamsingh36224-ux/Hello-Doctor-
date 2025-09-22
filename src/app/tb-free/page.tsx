
"use client"

import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TbFreePage() {
    const { translations } = useLanguage();
    const t = translations.tbFreePage;

    const tbCenter = { name: "जिला यक्ष्मा केंद्र, गोपालगंज", location: "सदर अस्पताल परिसर, गोपालगंज, बिहार" };

    const createGoogleMapsUrl = (query: string) => {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Card className="shadow-lg rounded-2xl border-none">
                        <CardHeader className="text-center items-center">
                             <div className="p-4 bg-primary/10 rounded-full inline-block">
                                <HeartPulse className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-2xl pt-2">{t.title}</CardTitle>
                            <CardDescription className="px-4">{t.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <div className="text-center bg-muted p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-foreground mb-2">{t.centerTitle}</h3>
                                <a 
                                    href={createGoogleMapsUrl(tbCenter.location)} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block p-4 bg-background rounded-xl hover:bg-primary/10 transition-colors group"
                                >
                                    <div className="flex items-center justify-center gap-3 text-base font-medium text-foreground group-hover:text-primary">
                                        <span>{tbCenter.name}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>{tbCenter.location}</span>
                                    </div>
                                </a>
                                <p className="text-sm text-muted-foreground mt-4">{t.footerNote}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
