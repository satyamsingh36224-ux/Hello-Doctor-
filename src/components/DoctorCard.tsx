
"use client";

import * as React from "react";
import Image from "next/image";
import { Heart, MapPin, Calendar, Clock, IndianRupee, Bot, Info, Loader2, User, Phone, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { getSpecializationSummary } from "@/app/actions";
import type { Doctor } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface DoctorCardProps {
  doctor: Doctor;
}

const timeSlots = ["10:00 सुबह", "11:00 सुबह", "12:00 दोपहर", "02:00 दोपहर", "03:00 दोपहर", "04:00 दोपहर"];

export function DoctorCard({ doctor }: DoctorCardProps) {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [summary, setSummary] = React.useState("");
  const [isLoadingSummary, setIsLoadingSummary] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleBooking = (event: React.FormEvent) => {
    event.preventDefault();
    setIsBookingOpen(false);
    toast({
      title: "अपॉइंटमेंट बुक हो गया! 🎉",
      description: `${doctor.name} के साथ आपका अपॉइंटमेंट सफलतापूर्वक अनुरोध किया गया है।`,
    });
  };

  const handleGetSummary = async () => {
    setIsLoadingSummary(true);
    setSummary("");
    try {
      const result = await getSpecializationSummary({ specializationText: doctor.description });
      setSummary(result.summary);
    } catch (error) {
      setSummary("इस समय सारांश उत्पन्न नहीं किया जा सका।");
      console.error(error);
    } finally {
      setIsLoadingSummary(false);
    }
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    toast({
        title: isFavorite ? "💔 पसंदीदा से हटाया गया" : "❤️ पसंदीदा में जोड़ा गया",
        description: `${doctor.name} को ${isFavorite ? "पसंदीदा से हटा दिया गया है।" : "आपके पसंदीदा में जोड़ दिया गया है।"}`,
    })
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.location)}`;

  return (
    <Card className="flex flex-col md:flex-row items-center p-4 gap-4 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl border-none bg-card">
        <div className="relative h-32 w-32 flex-shrink-0">
            <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                fill
                className="rounded-2xl object-cover"
                data-ai-hint={doctor.aiHint}
            />
        </div>
        <div className="flex-grow w-full">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-bold">{doctor.name}</h3>
                    <p className="text-sm text-primary font-medium">{doctor.specialization}</p>
                </div>
                <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 bg-secondary hover:bg-primary/10" onClick={handleFavoriteToggle}>
                    <Heart className={`h-5 w-5 transition-all ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
                    <span className="sr-only">पसंदीदा</span>
                </Button>
            </div>

            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground mt-2 hover:text-primary transition-colors">
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
                 <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-full" onClick={handleGetSummary}>
                            <Sparkles className="mr-2 h-4 w-4" />
                            एआई सारांश
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2"><Bot /> {doctor.name} के लिए एआई सारांश</AlertDialogTitle>
                        <AlertDialogDescription className="pt-4">
                            {isLoadingSummary ? (
                                <div className="flex items-center justify-center p-8">
                                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                </div>
                            ) : (
                                summary || "एआई-संचालित सारांश उत्पन्न करने के लिए बटन पर क्लिक करें।"
                            )}
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>बंद करें</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                    <DialogTrigger asChild>
                        <Button size="sm" className="rounded-full">अपॉइंटमेंट बुक करें</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle>📝 {doctor.name} के साथ अपॉइंटमेंट बुक करें</DialogTitle>
                        <DialogDescription>
                            अपॉइंटमेंट का अनुरोध करने के लिए नीचे दिए गए विवरण भरें। डॉक्टर का कार्यालय बुकिंग की पुष्टि करेगा।
                        </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleBooking}>
                            <div className="grid gap-4 py-4">
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input id="name" placeholder="मरीज का नाम" className="pl-10" required />
                                </div>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input id="phone" type="tel" placeholder="फ़ोन नंबर" className="pl-10" required />
                                </div>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <CalendarPicker
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="w-full rounded-md border pl-10"
                                        disabled={(d) => d < new Date(new Date().setDate(new Date().getDate() -1))}
                                    />
                                </div>
                                <div className="relative">
                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Select required>
                                        <SelectTrigger className="pl-10">
                                            <SelectValue placeholder="एक समय स्लॉट चुनें" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {timeSlots.map(slot => (
                                                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                             <Separator className="my-4" />
                            <div className="flex justify-between items-center text-lg font-semibold">
                                <span>कुल देय राशि:</span>
                                <div className="flex items-center">
                                    <IndianRupee className="h-5 w-5 mr-1" />
                                    <span>{doctor.fee}</span>
                                </div>
                            </div>
                            <DialogFooter className="mt-4">
                                <Button type="submit" className="w-full">बुकिंग की पुष्टि करें और भुगतान करें</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </Card>
  );
}
