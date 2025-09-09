
"use client";

import * as React from "react";
import Image from "next/image";
import { Heart, MapPin, Calendar, Clock, IndianRupee, Bot, Info, Loader2, User, Phone, Sparkles, Star, ChevronLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { getSpecializationSummary } from "@/app/actions";
import type { Doctor } from "@/types";
import { doctorsData } from "@/lib/doctors";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import Link from "next/link";
import { notFound } from "next/navigation";

const timeSlots = ["10:00 सुबह", "11:00 सुबह", "12:00 दोपहर", "02:00 दोपहर", "03:00 दोपहर", "04:00 दोपहर"];

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [summary, setSummary] = React.useState("");
  const [isLoadingSummary, setIsLoadingSummary] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const doctor = doctorsData.find(d => d.id === params.id);

  if (!doctor) {
    notFound();
  }

  const handleBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const patientName = formData.get("name") as string;
    const patientPhone = formData.get("phone") as string;
    const selectedTime = formData.get("time") as string;
    
    const formattedDate = date ? date.toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : 'कोई तारीख नहीं चुनी गई';

    const clinicPhoneNumber = "9771264784"; // महत्वपूर्ण: इसे क्लिनिक के वास्तविक व्हाट्सएप नंबर से बदलें
    
    const message = `नमस्ते, मैं ${doctor.name} के साथ अपॉइंटमेंट बुक करना चाहता हूँ।\n\n*मरीज का नाम:* ${patientName}\n*फ़ोन नंबर:* ${patientPhone}\n*पसंदीदा तारीख:* ${formattedDate}\n*पसंदीदा समय:* ${selectedTime}\n\nकृपया इस अपॉइंटमेंट की पुष्टि करें। धन्यवाद!`;
    
    const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(message)}`;

    setIsBookingOpen(false);
    toast({
      title: "अपॉइंटमेंट बुक हो गया! 🎉",
      description: `${doctor.name} के साथ आपका अपॉइंटमेंट सफलतापूर्वक अनुरोध किया गया है।`,
    });

    // व्हाट्सएप पर रीडायरेक्ट करें
    window.open(whatsappUrl, '_blank');
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
    <div className="flex flex-col min-h-screen bg-muted/40">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/doctors" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4">
                    <ChevronLeft className="h-4 w-4" />
                    सभी डॉक्टरों पर वापस जाएं
                </Link>
                <Card className="shadow-lg rounded-2xl overflow-hidden">
                    <div className="relative h-56 w-full">
                         <Image
                            src={doctor.imageUrl}
                            alt={doctor.name}
                            fill
                            className="object-cover"
                            data-ai-hint={doctor.aiHint}
                        />
                    </div>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                             <div>
                                <CardTitle className="text-3xl">{doctor.name}</CardTitle>
                                <CardDescription className="text-primary text-lg font-medium">{doctor.specialization}</CardDescription>
                            </div>
                             <Button size="icon" variant="ghost" className="rounded-full h-10 w-10 bg-secondary hover:bg-primary/10" onClick={handleFavoriteToggle}>
                                <Heart className={`h-5 w-5 transition-all ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
                                <span className="sr-only">पसंदीदा</span>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                             <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                <span className="font-semibold text-base">4.8</span>
                                <span className="text-sm">(245 समीक्षाएं)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IndianRupee className="h-5 w-5" />
                                <span className="font-semibold text-base">{doctor.fee} परामर्श शुल्क</span>
                            </div>
                        </div>

                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                            <MapPin className="h-5 w-5" />
                            <span className="text-base">{doctor.location}</span>
                        </a>

                        <Separator className="my-6" />

                        <div>
                            <h4 className="font-semibold text-xl mb-2">विवरण</h4>
                            <p className="text-muted-foreground leading-relaxed">{doctor.description}</p>
                        </div>
                        
                        <Separator className="my-6" />

                        <div className="flex flex-col sm:flex-row gap-4">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline" className="flex-1 rounded-full py-6 text-base" onClick={handleGetSummary}>
                                        <Sparkles className="mr-2 h-5 w-5" />
                                        एआई सारांश प्राप्त करें
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
                                    <Button className="flex-1 rounded-full py-6 text-base">अभी अपॉइंटमेंट बुक करें</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>📝 {doctor.name} के साथ अपॉइंटमेंट बुक करें</DialogTitle>
                                    <DialogDescription>
                                        अपॉइंटमेंट का अनुरोध करने के लिए नीचे दिए गए विवरण भरें। व्हाट्सएप पर पुष्टि भेजी जाएगी।
                                    </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleBooking}>
                                        <div className="grid gap-4 py-4">
                                             <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                                <Input name="name" id="name" placeholder="मरीज का नाम" className="pl-10" required />
                                            </div>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                                <Input name="phone" id="phone" type="tel" placeholder="फ़ोन नंबर" className="pl-10" required />
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
                                                <Select name="time" required>
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
                                            <Button type="submit" className="w-full">
                                                <MessageSquare className="mr-2 h-4 w-4" />
                                                व्हाट्सएप पर पुष्टि करें
                                            </Button>
                                        </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    </div>
  );
}
