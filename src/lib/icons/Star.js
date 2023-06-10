import * as React from "react";
import { memo } from "react";
const SvgStar = (props) => (
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
      d="m12.1 7.7 1 2.5.4.9h3.4l-2.1 2-.6.6.2.9.6 2.3-2.2-1.3-.8-.4-.8.5L9 17l.5-2.5.1-.8-.6-.6-2-2h3.4l.4-.8 1.3-2.6Zm.1-3.7L9.5 9.6H3.4L8 14.2 6.9 20l5.1-3.1 5.3 3.1-1.5-5.8 4.8-4.6h-6.1L12.2 4Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgStar);
export default Memo;
