import { AuthForm } from "@/components/auth/AuthForm";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
export default async function Home() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/");
  }
  return <AuthForm />;
}
