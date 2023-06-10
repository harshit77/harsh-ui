import * as React from "react";
import { memo } from "react";
const SvgImageDisplay = (props) => (
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
      d="M3 5h18v2H3V5Zm10 4h8v2h-8V9Zm0 4h8v2h-8v-2ZM3 17h18v2H3v-2Zm0-8h8v6H3V9Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgImageDisplay);
export default Memo;
