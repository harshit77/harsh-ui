import * as React from "react";
import { memo } from "react";
const SvgUnlink = (props) => (
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
      d="m14.4 11 1.6 1.6V11h-1.6ZM17 7h-4v1.9h4c1.7 0 3.1 1.4 3.1 3.1 0 1.3-.8 2.4-1.9 2.8l1.4 1.4C21 15.4 22 13.8 22 12c0-2.8-2.2-5-5-5ZM2 4.3l3.1 3.1C3.3 8.1 2 9.9 2 12c0 2.8 2.2 5 5 5h4v-1.9H7c-1.7 0-3.1-1.4-3.1-3.1 0-1.6 1.2-2.9 2.8-3.1l2 2.1H8v2h2.7l2.3 2.3V17h1.7l4 4 1.4-1.4L3.4 2.9 2 4.3Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgUnlink);
export default Memo;
