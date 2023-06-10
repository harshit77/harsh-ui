import * as React from "react";
import { memo } from "react";
const SvgInsertMore = (props) => (
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
      d="M16.5 13h-6v6h-2v-6h-6v-2h6V5h2v6h6v2Zm5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgInsertMore);
export default Memo;
