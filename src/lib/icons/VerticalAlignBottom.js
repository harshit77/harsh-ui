import * as React from "react";
import { memo } from "react";
const SvgVerticalAlignBottom = (props) => (
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
      d="M16 13h-3V3h-2v10H8l4 4 4-4ZM3 19v2h18v-2H3Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgVerticalAlignBottom);
export default Memo;
