import * as React from "react";
import { memo } from "react";
const SvgInsertVideo = (props) => (
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
      d="M15 8v8H5V8h10Zm2 2.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l2.29 2.29a1 1 0 0 0 1.71-.71V8.91a1 1 0 0 0-1.71-.71L17 10.5Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgInsertVideo);
export default Memo;
