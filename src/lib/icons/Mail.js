import * as React from "react";
import { memo } from "react";
const SvgMail = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M13.333 2.667H2.667c-.734 0-1.327.6-1.327 1.333l-.007 8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333Zm0 2.666L8 8.667 2.667 5.333V4L8 7.333 13.333 4v1.333Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgMail);
export default Memo;
