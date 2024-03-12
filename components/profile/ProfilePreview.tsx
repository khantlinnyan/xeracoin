import React from "react";
import { PreviewCoin } from "../ui/PreviewCoin";
import Heading from "../Typography/Heading";
import MynauiUser from "../icons/MynauiUser";

type Props = {
  userName: string;
};

const ProfilePreview = ({ userName }: Props) => {
  return (
    <div className="bg-primary md:mb-28 z-50 h-[240px]">
      <div className="px-4 mx-auto max-w-5xl py-7 pt-16 flex flex-col justify-center items-center gap-2">
        <div className="p-2 bg-zinc-100/90 w-fit rounded-full">
          <MynauiUser fontSize={45} className="text-zinc-700" />
        </div>
        <Heading text={userName} />
      </div>
      <PreviewCoin />
    </div>
  );
};

export default ProfilePreview;
