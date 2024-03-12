import RewardSection from "@/components/ui/RewardSection";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="mt-5">
      <RewardSection isExpPage={true} />
    </section>
  );
};

export default page;
