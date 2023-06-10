import * as React from "react";
import { memo } from "react";
const SvgFileUpload = (props) => (
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
      d="M9 16.5h6v-6h4l-7-7-7 7h4v6Zm-4 2h14v2H5v-2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgFileUpload);
export default Memo;
