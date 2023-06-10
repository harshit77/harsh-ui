import * as React from "react";
import { memo } from "react";
const SvgFontFamily = (props) => (
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
      d="M16 19h2L13 5h-2L6 19h2l1.43-4h5.14L16 19Zm-5.86-6L12 7.8l1.86 5.2h-3.72Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgFontFamily);
export default Memo;
