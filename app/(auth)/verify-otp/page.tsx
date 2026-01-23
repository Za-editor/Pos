"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Timer, Loader2 } from "lucide-react";
import { verifyOtp, resendOtp } from "@/lib/supabase/auth";
import { toast } from "sonner";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const email = searchParams.get("email") || "";
  const type = (searchParams.get("type") as "signup" | "email") || "signup";

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Mask email for display
  const maskEmail = (email: string) => {
    const [username, domain] = email.split("@");
    const maskedUsername = username.slice(0, 2) + "****" + username.slice(-2);
    return `${maskedUsername}@${domain}`;
  };

  // Handle OTP input
  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value)) && value !== "") return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    // Focus last filled input or next empty
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  // Handle verify
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      toast.error("Invalid OTP", {
        description: "Please enter all 6 digits",
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await verifyOtp(email, otpCode, type);

      if (error) {
        toast.error("Verification Failed", {
          description: error.message,
        });
        return;
      }

      if (data.user) {
        toast.success("Email Verified!", {
          description: "Your account has been verified successfully.",
        });

        setTimeout(() => {
          if (type === "signup") {
            router.push("/dashboard");
          } else {
            router.push("/login");
          }
          router.refresh();
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      
      toast.error("Error", {
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle resend OTP
  const handleResend = async () => {
    setResending(true);

    try {
      const { error } = await resendOtp(email);

      if (error) {
        toast.error("Resend Failed", {
          description: error.message,
        });
        return;
      }

      toast.success("OTP Resent", {
        description: "A new verification code has been sent to your email.",
      });

      // Reset timer
      setTimeLeft(600);
      // Clear OTP inputs
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch (err) {
      console.log(err);
      
      toast.error("Error", {
        description: "Failed to resend OTP. Please try again.",
      });
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="flex min-h-screen font-sans text-[#4B4B4B] bg-white">
      <div className="flex flex-col w-full lg:w-1/2 p-6 md:p-12 justify-between">
        <div className="flex justify-center w-full">
          <div className="relative w-40 h-16">
            <Image
              src="/images/logo/logo.png"
              alt="DreamsPOS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="max-w-md mx-auto w-full py-8">
          <h2 className="text-[26px] text-gray-900 font-bold mb-2">
            Email OTP Verification
          </h2>
          <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
            OTP sent to your Email Address {maskEmail(email)}
          </p>

          <form onSubmit={handleVerify} className="space-y-8">
            <div className="flex justify-between gap-2">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="h-14 w-14 text-center text-xl font-bold border-gray-200 focus:ring-[#FE9F43] focus:border-[#FE9F43]"
                  disabled={loading}
                />
              ))}
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-2 bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-bold">
                <Timer className="h-3 w-3" />
                {formatTime(timeLeft)}
              </div>

              <p className="text-sm text-gray-500">
                {"Didn't get the OTP? "}
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resending || timeLeft > 0}
                  className="text-gray-900 font-bold hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resending ? "Resending..." : "Resend OTP"}
                </button>
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FE9F43] hover:bg-[#f09a42] text-white h-12 text-md shadow-sm"
              disabled={loading || otp.some((digit) => !digit)}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify & Proceed"
              )}
            </Button>
          </form>
        </div>

        <div className="text-center text-[13px] text-gray-500 py-4">
          Copyrights © 2025 - DreamsPOS
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-[#FFDABA] items-center justify-center p-12">
        <div className="relative w-full max-w-150 aspect-square">
          <Image
            src="/images/email-verification.png"
            alt="OTP Verification Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
