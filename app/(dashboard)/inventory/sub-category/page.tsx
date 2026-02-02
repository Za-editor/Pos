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
  ChevronDown,
  RefreshCcw,
  ChevronUp,
  CirclePlus,
} from "lucide-react";
import { useState } from "react";

export const subCategories = [
  {
    image: "/categories/laptops.png",
    subCategory: "Laptops",
    category: "Computers",
    categoryCode: "CAT-001",
    description: "Portable personal computers used for work and everyday tasks",
    status: "active",
  },
  {
    image: "/categories/headphones.png",
    subCategory: "Headphones",
    category: "Electronics",
    categoryCode: "CAT-002",
    description: "Audio devices for listening to music and calls",
    status: "active",
  },
  {
    image: "/categories/smart-watches.png",
    subCategory: "Smart Watches",
    category: "Electronics",
    categoryCode: "CAT-003",
    description:
      "Wearable smart devices with fitness and notification features",
    status: "inactive",
  },
  {
    image: "/categories/shoes.png",
    subCategory: "Sports Shoes",
    category: "Footwear",
    categoryCode: "CAT-004",
    description: "Athletic and casual shoes for sports and daily wear",
    status: "active",
  },
  {
    image: "/categories/speakers.png",
    subCategory: "Bluetooth Speakers",
    category: "Accessories",
    categoryCode: "CAT-005",
    description: "Wireless speakers for portable audio playback",
    status: "active",
  },
  {
    image: "/categories/kitchen.png",
    subCategory: "Kitchen Appliances",
    category: "Home Appliances",
    categoryCode: "CAT-006",
    description: "Appliances used for cooking and kitchen tasks",
    status: "inactive",
  },
];


const statusStyles = {
  active: "bg-green-700 text-white",
  inactive: "bg-red-600 text-white",
};


export default function ProductsSubCategoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(subCategories.length / rowsPerPage);

  const paginatedProducts = subCategories.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Category</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Sub Category
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
            Add Category
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
                Category <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
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
                <TableHead>Image</TableHead>
                <TableHead>Sub Category</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Category Code</TableHead>
                <TableHead>Description</TableHead>
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
                                          <Image
                                            src={p.image}
                                            alt={p.categoryCode}
                                            width={36}
                                            height={36}
                                            className="rounded-md"
                                          />
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{p.subCategory}</span>
                    </div>
                  </TableCell>

                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.categoryCode}</TableCell>
                  <TableCell>{p.description}</TableCell>
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
