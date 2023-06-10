import * as React from "react";
import { memo } from "react";
const SvgImageSize = (props) => (
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
      d="M16.9 4c-.3 0-.5.2-.8.3L3.3 13c-.9.6-1.1 1.9-.5 2.8L5 19.1c.4.7 1.2 1 2 .8.3 0 .5-.2.8-.3L20.7 11c.9-.6 1.1-1.9.5-2.8L19 4.9c-.5-.7-1.3-1-2.1-.9Zm0 5.9 1.2-.9-2-2.9.9-.5c.1 0 .1-.1.2-.1.2 0 .4 0 .5.2L19.9 9c.2.2.1.5-.1.7L7 18.4c-.1 0-.1.1-.2.1-.2 0-.4 0-.5-.2L4.1 15c-.2-.2-.1-.5.1-.7l.8-.6 2 2.9 1.2-.8-2-2.9 1.3-.9 1.1 1.7 1.2-.8-1.1-1.7 1.2-.8 2 2.9 1.2-.8-2-2.9 1.2-.8 1.1 1.7 1.2-.8L13.5 8l1.4-1 2 2.9Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgImageSize);
export default Memo;
