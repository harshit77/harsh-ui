import * as React from "react";
import { memo } from "react";
const SvgImportExport = (props) => (
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
      d="M9 3 5 6.99h3V14h2V6.99h3L9 3Zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgImportExport);
export default Memo;
