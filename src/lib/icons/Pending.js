import * as React from "react";
import { memo } from "react";
const SvgPending = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M10 1.667A8.336 8.336 0 0 0 1.667 10c0 4.6 3.733 8.334 8.333 8.334S18.333 14.6 18.333 10 14.6 1.667 10 1.667Zm0 15A6.665 6.665 0 0 1 3.333 10 6.665 6.665 0 0 1 10 3.334 6.665 6.665 0 0 1 16.666 10 6.665 6.665 0 0 1 10 16.667Z"
      fill="currentColor"
    />
    <path
      d="M5.833 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM10 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM14.166 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgPending);
export default Memo;
