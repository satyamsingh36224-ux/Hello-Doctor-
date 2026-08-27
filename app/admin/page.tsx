"use client";

import { Header } from "@/components/Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, UserCircle, Search, CalendarCheck, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { doctors } from "@/lib/doctors";

// Mock Data for Appointments
const mockAppointments = [
    { id: "A1", patient: "Rahul Kumar", doctor: "Dr. Sharad Chaudhary", time: "10:30 AM", status: "pending", date: "24 Feb" },
    { id: "A2", patient: "Sita Kumari", doctor: "Dr. R. N. Singh", time: "11:15 AM", status: "approved", date: "24 Feb" },
    { id: "A3", patient: "Amit Singh", doctor: "Dr. Sharad Chaudhary", time: "12:00 PM", status: "completed", date: "23 Feb" },
    { id: "A4", patient: "Priyanka Rai", doctor: "Dr. Ramaji Chaudhary", time: "02:30 PM", status: "cancelled", date: "24 Feb" },
    { id: "A5", patient: "Vikas Kumar", doctor: "Dr. Ajay Kumar", time: "09:00 AM", status: "approved", date: "25 Feb" },
];

export default function AdminPage() {
    const { translations, language } = useLanguage();
    const t = translations.admin;
    const tStatus = translations.statuses;
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAppointments = mockAppointments.filter(app => 
        app.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch(status) {
            case 'approved': return "bg-green-100 text-green-700 border-green-200";
            case 'pending': return "bg-yellow-100 text-yellow-700 border-yellow-200";
            case 'completed': return "bg-blue-100 text-blue-700 border-blue-200";
            case 'cancelled': return "bg-red-100 text-red-700 border-red-200";
            default: return "";
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="container mx-auto p-4 py-8 mb-20">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="animate-fade-in-up">
                            <h1 className="text-4xl font-black tracking-tighter flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-3xl text-white shadow-lg shadow-primary/20">
                                    <CalendarCheck className="h-8 w-8" />
                                </div>
                                {t.title}
                            </h1>
                            <p className="text-muted-foreground font-bold mt-2 italic">
                                Hello Compounder! You have {mockAppointments.length} appointments to manage today.
                            </p>
                        </div>
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input 
                                placeholder={t.passwordPlaceholder}
                                className="pl-12 py-7 rounded-2xl bg-white shadow-sm border-slate-200 focus:border-primary/50 text-base"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="rounded-[2rem] border-none shadow-xl bg-gradient-to-br from-primary to-blue-600 text-white p-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-black uppercase tracking-widest opacity-80">Total</p>
                                <p className="text-5xl font-black">28</p>
                            </div>
                            <UserCircle className="h-16 w-16 opacity-20" />
                        </Card>
                        <Card className="rounded-[2rem] border-none shadow-xl bg-white p-6 flex items-center justify-between border-l-8 border-yellow-400">
                            <div>
                                <p className="text-sm font-black uppercase tracking-widest text-slate-400">Pending</p>
                                <p className="text-5xl font-black text-slate-800">12</p>
                            </div>
                            <Clock className="h-16 w-16 text-yellow-400 opacity-20" />
                        </Card>
                        <Card className="rounded-[2rem] border-none shadow-xl bg-white p-6 flex items-center justify-between border-l-8 border-green-400">
                            <div>
                                <p className="text-sm font-black uppercase tracking-widest text-slate-400">Approved</p>
                                <p className="text-5xl font-black text-slate-800">16</p>
                            </div>
                            <CheckCircle2 className="h-16 w-16 text-green-400 opacity-20" />
                        </Card>
                    </div>

                    <Card className="shadow-2xl border-none rounded-[2.5rem] overflow-hidden bg-white">
                        <CardHeader className="bg-slate-50/50 pb-8 pt-10 border-b">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl font-black tracking-tight flex items-center gap-3">
                                    <Stethoscope className="text-primary h-6 w-6" />
                                    {t.appointmentList}
                                </CardTitle>
                                <Badge variant="outline" className="rounded-full border-slate-200 px-4 py-1 text-slate-500 font-bold uppercase text-[10px] tracking-widest">Live Updates</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ScrollArea className="h-[60vh]">
                                <Table>
                                    <TableHeader className="bg-slate-50/80 sticky top-0 z-10">
                                        <TableRow className="border-none">
                                            <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-widest py-6 px-8">{t.name}</TableHead>
                                            <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-widest">{t.doctor}</TableHead>
                                            <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Time & Date</TableHead>
                                            <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-widest text-right px-8">{t.status}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredAppointments.map((app) => (
                                            <TableRow key={app.id} className="hover:bg-slate-50/50 transition-colors border-slate-100 group">
                                                <TableCell className="font-black py-6 px-8">
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black">
                                                            {app.patient.charAt(0)}
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-base text-slate-800">{app.patient}</span>
                                                            <span className="text-[10px] text-slate-400 font-bold tracking-widest">ID: #{app.id}</span>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="font-bold text-slate-600">
                                                    {app.doctor}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col">
                                                        <span className="font-black text-slate-700">{app.time}</span>
                                                        <span className="text-xs text-slate-400 font-bold">{app.date}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-right px-8">
                                                    <Badge 
                                                        variant="outline" 
                                                        className={`rounded-full px-4 py-1 font-black uppercase text-[10px] tracking-widest ${getStatusColor(app.status)}`}
                                                    >
                                                        {tStatus[app.status as keyof typeof tStatus]}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                {filteredAppointments.length === 0 && (
                                    <div className="p-20 text-center flex flex-col items-center gap-4">
                                        <AlertCircle className="h-12 w-12 text-slate-200" />
                                        <p className="text-slate-400 font-bold text-lg">No appointments found matches your search.</p>
                                    </div>
                                )}
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
