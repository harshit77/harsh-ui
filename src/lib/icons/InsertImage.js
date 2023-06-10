import * as React from "react";
import { memo } from "react";
const SvgInsertImage = (props) => (
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
      d="m14.2 11 3.8 5H6l3-3.9 2.1 2.7L14 11h.2Zm-5.7 0c.8 0 1.5-.7 1.5-1.5S9.3 8 8.5 8 7 8.7 7 9.5 7.7 11 8.5 11ZM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2Zm-2 2.8V6H4v12h16V8.8Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgInsertImage);
export default Memo;
