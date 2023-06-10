import * as React from "react";
import { memo } from "react";
const SvgSimple = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 94 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#simple_svg__a)">
      <path
        d="M47 57.94c25.957 0 47-4.57 47-10.206 0-5.636-21.043-10.205-47-10.205S0 42.1 0 47.734C0 53.37 21.043 57.94 47 57.94Z"
        fill="#525252"
      />
      <path
        d="M80.781 19.696 65.88 2.928c-.715-1.143-1.76-1.834-2.86-1.834H30.98c-1.1 0-2.144.69-2.86 1.832L13.22 19.697v13.47H80.78V19.695Z"
        stroke="#525252"
        strokeWidth={1.469}
      />
      <path
        d="M61.12 24.318c0-2.34 1.459-4.272 3.27-4.273h16.391v26.44c0 3.096-1.939 5.633-4.333 5.633H17.552c-2.394 0-4.333-2.539-4.333-5.632V20.045H29.61c1.811 0 3.27 1.929 3.27 4.268v.033c0 2.34 1.477 4.229 3.286 4.229h21.668c1.809 0 3.285-1.907 3.285-4.247v-.01Z"
        fill="#393939"
        stroke="#525252"
        strokeWidth={1.469}
      />
    </g>
    <defs>
      <clipPath id="simple_svg__a">
        <path fill="currentColor" d="M0 0h94v58.75H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgSimple);
export default Memo;
