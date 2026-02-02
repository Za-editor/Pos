"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowLeft,  CalendarIcon, ChevronUp, LifeBuoy, RefreshCcw } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Bold,
  ChevronDown,
  Code,
  Info,
  Italic,
  Link,
  List,
  ListOrdered,
  Paperclip,
  Send,
  Smile,
  Strikethrough,
  Trash2,
  Underline,
    Upload,
  Image as ImageIcon,
} from "lucide-react";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export default function CreateProductPage() {
    const [productType, setProductType] = useState("single");
      const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(
    new Date("2025-06-01")
  )
  const [month, setMonth] = useState<Date | undefined>(date)
  const [value, setValue] = useState(formatDate(date))

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
                     <RefreshCcw />
                   </Button>
                   <Button variant="outline">
                     <ChevronUp />
                   </Button>

                   <Button className="bg-slate-900 hover:bg-slate-800">
                    <ArrowLeft /> Back to Products
                   </Button>
                 </div>
               </div> 
      {/* Product info */}
      <Card className="rounded-xl">
        <CardHeader className="border-b">
          <CardTitle className="text-base">
            <Info className="inline-block mr-2 text-orange-500 w-4 h-4" />
            Product Information
          </CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Label className="mb-2">
              Store <span className="text-red-500">*</span>
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

          <div>
            <Label className="mb-2">
              Warehouse <span className="text-red-500">*</span>
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
              Product Name <span className="text-red-500">*</span>
            </Label>
            <Input />
          </div>

          <div>
            <Label className="mb-2">
              Slug <span className="text-red-500">*</span>
            </Label>
            <Input />
          </div>

          <div>
            <Label className="mb-2">
              SKU <span className="text-red-500">*</span>
            </Label>
            <Input />
          </div>

          <div>
            <Label className="mb-2">
              Selling Type <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Type</SelectItem>
                <SelectItem value="main">Type 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2">
              Category <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Shoes</SelectItem>
                <SelectItem value="main">Main Warehouse 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2">
              Sub Category<span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select sub category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Sub Category</SelectItem>
                <SelectItem value="main">Sub Category 1</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2">
              Brand <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Main Brand</SelectItem>
                <SelectItem value="main">Main Brand 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2">
              Unit <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Main Unit</SelectItem>
                <SelectItem value="main">Main Unit 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2">
              Item Code <span className="text-red-500">*</span>
            </Label>
            <Input />
          </div>

          <div>
            <Label className="mb-2">
              Barcode Symbology <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select symbology" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Main Symbology</SelectItem>
                <SelectItem value="main">Main Symbology 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label>Description</Label>

            <div className="rounded-sm border border-gray-200 bg-white overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-200 text-gray-500">
                <Bold className="h-4 w-4 cursor-pointer" />
                <Italic className="h-4 w-4 cursor-pointer" />
                <Underline className="h-4 w-4 cursor-pointer" />
                <Strikethrough className="h-4 w-4 cursor-pointer" />
                <Link className="h-4 w-4 cursor-pointer" />

                <div className="h-4 w-px bg-gray-200 mx-1" />

                <List className="h-4 w-4 cursor-pointer" />
                <ListOrdered className="h-4 w-4 cursor-pointer" />
                <Code className="h-4 w-4 cursor-pointer" />
              </div>

              {/* Textarea */}
              <Textarea
                placeholder="Type your message"
                className="border-0 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 min-h-30"
              />

              {/* Footer */}
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200 text-gray-400 text-xs">
                <div className="flex items-center gap-3">
                  <Paperclip className="h-4 w-4 cursor-pointer" />
                  <Smile className="h-4 w-4 cursor-pointer" />
                  <Trash2 className="h-4 w-4 cursor-pointer" />
                </div>

                <div className="flex items-center gap-3">
                  <span>Maximum 60 Words</span>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Send className="h-4 w-4" />
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing & stock */}
      <Card className="rounded-xl">
        <CardHeader className="border-b">
          <CardTitle className="text-base">
            <LifeBuoy className="inline-block mr-2 text-orange-500 w-4 h-4" />
            Pricing & Stocks
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <Label className="mb-2">
            Product Type <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            defaultValue="single"
            className="flex gap-6"
            onValueChange={setProductType}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="single" />
              <Label>Single Product</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="variable" />
              <Label>Variable Product</Label>
            </div>
          </RadioGroup>

          {productType === "single" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <Label className="mb-2">
                  Quantity <span className="text-red-500">*</span>
                </Label>
                <Input />
              </div>

              <div>
                <Label className="mb-2">
                  Price <span className="text-red-500">*</span>
                </Label>
                <Input />
              </div>

              <div>
                <Label className="mb-2">
                  Tax Type <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select tax type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Main Tax</SelectItem>
                    <SelectItem value="main">Main Tax 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2">
                  Discount Type <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select discount type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Main Discount</SelectItem>
                    <SelectItem value="main">Main Discount 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2">
                  Discount Value <span className="text-red-500">*</span>
                </Label>
                <Input />
              </div>

              <div>
                <Label className="mb-2">
                  Quantity Alert <span className="text-red-500">*</span>
                </Label>
                <Input />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* image */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-base"><ImageIcon className="inline-block mr-2 text-orange-500 w-4 h-4" />Image</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-center gap-2">
            <Upload className="h-6 w-6 text-muted-foreground" />
            <p className="text-sm">
              Drag & drop image here, or{" "}
              <span className="text-orange-500 font-medium cursor-pointer">
                browse
              </span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Custom fields */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-base"><List className="inline-block mr-2 text-orange-500 w-4 h-4" />Custom Fields</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Label className="mb-2">
              Warranty<span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select warranty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Main Warranty</SelectItem>
                <SelectItem value="main">Main Warranty 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2">
              Manufacturer <span className="text-red-500">*</span>
            </Label>
            <Input />
          </div>

          <Field className=" w-full">
            <FieldLabel htmlFor="date-required">Manufactured Date <span className="text-red-500">*</span></FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="date-required"
                value={value}
                placeholder="June 01, 2025"
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  setValue(e.target.value);
                  if (isValidDate(date)) {
                    setDate(date);
                    setMonth(date);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpen(true);
                  }
                }}
              />
              <InputGroupAddon align="inline-end">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <InputGroupButton
                      id="date-picker"
                      variant="ghost"
                      size="icon-xs"
                      aria-label="Select date"
                    >
                      <CalendarIcon />
                      <span className="sr-only">Select date</span>
                    </InputGroupButton>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="end"
                    alignOffset={-8}
                    sideOffset={10}
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      month={month}
                      onMonthChange={setMonth}
                      onSelect={(date) => {
                        setDate(date);
                        setValue(formatDate(date));
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field className=" w-full">
            <FieldLabel htmlFor="date-required">Expired Date <span className="text-red-500">*</span></FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="date-required"
                value={value}
                placeholder="June 01, 2025"
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  setValue(e.target.value);
                  if (isValidDate(date)) {
                    setDate(date);
                    setMonth(date);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpen(true);
                  }
                }}
              />
              <InputGroupAddon align="inline-end">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <InputGroupButton
                      id="date-picker"
                      variant="ghost"
                      size="icon-xs"
                      aria-label="Select date"
                    >
                      <CalendarIcon />
                      <span className="sr-only">Select date</span>
                    </InputGroupButton>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="end"
                    alignOffset={-8}
                    sideOffset={10}
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      month={month}
                      onMonthChange={setMonth}
                      onSelect={(date) => {
                        setDate(date);
                        setValue(formatDate(date));
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </InputGroupAddon>
            </InputGroup>
          </Field>
       </CardContent>
      </Card>

      {/* actions */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-orange-500 hover:bg-orange-600">
          Add Product
        </Button>
      </div>
    </div>
  );
}
