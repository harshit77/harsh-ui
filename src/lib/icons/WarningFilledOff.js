import * as React from "react";
import { memo } from "react";
const SvgWarningFilledOff = (props) => (
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
      d="m12 5.494 7.53 13.01H4.47L12 5.494Zm-9.26 12.01c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3l-7.53-13.01c-.77-1.33-2.69-1.33-3.46 0l-7.53 13.01Zm8.26-7v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1Zm0 5h2v2h-2v-2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgWarningFilledOff);
export default Memo;
