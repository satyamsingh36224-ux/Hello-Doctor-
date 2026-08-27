"use client";

import * as React from "react";
import Image from "next/image";
import { Heart, MapPin, Calendar, Clock, IndianRupee, Bot, Info, Loader2, User, Phone, Sparkles, Star, ChevronLeft, MessageSquare, CheckCircle2, Navigation } from "lucide-react";
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
import { useLanguage } from "@/context/LanguageContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUser } from "@/firebase";

const timeSlotKeys = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];

export function DoctorProfileClient({ doctor }: { doctor: Doctor }) {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = React.useState(false);
  const [bookingDetails, setBookingDetails] = React.useState<any>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [summary, setSummary] = React.useState("");
  const [isLoadingSummary, setIsLoadingSummary] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const { language, translations } = useLanguage();
  const t = translations.doctorProfilePage;
  const tTime = translations.timeSlots;
  const { user } = useUser();

  const doctorName = doctor.name[language];
  const doctorSpecialization = doctor.specialization.name[language];

  const handleBooking = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!date) return;
    
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const time = formData.get("time") as string;
    
    const formattedDate = date.toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    const token = Math.floor(100 + Math.random() * 900);

    const details = { name, phone, date: formattedDate, time, token };
    setBookingDetails(details);

    // WhatsApp Message
    const clinicPhone = "9771264784";
    const msg = `नमस्ते, मैं ${doctorName} के साथ अपॉइंटमेंट बुक करना चाहता हूँ।\n*मरीज:* ${name}\n*टोकन:* ${token}\n*समय:* ${formattedDate}, ${time}\nधन्यवाद!`;
    const whatsappUrl = `https://wa.me/${clinicPhone}?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
        setIsSubmitting(false);
        setIsBookingOpen(false);
        setIsSuccessOpen(true);
        
        toast({
            title: t.appointmentBookedToast,
            description: `${t.tokenNumber}: #${token}`,
        });

        window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  const handleGetSummary = async () => {
    setIsLoadingSummary(true);
    try {
      const result = await getSpecializationSummary({ specializationText: doctor.description.hi });
      setSummary(result.summary);
    } catch (error) {
      setSummary(t.aiSummaryError);
    } finally {
      setIsLoadingSummary(false);
    }
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.location)}`;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 mb-20">
            <div className="max-w-4xl mx-auto space-y-6">
                <Link href="/doctors" className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                    <ChevronLeft className="h-4 w-4" />
                    {t.backToAllDoctors}
                </Link>

                <Card className="shadow-2xl rounded-[2.5rem] overflow-hidden border-none bg-white animate-fade-in-up">
                    <div className="relative h-72 w-full">
                        <Image
                            src={doctor.imageUrl.includes('http') ? doctor.imageUrl : `https://picsum.photos/seed/${doctor.id}/800/600`}
                            alt={doctorName}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                             <Badge className="w-fit mb-2 bg-primary/90 text-white border-none px-4 py-1">{doctorSpecialization}</Badge>
                             <h1 className="text-4xl font-black text-white tracking-tight">{doctorName}</h1>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40"
                            onClick={() => setIsFavorite(!isFavorite)}
                        >
                            <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                        </Button>
                    </div>

                    <CardContent className="p-8 space-y-8">
                        <div className="grid grid-cols-2 gap-4">
                             <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400 mb-2" />
                                <span className="text-xl font-black">4.8</span>
                                <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{t.reviews}</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                                <IndianRupee className="h-6 w-6 text-primary mb-2" />
                                <span className="text-xl font-black">{doctor.fee}</span>
                                <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{t.consultationFee}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-black flex items-center gap-2">
                                <Info className="h-5 w-5 text-primary" />
                                {t.description}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-medium">{doctor.description[language]}</p>
                            
                            <Button variant="outline" className="w-full rounded-2xl py-6 border-primary/20 bg-primary/5 text-primary font-bold shadow-sm" onClick={handleGetSummary} disabled={isLoadingSummary}>
                                {isLoadingSummary ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5" />}
                                {t.getAISummary}
                            </Button>
                        </div>

                        <Separator />

                        <div className="flex flex-col gap-4">
                             <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-2xl text-primary"><MapPin className="h-6 w-6" /></div>
                                <div className="flex-1">
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.location}</p>
                                    <p className="font-bold text-slate-700">{doctor.location}</p>
                                    <Button asChild variant="link" className="p-0 h-auto text-primary font-black">
                                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                            <Navigation className="h-3 w-3 mr-1" />
                                            View on Maps
                                        </a>
                                    </Button>
                                </div>
                             </div>
                        </div>

                        <div className="pt-4">
                            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                                <DialogTrigger asChild>
                                    <Button className="w-full rounded-[1.5rem] py-8 text-xl font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                        {t.bookAppointmentNow.toUpperCase()}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="rounded-[2.5rem] border-none shadow-2xl max-w-sm sm:max-w-md">
                                    <DialogHeader className="items-center">
                                        <div className="p-4 bg-primary/10 rounded-full mb-2"><Calendar className="h-8 w-8 text-primary" /></div>
                                        <DialogTitle className="text-2xl font-black">{t.bookAppointmentWith}</DialogTitle>
                                        <DialogDescription className="font-bold text-primary">{doctorName}</DialogDescription>
                                    </DialogHeader>
                                    <ScrollArea className="max-h-[60vh] px-1">
                                        <form onSubmit={handleBooking} className="space-y-5 p-1">
                                            <div className="space-y-4">
                                                <Input name="name" placeholder={t.patientName} className="rounded-2xl py-6 font-bold" required defaultValue={user?.displayName || ''} />
                                                <Input name="phone" type="tel" placeholder={t.phoneNumber} className="rounded-2xl py-6 font-bold" required defaultValue={user?.phoneNumber || ''} />
                                                <div className="border rounded-3xl p-4 bg-slate-50">
                                                    <CalendarPicker
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        className="w-full"
                                                        disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                                                    />
                                                </div>
                                                <Select name="time" required>
                                                    <SelectTrigger className="rounded-2xl py-6 font-bold">
                                                        <SelectValue placeholder={t.selectTimeSlot} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {timeSlotKeys.map(slot => (
                                                            <SelectItem key={slot} value={tTime[slot as keyof typeof tTime]}>{tTime[slot as keyof typeof tTime]}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <Button type="submit" className="w-full rounded-2xl py-7 font-black text-lg shadow-lg shadow-primary/20" disabled={isSubmitting}>
                                                {isSubmitting ? <Loader2 className="animate-spin" /> : <MessageSquare className="mr-2" />}
                                                {t.confirmOnWhatsApp.toUpperCase()}
                                            </Button>
                                        </form>
                                    </ScrollArea>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>

        {/* Success Confirmation Modal */}
        <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
            <DialogContent className="rounded-[3rem] border-none shadow-2xl p-0 overflow-hidden max-w-sm">
                <DialogHeader className="p-0">
                    <div className="bg-primary p-8 text-center text-white w-full">
                        <CheckCircle2 className="h-20 w-20 mx-auto mb-4 animate-bounce" />
                        <DialogTitle className="text-2xl font-black leading-tight text-white">{t.bookingSuccessTitle}</DialogTitle>
                    </div>
                </DialogHeader>
                <div className="p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-2xl border text-center">
                            <p className="text-[10px] font-black uppercase text-slate-400 mb-1">{t.tokenNumber}</p>
                            <p className="text-2xl font-black text-primary">#{bookingDetails?.token}</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border text-center">
                            <p className="text-[10px] font-black uppercase text-slate-400 mb-1">{t.phoneNumber}</p>
                            <p className="text-sm font-black">{bookingDetails?.phone}</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                         <div className="flex items-center justify-between text-sm font-bold">
                            <span className="text-slate-400">Doctor:</span>
                            <span className="text-slate-700">{doctorName}</span>
                         </div>
                         <div className="flex items-center justify-between text-sm font-bold">
                            <span className="text-slate-400">Date & Time:</span>
                            <span className="text-slate-700">{bookingDetails?.date}, {bookingDetails?.time}</span>
                         </div>
                    </div>
                    <div className="p-5 bg-yellow-50 rounded-[1.5rem] border border-yellow-100">
                        <div className="flex items-center gap-3 text-yellow-700 font-black mb-1">
                            <Phone className="h-4 w-4" />
                            <span>{t.helpline}</span>
                        </div>
                        <p className="text-xl font-black text-yellow-800 tracking-widest">9771264784</p>
                    </div>
                    <Button onClick={() => setIsSuccessOpen(false)} className="w-full rounded-2xl py-6 font-black uppercase tracking-widest">
                        Great!
                    </Button>
                </div>
            </DialogContent>
        </Dialog>

        {/* AI Summary Dialog */}
        <AlertDialog open={!!summary} onOpenChange={() => setSummary("")}>
            <AlertDialogContent className="rounded-[2.5rem] border-none shadow-2xl">
                <AlertDialogHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-2"><Bot className="h-8 w-8 text-primary" /></div>
                    <AlertDialogTitle className="text-2xl font-black">{t.aiSummaryFor} {doctorName}</AlertDialogTitle>
                    <AlertDialogDescription className="text-slate-600 font-medium text-center pt-4 leading-relaxed">
                        {summary}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="sm:justify-center">
                    <AlertDialogAction className="rounded-2xl px-12 py-6 font-black uppercase tracking-widest">Got it!</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
  );
}
