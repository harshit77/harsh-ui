import * as React from "react";
import { memo } from "react";
const SvgClearFormatting = (props) => (
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
      d="m11.48 10.09-1.2-1.21L8.8 7.41 6.43 5 5.37 6.1 8.25 9 4.66 19h2l1.43-4h5.14l1.43 4h2l-.89-2.51 2.5 2.51 1.07-1.06-4.75-4.74-3.11-3.11ZM8.8 13l.92-2.56L12.27 13H8.8Zm.56-7.15.3-.85h2l1.75 4.9-4.05-4.05Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgClearFormatting);
export default Memo;
