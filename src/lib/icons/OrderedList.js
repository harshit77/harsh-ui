import * as React from "react";
import { memo } from "react";
const SvgOrderedList = (props) => (
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
      d="M2.5 16h2v.5h-1v1h1v.5h-2v1h3v-4h-3v1Zm1-7h1V5h-2v1h1v3Zm-1 2h1.8l-1.8 2.1v.9h3v-1H3.7l1.8-2.1V10h-3v1Zm5-5v2h14V6h-14Zm0 12h14v-2h-14v2Zm0-5h14v-2h-14v2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgOrderedList);
export default Memo;
