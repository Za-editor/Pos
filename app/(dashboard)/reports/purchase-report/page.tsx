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

const purchaseOrders = [
  {
    reference: "PO-1001",
    sku: "PRD-001",
    dueDate: "2025-02-15",
    productName: "Lenovo IdeaPad 3",
    instockQty: 80,
    purchaseQty: 50,
    purchaseAmount: "$30,000",
  },
  {
    reference: "PO-1002",
    sku: "PRD-002",
    dueDate: "2025-02-18",
    productName: "Beats Pro Headphones",
    instockQty: 45,
    purchaseQty: 120,
    purchaseAmount: "$19,200",
  },
  {
    reference: "PO-1003",
    sku: "PRD-003",
    dueDate: "2025-02-20",
    productName: "Nike Air Jordan",
    instockQty: 120,
    purchaseQty: 200,
    purchaseAmount: "$22,000",
  },
  {
    reference: "PO-1004",
    sku: "PRD-004",
    dueDate: "2025-02-25",
    productName: "Apple Watch Series 5",
    instockQty: 60,
    purchaseQty: 90,
    purchaseAmount: "$10,800",
  },
  {
    reference: "PO-1005",
    sku: "PRD-005",
    dueDate: "2025-02-28",
    productName: "Amazon Echo Dot",
    instockQty: 150,
    purchaseQty: 180,
    purchaseAmount: "$14,400",
  },
  {
    reference: "PO-1006",
    sku: "PRD-006",
    dueDate: "2025-03-03",
    productName: "Samsung Galaxy Buds",
    instockQty: 90,
    purchaseQty: 140,
    purchaseAmount: "$15,400",
  },
];





export default function PurchaseReportPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(purchaseOrders.length / rowsPerPage);

  const paginatedProducts = purchaseOrders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Purchase Report</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Purchase Report
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
          <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-2 rounded-lg ml-auto w-125">
            Generate Report
          </Button>
        </div>
     
      {/* Table */}
      <Card className="rounded-xl">
        <CardContent className="p-0">
          {/* Filters */}
          <div className="pb-4 pl-4 pr-4 flex justify-between items-center gap-4">
            <h1 className="text-xl font-semibold">Purchase Report</h1>

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
                <TableHead>SKU</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Product Name</TableHead>
                
                <TableHead>Instock Qty</TableHead>
                <TableHead>Purchase Qty</TableHead>
                <TableHead>Purchase Amount</TableHead>
                
               
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedProducts.map((p, i) => (
                <TableRow key={i}>
                  <TableCell>{p.reference}</TableCell>
                  <TableCell>{p.sku}</TableCell>
                  <TableCell>{p.dueDate}</TableCell>
                  <TableCell>{p.productName}</TableCell>
                  <TableCell>{p.instockQty}</TableCell>
                  <TableCell>{p.purchaseQty}</TableCell>
                  <TableCell>{p.purchaseAmount}</TableCell>

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
