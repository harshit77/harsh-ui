import * as React from "react";
import { memo } from "react";
const SvgInlineClass = (props) => (
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
      d="M9.9 13.313A1.2 1.2 0 0 1 9.968 13H6.277l1.86-5.2 1.841 5.148A1.291 1.291 0 0 1 11.212 12h.426l-2.5-7h-2l-5 14h2l1.43-4H9.9v-1.687Zm2.651 6.727a2.884 2.884 0 0 1-.655-2.018v-2.71A1.308 1.308 0 0 1 13.208 14h3.113c.783.09 1.5.482 2 1.092 0 0 1.728 1.818 2.964 2.928a1.383 1.383 0 0 1 .128 2.146l-3.347 3.31a1.31 1.31 0 0 1-1.832.258 1.282 1.282 0 0 1-.258-.257l-1.71-1.728-1.715-1.709Zm2.48-3.96a.773.773 0 1 0 .008 0h-.008Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgInlineClass);
export default Memo;
