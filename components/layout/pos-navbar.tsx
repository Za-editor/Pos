"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  User,
  LogOut,
  Settings,
  ChevronDown,
  Loader2,
  ShoppingBag,
  Plus,
  Laptop2,
  Maximize,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function PosNavbar({ user }: NavbarProps) {
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
    } catch {
      toast.error("Logout failed");
    } finally {
      setLoggingOut(false);
    }
  };

  const displayName =
    user.user_metadata?.full_name || user.email?.split("@")[0] || "User";

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-5 flex items-center justify-between sticky top-0 z-40">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Dreams POS" width={110} height={32} />

        <div className="bg-emerald-500 text-white text-xs px-3 py-1.5 rounded-md font-semibold">
          09:25:32
        </div>
      </div>

      {/* CENTER */}
      <div className="flex items-center gap-3">
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white h-9 px-4 rounded-md text-sm">
          Dashboard
        </Button>

        <div className="flex items-center gap-2 border border-gray-200 px-3 h-9 rounded-md text-sm cursor-pointer">
          <ShoppingBag className="h-4 w-4 text-gray-500" />
          <span className="font-medium">Freshmart</span>
          <ChevronDown className="h-3 w-3 text-gray-400" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* Add / POS Buttons */}
        <Button className="bg-orange-500 hover:bg-orange-600 text-white h-9 px-3 rounded-md">
          <Plus className="h-4 w-4" />
        </Button>

        <Button className="bg-slate-900 hover:bg-slate-800 text-white h-9 px-3 rounded-md">
          <Laptop2 className="h-4 w-4" />
        </Button>

        {/* ICON GROUP */}
        <div className="flex items-center gap-2 pl-3 border-l">
          {[
            <Image
              key="flag"
              src="/images/usa.png"
              alt=""
              width={20}
              height={20}
            />,
            <Maximize key="max" className="h-4 w-4" />,
            <Mail key="mail" className="h-4 w-4" />,
            <Bell key="bell" className="h-4 w-4" />,
            <Settings key="set" className="h-4 w-4" />,
          ].map((icon, i) => (
            <div
              key={i}
              className="h-9 w-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer"
            >
              {icon}
            </div>
          ))}
        </div>

        {/* PROFILE */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 pl-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.user_metadata?.avatar_url} />
                <AvatarFallback className="bg-indigo-600 text-white text-xs">
                  {displayName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/pages/profile" className="flex gap-2">
                <User className="h-4 w-4" /> Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              disabled={loggingOut}
              className="text-red-600"
            >
              {loggingOut ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <LogOut className="h-4 w-4" />
              )}
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
