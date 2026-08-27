
"use client"

import { useState, useEffect, useRef } from 'react';
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MessageSquare, Phone, HeartPulse, NotebookText, MapPin, Mic, MicOff } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

// SpeechRecognition type might not be in standard lib
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function TbFreePage() {
    const { translations, language } = useLanguage();
    const t = translations.tbFreePage;
    const { toast } = useToast();
    const [patientName, setPatientName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [problem, setProblem] = useState('');
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.log("Speech Recognition not supported.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = language === 'en' ? 'en-US' : 'hi-IN';

        recognition.onresult = (event: any) => {
            let interimTranscript = '';
            let finalTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
             setProblem(prev => prev + finalTranscript);
        };

        recognition.onend = () => {
            setIsListening(false);
        };
        
        recognition.onerror = (event: any) => {
            console.error("Speech recognition error", event.error);
            setIsListening(false);
        };

        recognitionRef.current = recognition;

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language]);
    
    const toggleListening = () => {
        if (!recognitionRef.current) {
             toast({
                title: "माफ़ कीजिए",
                description: "आपका ब्राउज़र वॉयस इनपुट को सपोर्ट नहीं करता है।",
                variant: "destructive"
            });
            return;
        }
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
        }
        setIsListening(!isListening);
    };

    const handleRequest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const clinicPhoneNumber = "9771264784";

        const message = `नमस्ते, मुझे टीबी के इलाज के संबंध में घर पर सहायता चाहिए।\n\n*मरीज का नाम:* ${patientName}\n*पता:* ${address}\n*फ़ोन नंबर:* ${phone}\n*समस्या का संक्षिप्त विवरण:*\n${problem}\n\nकृपया जल्द से जल्द संपर्क करें। धन्यवाद!`;
        
        const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(message)}`;

        toast({
            title: t.requestSentToast,
            description: t.requestSentToastDesc,
        });

        window.open(whatsappUrl, '_blank');

        setPatientName('');
        setPhone('');
        setAddress('');
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
                                        <NotebookText className="absolute left-3 top-5 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Textarea
                                            name="problem"
                                            id="problem"
                                            placeholder={t.problemPlaceholder}
                                            className="pl-10 rounded-2xl pr-12"
                                            rows={4}
                                            value={problem}
                                            onChange={(e) => setProblem(e.target.value)}
                                            required
                                        />
                                        <Button 
                                            type="button" 
                                            variant="ghost" 
                                            size="icon" 
                                            onClick={toggleListening}
                                            className={`absolute right-2 top-3 h-8 w-8 rounded-full ${isListening ? 'bg-red-500/20 text-red-500' : 'text-muted-foreground'}`}
                                            aria-label="बोलकर बताएं"
                                        >
                                            {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                                        </Button>
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
    )
}
