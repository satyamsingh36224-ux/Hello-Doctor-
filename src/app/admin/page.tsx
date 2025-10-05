
"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
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
import { specializationMap } from "@/lib/doctors";
import type { Doctor } from "@/types";
import { PlusCircle, Trash2, Loader2, ShieldCheck, KeyRound } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useCollection, useFirestore, useMemoFirebase, addDocumentNonBlocking, deleteDocumentNonBlocking, useUser, useAuth } from "@/firebase";
import { collection, doc } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";

const initialNewDoctorState = {
  name: { hi: "", en: "", bho: "" },
  specializationKey: "General Physician",
  description: { hi: "", en: "", bho: "" },
  fee: 0,
  imageUrl: "👨‍⚕️",
  location: "",
  aiHint: "doctor",
};

const ADMIN_PASSWORD = "9007355062";

function AdminDashboard() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [newDoctor, setNewDoctor] = useState(initialNewDoctorState);
  const [isAdding, setIsAdding] = useState(false);

  const doctorsCollectionRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'doctors');
  }, [firestore]);
  
  const { data: doctors, isLoading } = useCollection<Doctor>(doctorsCollectionRef);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const [field, lang] = name.split(".");

    if (lang) {
      setNewDoctor((prev) => ({
        ...prev,
        [field]: { ...prev[field as keyof typeof prev], [lang]: value as any },
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

  const handleAddDoctor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore || !doctorsCollectionRef) {
        toast({ title: "Error", description: "Database not connected.", variant: "destructive" });
        return;
    }
    setIsAdding(true);
    const spec = specializationMap.find(
      (s) => s.key === newDoctor.specializationKey
    );
    if (!spec) {
        setIsAdding(false);
        return;
    };

    const doctorToAdd = {
      name: newDoctor.name,
      specialization: {
        key: spec.key,
        name: spec.name,
      },
      description: newDoctor.description,
      fee: Number(newDoctor.fee),
      imageUrl: newDoctor.imageUrl,
      location: newDoctor.location,
      aiHint: newDoctor.aiHint,
    };
    
    addDocumentNonBlocking(doctorsCollectionRef, doctorToAdd)
      .then(() => {
          toast({
              title: "Doctor Added Successfully",
              description: `${doctorToAdd.name.en} has been added to the database.`,
          });
          setNewDoctor(initialNewDoctorState);
      })
      .catch((error) => {
          console.error("Error adding doctor: ", error);
          toast({
              title: "Error",
              description: "Failed to add doctor. Please try again.",
              variant: "destructive",
          });
      })
      .finally(() => {
          setIsAdding(false);
      });
  };

  const handleRemoveDoctor = (id: string) => {
    if (!firestore) return;
    const docRef = doc(firestore, 'doctors', id);
    deleteDocumentNonBlocking(docRef);
    toast({
      title: "Doctor Removed",
      description: "The doctor has been removed from the database.",
      variant: "destructive",
    });
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2"><ShieldCheck className="h-8 w-8 text-primary"/> Admin Panel</h1>
        <p className="text-muted-foreground">
          Manage the list of doctors in the application.
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
                      <TableHead>Name (English)</TableHead>
                      <TableHead>Specialization</TableHead>
                      <TableHead>Fee</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {isLoading ? (
                      <TableRow>
                          <TableCell colSpan={4} className="text-center py-8">
                              <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                          </TableCell>
                      </TableRow>
                    ) : (
                      doctors?.map((doctor) => (
                      <TableRow key={doctor.id}>
                        <TableCell>{doctor.name.en}</TableCell>
                        <TableCell>
                          {doctor.specialization.name.en}
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
                    )))}
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
                Data will be saved to the Firebase database.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddDoctor} className="space-y-4">
                <Input
                  name="name.en"
                  placeholder="Name (English)"
                  value={newDoctor.name.en}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="name.hi"
                  placeholder="नाम (हिन्दी)"
                  value={newDoctor.name.hi}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="name.bho"
                  placeholder="नांव (भोजपुरी)"
                  value={newDoctor.name.bho}
                  onChange={handleInputChange}
                  required
                />
                <Select
                  onValueChange={handleSpecializationChange}
                  value={newDoctor.specializationKey}
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
                  name="description.en"
                  placeholder="Description (English)"
                  value={newDoctor.description.en}
                  onChange={handleInputChange}
                />
                <Textarea
                  name="description.hi"
                  placeholder="विवरण (हिन्दी)"
                  value={newDoctor.description.hi}
                  onChange={handleInputChange}
                />
                <Textarea
                  name="description.bho"
                  placeholder="विवरण (भोजपुरी)"
                  value={newDoctor.description.bho}
                  onChange={handleInputChange}
                />
                <Input
                  name="fee"
                  type="number"
                  placeholder="Fee"
                  value={newDoctor.fee}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="location"
                  placeholder="Location"
                  value={newDoctor.location}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="imageUrl"
                  placeholder="Image Emoji (e.g. 👨‍⚕️)"
                   value={newDoctor.imageUrl}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full" disabled={isAdding}>
                  {isAdding ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <PlusCircle className="mr-2 h-4 w-4" />}
                  Add Doctor
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { toast } = useToast();
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  
  useEffect(() => {
    if (user && user.isAnonymous) {
        setIsAuthenticated(true);
    }
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== ADMIN_PASSWORD) {
        setError("गलत पासवर्ड। कृपया पुनः प्रयास करें।");
        return;
    }
    
    if (!auth) {
        setError("Authentication service is not available.");
        return;
    }

    setIsLoggingIn(true);
    setError('');

    try {
        await signInAnonymously(auth);
        setIsAuthenticated(true);
        toast({
            title: "प्रवेश सफल",
            description: "एडमिन पैनल में आपका स्वागत है।",
        });
    } catch (err) {
        console.error("Anonymous sign-in error", err);
        setError("एडमिन के रूप में लॉग इन करने में विफल।");
        toast({
            title: "लॉगिन विफल",
            description: "एक त्रुटि हुई। कृपया फिर से प्रयास करें।",
            variant: "destructive"
        });
    } finally {
        setIsLoggingIn(false);
    }
  };

  if (isUserLoading) {
    return (
        <div className="flex h-screen items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {!isAuthenticated ? (
          <div className="flex justify-center items-center h-[60vh]">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><KeyRound/> एडमिन लॉगिन</CardTitle>
                <CardDescription>
                  एडमिन पैनल तक पहुंचने के लिए कृपया पासवर्ड दर्ज करें।
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <Input
                    type="password"
                    placeholder="पासवर्ड"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <Button type="submit" className="w-full" disabled={isLoggingIn}>
                    {isLoggingIn && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    लॉगिन करें
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        ) : (
          <AdminDashboard />
        )}
      </main>
    </div>
  );
}
