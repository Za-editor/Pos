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

const supplierPayments = [
  {
    reference: "PAY-1001",
    id: "SP-001",
    supplier: "TechSource Ltd",
    totalItems: 12,
    amount: "$18,400",
    paymentMethod: "Bank Transfer",
    status: "completed",
  },
  {
    reference: "PAY-1002",
    id: "SP-002",
    supplier: "Global Electronics",
    totalItems: 8,
    amount: "$9,750",
    paymentMethod: "Credit Card",
    status: "pending",
  },
  {
    reference: "PAY-1003",
    id: "SP-003",
    supplier: "Urban Fashion Co",
    totalItems: 15,
    amount: "$6,300",
    paymentMethod: "Cash",
    status: "completed",
  },
  {
    reference: "PAY-1004",
    id: "SP-004",
    supplier: "HomePlus Appliances",
    totalItems: 6,
    amount: "$4,980",
    paymentMethod: "Bank Transfer",
    status: "failed",
  },
  {
    reference: "PAY-1005",
    id: "SP-005",
    supplier: "SmartWear Inc",
    totalItems: 10,
    amount: "$7,650",
    paymentMethod: "Credit Card",
    status: "completed",
  },
  {
    reference: "PAY-1006",
    id: "SP-006",
    supplier: "NextGen Gadgets",
    totalItems: 9,
    amount: "$5,420",
    paymentMethod: "Mobile Payment",
    status: "pending",
  },
];







export default function SupplierReportPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(supplierPayments.length / rowsPerPage);

  const paginatedProducts = supplierPayments.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Supplier Report</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Supplier Report
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
            Supplier Report
          </Button>
          <Button variant="outline" className=" ">
            Supplier Due
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
          <Label className="mb-2">Supplier</Label>
          <Select>
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="All" />
            </SelectTrigger>
          </Select>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-1 w-full">
          <Label className="mb-2">Status</Label>
          <Select>
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="All" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Label className="mb-2">Payment Method</Label>
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
            <h1 className="text-xl font-semibold">Supplier Report</h1>

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
            
                <TableHead>Reference</TableHead>
              
                <TableHead>ID</TableHead>

                <TableHead>Supplier</TableHead>
                <TableHead>Total Items</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
            
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedProducts.map((p, i) => (
                <TableRow key={i}>
                  
                  <TableCell>{p.reference}</TableCell>
                 
                  <TableCell>{p.id}</TableCell>
                  <TableCell>{p.supplier}</TableCell>
                  <TableCell>{p.totalItems}</TableCell>
                  <TableCell>{p.amount}</TableCell>
                  <TableCell>{p.paymentMethod}</TableCell>
                  <TableCell>{p.status}</TableCell>

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
