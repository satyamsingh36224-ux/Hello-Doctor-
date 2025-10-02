
"use client";

import { useAppData } from "@/context/AppDataContext";
import { notFound, useParams } from "next/navigation";
import { DoctorProfileClient } from "@/components/DoctorProfileClient";
import type { Doctor } from "@/types";
import { useEffect, useState } from "react";

export default function DoctorProfilePage() {
  const { doctorsData, loading } = useAppData();
  const params = useParams();
  const id = params.id as string;
  const [doctor, setDoctor] = useState<Doctor | undefined | null>(undefined);

  useEffect(() => {
    if (!loading && doctorsData.length > 0) {
      const foundDoctor = doctorsData.find(d => d.id === id);
      setDoctor(foundDoctor || null);
    }
  }, [id, doctorsData, loading]);

  if (doctor === undefined || loading) {
      // Loading state or initial state
      return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (doctor === null) {
    notFound();
  }

  return <DoctorProfileClient doctor={doctor} />;
}
