
"use client"

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, NotebookText, MessageSquare, Phone, Pill } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export default function MedicinePage() {
    const { translations } = useLanguage();
    const t = translations.medicinePage;
    const { toast } = useToast();
    const [patientName, setPatientName] = useState('');
    const [phone, setPhone] = useState('');
    const [medicines, setMedicines] = useState('');

    const handleRequestMedicine = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const clinicPhoneNumber = "9771264784";

        const message = `नमस्ते, मुझे कुछ दवाओं की ज़रूरत है।\n\n*मरीज का नाम:* ${patientName}\n*फ़ोन नंबर:* ${phone}\n*दवाओं की सूची/पर्चा:*\n${medicines}\n\nकृपया डिलीवरी के लिए संपर्क करें। धन्यवाद!`;
        
        const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(message)}`;

        toast({
            title: t.requestSentToast,
            description: t.requestSentToastDesc,
        });

        window.open(whatsappUrl, '_blank');

        setPatientName('');
        setPhone('');
        setMedicines('');
    };

    return (
        <div className="flex flex-col min-h-screen bg-muted/40">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Card className="shadow-lg rounded-2xl border-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Pill className="h-7 w-7 text-primary" />
                                {t.title}
                            </CardTitle>
                            <CardDescription>{t.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleRequestMedicine} className="space-y-6">
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
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            name="phone"
                                            id="phone"
                                            type="tel"
                                            placeholder={t.phonePlaceholder}
                                            className="pl-10 rounded-full py-6"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <NotebookText className="absolute left-3 top-5 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Textarea
                                            name="medicines"
                                            id="medicines"
                                            placeholder={t.medicinesPlaceholder}
                                            className="pl-10 rounded-2xl"
                                            rows={4}
                                            value={medicines}
                                            onChange={(e) => setMedicines(e.target.value)}
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
