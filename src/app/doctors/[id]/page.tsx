
import { doctorsData } from "@/lib/doctors";
import { notFound } from "next/navigation";
import { DoctorProfileClient } from "@/components/DoctorProfileClient";
import type { Doctor } from "@/types";

export function generateStaticParams() {
  return doctorsData.map((doctor) => ({
    id: doctor.id,
  }));
}

function getDoctorById(id: string): Doctor | undefined {
    return doctorsData.find(d => d.id === id);
}

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = getDoctorById(params.id);

  if (!doctor) {
    notFound();
  }

  return <DoctorProfileClient doctor={doctor} />;
}
