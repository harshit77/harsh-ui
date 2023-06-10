import * as React from "react";
import { memo } from "react";
const SvgUnderline = (props) => (
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
      d="M19 20v2H5v-2h14Zm-3-6.785a4 4 0 0 1-5.74 3.4A3.75 3.75 0 0 1 8 13.085v-8.08H6v8.21a6 6 0 0 0 8 5.44 5.85 5.85 0 0 0 4-5.65v-8h-2v8.21ZM16 5h2-2ZM8 5H6h2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgUnderline);
export default Memo;
