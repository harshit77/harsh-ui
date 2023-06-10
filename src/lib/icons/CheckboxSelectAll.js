import * as React from "react";
import { memo } from "react";
const SvgCheckboxSelectAll = (props) => (
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
      d="M19 5v14H5V5h14Zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Z"
      fill="#8CBBF9"
    />
    <rect x={7} y={7} width={10} height={10} rx={1} fill="#8CBBF9" />
  </svg>
);
const Memo = memo(SvgCheckboxSelectAll);
export default Memo;
