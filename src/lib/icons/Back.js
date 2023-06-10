import * as React from "react";
import { memo } from "react";
const SvgBack = (props) => (
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
      d="M20 11H7.83l3.595-3.595-1.415-1.414-4.594 4.595-.002-.002L4 11.998l.002.002-.002.002 1.414 1.414.002-.002 4.594 4.595 1.415-1.414L7.83 13H20v-2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgBack);
export default Memo;
