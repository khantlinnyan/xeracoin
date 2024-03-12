import React, { SVGProps } from "react";

export function MynauiCompass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9"></circle>
        <path d="m9 15l1.5-4.5L15 9l-1.5 4.5z"></path>
      </g>
    </svg>
  );
}
export default MynauiCompass;
