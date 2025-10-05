
"use client"

import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HospitalsPage() {
    const { translations } = useLanguage();
    const t = translations.hospitalsPage;

    const hospitals = [
        { name: "सदर अस्पताल, सीवान", location: "Sadar Hospital, Siwan, Bihar" },
        { name: "आर्यन मल्टीस्पेशलिटी अस्पताल", location: "Aryan Multispeciality Hospital, Siwan, Bihar" },
        { name: "इम्पैक्ट हॉस्पिटल एंड रिसर्च सेंटर", location: "Impact Hospital & Research Centre, Siwan, Bihar" },
        // These are examples. The user can change them from the admin panel if hospitals are moved to Firestore.
        // For now, it's a static list.
        { name: "डॉ. पी.के. सिंह आरोग्य अस्पताल", location: "Dr. P.K. Singh Arogya Hospital, Siwan, Bihar" },
        { name: "माँ कलावती अस्पताल", location: "Maa Kalawati Hospital, Siwan, Bihar" },
        { name: "जीवन रक्षक अस्पताल", location: "Jeevan Rakshak Hospital, Siwan, Bihar" },
        { name: "आशीर्वाद नर्सिंग होम", location: "Aashirwad Nursing Home, Siwan, Bihar" },
    ];

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
                                <Hospital className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-2xl pt-2">{t.hospitalsTitle}</CardTitle>
                            <CardDescription>{t.hospitalsDesc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {hospitals.map((hospital, index) => (
                                    <li key={index}>
                                        <a 
                                            href={createGoogleMapsUrl(hospital.location)} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="block p-4 bg-muted rounded-xl hover:bg-primary/10 transition-colors group"
                                        >
                                            <div className="flex items-center gap-3 text-base font-medium text-foreground group-hover:text-primary">
                                                <div className="p-2 bg-primary/10 rounded-lg text-primary"><Hospital className="h-5 w-5" /></div>
                                                <span>{hospital.name}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1 pl-12">
                                                 <MapPin className="h-4 w-4" />
                                                 <span>{hospital.location.split(',')[0]}</span>
                                            </div>
                                        </a>
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
