import * as React from "react";
import { memo } from "react";
const SvgArrowDownward = (props) => (
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
      d="m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgArrowDownward);
export default Memo;
