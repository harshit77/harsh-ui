import * as React from "react";
import { memo } from "react";
const SvgFilterAlt = (props) => (
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
      d="M4.255 5.61c2.02 2.59 5.75 7.39 5.75 7.39v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39a.998.998 0 0 0-.79-1.61H5.045c-.83 0-1.3.95-.79 1.61Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgFilterAlt);
export default Memo;
