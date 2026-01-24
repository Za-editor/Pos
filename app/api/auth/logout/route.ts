import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const supabase = await createClient();

  // Sign out
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log("Logout error", error);
  }
  // Redirect to login
  return NextResponse.redirect(new URL("/login", requestUrl.origin));
}
