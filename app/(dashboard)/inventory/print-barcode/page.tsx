"use client";





import { Search, Eye, RotateCcw, Printer } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  RefreshCcw,
  ChevronUp,
} from "lucide-react";





export default function PrintBarcodePage() {



  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Print Barcode</h1>
          <p className="text-sm text-muted-foreground">Dashboard &gt; Print Barcode</p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>
            Warehouse <span className="text-red-500">*</span>
          </Label>
          <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
            <option>Select</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label>
            Store <span className="text-red-500">*</span>
          </Label>
          <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
            <option>Select</option>
          </select>
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
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Product</th>
              <th className="text-left px-4 py-3 font-medium">SKU</th>
              <th className="text-left px-4 py-3 font-medium">Code</th>
              <th className="text-left px-4 py-3 font-medium">Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={4}
                className="text-center py-10 text-gray-400"
              >
                No Data Available
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Paper Size & Toggles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-2">
          <Label>
            Paper Size <span className="text-red-500">*</span>
          </Label>
          <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
            <option>Select</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-6">
          <ToggleItem label="Show Store Name" />
          <ToggleItem label="Show Product Name" />
          <ToggleItem label="Show Price" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-4">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
          <Eye className="h-4 w-4" />
          Generate QR Code
        </Button>

        <Button
          variant="outline"
          className="gap-2 border-gray-300"
        >
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
  return (
    <div className="flex items-center gap-3">
      <Switch defaultChecked />
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}