import * as React from "react";
import { memo } from "react";
const SvgExitFullscreen = (props) => (
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
      d="M5 16h3v3h2v-5H5v2Zm3-8H5v2h5V5H8v3Zm6 11h2v-3h3v-2h-5v5Zm2-11V5h-2v5h5V8h-3Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgExitFullscreen);
export default Memo;
