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
  Mail,
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    warehouse: "Main Warehouse",
    store: "Lagos Central",
    productName: "Lenovo IdeaPad 3",
    category: "Computers",
    sku: "WH-001",
    qty: 120,
    qtyAlert: 30,
  },
  {
    warehouse: "Main Warehouse",
    store: "Abuja Outlet",
    productName: "Beats Pro Headphones",
    category: "Electronics",
    sku: "WH-002",
    qty: 45,
    qtyAlert: 20,
  },
  {
    warehouse: "Secondary Warehouse",
    store: "Ikeja Mall",
    productName: "Nike Air Jordan",
    category: "Footwear",
    sku: "WH-003",
    qty: 200,
    qtyAlert: 50,
  },
  {
    warehouse: "Secondary Warehouse",
    store: "Lekki Phase 1",
    productName: "Apple Watch Series 5",
    category: "Electronics",
    sku: "WH-004",
    qty: 18,
    qtyAlert: 25,
  },
  {
    warehouse: "Main Warehouse",
    store: "Port Harcourt",
    productName: "Amazon Echo Dot",
    category: "Electronics",
    sku: "WH-005",
    qty: 80,
    qtyAlert: 30,
  },
  {
    warehouse: "Backup Warehouse",
    store: "Ibadan Store",
    productName: "Samsung Galaxy S21 FE",
    category: "Mobile Phones",
    sku: "WH-006",
    qty: 12,
    qtyAlert: 20,
  },
  {
    warehouse: "Main Warehouse",
    store: "Lagos Central",
    productName: "Lenovo IdeaPad 3",
    category: "Computers",
    sku: "WH-001",
    qty: 120,
    qtyAlert: 30,
  },
  {
    warehouse: "Main Warehouse",
    store: "Abuja Outlet",
    productName: "Beats Pro Headphones",
    category: "Electronics",
    sku: "WH-002",
    qty: 45,
    qtyAlert: 20,
  },
  {
    warehouse: "Secondary Warehouse",
    store: "Ikeja Mall",
    productName: "Nike Air Jordan",
    category: "Footwear",
    sku: "WH-003",
    qty: 200,
    qtyAlert: 50,
  },
  {
    warehouse: "Secondary Warehouse",
    store: "Lekki Phase 1",
    productName: "Apple Watch Series 5",
    category: "Electronics",
    sku: "WH-004",
    qty: 18,
    qtyAlert: 25,
  },
  {
    warehouse: "Main Warehouse",
    store: "Port Harcourt",
    productName: "Amazon Echo Dot",
    category: "Electronics",
    sku: "WH-005",
    qty: 80,
    qtyAlert: 30,
  },
  {
    warehouse: "Backup Warehouse",
    store: "Ibadan Store",
    productName: "Samsung Galaxy S21 FE",
    category: "Mobile Phones",
    sku: "WH-006",
    qty: 12,
    qtyAlert: 20,
  },
];


export default function LowStockProductsPage() {
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
          <h1 className="text-2xl font-semibold">Low Stock Products</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Low Stocks
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

          <Button className="bg-slate-900 hover:bg-slate-800">
            <Mail />
            Import Product
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="space-x-2">
          <Button className="bg-[#FE9F43] hover:bg-orange-300">
            Low Stock
          </Button>
          <Button className="bg-gray-50 hover:bg-gray-100 text-black">
            Out of Stock
          </Button>
        </div>
        <Button variant="outline">
          Notify
        </Button>
      </div>

      {/* Table */}
      <Card className="rounded-xl">
        <CardContent className="p-0">
          {/* Filters */}
          <div className="pb-4 pl-4 flex justify-between items-center gap-4">
            <Input placeholder="Search" className="max-w-xs" />

            <div className="flex gap-2">
              <Button variant="outline">
                Warehouse <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Store <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Category <ChevronDown className="ml-2 h-4 w-4" />
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
                <TableHead>Category</TableHead>
                <TableHead>Sku</TableHead> 
                <TableHead>Qty</TableHead>
                <TableHead>Qty Alert</TableHead>
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

                      <span className="font-medium">{p.store}</span>
                    </div>
                  </TableCell>

                  <TableCell>{p.productName}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.sku}</TableCell>
                  <TableCell>{p.qty}</TableCell>
                  <TableCell>{p.qtyAlert}</TableCell>



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
