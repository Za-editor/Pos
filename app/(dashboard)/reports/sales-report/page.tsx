"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Printer, RefreshCcw, ChevronUp, CalendarDays } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const productsReport = [
  {
    sku: "PRD-001",
    productName: "Lenovo IdeaPad 3",
    brand: "Lenovo",
    category: "Computers",
    soldQty: 120,
    soldAmount: "$72,000",
    instockQty: 80,
  },
  {
    sku: "PRD-002",
    productName: "Beats Pro Headphones",
    brand: "Beats",
    category: "Electronics",
    soldQty: 210,
    soldAmount: "$33,600",
    instockQty: 45,
  },
  {
    sku: "PRD-003",
    productName: "Nike Air Jordan",
    brand: "Nike",
    category: "Footwear",
    soldQty: 340,
    soldAmount: "$37,400",
    instockQty: 120,
  },
  {
    sku: "PRD-004",
    productName: "Apple Watch Series 5",
    brand: "Apple",
    category: "Electronics",
    soldQty: 185,
    soldAmount: "$22,200",
    instockQty: 60,
  },
  {
    sku: "PRD-005",
    productName: "Amazon Echo Dot",
    brand: "Amazon",
    category: "Smart Home",
    soldQty: 410,
    soldAmount: "$32,800",
    instockQty: 150,
  },
  {
    sku: "PRD-006",
    productName: "Samsung Galaxy Buds",
    brand: "Samsung",
    category: "Electronics",
    soldQty: 260,
    soldAmount: "$28,600",
    instockQty: 90,
  },
];

const stats = [
  {
    title: "New Sales",
    value: "$40,565,000",
    change: "25.5%",
    positive: true,
    iconBg: "bg-emerald-100",
    badgeBg: "bg-emerald-500",
  },
  {
    title: "Total Orders",
    value: "8690",
    change: "12.2%",
    positive: true,
    iconBg: "bg-indigo-100",
    badgeBg: "bg-emerald-500",
  },
  {
    title: "Total Customers",
    value: "4558",
    change: "16.3%",
    positive: true,
    iconBg: "bg-pink-100",
    badgeBg: "bg-emerald-500",
  },
  {
    title: "Units Sold",
    value: "865",
    change: "12.2%",
    positive: false,
    iconBg: "bg-orange-100",
    badgeBg: "bg-red-500",
  },
];



export default function SalesReportPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(productsReport.length / rowsPerPage);

  const paginatedProducts = productsReport.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Sales Report</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Sales Report
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCcw />
          </Button>
          <Button variant="outline">
            <ChevronUp />
          </Button>
        </div>
      </div>
      <div className="space-y-6">
        {/* Stats*/}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-xl p-4 shadow-sm border"
            >
              <p className="text-md text-gray-500">{stat.title}</p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-1">
                {stat.value}
              </h3>

              <div className="flex items-center gap-2 mt-3">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full text-white ${stat.badgeBg}`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-gray-400">From Last Month</span>
              </div>
            </div>
          ))}
        </div>

        {/* filters*/}
        <div className="bg-white rounded-xl p-6 shadow-sm border flex flex-col md:flex-row gap-6 items-end">
          {/* Date */}
          <div className="flex flex-col gap-1 w-full">
            <Label className="text-xs text-gray-500">Choose Date</Label>
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm">
              <CalendarDays className="h-4 w-4 text-gray-400" />
              <span>01-Jan-2025 - 12-Dec-2025</span>
            </div>
          </div>

          {/* Store */}
          <div className="flex flex-col gap-1 w-full ">
            <Label className="mb-2">Store</Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="All" />
              </SelectTrigger>
            </Select>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-1 w-full">
            <Label className="mb-2">Products</Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="All" />
              </SelectTrigger>
            </Select>
          </div>

          {/* Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-2 rounded-lg ml-auto w-125">
            Generate Report
          </button>
        </div>
      </div>
      {/* Table */}
      <Card className="rounded-xl">
        <CardContent className="p-0">
          {/* Filters */}
          <div className="pb-4 pl-4 pr-4 flex justify-between items-center gap-4">
            <h1 className="text-xl font-semibold">Sales Report</h1>

            <div className="flex gap-2">
              <Button variant="outline">
                <Image src="/icons/pdf.svg" alt="PDF" width={25} height={20} />
              </Button>
              <Button variant="outline">
                <Image
                  src="/icons/excel.svg"
                  alt="Excel"
                  width={25}
                  height={20}
                />
              </Button>
              <Button variant="outline">
                <Printer />
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Sold Qty</TableHead>
                <TableHead>Sold Amount</TableHead>
                <TableHead>Instock Qty</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedProducts.map((p, i) => (
                <TableRow key={i}>
                  <TableCell>{p.sku}</TableCell>
                  <TableCell>{p.productName}</TableCell>
                  <TableCell>{p.brand}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.soldQty}</TableCell>
                  <TableCell>{p.soldAmount}</TableCell>
                  <TableCell>{p.instockQty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Footer */}
          <div className="flex justify-between items-center p-4 border-t text-sm">
            <div className="flex items-center gap-2 text-sm">
              <span>Row Per Page:</span>

              <Select
                value={rowsPerPage.toString()}
                onValueChange={(value) => {
                  setRowsPerPage(Number(value));
                  setCurrentPage(1); // reset page
                }}
              >
                <SelectTrigger className="w-17.5 h-8">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  {Array.from({ length: 20 }).map((_, i) => {
                    const value = i + 1;
                    return (
                      <SelectItem key={value} value={value.toString()}>
                        {value}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>

              <span>Entries</span>
            </div>

            <div className="flex gap-1 items-center">
              {/* Previous */}
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              >
                ‹
              </Button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <Button
                    key={page}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={
                      page === currentPage
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-transparent"
                    }
                    variant={page === currentPage ? "default" : "outline"}
                  >
                    {page}
                  </Button>
                );
              })}

              {/* Next */}
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
              >
                ›
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
