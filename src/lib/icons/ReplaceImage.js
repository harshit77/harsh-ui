import * as React from "react";
import { memo } from "react";
const SvgReplaceImage = (props) => (
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
      d="M16 5v3H4v2h12v3l4-4-4-4ZM8 19v-3h12v-2H8v-3l-4 4 4 4Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgReplaceImage);
export default Memo;
