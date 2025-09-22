
"use client"

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MessageSquare, Phone, HeartPulse, NotebookText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export default function TbFreePage() {
    const { translations } = useLanguage();
    const t = translations.tbFreePage;
    const { toast } = useToast();
    const [patientName, setPatientName] = useState('');
    const [phone, setPhone] = useState('');
    const [problem, setProblem] = useState('');

    const handleRequest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const clinicPhoneNumber = "9771264784";

        const message = `नमस्ते, मुझे टीबी के इलाज के संबंध में जानकारी चाहिए।\n\n*मरीज का नाम:* ${patientName}\n*फ़ोन नंबर:* ${phone}\n*समस्या का संक्षिप्त विवरण:*\n${problem}\n\nकृपया जल्द से जल्द संपर्क करें। धन्यवाद!`;
        
        const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(message)}`;

        toast({
            title: t.requestSentToast,
            description: t.requestSentToastDesc,
        });

        window.open(whatsappUrl, '_blank');

        setPatientName('');
        setPhone('');
        setProblem('');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Card className="shadow-lg rounded-2xl border-none">
                        <CardHeader className="text-center items-center">
                             <div className="p-4 bg-primary/10 rounded-full inline-block">
                                <HeartPulse className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-2xl pt-2">{t.title}</CardTitle>
                            <CardDescription className="px-4">{t.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleRequest} className="space-y-6">
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
                             <p className="text-sm text-center text-muted-foreground mt-4">{t.footerNote}</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
