import * as React from "react";
import { memo } from "react";
const SvgVerticalAlignTop = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M8 11h3v10h2V11h3l-4-4-4 4Zm13-6V3H3v2h18Z" fill="currentColor" />
  </svg>
);
const Memo = memo(SvgVerticalAlignTop);
export default Memo;
