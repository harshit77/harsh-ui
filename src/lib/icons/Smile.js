import * as React from "react";
import { memo } from "react";
const SvgSmile = (props) => (
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
      d="M11.991 3a9 9 0 1 0 .018 18 9 9 0 0 0-.018-18ZM12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm3.105-5.2h1.503a4.946 4.946 0 0 1-9.216 0h1.503a3.578 3.578 0 0 0 6.21 0ZM7.5 9.75a1.35 1.35 0 1 1 2.7 0 1.35 1.35 0 0 1-2.7 0Zm6.3 0a1.35 1.35 0 1 1 2.7 0 1.35 1.35 0 0 1-2.7 0Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgSmile);
export default Memo;
