import * as React from "react";
import { memo } from "react";
const SvgOpenLink = (props) => (
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
      d="M17 17H7V7h3V5H7C6 5 5 6 5 7v10c0 1 1 2 2 2h10c1 0 2-1 2-2v-3h-2v3ZM14 5v2h1.6l-5.8 5.8 1.4 1.4L17 8.4V10h2V5h-5Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgOpenLink);
export default Memo;
