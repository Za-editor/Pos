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
  UserCog,
  Gift,
  Percent,
  ShoppingBag,
  DollarSign,
  Building2,
  Briefcase,
  Calendar,
  ClipboardList,
  BookOpen,
  MapPin,
  MessageSquare,
  HelpCircle,
  LogOut,
  Table,
  AlertCircle,
  TrendingUp,
  ListCheck,
  Triangle,
  Box,
  CheckLine,
  CakeSlice,
  Barcode,
  QrCode,
  FileStack,
  FileTerminal,
  Quote
} from "lucide-react";

interface MenuItem {
  title: string;
  icon: any;
  href?: string;
  badge?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [

  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Super Admin",
    icon: UserCog,
    href: "/dashboard/super-admin",
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
        icon: Table,
        href: "/dashboard/inventory/products/create",
      },
      {
        title: "Expired Products",
        icon: AlertCircle,
        href: "/dashboard/inventory/products/expired",
      },
      {
        title: "Low Stocks",
        icon: TrendingUp,
        href: "/dashboard/inventory/products/low-stocks",
      },
      { title: "Category", icon: ListCheck, href: "/dashboard/inventory/category" },
      {
        title: "Sub Category",
        icon: Tag,
        href: "/dashboard/inventory/sub-category",
      },
      { title: "Brands", icon: Triangle, href: "/dashboard/inventory/brands" },
      { title: "Units", icon: Box, href: "/dashboard/inventory/units" },
      {
        title: "Variant Attributes",
        icon: CheckLine,
        href: "/dashboard/inventory/variant-attributes",
      },
      {
        title: "Warranties",
        icon: CakeSlice,
        href: "/dashboard/inventory/warranties",
      },
      {
        title: "Print Barcode",
        icon: Barcode,
        href: "/dashboard/inventory/print-barcode",
      },
      {
        title: "Print QR Code",
        icon: QrCode,
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
        icon: FileStack,
        href: "/dashboard/stock/manage-stock",
      },
      {
        title: "Stock Adjustment",
        icon: TrendingUp,
        href: "/dashboard/stock/stock-adjustment",
      },
      {
        title: "Stock Transfer",
        icon: FileTerminal,
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
        icon: Quote,
        href: "/dashboard/sales/sales-return",
      },
      {
        title: "Quotation",
        icon: FileText,
        href: "/dashboard/sales/quotation",
      },
      { title: "POS", icon: ShoppingBag, href: "/dashboard/sales/pos" },
    ],
  },
  {
    title: "Promo",
    icon: Gift,
    children: [
      { title: "Coupons", icon: Percent, href: "/dashboard/promo/coupons" },
      { title: "Gift Card", icon: Gift, href: "/dashboard/promo/gift-card" },
      { title: "Discount", icon: Percent, href: "/dashboard/promo/discount" },
    ],
  },
  {
    title: "Purchases",
    icon: ShoppingBag,
    children: [
      {
        title: "Purchases",
        icon: ShoppingBag,
        href: "/dashboard/purchases/purchases",
      },
      {
        title: "Purchase Order",
        icon: FileText,
        href: "/dashboard/purchases/purchase-order",
      },
      {
        title: "Purchase Return",
        icon: ShoppingBag,
        href: "/dashboard/purchases/purchase-return",
      },
    ],
  },
  {
    title: "Finance & Accounts",
    icon: DollarSign,
    children: [
      {
        title: "Expenses",
        icon: DollarSign,
        href: "/dashboard/finance/expenses",
      },
      { title: "Income", icon: DollarSign, href: "/dashboard/finance/income" },
      {
        title: "Bank Accounts",
        icon: Building2,
        href: "/dashboard/finance/bank-accounts",
      },
      {
        title: "Money Transfer",
        icon: DollarSign,
        href: "/dashboard/finance/money-transfer",
      },
      {
        title: "Balance Sheet",
        icon: FileText,
        href: "/dashboard/finance/balance-sheet",
      },
      {
        title: "Trial Balance",
        icon: FileText,
        href: "/dashboard/finance/trial-balance",
      },
      {
        title: "Cash Flow",
        icon: DollarSign,
        href: "/dashboard/finance/cash-flow",
      },
      {
        title: "Account Statement",
        icon: FileText,
        href: "/dashboard/finance/account-statement",
      },
    ],
  },
  {
    title: "Peoples",
    icon: Users,
    children: [
      { title: "Customers", icon: Users, href: "/dashboard/peoples/customers" },
      { title: "Billers", icon: Users, href: "/dashboard/peoples/billers" },
      { title: "Suppliers", icon: Users, href: "/dashboard/peoples/suppliers" },
      { title: "Stores", icon: Building2, href: "/dashboard/peoples/stores" },
      {
        title: "Warehouses",
        icon: Warehouse,
        href: "/dashboard/peoples/warehouses",
      },
    ],
  },
  {
    title: "HRM",
    icon: Briefcase,
    children: [
      { title: "Employees", icon: Users, href: "/dashboard/hrm/employees" },
      {
        title: "Departments",
        icon: Building2,
        href: "/dashboard/hrm/departments",
      },
      {
        title: "Designation",
        icon: Briefcase,
        href: "/dashboard/hrm/designation",
      },
      { title: "Shifts", icon: Calendar, href: "/dashboard/hrm/shifts" },
      {
        title: "Attendence",
        icon: ClipboardList,
        href: "/dashboard/hrm/attendance",
      },
      { title: "Leaves", icon: Calendar, href: "/dashboard/hrm/leaves" },
      { title: "Holidays", icon: Calendar, href: "/dashboard/hrm/holidays" },
      { title: "Payroll", icon: DollarSign, href: "/dashboard/hrm/payroll" },
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
      {
        title: "Expense Report",
        icon: BarChart3,
        href: "/dashboard/reports/expense-report",
      },
      {
        title: "Income Report",
        icon: BarChart3,
        href: "/dashboard/reports/income-report",
      },
      {
        title: "Tax Report",
        icon: BarChart3,
        href: "/dashboard/reports/tax-report",
      },
      {
        title: "Profit & Loss",
        icon: BarChart3,
        href: "/dashboard/reports/profit-loss",
      },
      {
        title: "Annual Report",
        icon: BarChart3,
        href: "/dashboard/reports/annual-report",
      },
    ],
  },
  {
    title: "User Management",
    icon: UserCog,
    children: [
      { title: "Users", icon: Users, href: "/dashboard/user-management/users" },
      {
        title: "Roles & Permissions",
        icon: UserCog,
        href: "/dashboard/user-management/roles-permissions",
      },
      {
        title: "Delete Account Request",
        icon: UserCog,
        href: "/dashboard/user-management/delete-requests",
      },
    ],
  },
  {
    title: "Content (CMS)",
    icon: BookOpen,
    children: [
      { title: "Pages", icon: FileText, href: "/dashboard/cms/pages" },
      { title: "Blog", icon: BookOpen, href: "/dashboard/cms/blog" },
      { title: "Location", icon: MapPin, href: "/dashboard/cms/location" },
      {
        title: "Testimonials",
        icon: MessageSquare,
        href: "/dashboard/cms/testimonials",
      },
      { title: "FAQ", icon: HelpCircle, href: "/dashboard/cms/faq" },
    ],
  },
  {
    title: "Pages",
    icon: FileText,
    children: [
      { title: "Profile", icon: Users, href: "/dashboard/pages/profile" },
      { title: "Authentication", icon: UserCog, href: "/login" },
      { title: "Error Page", icon: FileText, href: "/404" },
      { title: "Blank Page", icon: FileText, href: "/dashboard/pages/blank" },
      { title: "Pricing", icon: DollarSign, href: "/dashboard/pages/pricing" },
      { title: "Coming Soon", icon: FileText, href: "/coming-soon" },
      { title: "Under Maintenance", icon: FileText, href: "/maintenance" },
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
      {
        title: "Financial Settings",
        icon: Settings,
        href: "/dashboard/settings/financial",
      },
      {
        title: "Other Settings",
        icon: Settings,
        href: "/dashboard/settings/other",
      },
    ],
  },
  {
    title: "Logout",
    icon: LogOut,
    href: "/api/auth/logout",
  },
];

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<string[]>(["Inventory"]); // Default open
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
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-screen overflow-hidden">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-100 px-4 shrink-0">
        <div className="relative w-32 h-10">
          <Image
            src="/images/logo/logo.png"
            alt="DreamsPOS"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Navigation - Scrollable */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="space-y-0.5">
          <p className="text-[14px] font-medium px-3 pb-2">Main</p>
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors",
                      isParentActive(item.children)
                        ? "bg-orange-50 text-[#FE9F43]"
                        : "text-gray-700 hover:bg-gray-50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4.5 w-4.5 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    {openMenus.includes(item.title) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>

                  {/* Submenu */}
                  {openMenus.includes(item.title) && (
                    <div className="ml-6 mt-1 space-y-0.5 border-l border-gray-200 pl-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href || "#"}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-md text-[13px] transition-colors",
                            isActive(child.href || "")
                              ? "bg-orange-50 text-[#FE9F43] font-medium"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          )}
                        >
                          <child.icon className="h-4.5 w-4.5 shrink-0 opacity-60" />
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
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors",
                    isActive(item.href || "")
                      ? "bg-orange-50 text-[#FE9F43]"
                      : item.title === "Logout"
                        ? "text-red-600 hover:bg-red-50"
                        : "text-gray-700 hover:bg-gray-50",
                  )}
                >
                  <item.icon className="h-4.5 w-4.5 shrink-0" />
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
