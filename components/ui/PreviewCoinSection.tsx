import React from "react";
import { PreviewCoin } from "./PreviewCoin";
import Heading from "../Typography/Heading";
import { cn } from "@/lib/utils";
import MynauiArrowLeftRight from "../icons/MynauiArrowLeftRight";
import ShareCoinbtn from "./ShareCoinbtn";

const PreviewCoinSection = () => {
  return (
    <div className="bg-primary mb-20 md:mb-24 z-50 h-36">
      <div className="px-4 mx-auto max-w-5xl py-7 flex justify-between ">
        <div>
          <p className="text-white text-base lg:text-lg">Welcome to</p>
          <Heading text="XERA COIN" />
        </div>
        <ShareCoinbtn />
      </div>
      <PreviewCoin />
    </div>
  );
};

export default PreviewCoinSection;
