import type { SVGProps } from "react";

export function SeminarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipSBlackboard0">
          <g fill="none" strokeLinejoin="round" strokeWidth={4}>
            <path fill="#fff" stroke="#fff" d="M8 7h32v24H8z"></path>
            <path
              stroke="#fff"
              strokeLinecap="round"
              d="M4 7h40M15 41l9-10l9 10"
            ></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              d="M16 13h16m-16 6h12m-12 6h6"
            ></path>
          </g>
        </mask>
      </defs>
      <path
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipSBlackboard0)"
      ></path>
    </svg>
  );
}
