import * as React from "react";
import { memo } from "react";
const SvgBackgroundColor = (props) => (
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
      d="m9.918 12.24 7.747-5.39 1.18 1.297-6.094 7.207-2.833-3.113Zm-2.33.412 4.535 4.983a.933.933 0 0 0 1.395-.09L20.97 8.73a.908.908 0 0 0 .022-1.198l-2.513-2.761a.909.909 0 0 0-1.195-.091l-9.474 6.59a.935.935 0 0 0-.222 1.381Zm-4.794 5.876 5.617.972 1.48-1.346-3.03-3.328-4.067 3.702Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgBackgroundColor);
export default Memo;
