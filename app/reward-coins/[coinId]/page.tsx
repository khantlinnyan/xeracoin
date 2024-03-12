import React from "react";
import Image from "next/image";
import HandSign from "@/public/img/HandLove.png";
import Layout from "@/components/Layout";
import Heading from "@/components/Typography/Heading";
import BtnGroup from "./BtnGroup";
import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "xera | reward",
};

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5 row-span-2">
      <div className="bg-primary-light rounded-xl p-1 w-fit">
        <Image src={HandSign} alt="Hand Love" height={50} width={50} />
      </div>
      <Heading
        className="text-zinc-800 text-center"
        text={"Earn Coins with Every Purchase!"}
      />
      <p className="text-base tracking-wide text-center w-5/6 lg:w-1/2">
        Use your coins to unlock exclusive discounts and level up your shopping
        experience.
      </p>
    </div>
  );
};

const page = (props: Props) => {
  return (
    <Layout className="bg-zinc-100 grid grid-rows-3">
      {/* <Heading className="text-zinc-800" text="Confirmation" /> */}
      <Header />
      <BtnGroup />
    </Layout>
  );
};

export default page;
