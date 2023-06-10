import * as React from "react";
import { memo } from "react";
const SvgBlockquote = (props) => (
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
      d="m10.318 5 .938 1.323A12.884 12.884 0 0 0 8.166 9.4a5.542 5.542 0 0 0-.999 3.079v.337c.24-.032.461-.06.66-.084.188-.023.377-.036.566-.037a2.872 2.872 0 0 1 2.117.843 2.841 2.841 0 0 1 .843 2.093 3.373 3.373 0 0 1-.89 2.453A3.144 3.144 0 0 1 8.105 19a3.405 3.405 0 0 1-2.73-1.276 4.912 4.912 0 0 1-1.07-3.271A9.367 9.367 0 0 1 5.82 9.329 14.757 14.757 0 0 1 10.318 5Zm8.392 0 .937 1.323a12.883 12.883 0 0 0-3.09 3.078 5.543 5.543 0 0 0-.999 3.079v.337c.225-.032.437-.06.638-.084a4.92 4.92 0 0 1 .59-.037 2.805 2.805 0 0 1 2.104.83 2.901 2.901 0 0 1 .805 2.106c.046.9-.265 1.78-.865 2.453a3.062 3.062 0 0 1-2.333.915 3.48 3.48 0 0 1-2.755-1.276 4.846 4.846 0 0 1-1.095-3.271c.006-1.8.537-3.56 1.528-5.063A15.26 15.26 0 0 1 18.71 5Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgBlockquote);
export default Memo;
