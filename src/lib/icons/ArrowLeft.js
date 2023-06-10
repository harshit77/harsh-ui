import * as React from "react";
import { memo } from "react";
const SvgArrowLeft = (props) => (
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
      d="M15 6.705a.996.996 0 0 0-1.41 0L9 11.295a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41l-3.88-3.89L15 8.115c.39-.39.38-1.03 0-1.41Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgArrowLeft);
export default Memo;
