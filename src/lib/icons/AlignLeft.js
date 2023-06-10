import * as React from "react";
import { memo } from "react";
const SvgAlignLeft = (props) => (
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
      d="M3 18h6v-2H3v2Zm0-7v2h12v-2H3Zm0-5v2h18V6H3Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgAlignLeft);
export default Memo;
