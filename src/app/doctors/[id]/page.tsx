
"use client";

import { notFound, useParams } from "next/navigation";
import { DoctorProfileClient } from "@/components/DoctorProfileClient";
import type { Doctor } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Header } from "@/components/Header";
import { useDoc, useFirestore, useMemoFirebase } from "@/firebase";
import { doc } from "firebase/firestore";


export default function DoctorProfilePage() {
  const params = useParams();
  const id = params.id as string;
  const firestore = useFirestore();

  const doctorRef = useMemoFirebase(() => {
    if (!firestore || !id) return null;
    return doc(firestore, 'doctors', id);
  }, [firestore, id]);

  const { data: doctor, isLoading } = useDoc<Doctor>(doctorRef);

  if (isLoading) {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                 <Skeleton className="h-8 w-48 mb-4" />
                 <div className="p-6 bg-card rounded-2xl border">
                    <div className="flex justify-between items-start">
                        <div className="space-y-2">
                             <Skeleton className="h-8 w-64" />
                             <Skeleton className="h-6 w-40" />
                        </div>
                        <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                     <Skeleton className="h-60 w-full mt-6 mb-6 rounded-2xl" />
                     <div className="flex items-center gap-6 mb-4">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-6 w-40" />
                     </div>
                      <Skeleton className="h-6 w-1/2 mb-6" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                      </div>
                      <div className="flex gap-4 mt-6">
                        <Skeleton className="h-12 flex-1 rounded-full" />
                        <Skeleton className="h-12 flex-1 rounded-full" />
                      </div>
                 </div>
            </div>
        </main>
    </div>
    )
  }

  if (!doctor && !isLoading) {
    notFound();
  }

  // Render DoctorProfileClient only if doctor data is available
  return doctor ? <DoctorProfileClient doctor={doctor} /> : null;
}
