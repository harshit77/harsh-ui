import * as React from "react";
import { memo } from "react";
const SvgViewRows = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 2v6H5V5h14ZM5 19h14v-6H5v6Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgViewRows);
export default Memo;
