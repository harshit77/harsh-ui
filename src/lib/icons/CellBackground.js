import * as React from "react";
import { memo } from "react";
const SvgCellBackground = (props) => (
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
      d="m16.6 12.4-9-8.9-1.4 1.4 2.4 2.4-5.2 5.2c-.6.6-.6 1.5 0 2.1l5.5 5.5c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l5.5-5.5c.6-.6.6-1.6 0-2.2ZM5.2 13.5 10 8.7l4.8 4.8H5.2ZM19 15s-2 2.2-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.3-2-3.5-2-3.5Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgCellBackground);
export default Memo;
