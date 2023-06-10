import * as React from "react";
import { memo } from "react";
const SvgContentCopy = (props) => (
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
      d="M15.5 20h-10V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1Zm5-4V4c0-1.1-.9-2-2-2h-9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2Zm-2 0h-9V4h9v12Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgContentCopy);
export default Memo;
