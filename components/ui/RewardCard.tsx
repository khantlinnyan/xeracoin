"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

type RewardCardProps = {
  id: any;
  text: string;
  coins: string;
  brand: string;
  img: string;
  data: any;
};

const RewardCard = ({ id, text, coins, brand, img, data }: RewardCardProps) => {
  const router = useRouter();
  const handleRewardClick = (id: any) => {
    if (data.session) {
      router.push(`reward-confirmation/${id}`);
    } else {
      router.push("/auth-server-action");
    }
  };
  return (
    <div
      className="w-full rounded-lg grid shadow-sm grid-rows-3 h-fit bg-white"
      onClick={() => handleRewardClick(id)}
    >
      <Image
        src={img}
        alt="ProductImage"
        height={100}
        width={100}
        className="row-span-2 w-full rounded-t-lg aspect-[16/6] object-scale-down bg-center h-auto "
      />
      <div className="grid grid-rows-2 rounded-ee-lg p-3 bg-white rounded-b-xl">
        <p>Get {text}</p>
        <div className="flex gap-2 text-xs lg:text-base">
          <p className="text-primary">{coins} coins</p>|
          <p className="text-zinc-500">{brand}</p>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
