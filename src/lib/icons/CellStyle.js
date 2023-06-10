import * as React from "react";
import { memo } from "react";
const SvgCellStyle = (props) => (
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
      d="m20 19.9.9 3.6-3.2-1.9-3.3 1.9.8-3.6-2.9-2.9h3.8l1.7-3.5 1.4 3.5H23l-3 2.9ZM20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7.5l-.6-.6-.9-.9h-.5V15h5.4l1.1-2.3v-2.2h4.5v3H20l.6 1.5H22V7c0-1.1-.9-2-2-2ZM3.5 7c0-.3.2-.5.4-.5H8V9H3.5V7Zm0 3.5H8v3H3.5v-3Zm.5 7c-.3 0-.5-.2-.5-.4V15H8v2.5H4ZM14.5 9h-5V6.5h5V9Zm6 0H16V6.5h4c.3 0 .5.2.5.4V9Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgCellStyle);
export default Memo;
