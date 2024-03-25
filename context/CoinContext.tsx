"use client";
import React, { createContext, useContext, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useTotalCoins } from "./TotalCoinContext";

interface CoinContextType {
  totalCoins: number;
  totalAmount: number;
}

const CoinContext = createContext<CoinContextType | undefined>(undefined);

export const useCoinContext = () => useContext(CoinContext);

export const CoinContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const supabase = createClient();
  const { totalCoins, totalAmount } = useTotalCoins();
  // const dataSession = supabase.auth.getSession();

  const fetchData = async () => {
    const dataSession = await supabase.auth.getSession();
    const user = await supabase.auth.getUser();

    if (!dataSession.data.session) {
      return;
    } else {
      const { data, error } = await supabase.from("user").insert([
        {
          coins: totalCoins,
          amount: totalAmount,
          email: user.data.user?.email,
        },
      ]);
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("orderIds");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [totalCoins, totalAmount]);

  return (
    <CoinContext.Provider value={{ totalCoins, totalAmount }}>
      {children}
    </CoinContext.Provider>
  );
};
