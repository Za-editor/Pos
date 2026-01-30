"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { Building2, Briefcase, Users, DollarSign } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";



export default function SuperAdminpage() {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[28px] font-semibold text-[#212B36]">
              Welcome, Admin
            </h1>
            <p className="text-3.5 text-gray-600">
              You have <span className="text-[#FE9F43] font-medium">200+</span>{" "}
              Orders, Today
            </p>
          </div>
          <div className="flex gap-2 items-center text-4 border rounded-xl px-2.75 py-2.5 text-[#092C4C]">
            <Calendar className="h-5 w-5" />
            01 Jan 2026 - 07 Jan 2026
          </div>
        </div>
        {/* Sub header */}
        <div className="w-full bg-[#FE9F43] relative  p-10 rounded-lg overflow-hidden">
          <div className="flex justify-between">
            {" "}
            <div className="text-white">
              <h2 className="text-[34px] font-semibold">
                Welcome Back, Adrian
              </h2>
              <p className="text-[18px]">
                14 New Companies Subscribed Today !!!
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Button
                type="button"
                variant="outline"
                className="bg-[#1A2138] hover:bg-black border-none h-12 text-white"
              >
                Companies
              </Button>
              <Button
                type="button"
                variant="outline"
                className="bg-white hover:bg-black border-none h-12 text-black"
              >
                All Packages
              </Button>
            </div>
          </div>

          <div className=" absolute left-0 w-27.5 h-full -top-6">
            <Image
              src="/images/background-image.png"
              alt="decorative-image"
              fill
              className="object-contain "
              priority
            />
          </div>
          <div className=" absolute right-0 w-68.5 h-full -bottom-4">
            <Image
              src="/images/decorative-image.png"
              alt="decorative-image"
              fill
              className="object-contain "
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Building2 size={18} />}
            title="Total Companies"
            value="5468"
            percentage="+19.01%"
            percentageColor="green"
            chartColor="#FE9F43"
          />

          <StatCard
            icon={<Briefcase size={18} />}
            title="Active Companies"
            value="4598"
            percentage="+12%"
            percentageColor="green"
            chartColor="#7C4DFF"
          />

          <StatCard
            icon={<Users size={18} />}
            title="Total Subscribers"
            value="3698"
            percentage="+6%"
            percentageColor="green"
            chartColor="#00B8D9"
          />

          <StatCard
            icon={<DollarSign size={18} />}
            title="Total Earnings"
            value="$89,878.58"
            percentage="-16%"
            percentageColor="red"
            chartColor="#36B37E"
          />
        </div>
      </div>
    );
}