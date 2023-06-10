import * as React from "react";
import { memo } from "react";
const SvgTextColor = (props) => (
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
      d="M15.2 13.494s-3.6 3.9-3.6 6.3a3.65 3.65 0 1 0 7.3.1v-.1c0-2.4-3.7-6.3-3.7-6.3Zm-1.47-1.357.669-.724L12.1 5h-2l-5 14h2l1.43-4h2.943a24.428 24.428 0 0 1 2.253-2.863h.004ZM11.1 7.8l1.86 5.2H9.244L11.1 7.8Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgTextColor);
export default Memo;
