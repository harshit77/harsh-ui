import * as React from "react";
import { memo } from "react";
const SvgAlignCenter = (props) => (
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
      d="M9 18h6v-2H9v2Zm-3-7v2h12v-2H6ZM3 6v2h18V6H3Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgAlignCenter);
export default Memo;
