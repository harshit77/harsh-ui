import * as React from "react";
import { memo } from "react";
const SvgSpellcheck = (props) => (
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
      d="m19.1 13.6-5.6 5.6-2.7-2.7-1.4 1.4 4.1 4.1 7-7-1.4-1.4Zm-8.3.1 2.7 2.7.8-.8L10.5 5h-2l-5 14h2l1.4-4h2.6l1.3-1.3ZM9.5 7.8l1.9 5.2H7.6l1.9-5.2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgSpellcheck);
export default Memo;
