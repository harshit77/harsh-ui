import * as React from "react";
import { memo } from "react";
const SvgArrowUpward = (props) => (
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
      d="m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgArrowUpward);
export default Memo;
