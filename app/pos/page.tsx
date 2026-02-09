import { getCurrentUser } from "@/lib/supabase/auth";
import { redirect } from "next/navigation";

import PosNavbar from "@/components/layout/pos-navbar";
import CategorySidebar from "@/components/pos/category-sidebar";
import PosFooter from "@/components/pos/pos-footer";

export default async function Pos() {
  const { user } = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <PosNavbar user={user} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <CategorySidebar />
        
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 z-40">
        <PosFooter />
      </div>
    </div>
  );
}
