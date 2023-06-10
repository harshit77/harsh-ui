import * as React from "react";
import { memo } from "react";
const SvgInsertTable = (props) => (
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
      d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2ZM9.5 13.5v-3h5v3h-5Zm5 1.5v2.5h-5V15h5Zm-5-6V6.5h5V9h-5Zm-6-2c0-.3.2-.5.5-.5h4V9H3.5V7Zm0 3.5H8v3H3.5v-3Zm0 6.5v-2H8v2.5H4c-.3 0-.5-.2-.5-.5Zm17 0c0 .3-.2.5-.5.5h-4V15h4.5v2Zm0-3.5H16v-3h4.5v3ZM16 9V6.5h4c.3 0 .5.2.5.5v2H16Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgInsertTable);
export default Memo;
