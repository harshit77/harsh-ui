import * as React from "react";
import { memo } from "react";
const SvgVerticalAlignMiddle = (props) => (
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
      d="M3 11v2h18v-2H3Zm5 7h3v3h2v-3h3l-4-4-4 4Zm8-12h-3V3h-2v3H8l4 4 4-4Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgVerticalAlignMiddle);
export default Memo;
