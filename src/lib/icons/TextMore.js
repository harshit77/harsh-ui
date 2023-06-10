import * as React from "react";
import { memo } from "react";
const SvgTextMore = (props) => (
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
      d="M13.55 19h2l-5-14h-2l-5 14h2l1.4-4h5.1l1.5 4Zm-5.9-6 1.9-5.2 1.9 5.2h-3.8Zm12.8 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgTextMore);
export default Memo;
