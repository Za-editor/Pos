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
} from "lucide-react";
import { useState } from "react";

const warehouseProducts = [
  {
    warehouse: "Main Warehouse",
    store: "Ikeja Store",
    productName: "Lenovo IdeaPad 3",
    date: "2024-12-10",
    person: "James Kirwin",
    qty: 45,
  },
  {
    warehouse: "Main Warehouse",
    store: "Lekki Store",
    productName: "Beats Pro",
    date: "2024-12-11",
    person: "Francis Chang",
    qty: 30,
  },
  {
    warehouse: "Secondary Warehouse",
    store: "Abuja Store",
    productName: "Nike Jordan",
    date: "2024-12-12",
    person: "Antonio Engle",
    qty: 60,
  },
  {
    warehouse: "Secondary Warehouse",
    store: "Ibadan Store",
    productName: "Apple Series 5 Watch",
    date: "2024-12-13",
    person: "Leo Kelly",
    qty: 25,
  },
  {
    warehouse: "Main Warehouse",
    store: "Yaba Store",
    productName: "Amazon Echo Dot",
    date: "2024-12-14",
    person: "Annette Walker",
    qty: 40,
  },
  {
    warehouse: "Central Warehouse",
    store: "Surulere Store",
    productName: "Lenovo IdeaPad 3",
    date: "2024-12-15",
    person: "James Kirwin",
    qty: 20,
  },
  {
    warehouse: "Central Warehouse",
    store: "VI Store",
    productName: "Beats Pro",
    date: "2024-12-16",
    person: "Francis Chang",
    qty: 35,
  },
];

export default function ManageStockPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(warehouseProducts.length / rowsPerPage);

  const paginatedProducts = warehouseProducts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Manage Stocks</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Manage Stock
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
            Add Brand
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="rounded-xl">
        <CardContent className="p-0">
          {/* Filters */}
          <div className="p-4 flex justify-between items-center gap-4">
            <Input placeholder="Search" className="max-w-xs" />

            <div className="flex gap-2">
              <Button variant="outline">
                Warehouse <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Store <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Product <ChevronDown className="ml-2 h-4 w-4" />
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
                <TableHead>Store</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Person</TableHead>
                <TableHead>Qty</TableHead>
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
                  <TableCell>{p.store}</TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={p.image}
                        alt={p.name}
                        width={36}
                        height={36}
                        className="rounded-md"
                      /> */}
                      <span className="font-medium">{p.productName}</span>
                    </div>
                  </TableCell>

                  <TableCell>{p.date}</TableCell>
                  <TableCell>{p.person}</TableCell>
                  <TableCell>{p.qty}</TableCell>


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
