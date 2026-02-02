"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ShoppingCart } from "lucide-react";

/* ---------------- DATA ---------------- */

const companiesData = [
  { d: "M", v: 40 },
  { d: "T", v: 75 },
  { d: "W", v: 30 },
  { d: "T", v: 90 },
  { d: "F", v: 65, active: true },
  { d: "S", v: 55 },
  { d: "S", v: 60 },
];

const revenueData = [
  { month: "Jan", purchase: 52000, sales: 18000 },
  { month: "Feb", purchase: 42000, sales: 22000 },
  { month: "Mar", purchase: 30000, sales: 9000 },
  { month: "Apr", purchase: 52000, sales: 14000 },
  { month: "May", purchase: 45000, sales: 26000 },
  { month: "Jun", purchase: 52000, sales: 13000 },
  { month: "Jul", purchase: 30000, sales: 9000 },
  { month: "Aug", purchase: 29000, sales: 16000 },
  { month: "Sep", purchase: 52000, sales: 42000 },
  { month: "Oct", purchase: 35000, sales: 5000 },
  { month: "Nov", purchase: 45000, sales: 28000 },
  { month: "Dec", purchase: 31000, sales: 14000 },
];

const plansData = [
  { name: "Basic", value: 60, color: "#FFA043" },
  { name: "Premium", value: 20, color: "#FFC107" },
  { name: "Enterprise", value: 20, color: "#1E5EFF" },
];

export function CompaniesCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200">
        <h2 className="text-[18px] font-semibold text-gray-800">Companies</h2>

        <div className="flex gap-2 text-xs">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" /> This Week
          </Button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={companiesData}>
          <CartesianGrid vertical={false} stroke="#f1f1f1" />
          <XAxis dataKey="d" axisLine={false} tickLine={false} />

          <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} />
          <Bar dataKey="v" radius={10} barSize={20}>
            {companiesData.map((x, i) => (
              <Cell key={i} fill={x.active ? "#FFA043" : "#0B2540"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-2 text-sm">
        <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md">
          +6%
        </span>
        <span className="text-gray-500">5 Companies from last month</span>{" "}
      </div>
    </div>
  );
}

/* ---------------- REVENUE ---------------- */

export function RevenueCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200">
        <h2 className="text-[18px] font-semibold text-gray-800">Revenue</h2>

        <div className="flex gap-2 text-xs">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" /> 2026
          </Button>
        </div>
      </div>

      <div className="flex justify-between mb-6">
        <div className="flex flex-col">
          <h5 className="text-gray-900 font-semibold text-[18px]">$45787</h5>
          <p className="text-gray-500">
            <span className="text-green-500">+40%</span> increased from last
            year
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-2 w-2 rounded-full bg-[#f97316]"></div>
          <p className="text-gray-900">Revenue</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={revenueData} barGap={-28}>
          <CartesianGrid vertical={false} stroke="#f1f1f1" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v / 1000}K`}
          />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} />
          <Bar
            dataKey="purchase"
            fill="#F2F2F2"
            radius={[8, 8, 8, 8]}
            barSize={28}
          />
          <Bar
            dataKey="sales"
            fill="#f97316"
            radius={[8, 8, 8, 8]}
            barSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ---------------- TOP PLANS ---------------- */

export function TopPlansCard() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Top Plans</CardTitle>
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="h-4 w-4" /> This Month
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="h-40 flex justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={plansData}
                innerRadius={55}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {plansData.map((x, i) => (
                  <Cell key={i} fill={x.color} />
                ))}
              </Pie>
              <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2 mt-32">
          {plansData.map((x) => (
            <div
              key={x.name}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: x.color }}
                />
                <span className="text-gray-600">{x.name}</span>
              </div>
              <span className="font-medium">{x.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
