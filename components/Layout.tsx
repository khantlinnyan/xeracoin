import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  return (
    <main className={cn("h-[85vh] px-4 py-2 bg-zinc-100", className)}>
      {children}
    </main>
  );
};

export default Layout;
