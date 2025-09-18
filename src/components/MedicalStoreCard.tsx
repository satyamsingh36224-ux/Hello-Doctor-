
"use client";

import Image from "next/image";
import { MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { MedicalStore } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface MedicalStoreCardProps {
  store: MedicalStore;
}

const isEmoji = (str: string) => {
    const emojiRegex = /[\u{1F3E5}-\u{1F3EA}\u{1F698}]/u;
    return emojiRegex.test(str);
};

export function MedicalStoreCard({ store }: MedicalStoreCardProps) {
  const { toast } = useToast();
  const { language, translations } = useLanguage();
  const t = translations.medicinePage;

  const handleOrder = () => {
    const message = `नमस्ते, मुझे कुछ दवाओं का ऑर्डर देना है।`;
    const whatsappUrl = `https://wa.me/${store.phone}?text=${encodeURIComponent(message)}`;

    toast({
      title: t.orderToast,
      description: t.orderToastDesc,
    });

    window.open(whatsappUrl, '_blank');
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.location)}`;

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl border-border/50 bg-card">
        <div className="flex items-center p-4 gap-4 w-full">
            <div className="relative h-24 w-24 flex-shrink-0">
                {isEmoji(store.imageUrl) ? (
                    <div className="flex items-center justify-center h-full w-full bg-secondary rounded-2xl">
                        <span className="text-5xl">{store.imageUrl}</span>
                    </div>
                ) : (
                    <Image
                        src={store.imageUrl}
                        alt={store.name[language]}
                        fill
                        className="rounded-2xl object-cover"
                        data-ai-hint={store.aiHint}
                    />
                )}
            </div>
            <div className="flex-grow">
                <CardTitle className="text-lg font-bold">{store.name[language]}</CardTitle>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground mt-1 hover:text-primary transition-colors">
                    <MapPin className="h-4 w-4" />
                    <span>{store.location}</span>
                </a>
                <div className="mt-3 flex gap-2">
                    <Button onClick={handleOrder} className="rounded-full flex-1">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        {t.orderOnWhatsApp}
                    </Button>
                     <Button asChild variant="outline" className="rounded-full flex-1">
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">{t.getDirections}</a>
                    </Button>
                </div>
            </div>
        </div>
    </Card>
  );
}
