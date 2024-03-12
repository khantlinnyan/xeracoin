"use client";
import { useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTotalCoins } from "@/context/TotalCoinContext";
import { toast } from "sonner";
const BtnGroup = () => {
  const router = useRouter();
  const params = useParams();
  const supabase = createClient();
  const { setTotalCoins, setTotalAmount }: any = useTotalCoins();

  const handleCollect = async () => {
    const session = await supabase.auth.getSession();
    const user = await supabase.auth.getUser();
    try {
      const { data: coinData, error } = await supabase
        .from("coins")
        .select()
        .eq("orderId", params.coinId)
        .single();

      if (session.data.session) {
        const { data, error } = await supabase
          .from("user")
          .update([{ coins: coinData.coins, amount: coinData.totalAmount }])
          .eq("userId", user.data.user?.id)
          .select();

        const { data: coinAndAmount } = await supabase
          .from("user")
          .select("*")
          .eq("userId", user.data.user?.id)
          .single();
        if (coinAndAmount) {
          setTotalCoins(coinAndAmount?.coins);
          setTotalAmount(coinAndAmount?.amount);
          toast.success("Updated coins");
        }
      } else {
        if (typeof window !== "undefined" && window.localStorage) {
          const existingOrderIds: string[] = JSON.parse(
            localStorage.getItem("orderIds") || "[]"
          );
          if (
            existingOrderIds.length > 0 &&
            existingOrderIds[existingOrderIds.length - 1] === coinData.orderId
          ) {
            return;
          }
          existingOrderIds.push(coinData.orderId);
          localStorage.setItem("orderIds", JSON.stringify(existingOrderIds));
          toast.success("Updated coins");
        }
      }
    } catch (error) {
      toast.error("Somethings went wrong");
    }

    router.push("/");
  };
  return (
    <div className="flex items-end mb-2">
      <Button
        className="text-white font-semibold py-5 w-full max-w-xl bg-primary mx-auto lg:py-6 lg:mb-4"
        onClick={handleCollect}
      >
        Collect Now
      </Button>
    </div>
  );
};

export default BtnGroup;
