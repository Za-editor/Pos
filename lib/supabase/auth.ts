import { createClient } from "./client";
import { createClient as createServerClient } from "./server";

// Email and password Signup
// Sign up with email and password (OTP-based)
export async function signUp(email: string, password: string, name: string) {
  const supabase = createClient()
  

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  })

  if (signUpError) {
    return { data: null, error: signUpError }
  }

  
  if (signUpData.user && !signUpData.session) {
    const { error: otpError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false, 
      },
    })

    if (otpError) {
      return { data: signUpData, error: otpError }
    }
  }

  return { data: signUpData, error: null }
}

//Email and password Signin
export async function signIn(email: string, password: string) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}
//SignOut
export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  return error;
}

//Request password reset
export async function resetPasswordRequest(email: string) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset/password`,
  });
  return { data, error };
}

//Update password
export async function updatePassword(newPassword: string) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  return { data, error };
}

//Sign in with OAuth (Google)
export async function signInWithOAuth(provider: "google") {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  return { data, error };
}

//Get Current user
export async function getCurrentUser() {
  const supabase = await createServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return { user, error };
}

//Verify OTP
export async function verifyOtp(
  email: string,
  token: string,
  type: "email" | "signup" = "email",
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type,
  });
  return { data, error };
}

// Resend OTP
export async function resendOtp(email: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
    },
  })

  return { data, error }
}
