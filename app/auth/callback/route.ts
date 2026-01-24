import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");



  if (code) {
    try {
      const cookieStore = await cookies();

      
      const { createBrowserClient } = await import("@supabase/ssr");

      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            getAll() {
              return cookieStore.getAll();
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value, options }) => {
                cookieStore.set(name, value, options);
              });
            },
          },
        },
      );


      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Auth exchange error:", error.message);
        return NextResponse.redirect(
          new URL(
            `/login?error=${encodeURIComponent(error.message)}`,
            requestUrl.origin,
          ),
        );
      }

      if (data.session) {
        return NextResponse.redirect(new URL("/dashboard", requestUrl.origin), {
          status: 302, 
        });
      }
    } catch (error: any) {
      console.error("Unexpected error:", error);
      return NextResponse.redirect(
        new URL(
          `/login?error=${encodeURIComponent("Authentication failed")}`,
          requestUrl.origin,
        ),
      );
    }
  }

  console.log("No code in callback, redirecting to login");
  return NextResponse.redirect(new URL("/login", requestUrl.origin));
}
