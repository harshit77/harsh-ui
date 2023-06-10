import * as React from "react";
import { memo } from "react";
const SvgSuperscript = (props) => (
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
      d="m10.4 12 3.6 3.6-1.4 1.4L9 13.4 5.4 17 4 15.6 7.6 12 4 8.4 5.4 7 9 10.6 12.6 7 14 8.4 10.4 12Zm8.912-3.326 1.069-1.146c.195-.202.37-.408.536-.61.16-.193.304-.4.432-.616.12-.2.218-.413.293-.634.07-.215.107-.44.106-.666a2.16 2.16 0 0 0-.153-.822 1.715 1.715 0 0 0-.45-.642 2.03 2.03 0 0 0-.72-.406 3.17 3.17 0 0 0-1.95.045 2.145 2.145 0 0 0-.763.495c-.209.208-.37.459-.475.735-.1.266-.153.548-.156.833l-.003.237h1.539l.006-.227c.002-.127.02-.253.054-.375a.895.895 0 0 1 .157-.294.701.701 0 0 1 .259-.184c.224-.089.474-.094.702-.015a.62.62 0 0 1 .215.157c.06.072.107.154.137.244a1.092 1.092 0 0 1 .023.601c-.03.104-.07.205-.124.299a2.94 2.94 0 0 1-.263.388 6.427 6.427 0 0 1-.43.502l-2.156 2.353V10H22V8.674h-2.688Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgSuperscript);
export default Memo;
