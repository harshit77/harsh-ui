import * as React from "react";
import { memo } from "react";
const SvgImageClass = (props) => (
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
      d="m9.5 13.4-2.9-2.9h3.8L12.2 7l1.4 3.5h3.8l-3 2.9.9 3.6-3.3-1.9L8.8 17l.7-3.6ZM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2Zm-2 0H4v12h16V6Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgImageClass);
export default Memo;
