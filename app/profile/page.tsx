import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfilePreview from "@/components/profile/ProfilePreview";
import readUserSession from "@/lib/actions";
import React from "react";
import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "xera | profile",
};
const page = async (props: Props) => {
  const { data } = await readUserSession();
  return (
    <section className="bg-zinc-100">
      <ProfilePreview userName={data.session ? "Lynn" : "Unknown"} />
      <ProfileInfo />
    </section>
  );
};

export default page;
