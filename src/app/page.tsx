import { Header } from "@/components/Header";
import { DoctorCard } from "@/components/DoctorCard";
import type { Doctor } from "@/types";

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Ramesh Kumar",
    specialization: "Cardiologist",
    description: "Dr. Ramesh Kumar is a leading cardiologist in Gopalganj, specializing in heart-related diseases and preventive care. With over 15 years of experience, he is known for his patient-centric approach and expertise in managing complex cardiac conditions.",
    fee: 500,
    imageUrl: "https://placehold.co/600x400.png",
    location: "Gopalganj, Bihar, India",
  },
  {
    id: "2",
    name: "Dr. Sunita Sharma",
    specialization: "Pediatrician",
    description: "Dr. Sunita Sharma is a dedicated pediatrician committed to the health and well-being of children. She provides comprehensive care from infancy through adolescence, focusing on developmental monitoring, immunizations, and treatment of common childhood illnesses.",
    fee: 400,
    imageUrl: "https://placehold.co/600x400.png",
    location: "Gopalganj, Bihar, India",
  },
  {
    id: "3",
    name: "Dr. Anil Singh",
    specialization: "Dermatologist",
    description: "Dr. Anil Singh is an experienced dermatologist who treats a wide range of skin, hair, and nail conditions. His expertise includes cosmetic dermatology, acne treatment, and management of chronic skin diseases like psoriasis and eczema.",
    fee: 600,
    imageUrl: "https://placehold.co/600x400.png",
    location: "Gopalganj, Bihar, India",
  },
  {
    id: "4",
    name: "Dr. Meena Gupta",
    specialization: "Gynecologist",
    description: "Dr. Meena Gupta is a compassionate gynecologist and obstetrician offering a full spectrum of women's health services. She specializes in prenatal care, delivery, and managing gynecological issues with a focus on patient comfort and care.",
    fee: 550,
    imageUrl: "https://placehold.co/600x400.png",
    location: "Gopalganj, Bihar, India",
  },
    {
    id: "5",
    name: "Dr. Vikram Patel",
    specialization: "Orthopedic Surgeon",
    description: "Dr. Vikram Patel is a renowned orthopedic surgeon with expertise in joint replacement, sports injuries, and fracture care. He is dedicated to restoring mobility and improving the quality of life for his patients through surgical and non-surgical treatments.",
    fee: 700,
    imageUrl: "https://placehold.co/600x400.png",
    location: "Gopalganj, Bihar, India",
  },
  {
    id: "6",
    name: "Dr. Priya Desai",
    specialization: "General Physician",
    description: "Dr. Priya Desai is a trusted general physician who provides primary care for adults. She focuses on diagnosing and treating a wide variety of illnesses, managing chronic conditions, and promoting overall health and wellness through preventive care.",
    fee: 300,
    imageUrl: "https://placehold.co/600x400.png",
    location: "Gopalganj, Bihar, India",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl font-headline font-bold text-center mb-8 text-primary">
          Our Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 p-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Gopalganj Swasthya Seva. All rights reserved.</p>
      </footer>
    </div>
  );
}
