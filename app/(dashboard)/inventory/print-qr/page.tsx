"use client";

import { Search, Eye, RotateCcw, Printer } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RefreshCcw, ChevronUp } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export default function PrintBarcodePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Print Barcode</h1>
          <p className="text-sm text-muted-foreground">
            Dashboard &gt; Print Barcode
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

      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
        {/* Warehouse & Store */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          <div>
            <Label className="mb-2">
              Warehouse<span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Main Warehouse</SelectItem>
                <SelectItem value="main">Main Warehouse 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2">
              Store<span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select store" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Main Store</SelectItem>
                <SelectItem value="main">Main Store 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Search */}
        <div className="space-y-2">
          <Label>
            Product <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Product by Code"
              className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>
        </div>

        {/* Product Table */}
        <div className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Reference Number</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-10 text-gray-400"
                >
                  {" "}
                  No Data Available{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Paper Size & Toggles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center border-b border-gray-200 pb-2">
          <div>
            <Label className="mb-2">
              Paper Size<span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select paper size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a4">A4</SelectItem>
                <SelectItem value="a5">A5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-6">
            <ToggleItem label="Reference Number" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 ">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
            <Eye className="h-4 w-4" />
            Generate QR Code
          </Button>

          <Button variant="outline" className="gap-2 border-gray-300">
            <RotateCcw className="h-4 w-4" />
            Reset Barcode
          </Button>

          <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">
            <Printer className="h-4 w-4" />
            Print Barcode
          </Button>
        </div>
      </div>
    </div>
  );
}

function ToggleItem({ label }: { label: string }) {
  const [enabled, setEnabled] = useState(true);

  return (
    <div
      className={`flex flex-col items-start gap-2 px-4 py-3 rounded-xl transition-colors`}
    >
      <span
        className={`text-sm font-medium transition-colors
          
        `}
      >
        {label}
      </span>

      <Switch
        checked={enabled}
        onCheckedChange={setEnabled}
        className="data-[state=checked]:bg-green-600"
      />
    </div>
  );
}