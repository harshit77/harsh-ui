import * as React from "react";
import { memo } from "react";
const SvgOutdent = (props) => (
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
      d="m3 12 3 3V9l-3 3Zm0 7h18v-2H3v2ZM3 7h18V5H3v2Zm6 4h12V9H9v2Zm0 4h12v-2H9v2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgOutdent);
export default Memo;
