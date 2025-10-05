
"use client";

import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import type { Doctor, MedicalStore } from '@/types';
import { useCollection } from '@/firebase';
import { collection, doc, addDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import placeholderImages from '@/lib/placeholder-images.json';

interface AppDataContextType {
  doctorsData: Doctor[];
  addDoctor: (doctor: Omit<Doctor, 'id'>) => Promise<void>;
  updateDoctor: (doctor: Doctor) => Promise<void>;
  removeDoctor: (id: string) => Promise<void>;
  medicalStoresData: MedicalStore[];
  addMedicalStore: (store: Omit<MedicalStore, 'id'>) => Promise<void>;
  updateMedicalStore: (store: MedicalStore) => Promise<void>;
  removeMedicalStore: (id: string) => Promise<void>;
  loading: boolean;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const firestore = useFirestore();
  const { data: rawDoctorsData, loading: doctorsLoading, error: doctorsError } = useCollection<Omit<Doctor, 'id'|'imageUrl'|'aiHint'>>(firestore ? 'doctors' : null);
  const { data: rawMedicalStoresData, loading: medicalStoresLoading, error: medicalStoresError } = useCollection<Omit<MedicalStore, 'id'|'imageUrl'|'aiHint'>>(firestore ? 'medical-stores' : null);
  
  const doctorsData = useMemo(() => {
    if (!rawDoctorsData) return [];
    return rawDoctorsData.map((doctor, index) => {
      const placeholder = placeholderImages.doctors[index % placeholderImages.doctors.length];
      return {
        ...doctor,
        imageUrl: placeholder.imageUrl,
        aiHint: placeholder.aiHint,
      };
    });
  }, [rawDoctorsData]);

  const medicalStoresData = useMemo(() => {
    if (!rawMedicalStoresData) return [];
    return rawMedicalStoresData.map((store, index) => {
      const placeholder = placeholderImages.medical_stores[index % placeholderImages.medical_stores.length];
      return {
        ...store,
        imageUrl: placeholder.imageUrl,
        aiHint: placeholder.aiHint,
      };
    });
  }, [rawMedicalStoresData]);

  const { toast } = useToast();

  const addDoctor = async (doctor: Omit<Doctor, 'id' | 'imageUrl' | 'aiHint'>) => {
    if (!firestore) {
        toast({ title: "त्रुटि", description: "डेटाबेस कनेक्ट नहीं है।", variant: "destructive" });
        return;
    };
    try {
      await addDoc(collection(firestore, 'doctors'), doctor);
      toast({ title: "डॉक्टर जोड़ा गया", description: "नया डॉक्टर सफलतापूर्वक जोड़ा गया।" });
    } catch (e) {
      console.error("Error adding doctor: ", e);
      toast({ title: "त्रुटि", description: "डॉक्टर को जोड़ने में विफल।", variant: "destructive" });
    }
  };

  const updateDoctor = async (doctor: Doctor) => {
    if (!firestore) {
        toast({ title: "त्रुटि", description: "डेटाबेस कनेक्ट नहीं है।", variant: "destructive" });
        return;
    };
    try {
      const { id, imageUrl, aiHint, ...data } = doctor;
      await setDoc(doc(firestore, 'doctors', id), data);
      toast({ title: "डॉक्टर अपडेट किया गया", description: "डॉक्टर की जानकारी सफलतापूर्वक अपडेट की गई।" });
    } catch (e) {
      console.error("Error updating doctor: ", e);
      toast({ title: "त्रुटि", description: "डॉक्टर को अपडेट करने में विफल।", variant: "destructive" });
    }
  };

  const removeDoctor = async (id: string) => {
    if (!firestore) {
        toast({ title: "त्रुटि", description: "डेटाबेस कनेक्ट नहीं है।", variant: "destructive" });
        return;
    };
    try {
      await deleteDoc(doc(firestore, 'doctors', id));
      toast({ title: "डॉक्टर हटाया गया", description: "डॉक्टर को सफलतापूर्वक हटा दिया गया है।" });
    } catch (e) {
      console.error("Error removing doctor: ", e);
      toast({ title: "त्रुटि", description: "डॉक्टर को हटाने में विफल।", variant: "destructive" });
    }
  };
  
  const addMedicalStore = async (store: Omit<MedicalStore, 'id' | 'imageUrl' | 'aiHint'>) => {
    if (!firestore) {
        toast({ title: "त्रुटि", description: "डेटाबेस कनेक्ट नहीं है।", variant: "destructive" });
        return;
    };
    try {
      await addDoc(collection(firestore, 'medical-stores'), store);
      toast({ title: "मेडिकल स्टोर जोड़ा गया", description: "नया मेडिकल स्टोर सफलतापूर्वक जोड़ा गया।" });
    } catch (e) {
      console.error("Error adding medical store: ", e);
      toast({ title: "त्रुटि", description: "मेडिकल स्टोर को जोड़ने में विफल।", variant: "destructive" });
    }
  };

  const updateMedicalStore = async (store: MedicalStore) => {
    if (!firestore) {
        toast({ title: "त्रुटि", description: "डेटाबेस कनेक्ट नहीं है।", variant: "destructive" });
        return;
    };
    try {
      const { id, imageUrl, aiHint, ...data } = store;
      await setDoc(doc(firestore, 'medical-stores', id), data);
      toast({ title: "मेडिकल स्टोर अपडेट किया गया", description: "स्टोर की जानकारी सफलतापूर्वक अपडेट की गई।" });
    } catch (e) {
      console.error("Error updating medical store: ", e);
      toast({ title: "त्रुटि", description: "मेडिकल स्टोर को अपडेट करने में विफल।", variant: "destructive" });
    }
  };

  const removeMedicalStore = async (id: string) => {
    if (!firestore) {
        toast({ title: "त्रुटि", description: "डेटाबेस कनेक्ट नहीं है।", variant: "destructive" });
        return;
    };
    try {
      await deleteDoc(doc(firestore, 'medical-stores', id));
      toast({ title: "मेडिकल स्टोर हटाया गया", description: "स्टोर को सफलतापूर्वक हटा दिया गया है।" });
    } catch (e) {
      console.error("Error removing medical store: ", e);
      toast({ title: "त्रुटि", description: "मेडिकल स्टोर को हटाने में विफल।", variant: "destructive" });
    }
  };


  const loading = useMemo(() => doctorsLoading || medicalStoresLoading, [doctorsLoading, medicalStoresLoading]);

  const value = {
    doctorsData,
    addDoctor,
    updateDoctor,
    removeDoctor,
    medicalStoresData,
    addMedicalStore,
    updateMedicalStore,
    removeMedicalStore,
    loading,
  };

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (context === undefined) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
};
