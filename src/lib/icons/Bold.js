import * as React from "react";
import { memo } from "react";
const SvgBold = (props) => (
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
      d="M15.25 11.8A3.682 3.682 0 0 0 17 9a3.93 3.93 0 0 0-3.86-4H6.65v14h7a3.74 3.74 0 0 0 3.7-3.78v-.12a3.64 3.64 0 0 0-2.1-3.3ZM8.65 7h4.2a2.09 2.09 0 0 1 2 1.3 2.09 2.09 0 0 1-1.37 2.61c-.205.06-.417.09-.63.09h-4.2V7Zm4.6 10h-4.6v-4h4.6a2.09 2.09 0 0 1 2 1.3 2.09 2.09 0 0 1-1.37 2.61c-.205.06-.417.09-.63.09Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgBold);
export default Memo;
