"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {  BarChart3, ShieldCheck, Laptop2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-40">
        <div className={cn("relative w-32 h-10 transition-all")}>
          <Image
            src="/images/logo/logo.png"
            alt="DreamsPOS"
            fill
            className="object-contain transition-all duration-300"
            priority
          />
        </div>

        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" className="text-gray-700">
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild
            className="bg-[#FE9F43] hover:bg-[#f09a42] text-white"
          >
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl">
          Smart POS System for Modern Businesses
        </h1>
        <p className="mt-5 text-gray-600 max-w-xl">
          Manage sales, inventory, customers, and payments from one powerful and
          easy-to-use dashboard.
        </p>
        <div className="flex gap-4 mt-8">
          <Button
            asChild
            className="bg-[#FE9F43] hover:bg-[#f09a42] text-white h-12 px-6"
          >
            <Link href="/register">Get Started</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 px-6">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <Feature
            icon={Laptop2}
            title="Fast POS Interface"
            description="Designed for speed, touch-friendly workflows, and real-world retail use."
          />
          <Feature
            icon={BarChart3}
            title="Sales & Inventory"
            description="Track products, stock levels, and real-time sales across stores."
          />
          <Feature
            icon={ShieldCheck}
            title="Secure & Reliable"
            description="Built with modern security practices and reliable cloud infrastructure."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#092C4C] text-white px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Start Selling Smarter Today</h2>
        <p className="mt-4 text-gray-200">
          Join businesses using Dreams POS to grow faster and sell better.
        </p>
        <Button
          asChild
          className="mt-8 bg-[#FE9F43] hover:bg-[#f09a42] text-white h-12 px-8"
        >
          <Link href="/register">Create Free Account</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dreams POS. All rights reserved.
      </footer>
    </div>
  );
}

function Feature({ icon: Icon, title, description }: any) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
      <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-orange-50 flex items-center justify-center">
        <Icon className="h-6 w-6 text-[#FE9F43]" />
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
