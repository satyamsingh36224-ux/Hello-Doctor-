
"use client"

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, MessageSquare, Phone, TestTube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export default function LabTestPage() {
    const { translations } = useLanguage();
    const t = translations.labTestPage;
    const { toast } = useToast();
    const [patientName, setPatientName] = useState('');
    const [phone, setPhone] = useState('');
    const [testName, setTestName] = useState('');

    const handleRequestTest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const clinicPhoneNumber = "9771264784";

        const message = `नमस्ते, मुझे एक लैब टेस्ट करवाना है।\n\n*मरीज का नाम:* ${patientName}\n*फ़ोन नंबर:* ${phone}\n*जांच का नाम:*\n${testName}\n\nकृपया बुकिंग के लिए जल्द से जल्द संपर्क करें। धन्यवाद!`;
        
        const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(message)}`;

        toast({
            title: t.requestSentToast,
            description: t.requestSentToastDesc,
        });

        window.open(whatsappUrl, '_blank');

        setPatientName('');
        setPhone('');
        setTestName('');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Card className="shadow-lg rounded-2xl border-none">
                        <CardHeader className="text-center items-center">
                            <div className="p-4 bg-primary/10 rounded-full inline-block">
                                <TestTube className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-2xl pt-2">{t.title}</CardTitle>
                            <CardDescription>{t.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleRequestTest} className="space-y-6">
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
                                        <TestTube className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            name="test"
                                            id="test"
                                            placeholder={t.testNamePlaceholder}
                                            className="pl-10 rounded-full py-6"
                                            value={testName}
                                            onChange={(e) => setTestName(e.target.value)}
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
