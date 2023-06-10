import * as React from "react";
import { memo } from "react";
const SvgSelectAll = (props) => (
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
      d="M5 7h2V5c-1.1 0-2 .9-2 2Zm0 4h2V9H5v2Zm4 8h2v-2H9v2Zm-4-8h2V9H5v2Zm10-6h-2v2h2V5Zm2 0v2h2c0-1.1-.9-2-2-2ZM7 19v-2H5c0 1.1.9 2 2 2Zm-2-4h2v-2H5v2Zm6-10H9v2h2V5Zm2 14h2v-2h-2v2Zm4-8h2V9h-2v2Zm0 8c1.1 0 2-.9 2-2h-2v2Zm0-8h2V9h-2v2Zm0 4h2v-2h-2v2Zm-4 4h2v-2h-2v2Zm0-12h2V5h-2v2Zm-4 8h6V9H9v6Zm2-4h2v2h-2v-2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgSelectAll);
export default Memo;
