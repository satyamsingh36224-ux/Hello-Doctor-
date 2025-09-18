
"use client";

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from "@/components/Header";
import { DoctorCard } from "@/components/DoctorCard";
import { Button } from '@/components/ui/button';
import { doctorsData } from '@/lib/doctors';
import { JaanchKendra } from '@/components/JaanchKendra';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

function DoctorsList() {
  const searchParams = useSearchParams();
  const selectedSpecialization = searchParams.get('specialization') || 'all';
  const { translations } = useLanguage();
  const t = translations.doctorsPage;

  const filteredDoctors = doctorsData.filter(doctor => {
    const specializationMatch = selectedSpecialization === 'all' || doctor.specialization.key === selectedSpecialization;
    return specializationMatch;
  });

  return (
    <>
      <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{t.topDoctors}</h2>
          <Button variant="link" className="text-primary">{t.viewAll}</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
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

  useEffect(() => {
    toast({
      title: t.welcomeToast,
      description: t.welcomeToastDesc,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <DoctorsList />
        </Suspense>

      </main>
      <footer className="bg-transparent p-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Hello Doctor.{t.footerText}</p>
      </footer>
    </div>
  );
}
