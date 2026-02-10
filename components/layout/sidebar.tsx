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
  Quote,
  FilePenLine,
  BaggageClaim,
  ZoomIn,
  UserPlus,
  Users2,
  Delete,
  ChevronsLeft,
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
        href: "/inventory/products",
      },
      {
        title: "Create Product",
        icon: Table,
        href: "/inventory/products/create",
      },
      {
        title: "Expired Products",
        icon: AlertCircle,
        href: "/inventory/products/expired",
      },
      {
        title: "Low Stocks",
        icon: TrendingUp,
        href: "/inventory/products/low-stocks",
      },
      { title: "Category", icon: ListCheck, href: "/inventory/category" },
      {
        title: "Sub Category",
        icon: Tag,
        href: "/inventory/sub-category",
      },
      { title: "Brands", icon: Triangle, href: "/inventory/brands" },
      { title: "Units", icon: Box, href: "/inventory/units" },
      {
        title: "Variant Attributes",
        icon: CheckLine,
        href: "/inventory/variant-attributes",
      },
      {
        title: "Warranties",
        icon: CakeSlice,
        href: "/inventory/warranties",
      },
      {
        title: "Print Barcode",
        icon: Barcode,
        href: "/inventory/print-barcode",
      },
      {
        title: "Print QR Code",
        icon: QrCode,
        href: "/inventory/print-qr",
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
        href: "/stock/manage-stock",
      },
      {
        title: "Stock Adjustment",
        icon: TrendingUp,
        href: "/stock/stock-adjustment",
      },
      {
        title: "Stock Transfer",
        icon: FileTerminal,
        href: "/stock/stock-transfer",
      },
    ],
  },
  {
    title: "Peoples",
    icon: Users,
    children: [
      { title: "Customers", icon: Users, href: "/peoples/customers" },
      { title: "Billers", icon: Users2, href: "/peoples/billers" },
      { title: "Suppliers", icon: UserPlus, href: "/peoples/suppliers" },
      { title: "Stores", icon: Building2, href: "/peoples/stores" },
      {
        title: "Warehouses",
        icon: Warehouse,
        href: "/peoples/warehouses",
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
        href: "/reports/sales-report",
      },
      {
        title: "Purchase Report",
        icon: BarChart3,
        href: "/reports/purchase-report",
      },
      {
        title: "Inventory Report",
        icon: BarChart3,
        href: "/reports/inventory-report",
      },
      {
        title: "Invoice Report",
        icon: BarChart3,
        href: "/reports/invoice-report",
      },
      {
        title: "Supplier Report",
        icon: BarChart3,
        href: "/reports/supplier-report",
      },
      {
        title: "Customer Report",
        icon: BarChart3,
        href: "/reports/customer-report",
      },
      {
        title: "Product Report",
        icon: BarChart3,
        href: "/reports/product-report",
      },
      {
        title: "Expense Report",
        icon: BarChart3,
        href: "/reports/expense-report",
      },
      {
        title: "Income Report",
        icon: BarChart3,
        href: "/reports/income-report",
      },
      {
        title: "Tax Report",
        icon: BarChart3,
        href: "/reports/tax-report",
      },
      {
        title: "Profit & Loss",
        icon: BarChart3,
        href: "/reports/profit-loss",
      },
      {
        title: "Annual Report",
        icon: BarChart3,
        href: "/reports/annual-report",
      },
    ],
  },
  {
    title: "Sales",
    icon: ShoppingCart,
    children: [
      { title: "Sales", icon: ShoppingCart, href: "/sales/sales" },
      { title: "Invoices", icon: FileText, href: "/sales/invoices" },
      {
        title: "Sales Return",
        icon: Quote,
        href: "/sales/sales-return",
      },
      {
        title: "Quotation",
        icon: FileText,
        href: "/sales/quotation",
      },
      { title: "POS", icon: ShoppingBag, href: "/sales/pos" },
    ],
  },
  {
    title: "Promo",
    icon: Gift,
    children: [
      { title: "Coupons", icon: Percent, href: "/promo/coupons" },
      { title: "Gift Card", icon: Gift, href: "/promo/gift-card" },
      { title: "Discount", icon: Percent, href: "/promo/discount" },
    ],
  },
  {
    title: "Purchases",
    icon: ShoppingBag,
    children: [
      {
        title: "Purchases",
        icon: ShoppingBag,
        href: "/purchases/purchases",
      },
      {
        title: "Purchase Order",
        icon: FileText,
        href: "/purchases/purchase-order",
      },
      {
        title: "Purchase Return",
        icon: ShoppingBag,
        href: "/purchases/purchase-return",
      },
    ],
  },
  {
    title: "Finance & Accounts",
    icon: DollarSign,
    children: [
      {
        title: "Expenses",
        icon: FileStack,
        href: "/finance/expenses",
      },
      { title: "Income", icon: FilePenLine, href: "/finance/income" },
      {
        title: "Bank Accounts",
        icon: Building2,
        href: "/finance/bank-accounts",
      },
      {
        title: "Money Transfer",
        icon: BaggageClaim,
        href: "/finance/money-transfer",
      },
      {
        title: "Balance Sheet",
        icon: FileText,
        href: "/finance/balance-sheet",
      },
      {
        title: "Trial Balance",
        icon: AlertCircle,
        href: "/finance/trial-balance",
      },
      {
        title: "Cash Flow",
        icon: ZoomIn,
        href: "/finance/cash-flow",
      },
      {
        title: "Account Statement",
        icon: FileText,
        href: "/finance/account-statement",
      },
    ],
  },

  {
    title: "HRM",
    icon: Briefcase,
    children: [
      { title: "Employees", icon: Users, href: "/hrm/employees" },
      {
        title: "Departments",
        icon: Building2,
        href: "/hrm/departments",
      },
      {
        title: "Designation",
        icon: Briefcase,
        href: "/hrm/designation",
      },
      { title: "Shifts", icon: Calendar, href: "/hrm/shifts" },
      {
        title: "Attendence",
        icon: ClipboardList,
        href: "/hrm/attendance",
      },
      { title: "Leaves", icon: Calendar, href: "/hrm/leaves" },
      { title: "Holidays", icon: Calendar, href: "/hrm/holidays" },
      { title: "Payroll", icon: DollarSign, href: "/hrm/payroll" },
    ],
  },

  {
    title: "User Management",
    icon: UserCog,
    children: [
      { title: "Users", icon: Users, href: "/user-management/users" },
      {
        title: "Roles & Permissions",
        icon: UserCog,
        href: "/user-management/roles-permissions",
      },
      {
        title: "Delete Account Request",
        icon: Delete,
        href: "/user-management/delete-requests",
      },
    ],
  },
  {
    title: "Content (CMS)",
    icon: BookOpen,
    children: [
      { title: "Pages", icon: FileText, href: "/cms/pages" },
      { title: "Blog", icon: BookOpen, href: "/cms/blog" },
      { title: "Location", icon: MapPin, href: "/cms/location" },
      {
        title: "Testimonials",
        icon: MessageSquare,
        href: "/cms/testimonials",
      },
      { title: "FAQ", icon: HelpCircle, href: "/cms/faq" },
    ],
  },
  {
    title: "Pages",
    icon: FileText,
    children: [
      { title: "Profile", icon: Users, href: "/pages/profile" },
      { title: "Authentication", icon: UserCog, href: "/login" },
      { title: "Error Page", icon: FileText, href: "/404" },
      { title: "Blank Page", icon: FileText, href: "/pages/blank" },
      { title: "Pricing", icon: DollarSign, href: "/pages/pricing" },
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
        href: "/settings/general",
      },
      {
        title: "Website Settings",
        icon: Settings,
        href: "/settings/website",
      },
      {
        title: "App Settings",
        icon: Settings,
        href: "/settings/app",
      },
      {
        title: "System Settings",
        icon: Settings,
        href: "/settings/system",
      },
      {
        title: "Financial Settings",
        icon: Settings,
        href: "/settings/financial",
      },
      {
        title: "Other Settings",
        icon: Settings,
        href: "/settings/other",
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
  const [openMenus, setOpenMenus] = useState<string[]>(["Inventory"]);
  const [collapsed, setCollapsed] = useState(false);
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
        "bg-white border-r border-gray-100 flex flex-col h-screen overflow-hidden transition-all duration-300",
        collapsed ? "w-20" : "w-64",
      )}
    >
      {/* Logo */}
      <div className="relative h-16 flex items-center justify-center border-b border-gray-100 px-4 shrink-0">
        <div className={cn("relative w-32 h-10 transition-all")}>
          <Image
            src={
              collapsed ? "/images/logo/Minilogo.png" : "/images/logo/logo.png"
            }
            alt="DreamsPOS"
            fill
            className="object-contain transition-all duration-300"
            priority
          />
        </div>
        <span
          onClick={() => {
            setCollapsed((prev) => !prev);
            if (!collapsed) setOpenMenus([]);
          }}
          className="absolute bg-[#FE9F43] rounded-full p-0.5 z-1000 right-0 cursor-pointer"
        >
          <ChevronsLeft
            className={cn(
              "text-white transition-transform duration-300 h-4 w-4",
              collapsed && "rotate-180",
            )}
          />
        </span>
      </div>

      {/* Navigation - Scrollable */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="space-y-0.5">
          {!collapsed && (
            <p className="text-[14px] font-medium px-3 pb-2">Main</p>
          )}
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
                      <span
                        className={`transition-all" ${collapsed && "hidden"}`}
                      >
                        {item.title}
                      </span>
                    </div>
                    {!collapsed &&
                      (openMenus.includes(item.title) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      ))}
                  </button>

                  {/* Submenu */}
                  {openMenus.includes(item.title) && !collapsed && (
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
                  <span className={cn("transition-all", collapsed && "hidden")}>
                    {item.title}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
