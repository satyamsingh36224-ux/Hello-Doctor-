
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { BriefcaseMedical, Pill, Hospital, TestTube, ChevronRight, Stethoscope } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OtherServicesPage() {
    const { translations } = useLanguage();
    const t = translations.otherServicesPage;

    const services = [
        {
            title: t.homeVisit,
            href: "/home-visit",
            icon: BriefcaseMedical,
        },
        {
            title: t.medicineDelivery,
            href: "/medicine",
            icon: Pill,
        },
        {
            title: t.findHospital,
            href: "/hospitals",
            icon: Hospital,
        },
        {
            title: t.bookLabTest,
            href: "/lab-test",
            icon: TestTube,
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-slate-900 dark:to-blue-950 p-4">
            <Card className="w-full max-w-2xl shadow-xl rounded-2xl border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">{t.title}</CardTitle>
                    <CardDescription>{t.description}</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="mb-6">
                        <Button asChild size="lg" className="w-full rounded-full py-7 text-base font-bold">
                           <Link href="/select-specialization">
                                <Stethoscope className="mr-2 h-5 w-5" />
                                {t.findDoctor}
                           </Link>
                        </Button>
                    </div>
                    <div className="space-y-4">
                        {services.map((service) => (
                            <Link href={service.href} key={service.href} className="block group">
                                <div className="flex items-center p-4 rounded-2xl bg-card hover:bg-primary/5 dark:hover:bg-primary/10 border border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-[1.02]">
                                    <div className="p-3 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <p className="flex-1 text-base font-medium text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </p>
                                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </div>
                     <div className="mt-8 text-center">
                        <Button asChild variant="outline" className="rounded-full">
                           <Link href="/">{t.backToLogin}</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
