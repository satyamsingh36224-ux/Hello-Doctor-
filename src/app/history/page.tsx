
"use client";

import { Header } from "@/components/Header";
import { AppointmentHistory } from "@/components/AppointmentHistory";
import { useLanguage } from "@/context/LanguageContext";

export default function HistoryPage() {
    const { translations } = useLanguage();
    const t = translations.doctorsPage;
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <AppointmentHistory />
                </div>
            </main>
             <footer className="bg-transparent p-6 text-center text-muted-foreground text-sm">
                <p>&copy; 2025 Hello Doctor. All rights reserved.</p>
            </footer>
        </div>
    )
}
