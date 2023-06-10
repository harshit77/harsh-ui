import * as React from "react";
import { memo } from "react";
const SvgTableHeader = (props) => (
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
      d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2ZM8 17.5H4c-.3 0-.5-.2-.5-.4V15H8v2.5Zm0-4H3.5v-3H8v3Zm6.5 4h-5V15h5v2.5Zm0-4h-5v-3h5v3Zm6 3.5c0 .3-.2.5-.4.5H16V15h4.5v2Zm0-3.5H16v-3h4.5v3Zm0-4.5h-17V7c0-.3.2-.5.4-.5H20c.3 0 .5.2.5.4V9Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgTableHeader);
export default Memo;
