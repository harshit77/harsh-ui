import * as React from "react";
import { memo } from "react";
const SvgLineHeight = (props) => (
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
      d="M6.25 7h2.5l-3.5-3.5L1.75 7h2.5v10h-2.5l3.5 3.5 3.5-3.5h-2.5V7Zm4-2v2h12V5h-12Zm0 14h12v-2h-12v2Zm0-6h12v-2h-12v2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgLineHeight);
export default Memo;
