"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, EyeOff, Eye, Loader2 } from "lucide-react";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { FacebookOutlined, AppleBrandOutlined } from "@lineiconshq/free-icons";
import { signIn, signInWithOAuth } from "@/lib/supabase/auth";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

export default function LoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      toast.error("Authentication Error", {
        description: decodeURIComponent(error),
      });
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await signIn(email, password);

      if (error) {
        toast.error("Login Failed", {
          description: error.message,
        });
        return;
      }

      if (data.user) {
        toast.success("Welcome back!", {
          description: "Login successful. Redirecting...",
        });

        setTimeout(() => {
          router.push("/dashboard");
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

  const handleSocialLogin = async (
    provider: "google" | "facebook" | "apple",
  ) => {
    try {
      const { error } = await signInWithOAuth(provider);

      if (error) {
        toast.error("Authentication Failed", {
          description: error.message,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Error", {
        description: "Failed to initiate social login.",
      });
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
          <h2 className="text-[26px] text-gray-900 font-bold mb-2">Sign In</h2>
          <p className="text-gray-500 mb-8 text-[16px]">
            Access the Dreamspos panel using your email and passcode.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 pr-10 border-gray-200 focus-visible:ring-[#FE9F43]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
                <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-12 pr-10 border-gray-200 focus-visible:ring-[#FE9F43]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5"
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                  className="border-gray-300 data-[state=checked]:bg-[#FE9F43] data-[state=checked]:border-[#FE9F43]"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Remember Me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-[#FE9F43] text-[14px] font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FE9F43] hover:bg-[#f09a42] text-white font-bold h-12 text-md"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm">
            <span className="text-gray-500">New on our platform? </span>
            <Link
              href="/register"
              className="text-gray-900 font-bold hover:underline"
            >
              Create an account
            </Link>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400 font-medium">
                OR
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button
              type="button"
              variant="outline"
              className="bg-[#2D65E1] hover:bg-[#2554c7] border-none h-12"
              onClick={() => handleSocialLogin("facebook")}
              disabled={loading}
            >
              <Lineicons icon={FacebookOutlined} size={20} color="white" />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="bg-white border border-gray-100 shadow-sm h-12"
              onClick={() => handleSocialLogin("google")}
              disabled={loading}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="bg-[#1A2138] hover:bg-black border-none h-12"
              onClick={() => handleSocialLogin("apple")}
              disabled={loading}
            >
              <Lineicons icon={AppleBrandOutlined} size={20} color="white" />
            </Button>
          </div>
        </div>

        <div className="text-center text-[13px] text-gray-500 py-4">
          Copyrights © 2025 - DreamsPOS
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-[#FFDABA] items-center justify-center p-12">
        <div className="relative w-full max-w-150 aspect-square">
          <Image
            src="/images/login-girl2.png"
            alt="Login Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
