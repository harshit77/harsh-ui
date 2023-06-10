import * as React from "react";
import { memo } from "react";
const SvgDragHandle = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect
      x={6.5}
      y={2.5}
      width={11}
      height={19}
      rx={0.5}
      stroke="currentColor"
    />
    <path d="M14 19V5h-1.333v14H14ZM10 5v14h1.333V5H10Z" fill="currentColor" />
  </svg>
);
const Memo = memo(SvgDragHandle);
export default Memo;
