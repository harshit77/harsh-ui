import * as React from "react";
import { memo } from "react";
const SvgCheck = (props) => (
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
      d="m8.795 15.875-3.47-3.47a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0l10.58-10.58a.996.996 0 1 0-1.41-1.41l-9.88 9.87Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgCheck);
export default Memo;
