import * as React from "react";
import { memo } from "react";
const SvgUndo = (props) => (
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
      d="M10.4 9.4c-1.7.3-3.2.9-4.6 2L3 8.5v7h7l-2.7-2.7c3.7-2.6 8.8-1.8 11.5 1.9.2.3.4.5.5.8l1.8-.9c-2.2-3.8-6.4-5.9-10.7-5.2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgUndo);
export default Memo;
