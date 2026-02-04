"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pencil,
  Trash2,
  RefreshCcw,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const warehouseTransfers = [
  {
    fromWarehouse: "Main Warehouse",
    toWarehouse: "Secondary Warehouse",
    noOfProducts: 3,
    quantityTransferred: 120,
    referenceNumber: "TRF-0001",
    date: "2024-12-05",
  },
  {
    fromWarehouse: "Central Warehouse",
    toWarehouse: "Ikeja Warehouse",
    noOfProducts: 2,
    quantityTransferred: 75,
    referenceNumber: "TRF-0002",
    date: "2024-12-07",
  },
  {
    fromWarehouse: "Lekki Warehouse",
    toWarehouse: "Abuja Warehouse",
    noOfProducts: 4,
    quantityTransferred: 200,
    referenceNumber: "TRF-0003",
    date: "2024-12-09",
  },
  {
    fromWarehouse: "Main Warehouse",
    toWarehouse: "Ibadan Warehouse",
    noOfProducts: 1,
    quantityTransferred: 40,
    referenceNumber: "TRF-0004",
    date: "2024-12-11",
  },
  {
    fromWarehouse: "Secondary Warehouse",
    toWarehouse: "Yaba Warehouse",
    noOfProducts: 3,
    quantityTransferred: 95,
    referenceNumber: "TRF-0005",
    date: "2024-12-14",
  },
  {
    fromWarehouse: "Central Warehouse",
    toWarehouse: "VI Warehouse",
    noOfProducts: 5,
    quantityTransferred: 260,
    referenceNumber: "TRF-0006",
    date: "2024-12-16",
  },
];


export default function StockTransferPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(warehouseTransfers.length / rowsPerPage);

  const paginatedProducts = warehouseTransfers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Stock Transfer</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Stock Transfer
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <Image src="/icons/pdf.svg" alt="PDF" width={25} height={20} />
          </Button>
          <Button variant="outline">
            <Image src="/icons/excel.svg" alt="Excel" width={25} height={20} />
          </Button>
          <Button variant="outline">
            <RefreshCcw />
          </Button>
          <Button variant="outline">
            <ChevronUp />
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Add Transfer
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-800">
            Import Transfer
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="rounded-xl">
        <CardContent className="p-0">
          {/* Filters */}
          <div className="p-4 flex justify-between items-center gap-4">
            <Input placeholder="Search" className="max-w-xs" />

          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead>From Warehouse</TableHead>
                <TableHead>To Warehouse</TableHead>
                <TableHead>No of Products</TableHead>
                <TableHead>Quantity Transferred</TableHead>
                <TableHead>Reference Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedProducts.map((p, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {p.fromWarehouse}
                  </TableCell>



                  <TableCell>{p.toWarehouse}</TableCell>
                  <TableCell>{p.noOfProducts}</TableCell>
                  <TableCell>{p.quantityTransferred}</TableCell>
                  <TableCell>{p.referenceNumber}</TableCell>
                  <TableCell>{p.date}</TableCell>



                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">

                      <Button size="icon" variant="outline">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
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
