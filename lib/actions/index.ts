"use server";
import createSupabaseServerClient from "../supabase/server";

export default async function readUserSession() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}

export async function readUser() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getUser();
}
