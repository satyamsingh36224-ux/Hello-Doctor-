
"use client";

import * as React from "react";
import Image from "next/image";
import { Heart, MapPin, IndianRupee, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { Doctor } from "@/types";
import Link from "next/link";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast({
        title: isFavorite ? "💔 पसंदीदा से हटाया गया" : "❤️ पसंदीदा में जोड़ा गया",
        description: `${doctor.name} को ${isFavorite ? "पसंदीदा से हटा दिया गया है।" : "आपके पसंदीदा में जोड़ दिया गया है।"}`,
    })
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.location)}`;

  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl border-none bg-card">
        <Link href={`/doctors/${doctor.id}`} className="flex flex-col md:flex-row items-center p-4 gap-4 w-full">
            <div className="relative h-32 w-32 flex-shrink-0">
                <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    fill
                    className="rounded-2xl object-cover"
                    data-ai-hint={doctor.aiHint}
                />
            </div>
            <div className="flex-grow w-full text-left">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold">{doctor.name}</h3>
                        <p className="text-sm text-primary font-medium">{doctor.specialization}</p>
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
                        <span className="text-xs">(245 समीक्षाएं)</span>
                    </div>
                     <div className="flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" />
                        <span className="font-semibold">{doctor.fee} परामर्श शुल्क</span>
                    </div>
                </div>

                 <div className="mt-4 flex gap-2">
                    <Button asChild size="sm" className="rounded-full flex-1">
                        <Link href={`/doctors/${doctor.id}`}>प्रोफ़ाइल देखें</Link>
                    </Button>
                </div>
            </div>
        </Link>
    </Card>
  );
}
