
"use client";

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';
import type { Doctor, MedicalStore } from '@/types';
import { initialDoctorsData } from '@/lib/doctors';
import { initialMedicalStoresData } from '@/lib/medical-stores';

interface AppDataContextType {
  doctorsData: Doctor[];
  setDoctorsData: Dispatch<SetStateAction<Doctor[]>>;
  medicalStoresData: MedicalStore[];
  setMedicalStoresData: Dispatch<SetStateAction<MedicalStore[]>>;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const [doctors, setDoctors] = useState<Doctor[]>(initialDoctorsData);
  const [medicalStores, setMedicalStores] = useState<MedicalStore[]>(initialMedicalStoresData);

  const value = {
    doctorsData: doctors,
    setDoctorsData: setDoctors,
    medicalStoresData: medicalStores,
    setMedicalStoresData: setMedicalStores,
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
