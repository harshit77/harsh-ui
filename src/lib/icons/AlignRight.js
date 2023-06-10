import * as React from "react";
import { memo } from "react";
const SvgAlignRight = (props) => (
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
      d="M15 18h6v-2h-6v2Zm-6-7v2h12v-2H9ZM3 6v2h18V6H3Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgAlignRight);
export default Memo;
