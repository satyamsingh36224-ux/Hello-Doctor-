
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, HeartPulse, Shield, Lock, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";
import { Logo } from "@/components/Logo";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { SplashScreen } from "@/components/SplashScreen";
import { useAuth, useUser } from "@/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber, type ConfirmationResult } from "firebase/auth";

export default function LoginPage() {
  const [showSplash, setShowSplash] = useState(true);
  const { language, setLanguage, translations } = useLanguage();
  const router = useRouter();
  const t = translations.loginPage;
  const { toast } = useToast();
  const auth = useAuth();
  const { user, loading: userLoading } = useUser();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    if (!userLoading && user) {
      router.push("/select-specialization");
    }
  }, [user, userLoading, router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (auth && !user && !window.recaptchaVerifier) {
      // Ensure auth is available and user is not logged in before creating the verifier.
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          'size': 'invisible',
          'callback': (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          }
      });
    }
  }, [auth, user]);

  const handlePhoneLogin = async () => {
    if (!auth) {
        toast({ title: "Error", description: "Authentication service not ready.", variant: "destructive" });
        return;
    }

    setLoading(true);
    try {
        const appVerifier = window.recaptchaVerifier;
        const result = await signInWithPhoneNumber(auth, `+91${phoneNumber}`, appVerifier);
        setConfirmationResult(result);
        setOtpSent(true);
        toast({ title: "OTP Sent", description: "An OTP has been sent to your phone number." });
    } catch (error: any) {
        console.error("Error sending OTP", error);
        toast({ title: "Error", description: error.message, variant: "destructive" });
        // It's good practice to offer a way for the user to retry, which might involve re-rendering reCAPTCHA.
        // For invisible reCAPTCHA, this often means just letting them click the button again.
    } finally {
        setLoading(false);
    }
  };

  const handleOtpConfirm = async () => {
    if (!confirmationResult) return;
    setLoading(true);
    try {
        await confirmationResult.confirm(otp);
        toast({ title: "Login Successful!", description: "Welcome to Hello Doctor." });
        router.push("/select-specialization");
    } catch (error: any) {
        console.error("Error confirming OTP", error);
        toast({ title: "Error", description: "Invalid OTP. Please try again.", variant: "destructive" });
    } finally {
        setLoading(false);
    }
  };

  const handleAdminClick = () => {};

  const handleSocialLoginClick = () => {
    toast({
      title: t.googleFacebookLoginDisabledTitle,
      description: t.googleFacebookLoginDisabledDesc,
      variant: "destructive",
    });
  };

  if (showSplash || userLoading || user) {
    return <SplashScreen />;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <div id="recaptcha-container"></div>
      <div className="absolute top-4 right-4 z-20">
        <Select
          value={language}
          onValueChange={(value: Language) => setLanguage(value)}
        >
          <SelectTrigger
            suppressHydrationWarning
            className="w-auto rounded-full border-border/50 bg-background/80 backdrop-blur-sm text-sm h-10 px-4"
          >
            <Globe className="h-4 w-4 mr-2" />
            <SelectValue placeholder={t.selectLanguage} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hi">हिन्दी</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="bho">भोजपुरी</SelectItem>
          </SelectContent>
        </Select>
      </div>

        <Card className="max-w-sm w-full shadow-2xl rounded-2xl border-border/50 bg-card/80 backdrop-blur-sm z-10">
                <CardHeader className="text-center flex flex-col items-center gap-2 pt-8">
                    <div onClick={handleAdminClick} className="cursor-pointer flex flex-col items-center gap-2">
                      <Logo />
                      <CardTitle className="text-3xl font-bold tracking-tight">
                          Hello Doctor
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base text-muted-foreground px-4">
                        {t.subTitle}
                    </CardDescription>
                </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
               <Button
                suppressHydrationWarning
                variant="outline"
                onClick={handleSocialLoginClick}
                className="w-full py-5 rounded-full text-sm font-semibold"
              >
                  <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.2 172.9 56.7L368.7 128C330.5 94.5 292.2 78.2 248 78.2c-101.7 0-184.4 82.7-184.4 184.4S146.3 437 248 437c58.4 0 106.3-24.2 138.6-56.6 27.8-27.5 41.6-67.7 44-114.8H248v-85.3h236.1c2.3 12.7 3.9 26.9 3.9 41.8z"></path></svg>
                {t.continueWithGoogle}
              </Button>
              <Button
                suppressHydrationWarning
                variant="outline"
                onClick={handleSocialLoginClick}
                className="w-full py-5 rounded-full text-sm font-semibold"
              >
                  <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                {t.continueWithFacebook}
              </Button>
              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">{t.or}</span>
                </div>
              </div>
              {!otpSent ? (
                <div className="space-y-2">
                   <Input
                    suppressHydrationWarning
                    id="phone"
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    className="py-5 rounded-full bg-background"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <Button
                    suppressHydrationWarning
                    onClick={handlePhoneLogin}
                    disabled={loading || phoneNumber.length !== 10}
                    className="w-full py-5 rounded-full text-sm font-semibold"
                  >
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {t.continueWithPhone}
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                    <Input
                        id="otp"
                        type="number"
                        placeholder="OTP દાખલ કરો"
                        className="py-5 rounded-full bg-background"
                        required
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <Button
                        onClick={handleOtpConfirm}
                        disabled={loading || otp.length !== 6}
                        className="w-full py-5 rounded-full text-sm font-semibold"
                    >
                         {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        OTP की पुष्टि करें
                    </Button>
                </div>
              )}
               <Button
                suppressHydrationWarning
                asChild
                variant="outline"
                className="w-full py-5 rounded-full text-sm font-semibold mt-2 text-primary border-primary/50 hover:bg-primary/5 hover:text-primary"
              >
                <Link href="/other-services">
                  <HeartPulse className="mr-2 h-4 w-4" />
                  {t.otherServices}
                </Link>
              </Button>
            </div>
            <div className="text-center text-xs text-muted-foreground mt-2">
                <p>{t.signInPrompt}</p>
            </div>
          </CardContent>
        </Card>
        <p className="absolute bottom-4 text-muted-foreground font-cursive text-lg">
            {t.createdBy}
        </p>
    </div>
  );
}

    