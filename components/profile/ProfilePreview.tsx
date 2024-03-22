import React from "react";
import { PreviewCoin } from "../ui/PreviewCoin";
import MynauiUser from "../icons/MynauiUser";

const ProfilePreview = () => {
  return (
    <div className="bg-primary md:mb-20 z-50 h-[180px]">
      <div className="px-4 mx-auto max-w-5xl py-7 pt-10 flex flex-col justify-center items-center gap-2">
        <div className="p-2 bg-zinc-100/90 w-fit rounded-full">
          <MynauiUser fontSize={45} className="text-zinc-700" />
        </div>
      </div>
      <PreviewCoin />
    </div>
  );
};

export default ProfilePreview;
