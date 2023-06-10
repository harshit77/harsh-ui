import * as React from "react";
import { memo } from "react";
const SvgViewColumn = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2Zm2 0h6v14H5V5Zm14 14V5h-6v14h6Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgViewColumn);
export default Memo;
