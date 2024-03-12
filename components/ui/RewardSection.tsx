import React from "react";
import Heading from "../Typography/Heading";
import Link from "next/link";
import MynauiArrowRight from "../icons/MynauiArrowRight";
import RewardCard from "./RewardCard";
import readUserSession from "@/lib/actions";
import createSupabaseServerClient from "@/lib/supabase/server";

type Props = {
  isExpPage?: boolean;
};

const Rewards = async ({ dataSession }: any) => {
  const supabase = createSupabaseServerClient();

  let { data, error } = await supabase.from("Products").select("*");

  return (
    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-y-10 md:gap-x-5">
      {data?.map((item) => (
        <RewardCard
          key={item.id}
          id={item.id}
          text={item.text}
          coins={item.coins}
          data={dataSession}
          img={item.img}
          brand={item.brand}
        />
      ))}
    </div>
  );
};

const RewardSection = async ({ isExpPage }: Props) => {
  const { data } = await readUserSession();

  return (
    <section className="mx-4 max-w-5xl md:mx-auto mb-40">
      <div className="flex justify-between items-center md:mb-8 mb-5">
        <Heading
          text="Promo & Rewards"
          className="text-zinc-800 tracking-normal text-lg lg:text-xl"
        />
        {!isExpPage && (
          <Link
            href="/explore"
            className="text-primary font-base md:font-lg font-medium flex items-center gap-1"
          >
            View All
            <MynauiArrowRight fontSize={20} />
          </Link>
        )}
      </div>
      <Rewards dataSession={data} />
    </section>
  );
};

export default RewardSection;
