import * as React from "react";
import { memo } from "react";
const SvgRedo = (props) => (
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
      d="M13.6 9.4c1.7.3 3.2.9 4.6 2L21 8.5v7h-7l2.7-2.7C13 10.1 7.9 11 5.3 14.7c-.2.3-.4.5-.5.8L3 14.6c2.1-3.8 6.3-5.9 10.6-5.2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgRedo);
export default Memo;
