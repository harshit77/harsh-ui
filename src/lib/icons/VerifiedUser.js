import * as React from "react";
import { memo } from "react";
const SvgVerifiedUser = (props) => (
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
      d="m11.19 1.266-7 3.11C3.47 4.696 3 5.416 3 6.206v4.7c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-4.7c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.51-.23-1.11-.23-1.62 0Zm-1.9 14.93-2.59-2.59a.996.996 0 1 1 1.41-1.41l1.89 1.88 5.88-5.88a.996.996 0 1 1 1.41 1.41l-6.59 6.59a.996.996 0 0 1-1.41 0Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgVerifiedUser);
export default Memo;
