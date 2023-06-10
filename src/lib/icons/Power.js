import * as React from "react";
import { memo } from "react";
const SvgPower = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M6.673 2.667 6.667 0H5.333v2.667H2.667V0H1.333v2.667h-.006C.667 2.66 0 3.327 0 3.993v3.66L2.333 10v2h3.334v-2L8 7.66V3.993c0-.666-.667-1.333-1.327-1.326Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgPower);
export default Memo;
