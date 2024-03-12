import React, { SVGProps } from "react";

export function MynauiUser(props: SVGProps<SVGSVGElement>) {
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
        <circle cx="12" cy="7.5" r="3"></circle>
        <path d="M19.5 20.5c-.475-9.333-14.525-9.333-15 0"></path>
      </g>
    </svg>
  );
}
export default MynauiUser;
