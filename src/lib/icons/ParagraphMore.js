import * as React from "react";
import { memo } from "react";
const SvgParagraphMore = (props) => (
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
      d="M7.682 5a4.11 4.11 0 0 0-4.07 3.18 4 4 0 0 0 3.11 4.725l.027.005c.27.06.544.09.82.09v6h2V7h2v12h2V7h2V5H7.682Zm-2.15 4a2 2 0 0 1 2-2v4a2 2 0 0 1-2-2Zm14.94 8.491a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgParagraphMore);
export default Memo;
