import * as React from "react";
import { memo } from "react";
const SvgNightlightRound = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M13.743 18.33h.175c.7-.017.933-.926.341-1.3a8.325 8.325 0 0 1-3.858-7.026 8.34 8.34 0 0 1 3.858-7.033c.584-.375.367-1.283-.325-1.3h-.108C9.743 1.629 6.151 4.613 5.51 8.646a8.348 8.348 0 0 0 8.234 9.683Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgNightlightRound);
export default Memo;
