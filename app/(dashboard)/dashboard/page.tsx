"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  Calendar,
  FileTerminal,
  Gift,
  ArrowUp,
  ArrowDown,
  Repeat,
  SquareChevronDown,
  Layers,
  ChartPie,
  LifeBuoy,
  Hash,
  ShoppingCart,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,


} from "recharts";
import OverallInformationCard from "@/components/dashboard/overall-information";
import { TopSellingProducts } from "@/components/dashboard/top-products-widget";
import { LowStockProducts } from "@/components/dashboard/low-stock-widget";
import { RecentSales } from "@/components/dashboard/recent-sales-widget";
import { SalesStaticsCard } from "@/components/dashboard/sales-statics";
import { RecentTransactionsCard } from "@/components/dashboard/recent-transactions";
import { TopCustomersCard } from "@/components/dashboard/top-customers-widget";
import { TopCategoriesCard } from "@/components/dashboard/category-chart";
import { OrderHeatmapChart,} from "@/components/dashboard/order-heatmap";

const data = [
  { month: "Jan", purchase: 52000, sales: 18000 },
  { month: "Feb", purchase: 38000, sales: 22000 },
  { month: "Mar", purchase: 24000, sales: 12000 },
  { month: "Apr", purchase: 54000, sales: 15000 },
  { month: "May", purchase: 42000, sales: 26000 },
  { month: "Jun", purchase: 56000, sales: 16000 },
  { month: "Jul", purchase: 21000, sales: 13000 },
  { month: "Aug", purchase: 30000, sales: 18000 },
  { month: "Sep", purchase: 52000, sales: 42000 },
  { month: "Oct", purchase: 18000, sales: 6000 },
  { month: "Nov", purchase: 45000, sales: 30000 },
  { month: "Dec", purchase: 32000, sales: 15000 },
];

export default function DashboardPage() {
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

      {/* Alert */}
      <div className="flex gap-3 items-start bg-[#FCEFEA] px-4 py-3 rounded-lg text-sm text-gray-600">
        <AlertCircle className="w-4 h-4 mt-0.5 text-[#E04F16]" />
        <p>
          Your Product{" "}
          <span className="font-medium text-[#E04F16]">Apple Iphone 15</span> is
          running Low, already below 5 Pcs.{" "}
          <span className="font-medium cursor-pointer text-[#E04F16]">
            Add Stock
          </span>
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            t: "Total Sales",
            v: "$48,988,078",
            c: "+22%",
            bg: "#FE9F43",
            icon: FileTerminal,
            trend: "up",
          },
          {
            t: "Total Sales Return",
            v: "$16,478,145",
            c: "-22%",
            bg: "#092C4C",
            icon: Repeat,
            trend: "down",
          },
          {
            t: "Total Purchase",
            v: "$24,145,789",
            c: "-22%",
            bg: "#0E9384",
            icon: Gift,
            trend: "up",
          },
          {
            t: "Total Purchase Return",
            v: "$18,458,747",
            c: "-22%",
            bg: "#155EEF",
            icon: SquareChevronDown,
            trend: "up",
          },
        ].map((i, idx) => {
          const Icon = i.icon;

          return (
            <Card
              key={idx}
              className="text-white"
              style={{ backgroundColor: i.bg }}
            >
              <CardContent>
                <div className="flex gap-3">
                  <div className="bg-white p-2.5 rounded-xl flex items-center justify-center">
                    <Icon className="h-7 w-7" style={{ color: i.bg }} />
                  </div>

                  <div>
                    <p className="text-sm font-medium opacity-90">{i.t}</p>

                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-xl font-semibold">{i.v}</p>

                      <div
                        className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md
    ${
      i.trend === "up"
        ? "bg-[#EEFAF1] text-[#3EB780]"
        : "bg-[#FFEDE9] text-[#E70D0D]"
    }
  `}
                      >
                        {i.trend === "up" ? (
                          <ArrowUp className="h-3 w-3 text-green-600" />
                        ) : (
                          <ArrowDown className="h-3 w-3 text-red-600" />
                        )}

                        <span className="font-medium">{i.c}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            t: "Profit",
            v: "$8,458,798",
            n: "vs Last Month",
            b: "+35% ",
            trend: "up",
            bg: "#E9F8FB",
            color: "#06AED4",
            icon: Layers,
          },
          {
            t: "Invoice Due",
            v: "$48,988,78",
            n: "vs Last Month",
            b: "-19% ",
            trend: "down",
            bg: "#E9F5F4",
            color: "#0E9384",
            icon: ChartPie,
          },
          {
            t: "Total Expenses",
            v: "$8,980,097",
            n: " vs Last Month",
            b: "+41%",
            trend: "up",
            bg: "#FCEFEA",
            color: "#E04F16",
            icon: LifeBuoy,
          },
          {
            t: "Total Payment Returns",
            v: "$78,458,798",
            n: "vs Last Month",
            b: "-20%  ",
            trend: "down",
            bg: "#EDEDFB",
            color: "#6938EF",
            icon: Hash,
          },
        ].map((i, idx) => {
          const Icon = i.icon;
          return (
            <Card key={idx}>
              <CardContent className="">
                <div className="flex justify-between border-b pb-4 border-gray-200">
                  <div className="">
                    <p className="text-[18px] font-semibold text-gray-900 mb-1">
                      {i.v}
                    </p>
                    <p className="text-[14px] text-gray-500 font-semibold">
                      {i.t}
                    </p>
                  </div>
                  <div
                    className={`p-4.25 rounded-xl`}
                    style={{ backgroundColor: i.bg }}
                  >
                    <Icon className="h-7 w-7" style={{ color: i.color }} />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <p className="text-[13px] text-gray-500">
                    <span
                      className={`${i.trend === "up" ? "text-green-500" : "text-rose-500"}`}
                    >
                      {i.b}
                    </span>
                    {i.n}
                  </p>

                  <Button
                    variant="link"
                    size="sm"
                    className="underline cursor-pointer"
                  >
                    View All
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Sales & Purchase + Overall Info */}
      <div className="flex gap-6">
        <div className="w-4/6 bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200">
            <div className="flex gap-2 items-center">
              <div className="p-4 bg-[#FFF6EE] rounded-xl">
                <ShoppingCart className="text-[#FE9F43]" />
              </div>
              <h2 className="text-[18px] font-semibold text-gray-800">
                Sales & Purchase
              </h2>
            </div>

            <div className="flex gap-2 text-xs">
              {["1D", "1W", "1M", "3M", "6M", "1Y"].map((item) => (
                <button
                  key={item}
                  className={`px-3 py-1 rounded-full ${item === "1Y" ? "bg-orange-500 text-white" : "text-gray-400"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-6 mb-6">
            <div className="border-gray-200 border rounded-xl px-4 py-3 space-y-2">
              <div className="flex gap-2 items-center">
                <div className="h-4 w-4 rounded-full bg-[#fde6cf]"></div>
                <p className="text-[14px] text-gray-600">Total Purchase</p>
              </div>
              <p className="text-[18px] font-semibold text-gray-900">49K</p>
            </div>
            <div className="border-gray-200 border rounded-xl px-4 py-3 space-y-2">
              <div className="flex gap-2 items-center">
                <div className="h-4 w-4 rounded-full bg-[#f97316]"></div>
                <p className="text-[14px] text-gray-600">Total Sales</p>
              </div>
              <p className="text-[18px] font-semibold text-gray-900">38K</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data} barGap={-28}>
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
                fill="#fde6cf"
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
        <div className="w-2/6">
          <OverallInformationCard />
        </div>
      </div>

      {/* Top Selling / Low Stock / Recent Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopSellingProducts />

        <LowStockProducts />

        <RecentSales />
      </div>

      {/* Sales Statics / Recent transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesStaticsCard/>

        <RecentTransactionsCard/>

      </div>

      {/* Transactions + Customers + Categories + Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopCustomersCard />
        <TopCategoriesCard />
        <OrderHeatmapChart/>
        {/* <OrderStatisticsCard/> */}
      </div>
    </div>
  );
}
