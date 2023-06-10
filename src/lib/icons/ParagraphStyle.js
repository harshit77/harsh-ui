import * as React from "react";
import { memo } from "react";
const SvgParagraphStyle = (props) => (
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
      d="M4 9c0-1.1.9-2 2-2v4c-1.1 0-2-.9-2-2Zm12.7 11.5 3.2 1.9-.9-3.6 3-2.9h-3.7l-1.4-3.5-1.6 3.6h-3.8l2.9 2.9-.9 3.6 3.2-2ZM10 17.4V19h1.6L10 17.4ZM6.1 5c-1.9 0-3.6 1.3-4 3.2-.5 2.1.8 4.2 2.9 4.7h.2c.3.1.6.1.8.1v6h2V7h2v7h2V7h2V5H6.1Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgParagraphStyle);
export default Memo;
