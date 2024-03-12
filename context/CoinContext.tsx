"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useTotalCoins } from "./TotalCoinContext";

const CoinContext = createContext();

export const useCoinContext = () => useContext(CoinContext);

export const CoinContextProvider = ({ children }) => {
  const supabase = createClient();
  const { totalCoins, totalAmount } = useTotalCoins();

  const fetchData = async () => {
    const dataSession = await supabase.auth.getSession();
    const user = await supabase.auth.getUser();
    if (!dataSession) {
      return;
    } else {
      const { data, error } = await supabase
        .from("user")
        .select()
        .eq("userId", user.data.user?.id)
        .single();
      if (error) {
        const { data, error } = await supabase
          .from("user")
          .insert([{ coins: totalCoins, amount: totalAmount }]);
      }
      localStorage.removeItem("orderIds");
    }
  };
  useEffect(() => {
    fetchData();
  }, [totalCoins]);

  return <CoinContext.Provider value={{}}>{children}</CoinContext.Provider>;
};
