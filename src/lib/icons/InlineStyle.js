import * as React from "react";
import { memo } from "react";
const SvgInlineStyle = (props) => (
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
      d="M11.88 15h.7l.7-1.7-3-8.3h-2l-5 14h2l1.4-4h5.2Zm-4.4-2 1.9-5.2 1.9 5.2h-3.8Zm7.92 8.545 3.246 1.949-.909-3.637L20.72 17h-3.766l-1.429-3.506L13.837 17h-3.766l2.857 2.857-.779 3.637 3.251-1.949Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgInlineStyle);
export default Memo;
