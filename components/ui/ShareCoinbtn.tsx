"use client";
import MynauiArrowLeftRight from "../icons/MynauiArrowLeftRight";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const ShareCoinbtn = async () => {
  const router = useRouter();
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  function handleShare() {
    if (user.data.user?.email) {
      router.push("/share-coin");
    } else {
      router.push("/auth-server-action");
    }
  }
  return (
    <button
      className="border w-fit h-fit border-white/60 p-1 rounded-full "
      onClick={handleShare}
    >
      <MynauiArrowLeftRight fontSize={26} color="white" />
    </button>
  );
};
export default ShareCoinbtn;
