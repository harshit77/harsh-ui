import * as React from "react";
import { memo } from "react";
const SvgPageBreaker = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M3 9v6l3-3-3-3Zm18 0H8V4h2v3h9V4h2v5Zm0 11h-2v-3h-9v3H8v-5h13v5Zm-10-7H8v-2h3v2Zm5 0h-3v-2h3v2Zm5 0h-3v-2h3v2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgPageBreaker);
export default Memo;
