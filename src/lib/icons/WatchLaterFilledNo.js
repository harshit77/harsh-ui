import * as React from "react";
import { memo } from "react";
const SvgWatchLaterFilledNo = (props) => (
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
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgWatchLaterFilledNo);
export default Memo;
