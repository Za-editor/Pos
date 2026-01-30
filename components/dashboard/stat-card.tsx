"use client"

import { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  title: string;
  value: string | number;
  percentage: string;
  percentageColor: "green" | "red";
  chartColor: string;
};

export function StatCard({
  icon,
  title,
  value,
  percentage,
  percentageColor,
  chartColor,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border flex justify-between items-end">
      {/* Left */}
      <div className="space-y-4">
        <div className="flex items-center justify-between w-full">
          <div className="h-10 w-10 rounded-lg bg-[#1A2138] flex items-center justify-center text-white">
            {icon}
          </div>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-md ${
              percentageColor === "green"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {percentage}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#212B36]">
            {value}
          </h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>

      {/* Fake chart bars */}
      <div className="flex gap-1 items-end h-12">
        {[19, 40, 50, 22, 38, 10].map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded"
            style={{
              height: `${h}px`,
              backgroundColor: chartColor,
            }}
          />
        ))}
      </div>
    </div>
  );
}
