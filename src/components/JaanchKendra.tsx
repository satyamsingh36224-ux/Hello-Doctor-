
"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { User, Phone, TestTube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

export function JaanchKendra() {
    const { toast } = useToast();
    const [patientName, setPatientName] = useState('');
    const [patientPhone, setPatientPhone] = useState('');
    const [testName, setTestName] = useState('');
    const { translations } = useLanguage();
    const t = translations.jaanchKendra;

    const handleTestRequest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const clinicPhoneNumber = "9771264784";

        const message = `नमस्ते, मुझे एक जांच करवानी है।\n\n*मरीज का नाम:* ${patientName}\n*फ़ोन नंबर:* ${patientPhone}\n*जांच का नाम:* ${testName}\n\nकृपया बुकिंग के लिए संपर्क करें। धन्यवाद!`;
        
        const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(message)}`;

        toast({
            title: t.requestSentToast,
            description: t.requestSentToastDesc,
        });

        window.open(whatsappUrl, '_blank');

        setPatientName('');
        setPatientPhone('');
        setTestName('');
    };

    return (
        <Card className="shadow-lg rounded-xl h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <TestTube className="h-6 w-6 text-primary" />
                    {t.title}
                </CardTitle>
                <CardDescription>
                    {t.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleTestRequest}>
                    <div className="grid gap-4">
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input name="name" id="name" placeholder={t.patientNamePlaceholder} className="pl-10" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
                        </div>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input name="phone" id="phone" type="tel" placeholder={t.phonePlaceholder} className="pl-10" value={patientPhone} onChange={(e) => setPatientPhone(e.target.value)} required />
                        </div>
                        <div className="relative">
                            <TestTube className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input name="test" id="test" placeholder={t.testNamePlaceholder} className="pl-10" value={testName} onChange={(e) => setTestName(e.target.value)} required />
                        </div>
                        <Button type="submit" className="w-full">
                            {t.requestButton}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
