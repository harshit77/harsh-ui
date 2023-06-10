import * as React from "react";
import { memo } from "react";
const SvgReturn = (props) => (
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
      d="M19 7h-2v8h2V7ZM17 13h-7v2h7v-2ZM10 10v8.013l-5-3.982L10 10Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgReturn);
export default Memo;
