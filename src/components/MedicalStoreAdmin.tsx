
"use client";

import { useState } from 'react';
import type { MedicalStore } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Trash2, PlusCircle, Edit } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Label } from './ui/label';
import { useAppData } from '@/context/AppDataContext';

export function MedicalStoreAdmin() {
    const { medicalStoresData, addMedicalStore, updateMedicalStore, removeMedicalStore } = useAppData();
    const [newStoreName, setNewStoreName] = useState('');
    const [newStoreLocation, setNewStoreLocation] = useState('');
    const [newStorePhone, setNewStorePhone] = useState('');
    
    const [editingStore, setEditingStore] = useState<MedicalStore | null>(null);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const { language } = useLanguage();

    const handleAddStore = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!newStoreName || !newStoreLocation || !newStorePhone) {
            return;
        }

        const newStore: Omit<MedicalStore, 'id' | 'imageUrl' | 'aiHint'> = {
            name: { hi: newStoreName, en: newStoreName, bho: newStoreName },
            location: newStoreLocation,
            phone: newStorePhone,
        };

        addMedicalStore(newStore);
        
        setNewStoreName('');
        setNewStoreLocation('');
        setNewStorePhone('');
    };
    
    const handleEditStore = (store: MedicalStore) => {
        setEditingStore(store);
        setIsEditDialogOpen(true);
    };

    const handleUpdateStore = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingStore) return;

        updateMedicalStore(editingStore);
        
        setIsEditDialogOpen(false);
        setEditingStore(null);
    };

    return (
        <div className="space-y-8">
            <Card className="shadow-lg rounded-2xl border-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        मेडिकल स्टोर्स की सूची
                    </CardTitle>
                    <CardDescription>
                        यहां आप मेडिकल स्टोर की सूची देख सकते हैं, संपादित कर सकते हैं या हटा सकते हैं।
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg border overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>नाम</TableHead>
                                    <TableHead>पता</TableHead>
                                    <TableHead>फ़ोन नंबर</TableHead>
                                    <TableHead className="text-right">कार्रवाई</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {medicalStoresData.map(store => (
                                    <TableRow key={store.id}>
                                        <TableCell className="font-medium">{store.name[language]}</TableCell>
                                        <TableCell className="max-w-xs truncate">{store.location}</TableCell>
                                        <TableCell>{store.phone}</TableCell>
                                        <TableCell className="text-right space-x-1">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-primary hover:text-primary/80"
                                                onClick={() => handleEditStore(store)}
                                            >
                                                <Edit className="h-5 w-5" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => removeMedicalStore(store.id)}
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
                        नया मेडिकल स्टोर जोड़ें
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAddStore} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input 
                                placeholder="स्टोर का नाम"
                                value={newStoreName}
                                onChange={e => setNewStoreName(e.target.value)}
                                className="py-6 rounded-full"
                                required
                            />
                            <Input 
                                placeholder="स्टोर का पता"
                                value={newStoreLocation}
                                onChange={e => setNewStoreLocation(e.target.value)}
                                className="py-6 rounded-full"
                                required
                            />
                            <Input 
                                type="tel"
                                placeholder="फ़ोन नंबर"
                                value={newStorePhone}
                                onChange={e => setNewStorePhone(e.target.value)}
                                className="py-6 rounded-full"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full md:w-auto rounded-full py-6 text-lg font-bold">
                            <PlusCircle className="mr-2 h-5 w-5" />
                            स्टोर जोड़ें
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {editingStore && (
                <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>मेडिकल स्टोर की जानकारी संपादित करें</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleUpdateStore} className="space-y-4 pt-4">
                            <div>
                                <Label htmlFor="edit-name">नाम</Label>
                                <Input id="edit-name" value={editingStore.name.hi} onChange={e => setEditingStore({...editingStore, name: {hi: e.target.value, en: e.target.value, bho: e.target.value}})} />
                            </div>
                            <div>
                                <Label htmlFor="edit-location">पता</Label>
                                <Input id="edit-location" value={editingStore.location} onChange={e => setEditingStore({...editingStore, location: e.target.value})} />
                            </div>
                            <div>
                                <Label htmlFor="edit-phone">फ़ोन नंबर</Label>
                                <Input id="edit-phone" type="tel" value={editingStore.phone} onChange={e => setEditingStore({...editingStore, phone: e.target.value})} />
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
