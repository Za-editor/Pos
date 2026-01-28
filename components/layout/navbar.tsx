"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  Search,
  User,
  LogOut,
  Settings,
  ChevronDown,
  Loader2,
  ShoppingBag,
  Plus,
  CommandIcon,
  Laptop2,
  Flag,
  Maximize2,
  Maximize,
  Mail,
  Settings2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import Image from "next/image";

interface NavbarProps {
  user: {
    email?: string;
    user_metadata?: {
      full_name?: string;
      avatar_url?: string;
    };
  };
}

export default function Navbar({ user }: NavbarProps) {
  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success("Logged out successfully");
      router.push("/login");
      router.refresh();
    } catch (err) {
      toast.error("Logout Failed");
      console.log(err);
    } finally {
      setLoggingOut(false);
    }
  };

  const displayName =
    user.user_metadata?.full_name || user.email?.split("@")[0] || "User";

  return (
    <header className="h-17.5 bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-40">
      {/* Left Section - Unified Search Bar */}
      <div className="flex-1 max-w-75">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-[#FE9F43] transition-colors" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 h-10 bg-gray-50 border-gray-100 rounded-lg focus-visible:ring-1 focus-visible:ring-[#FE9F43] focus-visible:bg-white text-sm transition-all"
          />

          <CommandIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#092C4C] group-focus-within:text-[#FE9F43] transition-colors" />
        </div>
      </div>

      {/* Right Section - Store Selector, Action Button, and User Profile */}
      <div className="flex items-center gap-4">
        {/* Store Selection Dropdown */}
        <div className="hidden lg:flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
          <ShoppingBag className="h-4 w-4 text-gray-500" />
          <span className="text-[13px] font-semibold text-gray-700">
            Freshmart
          </span>
          <ChevronDown className="h-3 w-3 text-gray-400" />
        </div>

        {/*Add New POS */}
        <Button
          asChild
          className="bg-[#FE9F43] hover:bg-[#f09a42] text-white h-10 px-4 rounded-lg shadow-sm shadow-orange-100 transition-all active:scale-95"
        >
          <Link
            href="/dashboard/sales/pos"
            className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider"
          >
            <Plus className="h-4 w-4 stroke-[3px]" />
            Add New
          </Link>
        </Button>
        <Button
          asChild
          className="bg-[#092C4C] hover:bg-[#17426B] text-white h-10 px-4 rounded-lg transition-all active:scale-95"
        >
          <Link
            href="/dashboard/sales/pos"
            className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider"
          >
            <Laptop2 className="h-4 w-4 stroke-[3px]" />
            POS
          </Link>
        </Button>

        {/* Country, Notification bell,mail, and settings */}
        <div className="flex gap-3 pl-4  border-l">
          <div className=" w-10 h-10 bg-gray-200 rounded-lg flex justify-center p-2 items-center">
            <Image
              src="/images/usa.png"
              alt="Country"
              width={40}
              height={40}
              className="object-fit"
            />
          </div>

          <div className=" w-10 h-10 bg-gray-200 rounded-lg flex justify-center p-2 items-center">
            <Maximize className="h-4 w-4 stroke-[3px] text-gray-600" />
          </div>
          <div className=" w-10 h-10 bg-gray-200 rounded-lg flex justify-center p-2 items-center relative">
            <Mail className="h-4 w-4 text-gray-600" />
            <span className="absolute -top-2 right-0 h-4 w-4 bg-red-500 rounded-full flex justify-center items-center text-sm text-white ">
              1
            </span>
          </div>
          <div className=" w-10 h-10 bg-gray-200 rounded-lg flex justify-center p-2 items-center ">
            <Bell className="h-5 w-5 text-gray-600" />
          </div>
          <div className=" w-10 h-10 bg-gray-200 rounded-lg flex justify-center p-2 items-center ">
            <Settings className="h-5 w-5 text-gray-600" />
          </div>
        </div>

        {/* Profile and ID Section */}
        <div className="flex items-center gap-3 pl-2 border-l border-gray-100 ml-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 group focus:outline-none">
                <div className="relative">
                  <Avatar className="h-9 w-9 border-2 border-gray-50 group-hover:border-[#FE9F43] transition-colors">
                    <AvatarImage src={user.user_metadata?.avatar_url} />
                    <AvatarFallback className="bg-[#1B2850] text-white text-xs font-bold">
                      {displayName.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>

                <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-all" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-56 mt-2 shadow-xl border-gray-100"
            >
              <DropdownMenuLabel className="font-bold text-gray-900">
                Account Management
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer py-2.5">
                <Link
                  href="/dashboard/pages/profile"
                  className="flex items-center"
                >
                  <User className="mr-3 h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">My Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer py-2.5">
                <Link
                  href="/dashboard/settings/general"
                  className="flex items-center"
                >
                  <Settings className="mr-3 h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">General Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                disabled={loggingOut}
                className="cursor-pointer py-2.5 text-red-600 focus:text-white focus:bg-red-500 transition-colors"
              >
                {loggingOut ? (
                  <Loader2 className="mr-3 h-4 w-4 animate-spin" />
                ) : (
                  <LogOut className="mr-3 h-4 w-4" />
                )}
                <span className="text-sm font-bold">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
