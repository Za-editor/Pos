"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Timer } from "lucide-react";

export default function OtpVerificationPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  // Helper to handle OTP input focus jumping
  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="flex min-h-screen font-sans text-[#4B4B4B] bg-white">
     
      <div className="flex flex-col w-full lg:w-1/2 p-6 md:p-12 justify-between">
       
        <div className="flex justify-center  w-full">
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
            OTP sent to your Email Address ending ******doe@example.com
          </p>

          <form className="space-y-8">
           
            <div className="flex justify-between gap-4">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  className="h-21 w-115 text-center text-xl font-bold border-gray-200 focus:ring-[#FE9F43] focus:border-[#FE9F43]"
                />
              ))}
            </div>

            
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-2 bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-bold">
                <Timer className="h-3 w-3" />
                09:59 s
              </div>

              <p className="text-sm text-gray-500">
                {"Didn't get the OTP? "}
                <button
                  type="button"
                  className="text-gray-900 font-bold hover:underline"
                >
                  Resend OTP
                </button>
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FE9F43] hover:bg-[#f09a42] text-white  h-12 text-md shadow-sm"
              disabled={loading}
            >
              Verify & Proceed
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
