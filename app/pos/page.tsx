import { getCurrentUser } from "@/lib/supabase/auth";
import { redirect } from "next/navigation";


import PosNavbar from "@/components/layout/pos-navbar";
import CategorySidebar from "@/components/pos/category-sidebar";


export default async function Pos() {
  const { user } = await getCurrentUser();
  if (!user) {
    console.log("No user, redirecting to login");
    redirect("/login");
  }

  console.log("User authenticated, rendering dashboard");

  return (
    <div className="h-screen bg-gray-50">


          {/* Navbar */}
              <PosNavbar user={user} />
 
      <div className="flex">
        <CategorySidebar/>
      </div>
    </div>
  );
}
