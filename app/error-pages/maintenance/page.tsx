"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function UnderMaintenance() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-full max-w-150 aspect-4/3 mb-8">
        <Image
          src="/images/under-maintenance.png"
          alt="404 Error - Page Not Found"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-md space-y-4">
        <h1 className="text-[28px] md:text-[32px] font-bold text-gray-900">
          We are Under Maintenance
        </h1>
        <p className="text-gray-500 text-[16px] leading-relaxed">
          Sorry for any inconvenience caused, we have almost done Will get back
          soon!
        </p>
      </div>

      <div className="mt-10">
        <Button
          asChild
          className="bg-[#FE9F43] hover:bg-[#f09a42] text-white font-bold h-12 px-8 rounded-md flex items-center gap-2 shadow-md transition-all active:scale-95"
        >
          <Link href="/dashboard">
            <ChevronLeft className="h-5 w-5" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
