import * as React from "react";
import { memo } from "react";
const SvgDateRange = (props) => (
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
      d="M9.4 11.1H7.6v1.8h1.8v-1.8Zm3.6 0h-1.8v1.8H13v-1.8Zm3.6 0h-1.8v1.8h1.8v-1.8Zm1.8-6.3h-.9V3h-1.8v1.8H8.5V3H6.7v1.8h-.9c-.999 0-1.791.81-1.791 1.8L4 19.2c0 .99.801 1.8 1.8 1.8h12.6c.99 0 1.8-.81 1.8-1.8V6.6c0-.99-.81-1.8-1.8-1.8Zm0 14.4H5.8V9.3h12.6v9.9Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgDateRange);
export default Memo;
