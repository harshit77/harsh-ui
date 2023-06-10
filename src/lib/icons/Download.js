import * as React from "react";
import { memo } from "react";
const SvgDownload = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M3.333 13.667h9.333v-1.334H3.333v1.334Zm9.333-7.334H10v-4H6v4H3.333L8 11l4.666-4.667Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgDownload);
export default Memo;
