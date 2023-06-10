import * as React from "react";
import { memo } from "react";
const SvgArrowPaginationFirst = (props) => (
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
      d="M18.205 16.59 13.615 12l4.59-4.59L16.795 6l-6 6 6 6 1.41-1.41ZM5.795 6h2v12h-2V6Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgArrowPaginationFirst);
export default Memo;
