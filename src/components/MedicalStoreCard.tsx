
"use client";

import * as React from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { MedicalStore } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface MedicalStoreCardProps {
  store: MedicalStore;
}

const isEmoji = (str: string) => {
    const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
    return emojiRegex.test(str);
};

export function MedicalStoreCard({ store }: MedicalStoreCardProps) {
  const { language, translations } = useLanguage();
  const t = translations.medicalStoresPage;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.location)}`;
  const telUrl = `tel:${store.phone}`;

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl border-border/50 bg-card group">
        <div className="flex flex-col md:flex-row items-center p-4 gap-4 w-full">
            <div className="relative h-32 w-32 flex-shrink-0">
                {isEmoji(store.imageUrl) ? (
                    <div className="flex items-center justify-center h-full w-full bg-secondary rounded-2xl ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300">
                        <span className="text-6xl">{store.imageUrl}</span>
                    </div>
                ) : (
                    <Image
                        src={store.imageUrl}
                        alt={store.name[language]}
                        fill
                        className="rounded-2xl object-cover ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300"
                        data-ai-hint={store.aiHint}
                    />
                )}
            </div>
            <div className="flex-grow w-full text-left">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{store.name[language]}</h3>
                
                <p className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                    <MapPin className="h-4 w-4" />
                    <span>{store.location}</span>
                </p>

                 <p className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                    <Phone className="h-4 w-4" />
                    <span>{store.phone}</span>
                </p>

                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <Button asChild className="rounded-full flex-1" variant="outline">
                        <a href={telUrl}>
                            <Phone className="mr-2 h-4 w-4" />
                            {t.callNow}
                        </a>
                    </Button>
                    <Button asChild className="rounded-full flex-1">
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            <MapPin className="mr-2 h-4 w-4" />
                            {t.getDirections}
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </Card>
  );
}
