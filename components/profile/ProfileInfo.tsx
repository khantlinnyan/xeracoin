import React from "react";
import MynauiEnvelope from "../icons/MynauiEnvelope";
import MynauiLogout from "../icons/MynauiLogout";
import readUserSession from "@/lib/actions";
import Link from "next/link";
import SignOut from "../auth/SignOut";
import createSupabaseServerClient from "@/lib/supabase/server";

type IconInfoTextProps = {
  Icon: any;
  Text: string;
  Color?: string;
};

const IconInfoText = React.memo(({ Icon, Text, Color }: IconInfoTextProps) => {
  return (
    <div className="flex gap-3 items-center">
      {Icon({ className: `text-xl md:text-2xl ${Color}` })}
      <p className={`text-base md:text-lg tracking-wider ${Color}`}>{Text}</p>
    </div>
  );
});
const ProfileInfo = async () => {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.getUser();
  return (
    <section className=" mt-10 mb-20 md:mt-0 w-full max-w-5xl mx-auto">
      <div className="bg-white gap-y-4 flex flex-col mx-4 px-3 py-3 rounded-xl md:p-5">
        <IconInfoText
          Text={data?.user?.email ?? "Unknown"}
          Icon={MynauiEnvelope}
        />
        {!data.user && (
          <Link href={"/auth-server-action"}>
            <IconInfoText
              Text={"SignIn"}
              Color={"text-red-700"}
              Icon={MynauiLogout}
            />
          </Link>
        )}
      </div>
      {data?.user && (
        <SignOut>
          <div className="bg-white mt-5 gap-y-4 flex flex-col mx-4 px-4 py-2 rounded-xl md:p-5">
            <IconInfoText
              Text={"SignOut"}
              Color={"text-red-700"}
              Icon={MynauiLogout}
            />
          </div>
        </SignOut>
      )}
    </section>
  );
};

export default ProfileInfo;
