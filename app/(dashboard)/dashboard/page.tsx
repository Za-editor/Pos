

import { getCurrentUser } from "@/lib/supabase/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default async function DashboardPage() {
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome to DreamsPOS! 
              </h1>
              <p className="text-gray-600 mt-2">
                Successfully logged in.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/api/auth/logout" className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Link>
            </Button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              User Information
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-medium">Name:</span>{" "}
                {user.user_metadata?.full_name || "Not provided"}
              </p>
              <p>
                <span className="font-medium">User ID:</span> {user.id}
              </p>
              <p>
                <span className="font-medium">Email Confirmed:</span>{" "}
                {user.email_confirmed_at ? " Yes" : " No"}
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-green-900 mb-2">
               Authentication Working!
            </h2>
            <p className="text-sm text-green-800">
             Authentication system is now fully functional. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
