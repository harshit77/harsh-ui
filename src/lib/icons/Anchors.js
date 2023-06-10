import * as React from "react";
import { memo } from "react";
const SvgAnchors = (props) => (
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
      d="M16 4H8c-1.1 0-2 .9-2 2v14l6-2.6 6 2.6V6c0-1.1-.9-2-2-2Zm0 13-4-1.8L8 17V6h8v11Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgAnchors);
export default Memo;
