
"use client";

import { doctors } from "@/lib/doctors";
import { Header } from "@/components/Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AdminPage() {
    const { translations, language } = useLanguage();
    const t = translations.admin;
    const [searchTerm, setSearchTerm] = useState("");

    const filteredDoctors = doctors.filter(doc => 
        doc.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialization.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
            <Header />
            <main className="container mx-auto p-4 py-8">
                <div className="max-w-6xl mx-auto space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-3">
                                <Stethoscope className="h-8 w-8 text-primary" />
                                {t.title}
                            </h1>
                            <p className="text-muted-foreground mt-1">
                                {t.doctorList} - {doctors.length} {t.totalDoctors}
                            </p>
                        </div>
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                                placeholder={translations.selectSpecializationPage.searchPlaceholder}
                                className="pl-10 rounded-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <Card className="shadow-xl border-none rounded-2xl overflow-hidden">
                        <CardHeader className="bg-primary/5 pb-6">
                            <CardTitle>{t.doctorList}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ScrollArea className="h-[70vh]">
                                <Table>
                                    <TableHeader className="bg-muted/50 sticky top-0 z-10">
                                        <TableRow>
                                            <TableHead className="font-bold">{t.name}</TableHead>
                                            <TableHead className="font-bold">{t.specialty}</TableHead>
                                            <TableHead className="font-bold">{t.city}</TableHead>
                                            <TableHead className="font-bold">{t.location}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredDoctors.map((doc) => (
                                            <TableRow key={doc.id} className="hover:bg-primary/5 transition-colors">
                                                <TableCell className="font-bold py-4">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-xl">{doc.imageUrl}</span>
                                                        {doc.name[language]}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                                        {doc.specialization.name[language]}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline" className="capitalize border-primary/20">
                                                        {doc.city === 'siwan' ? translations.loginPage.siwan : translations.loginPage.gopalganj}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-sm text-muted-foreground max-w-xs truncate">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="h-3 w-3 shrink-0" />
                                                        {doc.location}
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                {filteredDoctors.length === 0 && (
                                    <div className="p-8 text-center text-muted-foreground">
                                        कोई डॉक्टर नहीं मिला।
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
