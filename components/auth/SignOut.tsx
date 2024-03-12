import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default function SignOut({ children }: any) {
  const Logout = async () => {
    "use server";
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();

    redirect("/auth-server-action");
  };

  return (
    <form action={Logout}>
      <button className="w-full">{children}</button>
    </form>
  );
}
