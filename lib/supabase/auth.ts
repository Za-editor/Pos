import { createClient } from "./client";
import { createClient as createServerClient } from "./server";


// REGISTRATION WITH OTP


export async function signUpWithOtp(
  email: string,
  password: string,
  name: string,
) {
  const supabase = createClient();

 // Create the user account
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
      emailRedirectTo: undefined,
    },
  });

  if (signUpError) {
    return { data: null, error: signUpError };
  }

  

  return { data: signUpData, error: null };
}


// EMAIL/PASSWORD SIGN IN


export async function signIn(email: string, password: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}


// SIGN OUT


export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  return { error };
}


// PASSWORD RESET REQUEST


export async function resetPasswordRequest(email: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });

  return { data, error };
}


// UPDATE PASSWORD


export async function updatePassword(newPassword: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  return { data, error };
}


// OAUTH SIGN IN (Google)


export async function signInWithOAuth(
  provider: "google" | "facebook" | "apple",
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      skipBrowserRedirect: false,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.error("OAuth error:", error);
  }

  return { data, error };
}


// GET CURRENT USER (Server-side)


export async function getCurrentUser() {
  const supabase = await createServerClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return { user, error };
}


// VERIFY EMAIL OTP


export async function verifyEmailOtp(email: string, token: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email", 
  });

  return { data, error };
}


// RESEND OTP


export async function resendOtp(
  email: string,
  type: "signup" | "email_change" = "signup",
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.resend({
    type,
    email,
  });

  return { data, error };
}
