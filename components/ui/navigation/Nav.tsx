"use client";
import MynauiHome from "@/components/icons/MynauiHome";
import MynauiUser from "@/components/icons/MynauiUser";
import React from "react";
import Link from "next/link";
import MynauiCompass from "@/components/icons/MynauiCompass";
import { usePathname } from "next/navigation";

type Props = {};

const className = "flex justify-center ";
const iconSize = "lg:text-3xl text-2xl";
const Nav = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className="fixed bg-zinc-100 w-full bottom-0 text-center">
      <div className="w-full md:left-0 md:w-1/2 md:translate-x-1/2 py-2.5">
        <div className="grid grid-cols-3 text-center">
          <Link href={"/"} className={className}>
            <MynauiHome
              className={`${iconSize} ${
                pathname === "/" ? "text-primary" : "text-black"
              }`}
            />
          </Link>
          <Link href="/explore" className={className}>
            <MynauiCompass
              fill="blue"
              className={`${iconSize} ${
                pathname === "/explore" ? "text-primary" : "text-black"
              }`}
            />
          </Link>
          <Link href="/profile" className={className}>
            <MynauiUser
              className={`${iconSize} ${
                pathname === "/profile" ? "text-primary" : "text-black"
              }`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
