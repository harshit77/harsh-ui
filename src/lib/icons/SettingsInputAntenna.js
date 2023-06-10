import * as React from "react";
import { memo } from "react";
const SvgSettingsInputAntenna = (props) => (
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
      d="M12 5.295c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7Zm1 9.29c.88-.39 1.5-1.26 1.5-2.29a2.5 2.5 0 0 0-5 0c0 1.02.62 1.9 1.5 2.29v3.3l-3.41 3.41L9 22.705l3-3 3 3 1.41-1.41-3.41-3.41v-3.3Zm-1-13.29c-6.07 0-11 4.93-11 11h2a9 9 0 0 1 18 0h2c0-6.07-4.93-11-11-11Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgSettingsInputAntenna);
export default Memo;
