
"use client";

import { Header } from "@/components/Header";
import { MedicalStoreCard } from "@/components/MedicalStoreCard";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store } from "lucide-react";
import { medicalStores } from "@/lib/medical-stores";

export default function MedicalStoresPage() {
    const { translations } = useLanguage();
    const medicalStoresData = medicalStores;
    const t = translations.medicalStoresPage;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <Card className="shadow-lg rounded-2xl border-none mb-8">
                    <CardHeader className="text-center items-center">
                        <div className="p-4 bg-primary/10 rounded-full inline-block">
                            <Store className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-2xl pt-2">{t.title}</CardTitle>
                        <CardDescription>{t.description}</CardDescription>
                    </CardHeader>
                </Card>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                    {medicalStoresData.map((store) => (
                        <MedicalStoreCard key={store.id} store={store} />
                    ))}
                </div>
            </main>
        </div>
    );
}
