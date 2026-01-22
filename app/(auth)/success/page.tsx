"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function SuccessPage() {
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

       
        <div className="max-w-md mx-auto w-full py-8 text-center">
          
          <div className="flex justify-center mb-6">
            <div className="h-12 w-12 rounded-full bg-[#46C18E] flex items-center justify-center shadow-sm">
              <Check className="text-white h-6 w-6 stroke-[3px]" />
            </div>
          </div>

          <h2 className="text-[26px] text-gray-900 font-bold mb-2">Success</h2>
          <p className="text-gray-500 mb-8 text-[16px]">
            Your new password has been successfully saved
          </p>

          <Button
            asChild
            className="w-full bg-[#FE9F43] hover:bg-[#f09a42] text-white h-12 text-md shadow-sm"
          >
            <Link href="/login">Back to Sign In</Link>
          </Button>
        </div>

      
        <div className="text-center text-[13px] text-gray-500 py-4">
          Copyrights © 2025 - DreamsPOS
        </div>
      </div>

      
      <div className="hidden lg:flex lg:w-1/2 bg-[#FFDABA]">
        
      </div>
    </div>
  );
}
