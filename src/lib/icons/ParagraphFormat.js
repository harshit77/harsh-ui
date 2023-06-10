import * as React from "react";
import { memo } from "react";
const SvgParagraphFormat = (props) => (
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
      d="M10.15 5a4.11 4.11 0 0 0-4.07 3.18A4 4 0 0 0 10 13v6h2V7h2v12h2V7h2V5h-7.85ZM8 9a2 2 0 0 1 2-2v4a2 2 0 0 1-2-2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgParagraphFormat);
export default Memo;
