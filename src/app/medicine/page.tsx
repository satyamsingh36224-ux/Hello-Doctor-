
"use client"

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MapPin, MessageSquare, Phone, UploadCloud, Pill } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Label } from '@/components/ui/label';

export default function MedicinePage() {
    const { translations } = useLanguage();
    const t = translations.medicinePage;
    const { toast } = useToast();
    const [patientName, setPatientName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName('');
        }
    };

    const handleOrderRequest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const clinicPhoneNumber = "9771264784";

        const message = `नमस्ते, मुझे दवाओं की होम डिलीवरी चाहिए।\n\n*मरीज का नाम:* ${patientName}\n*पता:* ${address}\n*फ़ोन नंबर:* ${phone}\n\nमैं डॉक्टर का पर्चा व्हाट्सएप पर भेज रहा/रही हूँ।\n\nकृपया जल्द से जल्द संपर्क करें। धन्यवाद!`;
        
        const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(message)}`;

        toast({
            title: t.orderSentToast,
            description: t.orderSentToastDesc,
        });

        window.open(whatsappUrl, '_blank');

        setPatientName('');
        setAddress('');
        setPhone('');
        setFileName('');
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
                            <CardDescription>{t.descriptionForm}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleOrderRequest} className="space-y-6">
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
                                        <Label htmlFor="prescription" className="cursor-pointer w-full inline-flex items-center justify-center rounded-full border-2 border-dashed border-primary/50 bg-primary/5 hover:bg-primary/10 px-4 py-4 text-sm font-semibold text-primary transition-all">
                                             <UploadCloud className="mr-2 h-5 w-5" />
                                            {fileName || t.uploadButton}
                                        </Label>
                                        <Input id="prescription" type="file" className="sr-only" onChange={handleFileChange} accept="image/*,.pdf" />
                                        <p className="text-xs text-center text-muted-foreground mt-2">{t.uploadHint}</p>
                                    </div>
                                </div>
                                <Button type="submit" className="w-full rounded-full py-6 text-lg font-bold">
                                    <MessageSquare className="mr-2 h-5 w-5" />
                                    {t.orderButton}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
