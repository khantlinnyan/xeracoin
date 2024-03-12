"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Coin from "@/components/icons/coin-svgrepo-com.svg";
import Heading from "../Typography/Heading";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { useTotalCoins } from "@/context/TotalCoinContext";

interface PreviewCoinProps {
  className?: string;
}

export const PreviewCoin: React.FC<PreviewCoinProps> = ({ className }) => {
  const supabase = createClient();
  const { totalCoins, totalAmount } = useTotalCoins();

  return (
    <div
      className={cn(
        "bg-white max-w-5xl w-11/12 z-50 mx-auto rounded-2xl shadow flex justify-between px-3 py-4",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Image src={Coin} alt="CoinIcon" height={30} width={30} />
        <Heading className="text-lg lg:text-2xl text-zinc-700" text="Coins" />
      </div>
      <div className="flex item-center flex-col gap-1">
        <Heading className="text-zinc-700" text={totalCoins ?? 0} />
        <p className="text-xs lg:text-base tracking">
          Equals {totalAmount} MMK
        </p>
      </div>
    </div>
  );
};
