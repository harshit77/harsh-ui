import * as React from "react";
import { memo } from "react";
const SvgLinkStyles = (props) => (
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
      d="m19 17.9.9 3.6-3.2-1.9-3.3 1.9.8-3.6-2.9-2.9h3.8l1.7-3.5 1.4 3.5H22l-3 2.9Zm1-5.9c0 .3-.1.7-.2 1h2.1c.1-.3.1-.6.1-1 0-2.8-2.2-5-5-5h-4v2h4c1.7 0 3 1.3 3 3Zm-5.2-1H8v2h5.8l1-2Zm-4.9 5.4L8.5 15H7c-1.7 0-3-1.3-3-3s1.3-3 3-3h4V7H7c-2.8 0-5 2.2-5 5s2.2 5 5 5h3.5l-.6-.6Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgLinkStyles);
export default Memo;
