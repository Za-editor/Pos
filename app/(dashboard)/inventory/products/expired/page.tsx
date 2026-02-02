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
import { Pencil, Trash2, RefreshCcw, ChevronUp } from "lucide-react";
import { useState } from "react";

export const products = [
  {
    sku: "PRD-001",
    name: "Lenovo IdeaPad 3",
    manufacturedDate: "2024-01-12",
    expiredDate: "2026-01-12",
  },
  {
    sku: "PRD-002",
    name: "Beats Pro Headphones",
    manufacturedDate: "2023-11-05",
    expiredDate: "2025-11-05",
  },
  {
    sku: "PRD-003",
    name: "Nike Air Jordan",
    manufacturedDate: "2024-02-18",
    expiredDate: "2026-02-18",
  },
  {
    sku: "PRD-004",
    name: "Apple Watch Series 5",
    manufacturedDate: "2023-09-22",
    expiredDate: "2025-09-22",
  },
  {
    sku: "PRD-005",
    name: "Amazon Echo Dot (5th Gen)",
    manufacturedDate: "2024-03-10",
    expiredDate: "2027-03-10",
  },
  {
    sku: "PRD-006",
    name: "Samsung Galaxy S21 FE",
    manufacturedDate: "2023-12-01",
    expiredDate: "2025-12-01",
  },
  {
    sku: "PRD-007",
    name: "Dell XPS 13 Laptop",
    manufacturedDate: "2024-04-05",
    expiredDate: "2026-04-05",
  },
  {
    sku: "PRD-008",
    name: "Sony WH-1000XM5 Headphones",
    manufacturedDate: "2023-10-15",
    expiredDate: "2026-10-15",
  },
];

export default function ExpiredProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(products.length / rowsPerPage);

  const paginatedProducts = products.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Expired Products</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Expired Products
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
        </div>
      </div>

      {/* Table */}
      <Card className="rounded-xl">
        <CardContent className="p-0">
          {/* Filters */}
          <div className="pb-4 pl-4 flex justify-between items-center gap-4">
            <Input placeholder="Search" className="max-w-xs" />
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Manufactured Date</TableHead>
                <TableHead>Expired Date</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedProducts.map((p, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {p.sku}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={p.image}
                        alt={p.name}
                        width={36}
                        height={36}
                        className="rounded-md"
                      /> */}
                      <span className="font-medium">{p.name}</span>
                    </div>
                  </TableCell>

                  <TableCell>{p.manufacturedDate}</TableCell>
                  <TableCell>{p.expiredDate}</TableCell>

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
