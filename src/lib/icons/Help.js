import * as React from "react";
import { memo } from "react";
const SvgHelp = (props) => (
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
      d="M11 17h2v2h-2v-2Zm1-12C9.8 5 8 6.8 8 9h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.7-3 5v1h2v-1c0-2.2 3-2.5 3-5 0-2.2-1.8-4-4-4Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgHelp);
export default Memo;
