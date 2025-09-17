
"use client"

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MapPin, NotebookText, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export default function HomeVisitPage() {
    const { translations } = useLanguage();
    const t = translations.homeVisitPage;
    const { toast } = useToast();
    const [patientName, setPatientName] = useState('');
    const [address, setAddress] = useState('');
    const [problem, setProblem] = useState('');

    const handleRequestVisit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const clinicPhoneNumber = "9771264784";

        const message = `नमस्ते, मुझे डॉक्टर को घर पर दिखाने के लिए अनुरोध करना है।\n\n*मरीज का नाम:* ${patientName}\n*पता:* ${address}\n*समस्या का संक्षिप्त विवरण:*\n${problem}\n\nकृपया जल्द से जल्द संपर्क करें। धन्यवाद!`;
        
        const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(message)}`;

        toast({
            title: t.requestSentToast,
            description: t.requestSentToastDesc,
        });

        window.open(whatsappUrl, '_blank');

        setPatientName('');
        setAddress('');
        setProblem('');
    };

    return (
        <div className="flex flex-col min-h-screen bg-muted/40">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Card className="shadow-lg rounded-2xl border-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <BriefcaseMedical className="h-7 w-7 text-primary" />
                                {t.title}
                            </CardTitle>
                            <CardDescription>{t.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleRequestVisit} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            name="name"
                                            id="name"
                                            placeholder={t.patientNamePlaceholder}
                                            className="pl-10 rounded-full py-6"
                                            value={patientName}
                                            onChange={(e) => setPatientName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            name="address"
                                            id="address"
                                            placeholder={t.addressPlaceholder}
                                            className="pl-10 rounded-full py-6"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <NotebookText className="absolute left-3 top-5 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Textarea
                                            name="problem"
                                            id="problem"
                                            placeholder={t.problemPlaceholder}
                                            className="pl-10 rounded-2xl"
                                            rows={4}
                                            value={problem}
                                            onChange={(e) => setProblem(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full rounded-full py-6 text-lg font-bold">
                                    <MessageSquare className="mr-2 h-5 w-5" />
                                    {t.requestButton}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
