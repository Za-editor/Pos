"use client";

import { useState } from "react";
import { useRouter, } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeOff, Eye, Loader2 } from "lucide-react";
import { updatePassword } from "@/lib/supabase/auth";
import { toast } from "sonner";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
 

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (newPassword.length < 6) {
      toast.error("Validation Error", {
        description: "Password must be at least 6 characters long",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Validation Error", {
        description: "Passwords do not match",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await updatePassword(newPassword);

      if (error) {
        toast.error("Password Reset Failed", {
          description: error.message,
        });
        return;
      }

      toast.success("Password Updated!", {
        description: "Your password has been successfully changed.",
      });

      // Redirect to success page
      setTimeout(() => {
        router.push("/success");
      }, 1000);
    } catch (err) {
      console.error("Password reset error:", err);
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

        <div className="max-w-md mx-auto w-full py-8">
          <h2 className="text-[26px] text-gray-900 font-bold mb-2">
            Reset password?
          </h2>
          <p className="text-gray-500 mb-8 text-[16px]">
            Enter New Password & Confirm Password to get inside
          </p>

          <form onSubmit={handleReset} className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="h-12 pr-10 border-gray-200 focus-visible:ring-[#FE9F43]"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-3.5"
                >
                  {showNewPassword ? (
                    <Eye className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-12 pr-10 border-gray-200 focus-visible:ring-[#FE9F43]"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3.5"
                >
                  {showConfirmPassword ? (
                    <Eye className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FE9F43] hover:bg-[#f09a42] text-white h-12 text-md shadow-sm"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Changing Password...
                </>
              ) : (
                "Change Password"
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
            src="/images/reset-password.png"
            alt="Reset Password Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
