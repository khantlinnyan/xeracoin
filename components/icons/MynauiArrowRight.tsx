import React, { SVGProps } from "react";

export function MynauiArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"
      ></path>
    </svg>
  );
}
export default MynauiArrowRight;
