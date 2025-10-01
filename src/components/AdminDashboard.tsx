
"use client";

import { useState } from 'react';
import { doctorsData as initialDoctorsData, specializationMap } from '@/lib/doctors';
import type { Doctor } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, PlusCircle, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Separator } from './ui/separator';

export function AdminDashboard() {
    const [doctors, setDoctors] = useState<Doctor[]>(initialDoctorsData);
    const [newDoctorName, setNewDoctorName] = useState('');
    const [newDoctorSpec, setNewDoctorSpec] = useState('');
    const [newDoctorFee, setNewDoctorFee] = useState('');
    const [newDoctorLocation, setNewDoctorLocation] = useState('');
    
    const { language } = useLanguage();
    const { toast } = useToast();

    const handleAddDoctor = (e: React.FormEvent) => {
        e.preventDefault();
        const selectedSpec = specializationMap.find(s => s.key === newDoctorSpec);

        if (!newDoctorName || !selectedSpec || !newDoctorFee || !newDoctorLocation) {
            toast({
                title: "अधूरी जानकारी",
                description: "कृपया सभी फ़ील्ड भरें।",
                variant: "destructive"
            });
            return;
        }

        const newDoctor: Doctor = {
            id: `doc-${Date.now()}`,
            name: { hi: newDoctorName, en: newDoctorName, bho: newDoctorName },
            specialization: {
                key: selectedSpec.key,
                name: selectedSpec.name,
            },
            description: { hi: "नया डॉक्टर विवरण यहाँ आएगा।", en: "New doctor description goes here.", bho: "नया डॉक्टर विवरण इहाँ आई।" },
            fee: parseInt(newDoctorFee, 10),
            imageUrl: "👨‍⚕️",
            location: newDoctorLocation,
            aiHint: "indian male doctor",
        };

        setDoctors(prevDoctors => [newDoctor, ...prevDoctors]);
        
        // Reset form
        setNewDoctorName('');
        setNewDoctorSpec('');
        setNewDoctorFee('');
        setNewDoctorLocation('');

        toast({
            title: "डॉक्टर जोड़ा गया",
            description: `${newDoctorName} को सूची में जोड़ दिया गया है।`,
        });
    };

    const handleRemoveDoctor = (id: string) => {
        setDoctors(prevDoctors => prevDoctors.filter(doc => doc.id !== id));
        toast({
            title: "डॉक्टर हटाया गया",
            description: "डॉक्टर को सूची से सफलतापूर्वक हटा दिया गया है।",
            variant: "destructive"
        });
    };

    return (
        <main className="flex-1 container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <Card className="shadow-lg rounded-2xl border-none">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <Users className="h-8 w-8" />
                            डॉक्टर प्रबंधन
                        </CardTitle>
                        <CardDescription>
                            यहां आप डॉक्टरों की सूची देख सकते हैं, नए डॉक्टर जोड़ सकते हैं या हटा सकते हैं।
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-lg border overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>नाम</TableHead>
                                        <TableHead>विशेषज्ञता</TableHead>
                                        <TableHead>शुल्क</TableHead>
                                        <TableHead>पता</TableHead>
                                        <TableHead className="text-right">कार्रवाई</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {doctors.map(doctor => (
                                        <TableRow key={doctor.id}>
                                            <TableCell className="font-medium">{doctor.name[language]}</TableCell>
                                            <TableCell>{doctor.specialization.name[language]}</TableCell>
                                            <TableCell>₹{doctor.fee}</TableCell>
                                            <TableCell className="max-w-xs truncate">{doctor.location}</TableCell>
                                            <TableCell className="text-right">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-red-500 hover:text-red-700"
                                                    onClick={() => handleRemoveDoctor(doctor.id)}
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                <Card className="shadow-lg rounded-2xl border-none">
                    <CardHeader>
                         <CardTitle className="flex items-center gap-3 text-2xl">
                            <PlusCircle className="h-8 w-8" />
                            नया डॉक्टर जोड़ें
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleAddDoctor} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input 
                                    placeholder="डॉक्टर का नाम"
                                    value={newDoctorName}
                                    onChange={e => setNewDoctorName(e.target.value)}
                                    className="py-6 rounded-full"
                                />
                                <Select value={newDoctorSpec} onValueChange={setNewDoctorSpec}>
                                    <SelectTrigger className="py-6 rounded-full">
                                        <SelectValue placeholder="विशेषज्ञता चुनें" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {specializationMap.map(spec => (
                                            <SelectItem key={spec.key} value={spec.key}>
                                                {spec.name[language]}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Input 
                                    type="number"
                                    placeholder="परामर्श शुल्क (जैसे: 500)"
                                    value={newDoctorFee}
                                    onChange={e => setNewDoctorFee(e.target.value)}
                                    className="py-6 rounded-full"
                                />
                                <Input 
                                    placeholder="क्लिनिक का पता"
                                    value={newDoctorLocation}
                                    onChange={e => setNewDoctorLocation(e.target.value)}
                                    className="py-6 rounded-full"
                                />
                            </div>
                            <Button type="submit" className="w-full md:w-auto rounded-full py-6 text-lg font-bold">
                                <PlusCircle className="mr-2 h-5 w-5" />
                                डॉक्टर जोड़ें
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
