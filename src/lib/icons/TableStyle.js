import * as React from "react";
import { memo } from "react";
const SvgTableStyle = (props) => (
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
      d="m20.017 19.898.9 3.6-3.2-1.9-3.3 1.9.8-3.6-2.9-2.9h3.8l1.7-3.5 1.4 3.5h3.8l-3 2.9ZM20 5H4a2.006 2.006 0 0 0-2 2v10a2.006 2.006 0 0 0 2 2h7.491l-.588-.588-.912-.912H9.5v-2.502h5.365L16 12.66V10.5h4.5v3h-.528l.6 1.498H22V7a2.006 2.006 0 0 0-2-2ZM3.5 7a.472.472 0 0 1 .5-.5h4V9H3.5V7Zm0 3.5H8v3H3.5v-3Zm.5 7a.471.471 0 0 1-.5-.5v-2H8v2.5H4Zm10.5-4h-5v-3h5v3Zm0-4.5h-5V6.5h5V9Zm6 0H16V6.5h4a.472.472 0 0 1 .5.5v2Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgTableStyle);
export default Memo;
