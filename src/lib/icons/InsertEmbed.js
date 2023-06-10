import * as React from "react";
import { memo } from "react";
const SvgInsertEmbed = (props) => (
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
      d="M20.739 15.46a3.477 3.477 0 0 0-5.46-.287l-5.713-2.664a3.498 3.498 0 0 0-.009-1.014l5.722-2.668a3.558 3.558 0 1 0-.845-1.812L8.71 9.684a3.508 3.508 0 1 0 .01 4.637l5.714 2.664a3.498 3.498 0 1 0 6.305-1.526ZM18.007 5.01a1.5 1.5 0 1 1-.233 2.991 1.5 1.5 0 0 1 .233-2.99ZM5.992 13.496a1.5 1.5 0 1 1 .234-2.99 1.5 1.5 0 0 1-.234 2.99Zm11.782 5.494a1.5 1.5 0 1 1 .234-2.99 1.5 1.5 0 0 1-.233 2.99Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgInsertEmbed);
export default Memo;
