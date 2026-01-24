"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Loader2 } from "lucide-react";
import { resetPasswordRequest } from "@/lib/supabase/auth";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Validation Error", {
        description: "Please enter your email address",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await resetPasswordRequest(email);

      if (error) {
        toast.error("Request Failed", {
          description: error.message,
        });
        return;
      }

      toast.success("Email Sent!", {
        description: "Please check your email for the password reset code.",
        duration: 4000,
      });

      // Redirect to OTP verification page
      setTimeout(() => {
        router.push(`/verify-password-otp?email=${encodeURIComponent(email)}`);
      }, 1500);
    } catch (err) {
      console.error("Forgot password error:", err);
      toast.error("Error", {
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
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

        <div className="max-w-md mx-auto w-full py-12">
          <h2 className="text-[26px] text-gray-900 font-bold mb-3">
            Forgot password?
          </h2>
          <p className="text-gray-500 mb-8 text-[16px] leading-relaxed">
            If you forgot your password, well, then we'll email you instructions
            to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 pr-10 border-gray-200 focus:ring-[#FE9F43] focus:border-[#FE9F43]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
                <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FE9F43] hover:bg-[#e88d3a] text-white font-bold h-12 text-md shadow-sm"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm">
            <span className="text-gray-500">Return to </span>
            <Link
              href="/login"
              className="text-gray-900 font-bold hover:underline"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="text-center text-[13px] text-gray-500 py-4">
          Copyrights © 2025 - DreamsPOS
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-[#FFDABA] items-center justify-center p-12">
        <div className="relative w-full max-w-150 aspect-square">
          <Image
            src="/images/forgot-password.png"
            alt="Forgot Password Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
