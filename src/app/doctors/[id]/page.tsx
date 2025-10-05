
"use client";

import { notFound, useParams } from "next/navigation";
import { DoctorProfileClient } from "@/components/DoctorProfileClient";
import type { Doctor } from "@/types";
import { doctors } from "@/lib/doctors";

export default function DoctorProfilePage() {
  const params = useParams();
  const id = params.id as string;
  
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    notFound();
  }

  return <DoctorProfileClient doctor={doctor} />;
}
