"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const FormSchema = z.object({
  email: z.string().email(),
  coin: z.string(),
});

export default function ShareCoin() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      coin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const supabase = await createClient();
      const user = await supabase.auth.getUser();
      // Get current user data
      let { data: userData, error } = await supabase
        .from("user")
        .select("*")
        .eq("userId", `${user.data.user?.id}`)
        .single();

      if (userData) {
        if (userData.coins > data.coin) {
          const updateCoins = userData.coins - parseInt(data.coin, 10);
          const updateAmount = updateCoins * 1000;
          await supabase
            .from("user")
            .update({ coins: updateCoins, amount: updateAmount })
            .eq("userId", `${user.data.user?.id}`)
            .single();
          let { data: userUpdateCoin, error } = await supabase
            .from("user")
            .select("*")
            .eq("email", data.email)
            .single();
          if (userUpdateCoin) {
            const updateCoins2: any =
              userUpdateCoin.coins + parseInt(data.coin, 10);
            const updateAmount2 = updateCoins * 1000;
            const { data: update, error }: any = await supabase
              .from("user")
              .update({ coins: updateCoins2, amount: updateAmount2 })
              .eq("email", data.email)
              .single();
            toast.success("Transfer coins success");
            router.push("/");
          }
        }
      } else {
        throw new Error("Failed to retrieve current user data");
      }
    } catch (error) {
      console.error(error); // Log detailed error information for debugging
      toast.error("Something went wrong, please try again"); // Display a user-friendly error message
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-6xl space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  type="email"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="coin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Coin Amount</FormLabel>
              <FormControl>
                <Input
                  placeholder="0"
                  {...field}
                  type="number"
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="flex flex-col h-full self-end w-full gap-2 text-white"
        >
          Transfer
        </Button>
      </form>
    </Form>
  );
}
