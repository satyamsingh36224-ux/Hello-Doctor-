
"use client";

import { useState } from 'react';
import { specializationMap } from '@/lib/doctors';
import type { Doctor } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Trash2, PlusCircle, Edit } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Label } from './ui/label';
import { useAppData } from '@/context/AppDataContext';

export function DoctorAdmin() {
    const { doctorsData, setDoctorsData } = useAppData();
    const [newDoctorName, setNewDoctorName] = useState('');
    const [newDoctorSpec, setNewDoctorSpec] = useState('');
    const [newDoctorFee, setNewDoctorFee] = useState('');
    const [newDoctorLocation, setNewDoctorLocation] = useState('');
    
    const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

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

        setDoctorsData(prevDoctors => [newDoctor, ...prevDoctors]);
        
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
        setDoctorsData(prevDoctors => prevDoctors.filter(doc => doc.id !== id));
        toast({
            title: "डॉक्टर हटाया गया",
            description: "डॉक्टर को सूची से सफलतापूर्वक हटा दिया गया है।",
            variant: "destructive"
        });
    };
    
    const handleEditDoctor = (doctor: Doctor) => {
        setEditingDoctor(doctor);
        setIsEditDialogOpen(true);
    };

    const handleUpdateDoctor = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingDoctor) return;

        const updatedDoctor = { ...editingDoctor };
        const selectedSpec = specializationMap.find(s => s.key === updatedDoctor.specialization.key);

        if (selectedSpec) {
            updatedDoctor.specialization.name = selectedSpec.name;
        }

        setDoctorsData(doctorsData.map(doc => doc.id === updatedDoctor.id ? updatedDoctor : doc));
        
        toast({
            title: "जानकारी अपडेट हुई",
            description: `${updatedDoctor.name[language]} की जानकारी सफलतापूर्वक अपडेट हो गई है।`,
        });

        setIsEditDialogOpen(false);
        setEditingDoctor(null);
    };

    return (
        <div className="space-y-8">
            <Card className="shadow-lg rounded-2xl border-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        डॉक्टरों की सूची
                    </CardTitle>
                    <CardDescription>
                        यहां आप डॉक्टरों की सूची देख सकते हैं, संपादित कर सकते हैं या हटा सकते हैं।
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
                                {doctorsData.map(doctor => (
                                    <TableRow key={doctor.id}>
                                        <TableCell className="font-medium">{doctor.name[language]}</TableCell>
                                        <TableCell>{doctor.specialization.name[language]}</TableCell>
                                        <TableCell>₹{doctor.fee}</TableCell>
                                        <TableCell className="max-w-xs truncate">{doctor.location}</TableCell>
                                        <TableCell className="text-right space-x-1">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-primary hover:text-primary/80"
                                                onClick={() => handleEditDoctor(doctor)}
                                            >
                                                <Edit className="h-5 w-5" />
                                            </Button>
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

            {editingDoctor && (
                <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>डॉक्टर की जानकारी संपादित करें</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleUpdateDoctor} className="space-y-4 pt-4">
                            <div>
                                <Label htmlFor="edit-name">नाम</Label>
                                <Input id="edit-name" value={editingDoctor.name.hi} onChange={e => setEditingDoctor({...editingDoctor, name: {hi: e.target.value, en: e.target.value, bho: e.target.value}})} />
                            </div>
                            <div>
                                <Label htmlFor="edit-spec">विशेषज्ञता</Label>
                                 <Select value={editingDoctor.specialization.key} onValueChange={value => setEditingDoctor({...editingDoctor, specialization: {...editingDoctor.specialization, key: value}})}>
                                    <SelectTrigger id="edit-spec">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {specializationMap.map(spec => (
                                            <SelectItem key={spec.key} value={spec.key}>
                                                {spec.name[language]}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="edit-fee">शुल्क</Label>
                                <Input id="edit-fee" type="number" value={editingDoctor.fee} onChange={e => setEditingDoctor({...editingDoctor, fee: parseInt(e.target.value, 10) || 0})} />
                            </div>
                            <div>
                                <Label htmlFor="edit-location">पता</Label>
                                <Input id="edit-location" value={editingDoctor.location} onChange={e => setEditingDoctor({...editingDoctor, location: e.target.value})} />
                            </div>
                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>रद्द करें</Button>
                                <Button type="submit">बदलाव सहेजें</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
