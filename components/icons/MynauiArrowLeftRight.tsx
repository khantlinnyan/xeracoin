import React, { SVGProps } from "react";

export function MynauiArrowLeftRight(props: SVGProps<SVGSVGElement>) {
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
        d="M6.5 7.5h11m0 0L14 11m3.5-3.5L14 4m3.5 12.5h-11m0 0L10 20m-3.5-3.5L10 13"
      ></path>
    </svg>
  );
}
export default MynauiArrowLeftRight;
