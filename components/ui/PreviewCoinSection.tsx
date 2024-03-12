import React from "react";
import { PreviewCoin } from "./PreviewCoin";
import Heading from "../Typography/Heading";
import { cn } from "@/lib/utils";

const PreviewCoinSection = () => {
  return (
    <div className="bg-primary mb-20 md:mb-24 z-50 h-36">
      <div className="px-4 mx-auto max-w-5xl py-7">
        <p className="text-white text-base lg:text-lg">Welcome to</p>
        <Heading text="XERA COIN" />
      </div>
      <PreviewCoin />
    </div>
  );
};

export default PreviewCoinSection;
