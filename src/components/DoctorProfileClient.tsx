
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth, useFirestore, useUser, addDocumentNonBlocking } from "@/firebase";
import { collection, serverTimestamp } from "firebase/firestore";

const timeSlotKeys = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];

const isEmoji = (str: string) => {
    const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
    return emojiRegex.test(str);
};

export function DoctorProfileClient({ doctor }: { doctor: Doctor }) {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [summary, setSummary] = React.useState("");
  const [isLoadingSummary, setIsLoadingSummary] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const { language, translations } = useLanguage();
  const t = translations.doctorProfilePage;
  const tCard = translations.doctorCard;
  const tTime = translations.timeSlots;
  const pathname = usePathname();
  const firestore = useFirestore();
  const { user } = useUser();


  React.useEffect(() => {
    if (window.location.hash === '#booking') {
      setIsBookingOpen(true);
    }
  }, [pathname]);
  
  const doctorName = doctor.name[language];
  const doctorSpecialization = doctor.specialization.name[language];
  const doctorDescription = doctor.description[language];


  const handleBooking = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!firestore || !user) {
        toast({
            title: "त्रुटि",
            description: "अपॉइंटमेंट बुक करने के लिए आपको लॉग इन होना चाहिए।",
            variant: "destructive"
        });
        setIsSubmitting(false);
        return;
    }
    
    const formData = new FormData(event.currentTarget);
    const patientName = formData.get("name") as string;
    const patientPhone = formData.get("phone") as string;
    const selectedTime = formData.get("time") as string;
    
    const formattedDate = date ? date.toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : 'कोई तारीख नहीं चुनी गई';

    // 1. Save to Firestore
    const appointmentData = {
        doctorId: doctor.id,
        doctorName: doctor.name.en, // Storing English name for consistency
        patientId: user.uid,
        patientName: patientName,
        patientPhone: patientPhone,
        appointmentDate: date,
        appointmentTime: selectedTime,
        status: 'confirmed', // Or 'pending'
        bookedAt: serverTimestamp()
    };

    try {
        const appointmentsCollectionRef = collection(firestore, 'appointments');
        await addDocumentNonBlocking(appointmentsCollectionRef, appointmentData);

        // 2. Open WhatsApp
        const clinicPhoneNumber = "9771264784";
        const message = `नमस्ते, मैं ${doctorName} के साथ अपॉइंटमेंट बुक करना चाहता हूँ।\n\n*मरीज का नाम:* ${patientName}\n*फ़ोन नंबर:* ${patientPhone}\n*पसंदीदा तारीख:* ${formattedDate}\n*पसंदीदा समय:* ${selectedTime}\n\nयह अपॉइंटमेंट ऐप के माध्यम से बुक किया गया है। कृपया पुष्टि करें। धन्यवाद!`;
        const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(message)}`;

        setIsBookingOpen(false);
        toast({
          title: t.appointmentBookedToast,
          description: `${t.appointmentBookedToastDesc} ${doctorName}`,
        });

        window.open(whatsappUrl, '_blank');

    } catch (error) {
        console.error("Error booking appointment: ", error);
        toast({
          title: "बुकिंग विफल",
          description: "अपॉइंटमेंट बुक करने में कोई त्रुटि हुई। कृपया पुन: प्रयास करें।",
          variant: "destructive"
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleGetSummary = async () => {
    setIsLoadingSummary(true);
    setSummary("");
    try {
      // Use Hindi description for summary as the model is prompted in Hindi
      const result = await getSpecializationSummary({ specializationText: doctor.description.hi });
      setSummary(result.summary);
    } catch (error) {
      setSummary(t.aiSummaryError);
      console.error(error);
    } finally {
      setIsLoadingSummary(false);
    }
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    toast({
        title: isFavorite ? tCard.removedFromFavToast : tCard.addedToFavToast,
        description: `${doctorName} ${isFavorite ? tCard.removedFromFavToastDesc : tCard.addedToFavToastDesc}`,
    })
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.location)}`;

  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/doctors" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4">
                    <ChevronLeft className="h-4 w-4" />
                    {t.backToAllDoctors}
                </Link>
                <Card className="shadow-lg rounded-2xl overflow-hidden border-none">
                    <CardHeader className="p-6">
                        <div className="flex justify-between items-start">
                             <div>
                                <CardTitle className="text-3xl">{doctorName}</CardTitle>
                                <CardDescription className="text-primary text-lg font-medium">{doctorSpecialization}</CardDescription>
                            </div>
                             <Button size="icon" variant="ghost" className="rounded-full h-10 w-10 bg-secondary hover:bg-primary/10" onClick={handleFavoriteToggle}>
                                <Heart className={`h-5 w-5 transition-all ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
                                <span className="sr-only">{t.favorite}</span>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                        <div className="relative h-60 w-full mb-6">
                            {isEmoji(doctor.imageUrl) ? (
                                <div className="flex items-center justify-center h-full w-full bg-secondary rounded-2xl">
                                    <span className="text-8xl">{doctor.imageUrl}</span>
                                </div>
                            ) : (
                                <Image
                                    src={doctor.imageUrl}
                                    alt={doctorName}
                                    fill
                                    className="rounded-2xl object-cover"
                                    data-ai-hint={doctor.aiHint}
                                />
                            )}
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                             <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                <span className="font-semibold text-base">4.8</span>
                                <span className="text-sm">(245 {t.reviews})</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IndianRupee className="h-5 w-5" />
                                <span className="font-semibold text-base">{doctor.fee} {t.consultationFee}</span>
                            </div>
                        </div>

                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                            <MapPin className="h-5 w-5" />
                            <span className="text-base">{doctor.location}</span>
                        </a>

                        <Separator className="my-6" />

                        <div>
                            <h4 className="font-semibold text-xl mb-2">{t.description}</h4>
                            <p className="text-muted-foreground leading-relaxed">{doctorDescription}</p>
                        </div>
                        
                        <Separator className="my-6" />

                        <div id="booking" className="flex flex-col sm:flex-row gap-4">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline" className="flex-1 rounded-full py-6 text-base" onClick={handleGetSummary}>
                                        <Sparkles className="mr-2 h-5 w-5" />
                                        {t.getAISummary}
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="flex items-center gap-2"><Bot /> {t.aiSummaryFor} {doctorName}</AlertDialogTitle>
                                        {isLoadingSummary ? (
                                            <div className="flex items-center justify-center p-8">
                                                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                            </div>
                                        ) : (
                                            <AlertDialogDescription className="pt-4">
                                                {summary || "एआई-संचालित सारांश उत्पन्न करने के लिए बटन पर क्लिक करें।"}
                                            </AlertDialogDescription>
                                        )}
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>{t.close}</AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                                <DialogTrigger asChild>
                                    <Button className="flex-1 rounded-full py-6 text-base">{t.bookAppointmentNow}</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>📝 {t.bookAppointmentWith} {doctorName}</DialogTitle>

                                        <DialogDescription>
                                            {t.bookingFormDesc}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <ScrollArea className="max-h-[70vh] p-1">
                                        <form onSubmit={handleBooking} className="space-y-4 p-1">
                                            <div className="space-y-4 py-4">
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                                    <Input name="name" id="name" placeholder={t.patientName} className="pl-10 rounded-full" required defaultValue={user?.displayName || ''} />
                                                </div>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                                    <Input name="phone" id="phone" type="tel" placeholder={t.phoneNumber} className="pl-10 rounded-full" required defaultValue={user?.phoneNumber || ''}/>
                                                </div>
                                                <div className="flex justify-center">
                                                    <CalendarPicker
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        className="w-full rounded-md border"
                                                        disabled={(d) => d < new Date(new Date().setDate(new Date().getDate() - 1))}
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                                    <Select name="time" required>
                                                        <SelectTrigger className="pl-10 rounded-full">
                                                            <SelectValue placeholder={t.selectTimeSlot} />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {timeSlotKeys.map(slot => (
                                                                <SelectItem key={slot} value={tTime[slot as keyof typeof tTime]}>{tTime[slot as keyof typeof tTime]}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between items-center text-lg font-semibold">
                                                <span>{t.totalPayable}</span>
                                                <div className="flex items-center">
                                                    <IndianRupee className="h-5 w-5 mr-1" />
                                                    <span>{doctor.fee}</span>
                                                </div>
                                            </div>
                                            <DialogFooter className="pt-2 sticky bottom-0 bg-background pb-1">
                                                <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                                                     {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <MessageSquare className="mr-2 h-4 w-4" />}
                                                    {t.confirmOnWhatsApp}
                                                </Button>
                                            </DialogFooter>
                                        </form>
                                    </ScrollArea>
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
