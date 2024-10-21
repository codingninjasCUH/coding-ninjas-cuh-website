import { SVGProps } from "react";

export default function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 30.1274C23.3638 30.1274 29.3333 24.1578 29.3333 16.794C29.3333 9.43023 23.3638 3.46069 16 3.46069C8.63616 3.46069 2.66663 9.43023 2.66663 16.794C2.66663 24.1578 8.63616 30.1274 16 30.1274Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16.794L14.6667 19.4607L20 14.1273"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
