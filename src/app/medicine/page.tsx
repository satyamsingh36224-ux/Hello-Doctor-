
"use client"

import { Header } from "@/components/Header";
import { MedicalStoreCard } from "@/components/MedicalStoreCard";
import { medicalStoresData } from "@/lib/medical-stores";
import { useLanguage } from "@/context/LanguageContext";
import { Pill } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function MedicinePage() {
    const { translations } = useLanguage();
    const t = translations.medicinePage;

    return (
        <div className="flex flex-col min-h-screen bg-muted/40">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <Card className="shadow-lg rounded-2xl border-none">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <Pill className="h-7 w-7 text-primary" />
                            {t.title}
                        </CardTitle>
                        <CardDescription>{t.descriptionList}</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {medicalStoresData.map((store) => (
                                <MedicalStoreCard key={store.id} store={store} />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
