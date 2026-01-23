"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FileText,
  Settings,
  ChevronDown,
  ChevronRight,
  Warehouse,
  Tag,
  BarChart3,
  Boxes,
} from "lucide-react";


interface MenuItem {
  title: string;
  icon: any;
  href?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Inventory",
    icon: Package,
    children: [
      {
        title: "Products",
        icon: Package,
        href: "/dashboard/inventory/products",
      },
      {
        title: "Create Product",
        icon: Package,
        href: "/dashboard/inventory/products/create",
      },
      {
        title: "Expired Products",
        icon: Package,
        href: "/dashboard/inventory/products/expired",
      },
      {
        title: "Low Stocks",
        icon: Package,
        href: "/dashboard/inventory/products/low-stocks",
      },
      { title: "Category", icon: Tag, href: "/dashboard/inventory/category" },
      {
        title: "Sub Category",
        icon: Tag,
        href: "/dashboard/inventory/sub-category",
      },
      { title: "Brands", icon: Tag, href: "/dashboard/inventory/brands" },
      { title: "Units", icon: Boxes, href: "/dashboard/inventory/units" },
      {
        title: "Variant Attributes",
        icon: Tag,
        href: "/dashboard/inventory/variant-attributes",
      },
      {
        title: "Warranties",
        icon: FileText,
        href: "/dashboard/inventory/warranties",
      },
      {
        title: "Print Barcode",
        icon: FileText,
        href: "/dashboard/inventory/print-barcode",
      },
      {
        title: "Print QR Code",
        icon: FileText,
        href: "/dashboard/inventory/print-qr",
      },
    ],
  },
  {
    title: "Stock",
    icon: Warehouse,
    children: [
      {
        title: "Manage Stock",
        icon: Warehouse,
        href: "/dashboard/stock/manage-stock",
      },
      {
        title: "Stock Adjustment",
        icon: Warehouse,
        href: "/dashboard/stock/stock-adjustment",
      },
      {
        title: "Stock Transfer",
        icon: Warehouse,
        href: "/dashboard/stock/stock-transfer",
      },
    ],
  },
  {
    title: "Sales",
    icon: ShoppingCart,
    children: [
      { title: "Sales", icon: ShoppingCart, href: "/dashboard/sales/sales" },
      { title: "Invoices", icon: FileText, href: "/dashboard/sales/invoices" },
      {
        title: "Sales Return",
        icon: ShoppingCart,
        href: "/dashboard/sales/sales-return",
      },
      {
        title: "Quotation",
        icon: FileText,
        href: "/dashboard/sales/quotation",
      },
      { title: "POS", icon: ShoppingCart, href: "/dashboard/sales/pos" },
    ],
  },
  {
    title: "Peoples",
    icon: Users,
    children: [
      { title: "Customers", icon: Users, href: "/dashboard/peoples/customers" },
      { title: "Billers", icon: Users, href: "/dashboard/peoples/billers" },
      { title: "Suppliers", icon: Users, href: "/dashboard/peoples/suppliers" },
      { title: "Stores", icon: Users, href: "/dashboard/peoples/stores" },
      {
        title: "Warehouses",
        icon: Warehouse,
        href: "/dashboard/peoples/warehouses",
      },
    ],
  },
  {
    title: "Reports",
    icon: BarChart3,
    children: [
      {
        title: "Sales Report",
        icon: BarChart3,
        href: "/dashboard/reports/sales-report",
      },
      {
        title: "Purchase Report",
        icon: BarChart3,
        href: "/dashboard/reports/purchase-report",
      },
      {
        title: "Inventory Report",
        icon: BarChart3,
        href: "/dashboard/reports/inventory-report",
      },
      {
        title: "Invoice Report",
        icon: BarChart3,
        href: "/dashboard/reports/invoice-report",
      },
      {
        title: "Supplier Report",
        icon: BarChart3,
        href: "/dashboard/reports/supplier-report",
      },
      {
        title: "Customer Report",
        icon: BarChart3,
        href: "/dashboard/reports/customer-report",
      },
      {
        title: "Product Report",
        icon: BarChart3,
        href: "/dashboard/reports/product-report",
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    children: [
      {
        title: "General Settings",
        icon: Settings,
        href: "/dashboard/settings/general",
      },
      {
        title: "Website Settings",
        icon: Settings,
        href: "/dashboard/settings/website",
      },
      {
        title: "App Settings",
        icon: Settings,
        href: "/dashboard/settings/app",
      },
      {
        title: "System Settings",
        icon: Settings,
        href: "/dashboard/settings/system",
      },
    ],
  },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  const isActive = (href: string) => pathname === href;
  const isParentActive = (children?: MenuItem[]) =>
    children?.some((child) => child.href && pathname === child.href);

  return (
    <aside
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-200 px-4">
        {!isCollapsed ? (
          <div className="relative w-32 h-10">
            <Image
              src="/images/logo/logo.png"
              alt="DreamsPOS"
              fill
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <Package className="h-8 w-8 text-[#FE9F43]" />
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.children ? (
                // Parent with children
                <div>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isParentActive(item.children)
                        ? "bg-orange-50 text-[#FE9F43]"
                        : "text-gray-700 hover:bg-gray-50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </div>
                    {!isCollapsed &&
                      (openMenus.includes(item.title) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      ))}
                  </button>

                  {/* Submenu */}
                  {!isCollapsed && openMenus.includes(item.title) && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href || "#"}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                            isActive(child.href || "")
                              ? "bg-orange-50 text-[#FE9F43] font-medium"
                              : "text-gray-600 hover:bg-gray-50",
                          )}
                        >
                          <child.icon className="h-4 w-4 shrink-0" />
                          <span>{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                
                <Link
                  href={item.href || "#"}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive(item.href || "")
                      ? "bg-orange-50 text-[#FE9F43]"
                      : "text-gray-700 hover:bg-gray-50",
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Collapse Toggle */}
      <div className="border-t border-gray-200 p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <>
              <ChevronRight className="h-5 w-5 mr-2" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
