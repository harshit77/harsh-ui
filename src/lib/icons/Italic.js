import * as React from "react";
import { memo } from "react";
const SvgItalic = (props) => (
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
      d="M11.76 9h2l-2.2 10h-2l2.2-10Zm1.68-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgItalic);
export default Memo;
