import * as React from "react";
import { memo } from "react";
const SvgArrowRight = (props) => (
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
      d="M9 6.71a.996.996 0 0 0 0 1.41L12.88 12 9 15.88a.996.996 0 1 0 1.41 1.41L15 12.7a.996.996 0 0 0 0-1.41L10.41 6.7c-.38-.38-1.02-.38-1.41.01Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgArrowRight);
export default Memo;
