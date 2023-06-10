import * as React from "react";
import { memo } from "react";
const SvgPrint = (props) => (
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
      d="M16.1 17c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1Zm5.9-2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h1V5c0-1.1.9-2 2-2h7.4L19 7.6V13h1c1.1 0 2 .9 2 2ZM7 13h10V9h-4V5H7v8Zm13 2H4v4h16v-4Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgPrint);
export default Memo;
