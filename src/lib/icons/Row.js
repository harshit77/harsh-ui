import * as React from "react";
import { memo } from "react";
const SvgRow = (props) => (
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
      d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm-4 1.5h4c.3 0 .5.2.5.5v2H16V6.5Zm-6.5 0h5V9h-5V6.5Zm-6 .5c0-.3.2-.5.5-.5h4V9H3.5V7ZM8 17.5H4c-.3 0-.5-.2-.5-.5v-2H8v2.5Zm6.5 0h-5V15h5v2.5Zm6-.5c0 .3-.2.5-.5.5h-4V15h4.5v2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgRow);
export default Memo;
