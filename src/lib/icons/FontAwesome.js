import * as React from "react";
import { memo } from "react";
const SvgFontAwesome = (props) => (
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
      d="M18.989 13.982V7.527c-.08-1.219-1.34-.683-1.34-.683-2.932 1.393-4.362.62-5.859.156a6.233 6.233 0 0 0-2.794-.2l-.009.003a1.988 1.988 0 0 0-1.366-1.697.984.984 0 0 0-.25-.07A.957.957 0 0 0 7.19 5h-.366a.956.956 0 0 0-.182.037c-.025.004-.05.01-.074.015a.985.985 0 0 0-.175.054 1.986 1.986 0 0 0-.573 3.496v9.394A1.004 1.004 0 0 0 6.824 19h.366a1.005 1.005 0 0 0 1.004-1.004v-2.474c3.642-1.098 5.197.643 7.098.576a5.574 5.574 0 0 0 3.255-1.058 1.246 1.246 0 0 0 .442-1.058Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgFontAwesome);
export default Memo;
