
"use client";

import * as React from "react";
import Image from "next/image";
import { Heart, MapPin, IndianRupee, Sparkles, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { Doctor } from "@/types";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface DoctorCardProps {
  doctor: Doctor;
}

const isEmoji = (str: string) => {
    const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
    return emojiRegex.test(str);
};

export function DoctorCard({ doctor }: DoctorCardProps) {
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = React.useState(false);
  const { language, translations } = useLanguage();
  const t = translations.doctorCard;
  const tProfile = translations.doctorProfilePage;

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast({
        title: isFavorite ? t.removedFromFavToast : t.addedToFavToast,
        description: `${doctor.name[language]} ${isFavorite ? t.removedFromFavToastDesc : t.addedToFavToastDesc}`,
    })
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.location)}`;

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl border-border/50 bg-card group">
        <div className="flex flex-col md:flex-row items-center p-4 gap-4 w-full">
            <Link href={`/doctors/${doctor.id}`} className="relative h-32 w-32 flex-shrink-0">
                {isEmoji(doctor.imageUrl) ? (
                    <div className="flex items-center justify-center h-full w-full bg-secondary rounded-2xl ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300">
                        <span className="text-6xl">{doctor.imageUrl}</span>
                    </div>
                ) : (
                    <Image
                        src={doctor.imageUrl}
                        alt={doctor.name[language]}
                        fill
                        className="rounded-2xl object-cover ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300"
                        data-ai-hint={doctor.aiHint}
                    />
                )}
            </Link>
            <div className="flex-grow w-full text-left">
                <div className="flex justify-between items-start">
                    <div>
                        <Link href={`/doctors/${doctor.id}`}>
                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{doctor.name[language]}</h3>
                        </Link>
                        <p className="text-sm text-primary font-medium">{doctor.specialization.name[language]}</p>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 bg-secondary hover:bg-primary/10 flex-shrink-0" onClick={handleFavoriteToggle}>
                        <Heart className={`h-5 w-5 transition-all ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
                        <span className="sr-only">पसंदीदा</span>
                    </Button>
                </div>

                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1 text-sm text-muted-foreground mt-2 hover:text-primary transition-colors">
                    <MapPin className="h-4 w-4" />
                    <span>{doctor.location}</span>
                </a>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">4.8</span>
                        <span className="text-xs">(245 {t.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" />
                        <span className="font-semibold">{doctor.fee} {t.consultationFee}</span>
                    </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <Button asChild className="rounded-full flex-1" variant="outline" onClick={(e) => e.stopPropagation()}>
                        <Link href={`/doctors/${doctor.id}`}>{t.viewProfile}</Link>
                    </Button>
                    <Button asChild className="rounded-full flex-1" onClick={(e) => e.stopPropagation()}>
                        <Link href={`/doctors/${doctor.id}#booking`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            {tProfile.bookAppointmentNow}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </Card>
  );
}
