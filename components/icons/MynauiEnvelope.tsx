import React, { SVGProps } from "react";

export function MynauiEnvelope(props: SVGProps<SVGSVGElement>) {
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
        <path d="M2 12c0-3.771 0-5.657 1.464-6.828C4.93 4 7.286 4 12 4c4.714 0 7.071 0 8.535 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.465 6.828C19.072 20 16.714 20 12 20s-7.071 0-8.536-1.172C2 17.657 2 15.771 2 12"></path>
        <path d="M20.667 5.31L15.84 9.8c-1.836 1.53-2.755 2.295-3.841 2.295c-1.086 0-2.004-.765-3.841-2.296L3.333 5.31"></path>
      </g>
    </svg>
  );
}
export default MynauiEnvelope;
