import * as React from "react";
import { memo } from "react";
const SvgCancel = (props) => (
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
      d="m13.4 12 5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgCancel);
export default Memo;
