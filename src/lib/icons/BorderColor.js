import * as React from "react";
import { memo } from "react";
const SvgBorderColor = (props) => (
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
      d="M18.4 21H5.6c-.88 0-1.6-.736-1.6-1.636 0-.9.72-1.636 1.6-1.636h12.8c.88 0 1.6.736 1.6 1.636 0 .9-.72 1.636-1.6 1.636ZM12.848 5.612l3 3.068-7.016 7.174a.765.765 0 0 1-.56.238H6.4c-.44 0-.8-.369-.8-.819V13.36c0-.22.088-.425.232-.58l7.016-7.167Zm3.856 2.192-3-3.068 1.464-1.497a.784.784 0 0 1 1.128 0l1.872 1.915a.828.828 0 0 1 0 1.153l-1.464 1.497Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgBorderColor);
export default Memo;
