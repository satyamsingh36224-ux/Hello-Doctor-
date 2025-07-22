"use client";

import * as React from "react";
import Image from "next/image";
import { Stethoscope, MapPin, Calendar, Clock, IndianRupee, Bot, Info, Loader2, User, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
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

interface DoctorCardProps {
  doctor: Doctor;
}

const timeSlots = ["10:00 सुबह", "11:00 सुबह", "12:00 दोपहर", "02:00 दोपहर", "03:00 दोपहर", "04:00 दोपहर"];

const specializationEmoji: { [key: string]: string } = {
    'हृदय रोग विशेषज्ञ': '❤️',
    'बच्चों का चिकित्सक': '👶',
    'त्वचा विशेषज्ञ': '✨',
    'स्त्री रोग विशेषज्ञ': '♀️',
    'हड्डी रोग विशेषज्ञ': '🦴',
    'सामान्य चिकित्सक': '🩺',
  };

export function DoctorCard({ doctor }: DoctorCardProps) {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [summary, setSummary] = React.useState("");
  const [isLoadingSummary, setIsLoadingSummary] = React.useState(false);

  const handleBooking = (event: React.FormEvent) => {
    event.preventDefault();
    setIsBookingOpen(false);
    toast({
      title: "अपॉइंटमेंट बुक हो गया!",
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

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.location)}`;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl border-border/60">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
            <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                fill
                style={{objectFit:"cover"}}
                data-ai-hint={doctor.aiHint}
            />
            <Badge variant="destructive" className="absolute top-4 right-4 text-sm py-1 px-3">
                <IndianRupee className="h-4 w-4 mr-1" />
                {doctor.fee}
            </Badge>
        </div>
        <div className="p-6 pb-2">
            <CardTitle className="text-2xl font-headline font-bold">{doctor.name}</CardTitle>
            <CardDescription className="flex items-center gap-2 text-base text-primary font-semibold pt-1">
                <span className="text-xl">{specializationEmoji[doctor.specialization] || '⚕️'}</span>
                <span>{doctor.specialization}</span>
            </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-6 pb-4">
        <p className="text-muted-foreground text-sm line-clamp-3">
            {doctor.description}
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 text-primary/80" />
                <span className="font-medium">{doctor.location}</span>
            </a>
        </div>
      </CardContent>
      <CardFooter className="bg-secondary/50 p-4 flex justify-between">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" onClick={handleGetSummary}>
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
            <Button>अपॉइंटमेंट बुक करें</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{doctor.name} के साथ अपॉइंटमेंट बुक करें</DialogTitle>
              <DialogDescription>
                अपॉइंटमेंट का अनुरोध करने के लिए नीचे दिए गए विवरण भरें। डॉक्टर का कार्यालय बुकिंग की पुष्टि करेगा।
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleBooking}>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right"><User className="inline-block h-4 w-4 mr-1" /></Label>
                        <Input id="name" placeholder="मरीज का नाम" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right"><Phone className="inline-block h-4 w-4 mr-1" /></Label>
                        <Input id="phone" type="tel" placeholder="फ़ोन नंबर" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right"><Calendar className="inline-block h-4 w-4 mr-1" /></Label>
                        <CalendarPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="col-span-3 rounded-md border p-0"
                            disabled={(d) => d < new Date(new Date().setDate(new Date().getDate() -1))}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right"><Clock className="inline-block h-4 w-4 mr-1" /></Label>
                         <Select required>
                            <SelectTrigger className="col-span-3">
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
                <DialogFooter>
                    <Button type="submit">बुकिंग की पुष्टि करें</Button>
                </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
