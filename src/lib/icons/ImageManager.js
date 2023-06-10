import * as React from "react";
import { memo } from "react";
const SvgImageManager = (props) => (
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
      d="M20 6h-7l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm0 12H4V6h6.2l2 2H20v10Zm-2-2-3.8-5H14l-2.9 3.8L9 12.1 6 16h12Zm-8-6.5C10 8.7 9.3 8 8.5 8S7 8.7 7 9.5 7.7 11 8.5 11s1.5-.7 1.5-1.5Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgImageManager);
export default Memo;
