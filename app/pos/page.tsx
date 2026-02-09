import { getCurrentUser } from "@/lib/supabase/auth";
import { redirect } from "next/navigation";


import PosNavbar from "@/components/layout/pos-navbar";


export default async function Pos() {
  const { user } = await getCurrentUser();
  if (!user) {
    console.log("No user, redirecting to login");
    redirect("/login");
  }

  console.log("User authenticated, rendering dashboard");

  return (
    <div className="flex h-screen bg-gray-50">

      <div className="flex-1 flex flex-col overflow-hidden ">
          {/* Navbar */}
              <PosNavbar user={user} /> 
  
      </div>
    </div>
  );
}
