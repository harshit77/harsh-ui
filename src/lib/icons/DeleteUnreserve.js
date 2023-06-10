import * as React from "react";
import { memo } from "react";
const SvgDeleteUnreserve = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M9 8.667h2.666V10H9V8.667Zm0-5.333h4.666v1.333H9V3.334ZM9 6h4v1.334H9V6Zm-8 4c0 .734.6 1.334 1.333 1.334h4c.733 0 1.333-.6 1.333-1.334V3.334H1V10Zm1.333-5.333h4V10h-4V4.667Zm3.333-4H3l-.667.667h-2v1.333h8V1.334h-2L5.666.667Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgDeleteUnreserve);
export default Memo;
