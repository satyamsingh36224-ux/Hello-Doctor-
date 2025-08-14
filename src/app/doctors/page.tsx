
"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from "@/components/Header";
import { DoctorCard } from "@/components/DoctorCard";
import { AppointmentHistory } from "@/components/AppointmentHistory";
import { Button } from '@/components/ui/button';
import { doctorsData } from '@/lib/doctors';


function DoctorsList() {
  const searchParams = useSearchParams();
  const selectedSpecialization = searchParams.get('specialization') || 'all';

  const filteredDoctors = doctorsData.filter(doctor => {
    const specializationMatch = selectedSpecialization === 'all' || doctor.specialization === selectedSpecialization;
    return specializationMatch;
  });

  return (
    <>
      <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">शीर्ष डॉक्टर</h2>
          <Button variant="link" className="text-primary">सभी देखें</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">इस विशेषज्ञता के लिए कोई डॉक्टर नहीं मिला।</p>
          </div>
        )}
      </div>
    </>
  );
}


export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <DoctorsList />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
            <div className="lg:col-span-3">
                <AppointmentHistory />
            </div>
        </div>
      </main>
      <footer className="bg-transparent p-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} गोपालगंज विकास हेल्थ केयर। सर्वाधिकार सुरक्षित।</p>
      </footer>
    </div>
  );
}
