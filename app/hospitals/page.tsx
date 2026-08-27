
"use client"

import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { hospitals as allHospitals } from "@/lib/hospitals";
import type { Hospital as HospitalType } from "@/lib/hospitals";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function HospitalCard({ hospital }: { hospital: HospitalType }) {
    const { language } = useLanguage();

    const createGoogleMapsUrl = (query: string) => {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    };

    return (
        <a 
            href={createGoogleMapsUrl(hospital.location)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 bg-card rounded-xl hover:bg-primary/10 transition-colors group border"
        >
            <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary"><Hospital className="h-6 w-6" /></div>
                <div className="flex-1">
                    <p className="text-base font-bold text-foreground group-hover:text-primary">
                        {hospital.name[language]}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-2">
                             <MapPin className="h-4 w-4" />
                             <span>{hospital.location}</span>
                        </div>
                        {hospital.phone && (
                            <div className="flex items-center gap-2 mt-1 sm:mt-0">
                                <Phone className="h-4 w-4" />
                                <span>{hospital.phone}</span>
                            </div>
                        )}
                    </div>
                </div>
                <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                    दिशा-निर्देश
                </Button>
            </div>
        </a>
    );
}


function HospitalsList() {
    const [hospitals, setHospitals] = useState<HospitalType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate network delay
        setTimeout(() => {
            setHospitals(allHospitals);
            setIsLoading(false);
        }, 300);
    }, []);

    if (isLoading) {
        return (
            <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 bg-card rounded-xl border">
                        <Skeleton className="h-12 w-12 rounded-lg" />
                        <div className="space-y-2 w-full">
                            <Skeleton className="h-5 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    
    return (
        <ul className="space-y-3">
            {hospitals && hospitals.length > 0 ? (
                hospitals.map((hospital) => (
                    <li key={hospital.id}>
                        <HospitalCard hospital={hospital} />
                    </li>
                ))
            ) : (
                <p className="text-center text-muted-foreground py-8">कोई अस्पताल नहीं मिला।</p>
            )}
        </ul>
    );
}

export default function HospitalsPage() {
    const { translations } = useLanguage();
    const t = translations.hospitalsPage;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Card className="shadow-lg rounded-2xl border-none mb-8">
                        <CardHeader className="text-center items-center">
                             <div className="p-4 bg-primary/10 rounded-full inline-block">
                                <Hospital className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-2xl pt-2">{t.hospitalsTitle}</CardTitle>
                            <CardDescription>{t.hospitalsDesc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <HospitalsList />
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
