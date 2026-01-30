"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flag, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";



const salesData = [
  { m: "Jan", r: 6000, e: -12000 },
  { m: "Feb", r: 25000, e: -20000 },
  { m: "Mar", r: 24000, e: -10000 },
  { m: "Apr", r: 21000, e: -20000 },
  { m: "May", r: 22000, e: -9000 },
  { m: "Jun", r: 20000, e: -10000 },
  { m: "Jul", r: 26000, e: -20000 },
  { m: "Aug", r: 18000, e: -20000 },
  { m: "Sep", r: 25000, e: -10000 },
  { m: "Oct", r: 14000, e: -12000 },
  { m: "Nov", r: 7000, e: -15000 },
  { m: "Dec", r: 22000, e: -20000 },
];

export function SalesStaticsCard() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-orange-100 text-orange-600 rounded-full">
            <Flag className="h-4 w-4" />
          </div>
          <CardTitle>Sales Statics</CardTitle>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="h-4 w-4" /> 2025
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Summary */}
        <div className="flex gap-4">
          <SummaryBox
            title="Revenue"
            value="$48,988,078"
            trend="+25%"
            positive
          />
          <SummaryBox title="Expense" value="$12,189" trend="-59%" />
        </div>

        {/* Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData} barGap={20}>
              <XAxis dataKey="m" />
              <YAxis />
              <Bar dataKey="r" fill="#0E9384" radius={[6, 6, 6, 6]} />
              <Bar dataKey="e" fill="#E04F16" radius={[6, 6, 6, 6]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

function SummaryBox({ title, value, trend, positive }: any) {
  return (
    <div className="border rounded-xl p-4 min-w-45">
      <div className="flex items-center gap-2">
        <p
          className={`text-lg font-semibold ${positive ? "text-emerald-600" : "text-red-600"}`}
        >
          {value}
        </p>
        <span
          className={`text-xs px-2 py-0.5 rounded-md ${
            positive
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{title}</p>
    </div>
  );
}


