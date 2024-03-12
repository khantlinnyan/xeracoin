"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

interface TotalCoinsContextType {
  totalCoins: number;
  setTotalCoins: React.Dispatch<React.SetStateAction<number>>;
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}

const TotalCoinsContext = createContext<TotalCoinsContextType | undefined>(
  undefined
);

export const useTotalCoins = () => {
  const context = useContext(TotalCoinsContext);
  if (!context) {
    throw new Error("useTotalCoins must be used within a TotalCoinsProvider");
  }
  return context;
};

export const TotalCoinsProvider = ({ children }: any) => {
  const supabase = createClient();

  const [totalCoins, setTotalCoins] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const orderIds: string[] = JSON.parse(
    localStorage.getItem("orderIds") || "[]"
  );

  const fetchData = async () => {
    const session = await supabase.auth.getSession();

    const user = await supabase.auth.getUser();
    if (!session?.data.session) {
      try {
        let totalCoinsAmount = 0;
        let totalAmountValue = 0;

        for (const orderId of orderIds) {
          const { data, error } = await supabase
            .from("coins")
            .select("totalAmount,coins")
            .eq("orderId", orderId)
            .single();

          if (error) {
            console.error("Error fetching data:", error);
            continue;
          }

          if (data) {
            totalCoinsAmount += parseInt(data.coins) || 0;
            totalAmountValue += parseInt(data.totalAmount) || 0;
          }
        }

        setTotalCoins(totalCoinsAmount);
        setTotalAmount(totalAmountValue);
      } catch (error) {
        toast.error("Somethings went wrong");
      }
    } else {
      const { data: coinAndAmount } = await supabase
        .from("user")
        .select("*")
        .eq("userId", user.data.user?.id)
        .single();
      if (coinAndAmount) {
        setTotalCoins(coinAndAmount?.coins);
        setTotalAmount(coinAndAmount?.amount);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TotalCoinsContext.Provider
      value={{ totalCoins, setTotalCoins, setTotalAmount, totalAmount }}
    >
      {children}
    </TotalCoinsContext.Provider>
  );
};
