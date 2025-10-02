
"use client";

import { useAppData } from "@/context/AppDataContext";
import { notFound, useParams } from "next/navigation";
import { DoctorProfileClient } from "@/components/DoctorProfileClient";
import type { Doctor } from "@/types";
import { useEffect, useState } from "react";

export default function DoctorProfilePage() {
  const { doctorsData } = useAppData();
  const params = useParams();
  const id = params.id as string;
  const [doctor, setDoctor] = useState<Doctor | undefined | null>(null);

  useEffect(() => {
    if (doctorsData.length > 0) {
      const foundDoctor = doctorsData.find(d => d.id === id);
      setDoctor(foundDoctor);
    }
  }, [id, doctorsData]);

  if (doctor === null) {
      // Loading state or initial state
      return <div>Loading...</div>;
  }

  if (!doctor) {
    notFound();
  }

  return <DoctorProfileClient doctor={doctor} />;
}
