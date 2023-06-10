import * as React from "react";
import { memo } from "react";
const SvgHorizontalLine = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M5 12h14H5Zm14-1H5v2h14v-2Z" fill="currentColor" />
  </svg>
);
const Memo = memo(SvgHorizontalLine);
export default Memo;
