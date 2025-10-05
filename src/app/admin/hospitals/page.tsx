
"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import type { Hospital } from "@/types";
import { PlusCircle, Trash2, Loader2, ShieldCheck, KeyRound, Hospital as HospitalIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCollection, useFirestore, useMemoFirebase, setDocumentNonBlocking, deleteDocumentNonBlocking, useUser, useAuth } from "@/firebase";
import { collection, doc } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";

const initialNewHospitalState = {
  name: { hi: "", en: "", bho: "" },
  location: "",
  phone: "",
  imageUrl: "🏥",
  aiHint: "hospital building",
};

const ADMIN_PASSWORD = "9007355062";

function AdminHospitalsDashboard() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [newHospital, setNewHospital] = useState(initialNewHospitalState);
  const [isAdding, setIsAdding] = useState(false);

  const hospitalsCollectionRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'hospitals');
  }, [firestore]);
  
  const { data: hospitals, isLoading } = useCollection<Hospital>(hospitalsCollectionRef);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const [field, lang] = name.split(".");

    if (lang) {
      setNewHospital((prev) => ({
        ...prev,
        [field]: { ...prev[field as keyof typeof prev], [lang]: value as any },
      }));
    } else {
      setNewHospital((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddHospital = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore) {
        toast({ title: "Error", description: "Database not connected.", variant: "destructive" });
        return;
    }
    setIsAdding(true);
    
    const id = newHospital.name.en.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();
    const docRef = doc(firestore, 'hospitals', id);

    const hospitalToAdd = {
      id: id,
      name: newHospital.name,
      location: newHospital.location,
      phone: newHospital.phone,
      imageUrl: newHospital.imageUrl,
      aiHint: newHospital.aiHint,
    };
    
    setDocumentNonBlocking(docRef, hospitalToAdd)
      .then(() => {
          toast({
              title: "Hospital Added Successfully",
              description: `${hospitalToAdd.name.en} has been added to the database.`,
          });
          setNewHospital(initialNewHospitalState);
      })
      .catch(() => {
          // The permission error is handled by the global error handler
      })
      .finally(() => {
          setIsAdding(false);
      });
  };

  const handleRemoveHospital = (id: string) => {
    if (!firestore) return;
    const docRef = doc(firestore, 'hospitals', id);
    deleteDocumentNonBlocking(docRef)
    .then(() => {
      toast({
        title: "Hospital Removed",
        description: "The hospital has been removed from the database.",
      });
    })
    .catch(() => {
      // The permission error is handled by the global error handler
    });
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2"><HospitalIcon className="h-8 w-8 text-primary"/> अस्पताल प्रबंधित करें</h1>
        <p className="text-muted-foreground">
          एप्लिकेशन में अस्पतालों की सूची प्रबंधित करें।
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>अस्पतालों की सूची</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name (English)</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Phone</TableHead>
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
                      hospitals?.map((hospital) => (
                      <TableRow key={hospital.id}>
                        <TableCell>{hospital.name.en}</TableCell>
                        <TableCell>{hospital.location}</TableCell>
                        <TableCell>{hospital.phone}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveHospital(hospital.id)}
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
              <CardTitle>नया अस्पताल जोड़ें</CardTitle>
              <CardDescription>
                यह डेटा Firebase डेटाबेस में सहेजा जाएगा।
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddHospital} className="space-y-4">
                <Input
                  name="name.en"
                  placeholder="Name (English)"
                  value={newHospital.name.en}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="name.hi"
                  placeholder="नाम (हिन्दी)"
                  value={newHospital.name.hi}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="name.bho"
                  placeholder="नांव (भोजपुरी)"
                  value={newHospital.name.bho}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="location"
                  placeholder="Location"
                  value={newHospital.location}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={newHospital.phone}
                  onChange={handleInputChange}
                />
                <Input
                  name="imageUrl"
                  placeholder="Image Emoji (e.g. 🏥)"
                   value={newHospital.imageUrl}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full" disabled={isAdding}>
                  {isAdding ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <PlusCircle className="mr-2 h-4 w-4" />}
                  Add Hospital
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default function AdminHospitalsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { toast } = useToast();
  const { user, loading: isUserLoading } = useUser();
  const auth = useAuth();
  
  useEffect(() => {
    if (user) {
        setIsAuthenticated(true);
    } else {
        setIsAuthenticated(false);
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
          <AdminHospitalsDashboard />
        )}
      </main>
    </div>
  );
}
