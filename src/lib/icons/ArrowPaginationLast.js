import * as React from "react";
import { memo } from "react";
const SvgArrowPaginationLast = (props) => (
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
      d="m5.795 7.41 4.59 4.59-4.59 4.59L7.205 18l6-6-6-6-1.41 1.41ZM16.205 6h2v12h-2V6Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgArrowPaginationLast);
export default Memo;
