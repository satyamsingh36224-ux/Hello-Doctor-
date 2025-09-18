
"use client"

import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HospitalsPage() {
    const { translations } = useLanguage();
    const t = translations.hospitalsPage;

    const hospitals = [
        "सदर अस्पताल, गोपालगंज",
        "माँ शीतला इमरजेंसी अस्पताल",
        "प्रसाद अस्पताल",
        "आशीर्वाद अस्पताल",
        "गोपालगंज ऑर्थोपेडिक अस्पताल",
        "डॉ. नाज़िया एप्पल अस्पताल",
        "मंगलम अस्पताल",
        "शांति अस्पताल",
        "ग्लोबल अस्पताल",
        "डॉ. एच.पी. सिंह अस्पताल"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-muted/40">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Card className="shadow-lg rounded-2xl border-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <Hospital className="h-6 w-6 text-primary" />
                                {t.hospitalsTitle}
                            </CardTitle>
                            <CardDescription>{t.hospitalsDesc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {hospitals.map((hospital, index) => (
                                    <li key={index} className="flex items-center gap-3 p-4 bg-muted rounded-xl text-base font-medium text-muted-foreground">
                                        <Hospital className="h-5 w-5 text-primary/80 flex-shrink-0" />
                                        <span>{hospital}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
