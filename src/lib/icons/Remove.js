import * as React from "react";
import { memo } from "react";
const SvgRemove = (props) => (
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
      d="M15 10v8H9v-8h6Zm-1-6H9.9l-1 1H6v2h12V5h-3l-1-1Zm3 4H7v10c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgRemove);
export default Memo;
