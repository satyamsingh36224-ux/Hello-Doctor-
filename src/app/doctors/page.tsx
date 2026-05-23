
"use client";

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from "@/components/Header";
import { DoctorCard } from "@/components/DoctorCard";
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';
import { useLocation } from '@/context/LocationContext';
import { doctors as allDoctors } from '@/lib/doctors';
import type { Doctor } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

function DoctorsList() {
  const searchParams = useSearchParams();
  const selectedSpecialization = searchParams.get('specialization') || 'all';
  const { translations } = useLanguage();
  const { location } = useLocation();
  const t = translations.doctorsPage;
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let filteredDoctors = allDoctors.filter(d => d.city === location);

    if (selectedSpecialization !== 'all') {
      filteredDoctors = filteredDoctors.filter(
        (doctor) => doctor.specialization.key === selectedSpecialization
      );
    }
    
    // Simulate network delay
    setTimeout(() => {
      setDoctors(filteredDoctors);
      setIsLoading(false);
    }, 500);
  }, [selectedSpecialization, location]);

  if (isLoading) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-card rounded-2xl border">
                    <Skeleton className="h-32 w-32 rounded-2xl" />
                    <div className="space-y-2 w-full">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-full" />
                        <div className="flex gap-2 pt-2">
                           <Skeleton className="h-10 w-1/2 rounded-full" />
                           <Skeleton className="h-10 w-1/2 rounded-full" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
  }

  return (
    <>
      <div className="mb-4">
          <h2 className="text-2xl font-bold">{t.topDoctors}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
            <div className="col-span-full text-center py-12 bg-card rounded-2xl border">
              <p className="text-muted-foreground text-lg">{t.noDoctorsFound}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default function DoctorsPage() {
  const { toast } = useToast();
  const { translations } = useLanguage();
  const t = translations.doctorsPage;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      toast({
        title: t.welcomeToast,
        description: t.welcomeToastDesc,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <DoctorsList />
        </Suspense>

      </main>
    </div>
  );
}
