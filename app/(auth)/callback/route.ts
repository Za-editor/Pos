import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  console.log("Auth callback received:", {
    code: code ? "present" : "missing",
  });

 
  // STEP 1: CHECK IF CODE IS PRESENT


  if (code) {
    const supabase = await createClient();

    try {
    
      // STEP 2: EXCHANGE CODE FOR SESSION
    

      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Auth callback error:", error);

        // Redirect to login with error message
        return NextResponse.redirect(
          `${origin}/login?error=${encodeURIComponent("Authentication failed. Please try again.")}`,
        );
      }

      console.log("Session created successfully for user:", data.user?.email);

    
      // STEP 3: SUCCESSFUL - REDIRECT TO DASHBOARD
    

      return NextResponse.redirect(`${origin}/dashboard`);
    } catch (err) {
      console.error("Unexpected error in auth callback:", err);

      return NextResponse.redirect(
        `${origin}/login?error=${encodeURIComponent("An unexpected error occurred.")}`,
      );
    }
  }

 
  // NO CODE PROVIDED - REDIRECT TO LOGIN


  console.log("No code provided in callback");
  return NextResponse.redirect(`${origin}/login`);
}
