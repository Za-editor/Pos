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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

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

      if (error) {
        toast.error("Logout Failed", {
          description: error.message,
        });
        return;
      }

      toast.success("Logged Out", {
        description: "You have been successfully logged out.",
      });

      router.push("/login");
      router.refresh();
    } catch (err) {
      console.log(err);

      toast.error("Error", {
        description: "An error occurred while logging out.",
      });
    } finally {
      setLoggingOut(false);
    }
  };

  const getInitials = (name?: string, email?: string) => {
    if (name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    if (email) {
      return email.slice(0, 2).toUpperCase();
    }
    return "U";
  };

  const displayName =
    user.user_metadata?.full_name || user.email?.split("@")[0] || "User";

  return (
    <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between">
      {/* Left Section - Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 h-10 bg-gray-50 border-gray-200 focus-visible:ring-[#FE9F43] text-sm"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Store Selector */}
        <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
          <ShoppingBag className="h-4 w-4 text-gray-600" />
          <select className="bg-transparent border-none text-sm font-medium text-gray-700 focus:outline-none cursor-pointer">
            <option>K Freshmart</option>
            <option>Main Store</option>
            <option>Warehouse A</option>
          </select>
        </div>

        {/* Add New POS Button */}
        <Button
          asChild
          className="bg-[#FE9F43] hover:bg-[#f09a42] text-white h-10 px-4 text-sm font-medium"
        >
          <Link href="/dashboard/sales/pos" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add New POS
          </Link>
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative h-10 w-10">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-[#FE9F43] text-white text-sm font-semibold">
                  {getInitials(user.user_metadata?.full_name, user.email)}
                </AvatarFallback>
              </Avatar>
              <div className="text-left hidden md:block">
                <p className="text-sm font-medium text-gray-900">
                  {displayName}
                </p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500 hidden md:block" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/pages/profile" className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/dashboard/settings/general"
                className="cursor-pointer"
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              disabled={loggingOut}
              className="cursor-pointer text-red-600 focus:text-red-600"
            >
              {loggingOut ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Logging out...</span>
                </>
              ) : (
                <>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User ID Badge */}
        <div className="bg-[#FE9F43] text-white px-3 py-1.5 rounded-md text-xs font-bold">
          01
        </div>
      </div>
    </header>
  );
}
