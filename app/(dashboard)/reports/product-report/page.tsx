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

const productSales = [
  {
    sku: "PRD-001",
    productName: "Lenovo IdeaPad 3",
    category: "Computers",
    brand: "Lenovo",
    qty: 120,
    price: 600,
    totalOrdered: 72,
    revenue: 43200,
  },
  {
    sku: "PRD-002",
    productName: "Beats Studio Pro",
    category: "Electronics",
    brand: "Beats",
    qty: 200,
    price: 160,
    totalOrdered: 110,
    revenue: 17600,
  },
  {
    sku: "PRD-003",
    productName: "Nike Air Jordan",
    category: "Footwear",
    brand: "Nike",
    qty: 350,
    price: 110,
    totalOrdered: 180,
    revenue: 19800,
  },
  {
    sku: "PRD-004",
    productName: "Apple Watch Series 5",
    category: "Electronics",
    brand: "Apple",
    qty: 150,
    price: 120,
    totalOrdered: 95,
    revenue: 11400,
  },
  {
    sku: "PRD-005",
    productName: "Amazon Echo Dot",
    category: "Electronics",
    brand: "Amazon",
    qty: 400,
    price: 80,
    totalOrdered: 210,
    revenue: 16800,
  },
  {
    sku: "PRD-006",
    productName: "Samsung Galaxy Buds",
    category: "Electronics",
    brand: "Samsung",
    qty: 250,
    price: 95,
    totalOrdered: 140,
    revenue: 13300,
  },
];









export default function ProductReportPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(productSales.length / rowsPerPage);

  const paginatedProducts = productSales.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Product Report</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Product Report
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
              <div className="flex gap-2">
          <Button className="bg-orange-500 ">
            Product Report
          </Button>
          <Button variant="outline" className=" ">
            Product Expiry Report
          </Button>
          <Button variant="outline" className=" ">
            Product Quantity Alert
          </Button>
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

        <div className="flex flex-col gap-1 w-full">
          <Label className="mb-2">Category</Label>
          <Select>
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="All" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Label className="mb-2">Brand</Label>
          <Select>
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="All" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Label className="mb-2">Product</Label>
          <Select>
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="All" />
            </SelectTrigger>
          </Select>
        </div>

        {/* Button */}
        <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-2 rounded-lg ml-auto w-40">
          Generate Report
        </Button>
      </div>

      {/* Table */}
      <Card className="rounded-xl">
        <CardContent className="p-0">
          {/* Filters */}
          <div className="pb-4 pl-4 pr-4 flex justify-between items-center gap-4">
            <h1 className="text-xl font-semibold">Product Report</h1>

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

                <TableHead>Category</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total Ordered</TableHead>
                              <TableHead>Revenue</TableHead>
                              
            
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedProducts.map((p, i) => (
                <TableRow key={i}>
                  
                  <TableCell>{p.sku}</TableCell>
                  <TableCell>{p.productName}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.brand}</TableCell>
                  <TableCell>{p.qty}</TableCell>
                  <TableCell>{p.price}</TableCell>
                  <TableCell>{p.totalOrdered}</TableCell>
                  <TableCell>{p.revenue}</TableCell>

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
