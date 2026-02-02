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

const products = [
  {
    sku: "PT001",
    name: "Lenovo IdeaPad 3",
    image: "/products/laptop.png",
    category: "Computers",
    brand: "Lenovo",
    price: "$600",
    unit: "Pc",
    qty: 100,
    createdBy: "James Kirwin",
    avatar: "/users/user1.png",
  },
  {
    sku: "PT002",
    name: "Beats Pro",
    image: "/products/headphone.png",
    category: "Electronics",
    brand: "Beats",
    price: "$160",
    unit: "Pc",
    qty: 140,
    createdBy: "Francis Chang",
    avatar: "/users/user2.png",
  },
  {
    sku: "PT003",
    name: "Nike Jordan",
    image: "/products/shoe.png",
    category: "Shoe",
    brand: "Nike",
    price: "$110",
    unit: "Pc",
    qty: 300,
    createdBy: "Antonio Engle",
    avatar: "/users/user3.png",
  },
  {
    sku: "PT004",
    name: "Apple Series 5 Watch",
    image: "/products/watch.png",
    category: "Electronics",
    brand: "Apple",
    price: "$120",
    unit: "Pc",
    qty: 450,
    createdBy: "Leo Kelly",
    avatar: "/users/user4.png",
  },
  {
    sku: "PT005",
    name: "Amazon Echo Dot",
    image: "/products/echo.png",
    category: "Electronics",
    brand: "Amazon",
    price: "$80",
    unit: "Pc",
    qty: 320,
    createdBy: "Annette Walker",
    avatar: "/users/user5.png",
  },
  {
    sku: "PT001",
    name: "Lenovo IdeaPad 3",
    image: "/products/laptop.png",
    category: "Computers",
    brand: "Lenovo",
    price: "$600",
    unit: "Pc",
    qty: 100,
    createdBy: "James Kirwin",
    avatar: "/users/user1.png",
  },
  {
    sku: "PT002",
    name: "Beats Pro",
    image: "/products/headphone.png",
    category: "Electronics",
    brand: "Beats",
    price: "$160",
    unit: "Pc",
    qty: 140,
    createdBy: "Francis Chang",
    avatar: "/users/user2.png",
  },
  {
    sku: "PT003",
    name: "Nike Jordan",
    image: "/products/shoe.png",
    category: "Shoe",
    brand: "Nike",
    price: "$110",
    unit: "Pc",
    qty: 300,
    createdBy: "Antonio Engle",
    avatar: "/users/user3.png",
  },
  {
    sku: "PT004",
    name: "Apple Series 5 Watch",
    image: "/products/watch.png",
    category: "Electronics",
    brand: "Apple",
    price: "$120",
    unit: "Pc",
    qty: 450,
    createdBy: "Leo Kelly",
    avatar: "/users/user4.png",
  },
  {
    sku: "PT005",
    name: "Amazon Echo Dot",
    image: "/products/echo.png",
    category: "Electronics",
    brand: "Amazon",
    price: "$80",
    unit: "Pc",
    qty: 320,
    createdBy: "Annette Walker",
    avatar: "/users/user5.png",
  },
  {
    sku: "PT001",
    name: "Lenovo IdeaPad 3",
    image: "/products/laptop.png",
    category: "Computers",
    brand: "Lenovo",
    price: "$600",
    unit: "Pc",
    qty: 100,
    createdBy: "James Kirwin",
    avatar: "/users/user1.png",
  },
  {
    sku: "PT002",
    name: "Beats Pro",
    image: "/products/headphone.png",
    category: "Electronics",
    brand: "Beats",
    price: "$160",
    unit: "Pc",
    qty: 140,
    createdBy: "Francis Chang",
    avatar: "/users/user2.png",
  },
  {
    sku: "PT003",
    name: "Nike Jordan",
    image: "/products/shoe.png",
    category: "Shoe",
    brand: "Nike",
    price: "$110",
    unit: "Pc",
    qty: 300,
    createdBy: "Antonio Engle",
    avatar: "/users/user3.png",
  },
  {
    sku: "PT004",
    name: "Apple Series 5 Watch",
    image: "/products/watch.png",
    category: "Electronics",
    brand: "Apple",
    price: "$120",
    unit: "Pc",
    qty: 450,
    createdBy: "Leo Kelly",
    avatar: "/users/user4.png",
  },
  {
    sku: "PT005",
    name: "Amazon Echo Dot",
    image: "/products/echo.png",
    category: "Electronics",
    brand: "Amazon",
    price: "$80",
    unit: "Pc",
    qty: 320,
    createdBy: "Annette Walker",
    avatar: "/users/user5.png",
  },
];

export default function ProductsPage() {
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
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Products
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
            Add Product
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-800">
            Import Product
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
                Category <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Brand <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Created By</TableHead>
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
                    {p.sku}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={36}
                        height={36}
                        className="rounded-md"
                      />
                      <span className="font-medium">{p.name}</span>
                    </div>
                  </TableCell>

                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.brand}</TableCell>
                  <TableCell>{p.price}</TableCell>
                  <TableCell>{p.unit}</TableCell>
                  <TableCell>{p.qty}</TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2">
                      {/* <Image
                        src={p.avatar}
                        alt={p.createdBy}
                        width={28}
                        height={28}
                        className="rounded-full"
                      /> */}
                      <span className="text-sm">{p.createdBy}</span>
                    </div>
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
