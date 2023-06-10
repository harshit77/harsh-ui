import * as React from "react";
import { memo } from "react";
const SvgUpload = (props) => (
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
      d="M12 6.667a4.876 4.876 0 0 1 4.775 3.923l.296 1.503 1.528.106a2.57 2.57 0 0 1-.182 5.134H6.5a3.498 3.498 0 0 1-.384-6.974l1.066-.114.496-.951A4.86 4.86 0 0 1 12 6.667Zm0-2A6.871 6.871 0 0 0 5.904 8.37 5.498 5.498 0 0 0 6.5 19.333h11.917a4.57 4.57 0 0 0 .32-9.13A6.866 6.866 0 0 0 12 4.667Zm1 7.247h1.914L12 9l-2.914 2.914H11V16h2v-4.086Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgUpload);
export default Memo;
