"use client";
import { Button } from "@/components/ui/button";
import { useTotalCoins } from "@/context/TotalCoinContext";
import { createClient } from "@/lib/supabase/client";
import { setConfig } from "next/config";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { toast } from "sonner";

const BtnGroup = () => {
  const { totalCoins, totalAmount, setTotalAmount, setTotalCoins } =
    useTotalCoins();
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();

  const handleRedeem = async () => {
    try {
      const user = await supabase.auth.getUser();
      const { data: productData, error } = await supabase
        .from("Products")
        .select("*")
        .eq("id", params.id)
        .single();

      if (productData) {
        if (
          totalCoins < productData.coins ||
          totalAmount < productData.amount
        ) {
          toast.error("You don't have enough coins");
          router.push("/");
          return;
        }

        let coins = totalCoins - productData.coins;
        let amount = totalAmount - productData.amount;
        setTotalAmount(amount);
        setTotalCoins(coins);

        const { data: updateData, error: updateError } = await supabase
          .from("user")
          .update({ coins, amount })
          .eq("userId", user.data.user?.id)
          .select();

        if (updateData) {
          toast.success("Redeemed successful");
        } else {
          toast.error("Somethings went wrong");
        }
      }

      if (error) {
        toast.error("Somethings went wrong");
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
        onClick={handleRedeem}
      >
        Redeem now
      </Button>
    </div>
  );
};

export default BtnGroup;
