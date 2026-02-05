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
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
  RefreshCcw,
  ChevronUp,
  CirclePlus,
} from "lucide-react";
import { useState } from "react";

const warehouses = [
  {
    warehouse: "Ikeja Warehouse",
    contactPerson: "James Kirwin",
    phone: "+234 803 445 7812",
    totalProducts: 1240,
    stock: 980,
    qty: 260,
    createdOn: "12 Jan 2024",
    status: "active",
  },
  {
    warehouse: "Lekki Warehouse",
    contactPerson: "Francis Chang",
    phone: "+234 812 334 9901",
    totalProducts: 980,
    stock: 760,
    qty: 220,
    createdOn: "03 Feb 2024",
    status: "active",
  },
  {
    warehouse: "Abuja Warehouse",
    contactPerson: "Antonio Engle",
    phone: "+234 809 667 2234",
    totalProducts: 860,
    stock: 540,
    qty: 320,
    createdOn: "19 Mar 2024",
    status: "inactive",
  },
  {
    warehouse: "Ibadan Warehouse",
    contactPerson: "Leo Kelly",
    phone: "+234 816 552 1189",
    totalProducts: 720,
    stock: 610,
    qty: 110,
    createdOn: "27 Mar 2024",
    status: "active",
  },
  {
    warehouse: "Yaba Warehouse",
    contactPerson: "Annette Walker",
    phone: "+234 810 774 5566",
    totalProducts: 640,
    stock: 420,
    qty: 220,
    createdOn: "05 Apr 2024",
    status: "inactive",
  },
  {
    warehouse: "Surulere Warehouse",
    contactPerson: "Mary Bronson",
    phone: "+234 818 991 3322",
    totalProducts: 1100,
    stock: 870,
    qty: 230,
    createdOn: "18 Apr 2024",
    status: "active",
  },
];


const statusStyles = {
  active: "bg-green-700 text-white",
  inactive: "bg-red-600 text-white",
};

export default function WarehousePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(warehouses.length / rowsPerPage);

  const paginatedProducts = warehouses.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Warehouses</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Warehouses
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

          <Button className="bg-[#FE9F43]">
            <CirclePlus />
            Add Warehouse
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="rounded-xl">
        <CardContent className="p-0">
          {/* Filters */}
          <div className="pb-4 pl-4 pr-4 flex justify-between items-center gap-4">
            <Input placeholder="Search" className="max-w-xs" />

            <div className="flex gap-2">
              <Button variant="outline">
                Status <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead>Warehouse</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Total Products</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Created On</TableHead>
                <TableHead>Status</TableHead>
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
                    {p.warehouse}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{p.contactPerson}</span>
                    </div>
                  </TableCell>

                  <TableCell>{p.phone}</TableCell>
                  <TableCell>{p.totalProducts}</TableCell>
                  <TableCell>{p.stock}</TableCell>
                  <TableCell>{p.qty}</TableCell>
                  <TableCell>{p.createdOn}</TableCell>

                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${statusStyles[p.status]}`}
                    >
                      • {p.status}
                    </span>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="icon" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
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
