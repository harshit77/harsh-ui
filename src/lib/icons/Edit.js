import * as React from "react";
import { memo } from "react";
const SvgEdit = (props) => (
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
      d="M2.999 17.251v3.75h3.75l11.06-11.06-3.75-3.75-11.06 11.06Zm17.71-10.21a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgEdit);
export default Memo;
