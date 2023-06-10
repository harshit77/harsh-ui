import * as React from "react";
import { memo } from "react";
const SvgImageAltText = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M19 7h-6v12h-2V7H5V5h14v2Z" fill="currentColor" />
  </svg>
);
const Memo = memo(SvgImageAltText);
export default Memo;
