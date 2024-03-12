import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
};

const Heading = ({ text, className }: Props) => {
  return (
    <h1
      className={cn(
        "text-2xl lg:text-3xl font-semibold tracking-tight text-white",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default Heading;
