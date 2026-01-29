"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Calendar, FileTerminal , Gift, ArrowUp, ArrowDown, Repeat, SquareChevronDown} from "lucide-react";

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
          01 Jan 2024 - 07 Jan 2024
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { t: "Profit", v: "$8,458,798", n: "+35% vs Last Month" },
          { t: "Invoice Due", v: "$48,988,78", n: "-19% vs Last Month" },
          { t: "Total Expenses", v: "$8,980,097", n: "+41% vs Last Month" },
          {
            t: "Total Payment Returns",
            v: "$78,458,798",
            n: "-20% vs Last Month",
          },
        ].map((i, idx) => (
          <Card key={idx}>
            <CardContent className="pt-5">
              <p className="text-sm text-gray-500">{i.t}</p>
              <p className="text-xl font-semibold">{i.v}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">{i.n}</span>
                <Button variant="link" size="sm">
                  View All
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sales & Purchase + Overall Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Sales & Purchase</CardTitle>
            <div className="flex gap-1">
              {["1D", "1W", "1M", "3M", "6M", "1Y"].map((p) => (
                <span
                  key={p}
                  className={`px-2 py-1 text-xs rounded ${p === "1Y" ? "bg-orange-500 text-white" : "bg-gray-100"}`}
                >
                  {p}
                </span>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-56 flex items-end gap-2">
              {[12, 18, 10, 20, 16, 22, 9, 14, 25, 17, 21, 13].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1">
                  <div
                    className="bg-orange-400 rounded"
                    style={{ height: v * 4 }}
                  />
                  <div
                    className="bg-orange-200 rounded"
                    style={{ height: v * 2 }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Overall Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              ["Suppliers", "6987"],
              ["Customer", "4896"],
              ["Orders", "487"],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between text-sm">
                <span className="text-gray-500">{l}</span>
                <span className="font-semibold">{v}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Top Selling / Low Stock / Recent Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Charger Cable - Lighting",
              "Yves Saint Eau De Parfum",
              "Apple Airpods 2",
              "Vacuum Cleaner",
              "Samsung Galaxy S21 Fe 5g",
            ].map((n, i) => (
              <div key={i} className="flex justify-between">
                <div>
                  <p className="text-sm font-medium">{n}</p>
                  <p className="text-xs text-gray-500">$---</p>
                </div>
                <span className="text-xs text-green-600">25%</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex justify-between">
            <CardTitle>Low Stock Products</CardTitle>
            <Button variant="link" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {[21, 8, 14, 12, 10].map((v, i) => (
              <div
                key={i}
                className="flex justify-between bg-gray-50 p-3 rounded"
              >
                <span className="text-sm">Product {i + 1}</span>
                <span className="text-orange-500 font-semibold">{v}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Processing",
              "Cancelled",
              "Onhold",
              "Processing",
              "Completed",
            ].map((s, i) => (
              <div key={i} className="flex justify-between border p-3 rounded">
                <span className="text-sm">Product {i + 1}</span>
                <span className="text-xs">{s}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Transactions + Customers + Categories + Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="sale">
              <TabsList>
                <TabsTrigger value="sale">Sale</TabsTrigger>
                <TabsTrigger value="purchase">Purchase</TabsTrigger>
                <TabsTrigger value="quotation">Quotation</TabsTrigger>
                <TabsTrigger value="expenses">Expenses</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
              </TabsList>
              <TabsContent value="sale" className="space-y-3 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex justify-between border p-3 rounded"
                  >
                    <span>Customer {i}</span>
                    <span>$----</span>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Customers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between border p-3 rounded">
                <span>Customer {i}</span>
                <span>$----</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center font-semibold mb-3">297 Orders</p>
            <div className="grid grid-cols-7 gap-1 h-40">
              {Array.from({ length: 7 }).map((_, d) => (
                <div key={d} className="flex flex-col-reverse gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="h-3 rounded bg-orange-200" />
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
