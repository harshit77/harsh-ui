import * as React from "react";
import { memo } from "react";
const SvgUnorderedList = (props) => (
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
      d="M4 10.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5Zm0-5c-.8 0-1.5.7-1.5 1.5S3.2 8.5 4 8.5 5.5 7.8 5.5 7 4.8 5.5 4 5.5Zm0 10c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5ZM7.5 6v2h14V6h-14Zm0 12h14v-2h-14v2Zm0-5h14v-2h-14v2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgUnorderedList);
export default Memo;
