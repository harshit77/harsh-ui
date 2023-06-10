import * as React from "react";
import { memo } from "react";
const SvgArrowUp = (props) => (
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
      d="m11.295 9-4.59 4.59A.996.996 0 1 0 8.115 15l3.89-3.88 3.88 3.88a.996.996 0 1 0 1.41-1.41L12.705 9a.996.996 0 0 0-1.41 0Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgArrowUp);
export default Memo;
