// IMPORTANT: This is a demo admin panel. Changes made here will NOT be saved.
// The data is managed in the src/lib/doctors.ts file directly.

"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { doctors as initialDoctors, specializationMap } from "@/lib/doctors";
import type { Doctor } from "@/types";
import { PlusCircle, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function AdminPage() {
  const { translations, language } = useLanguage();
  const { toast } = useToast();
  const [doctors, setDoctors] = useState<Doctor[]>(initialDoctors);
  const [newDoctor, setNewDoctor] = useState({
    id: "",
    name: { hi: "", en: "", bho: "" },
    specializationKey: "General Physician",
    description: { hi: "", en: "", bho: "" },
    fee: 0,
    imageUrl: "👨‍⚕️",
    location: "",
    aiHint: "doctor",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const [field, lang] = name.split(".");

    if (lang) {
      setNewDoctor((prev) => ({
        ...prev,
        [field]: { ...prev[field as keyof typeof prev], [lang]: value },
      }));
    } else {
      setNewDoctor((prev) => ({
        ...prev,
        [name]: name === "fee" ? Number(value) : value,
      }));
    }
  };

  const handleSpecializationChange = (value: string) => {
    setNewDoctor((prev) => ({ ...prev, specializationKey: value }));
  };

  const handleAddDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    const spec = specializationMap.find(
      (s) => s.key === newDoctor.specializationKey
    );
    if (!spec) return;

    const doctorToAdd: Doctor = {
      ...newDoctor,
      id: `doc-${doctors.length + 1}`,
      specialization: {
        key: spec.key,
        name: spec.name,
      },
      fee: Number(newDoctor.fee)
    };

    setDoctors((prev) => [...prev, doctorToAdd]);
    toast({
      title: "Doctor Added (Demo)",
      description: "This change is temporary and will be lost on refresh.",
    });
  };

  const handleRemoveDoctor = (id: string) => {
    setDoctors((prev) => prev.filter((doc) => doc.id !== id));
    toast({
      title: "Doctor Removed (Demo)",
      description: "This change is temporary and will be lost on refresh.",
      variant: "destructive",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Panel (Demo)</h1>
          <p className="text-muted-foreground">
            Changes made here are not saved. Data is managed in `src/lib/doctors.ts`.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Manage Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Specialization</TableHead>
                        <TableHead>Fee</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {doctors.map((doctor) => (
                        <TableRow key={doctor.id}>
                          <TableCell>{doctor.name[language]}</TableCell>
                          <TableCell>
                            {doctor.specialization.name[language]}
                          </TableCell>
                          <TableCell>{doctor.fee}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveDoctor(doctor.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Add New Doctor</CardTitle>
                <CardDescription>
                  This will be added to the list temporarily.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddDoctor} className="space-y-4">
                  <Input
                    name="name.hi"
                    placeholder="नाम (हिन्दी)"
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="name.en"
                    placeholder="Name (English)"
                    onChange={handleInputChange}
                    required
                  />
                  <Select
                    onValueChange={handleSpecializationChange}
                    defaultValue={newDoctor.specializationKey}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      {specializationMap.map((spec) => (
                        <SelectItem key={spec.key} value={spec.key}>
                          {spec.name.en}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Textarea
                    name="description.hi"
                    placeholder="विवरण (हिन्दी)"
                    onChange={handleInputChange}
                  />
                  <Input
                    name="fee"
                    type="number"
                    placeholder="Fee"
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="location"
                    placeholder="Location"
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="imageUrl"
                    placeholder="Image Emoji (e.g. 👨‍⚕️)"
                    onChange={handleInputChange}
                    required
                  />
                  <Button type="submit" className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Doctor (Demo)
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
