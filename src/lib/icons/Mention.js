import * as React from "react";
import { memo } from "react";
const SvgMention = (props) => (
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
      d="M12.4 5c-4.1 0-7.5 3.4-7.5 7.5S8.3 20 12.4 20h3.8v-1.5h-3.8c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6v1.1c0 .6-.5 1.2-1.1 1.2-.6 0-1.1-.6-1.1-1.2v-1.1c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.7 1.7-3.7 3.8 0 2.1 1.7 3.8 3.8 3.8 1 0 2-.4 2.7-1.1.5.7 1.3 1.1 2.2 1.1 1.5 0 2.6-1.2 2.6-2.7v-1.1C19.9 8.4 16.6 5 12.4 5Zm0 9.7c-1.2 0-2.3-1-2.3-2.2 0-1.2 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3 0 1.3-1.1 2.2-2.3 2.2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgMention);
export default Memo;
