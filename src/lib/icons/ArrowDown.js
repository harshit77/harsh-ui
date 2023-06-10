import * as React from "react";
import { memo } from "react";
const SvgArrowDown = (props) => (
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
      d="m15.875 9-3.88 3.88L8.115 9a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgArrowDown);
export default Memo;
