import * as React from "react";
import { memo } from "react";
const SvgFontSize = (props) => (
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
      d="M20.75 19h1.5l-3-10h-1.5l-3 10h1.5l.75-2.5h3l.75 2.5Zm-3.3-4 1.05-3.5 1.05 3.5h-2.1Zm-5.7 4h2l-5-14h-2l-5 14h2l1.43-4h5.14l1.43 4Zm-5.86-6 1.86-5.2L9.61 13H5.89Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgFontSize);
export default Memo;
