import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfilePreview from "@/components/profile/ProfilePreview";
import React from "react";
import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "xera | profile",
};
const page = async (props: Props) => {
  return (
    <section className="bg-zinc-100">
      <ProfilePreview />
      <ProfileInfo />
    </section>
  );
};

export default page;
