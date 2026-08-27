
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { BriefcaseMedical, Pill, Hospital, TestTube, ChevronRight, Stethoscope, Store, HeartPulse } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OtherServicesPage() {
    const { translations } = useLanguage();
    const t = translations.otherServicesPage;

    const services = [
        {
            title: t.findDoctor,
            href: "/select-specialization",
            icon: Stethoscope,
            description: t.findDoctorDesc
        },
        {
            title: t.homeVisit,
            href: "/home-visit",
            icon: BriefcaseMedical,
            description: t.homeVisitDesc
        },
        {
            title: t.bookLabTest,
            href: "/lab-test",
            icon: TestTube,
            description: t.bookLabTestDesc
        },
        {
            title: t.tbTreatment,
            href: "/tb-free",
            icon: HeartPulse,
            description: t.tbTreatmentDesc
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-950 p-4">
            <Card className="w-full max-w-4xl shadow-xl rounded-2xl border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">{t.title}</CardTitle>
                    <CardDescription className="text-lg">{t.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service) => (
                            <Link href={service.href} key={service.href} className="block group">
                                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:bg-primary/5 dark:hover:bg-primary/10 border border-border hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1 h-full">
                                    <div className="p-4 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <service.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <p className="flex-1 text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                        {service.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
