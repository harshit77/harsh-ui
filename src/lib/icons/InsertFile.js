import * as React from "react";
import { memo } from "react";
const SvgInsertFile = (props) => (
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
      d="M7 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7.6L14.4 3H7Zm10 16H7V5h6v4h4v10Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgInsertFile);
export default Memo;
