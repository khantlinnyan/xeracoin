import RewardSection from "@/components/ui/RewardSection";
import React from "react";
import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "xera | explore",
};

const page = (props: Props) => {
  return (
    <section className="mt-5">
      <RewardSection isExpPage={true} />
    </section>
  );
};

export default page;
