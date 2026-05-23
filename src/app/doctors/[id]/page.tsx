
import { doctors } from "@/lib/doctors";
import { DoctorProfileClient } from "@/components/DoctorProfileClient";
import { notFound } from "next/navigation";

/**
 * generateStaticParams is required for dynamic routes when using output: 'export'.
 * It provides the list of all possible 'id' values to be pre-rendered at build time.
 */
export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  // We pass the pre-found doctor to the client component.
  // This removes the need for client-side loading states for the doctor data itself.
  return <DoctorProfileClient doctor={doctor} />;
}
