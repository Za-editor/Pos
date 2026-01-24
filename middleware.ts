import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const MAINTENANCE_MODE = false;

export async function middleware(request: NextRequest) {

  if (
    MAINTENANCE_MODE &&
    !request.nextUrl.pathname.startsWith("/maintenance")
  ) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  // SKIP AUTH CHECK FOR CALLBACK ROUTE

  if (request.nextUrl.pathname === "/auth/callback") {
    return NextResponse.next();
  }

  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    },
  );


  // REFRESH SESSION

  await supabase.auth.getUser();

  const {
    data: { session },
  } = await supabase.auth.getSession();


  // Redirect to login if not authenticated and trying to access dashboard
  if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect to dashboard if authenticated and trying to access auth pages
  if (
    session &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
