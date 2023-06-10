import * as React from "react";
import { memo } from "react";
const SvgWarningFilledOn = (props) => (
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
      d="M4.47 20.504h15.06c1.54 0 2.5-1.67 1.73-3l-7.53-13.01c-.77-1.33-2.69-1.33-3.46 0l-7.53 13.01c-.77 1.33.19 3 1.73 3Zm7.53-7c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1Zm1 4h-2v-2h2v2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgWarningFilledOn);
export default Memo;
