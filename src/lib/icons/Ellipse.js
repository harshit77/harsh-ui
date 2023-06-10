import * as React from "react";
import { memo } from "react";
const SvgEllipse = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M16.54 3.46c.294-.294.295-.77-.019-1.041A10 10 0 0 0 2.42 16.52c.27.314.747.313 1.04.02.293-.293.29-.766.024-1.084A8.5 8.5 0 0 1 15.457 3.483c.318.266.79.27 1.084-.024Z"
      fill={props.foreground}
    />
    <path
      d="M2.481 15.388c-.336.242-.416.712-.15 1.03A10 10 0 1 0 16.477 2.38c-.316-.269-.787-.193-1.031.142-.244.335-.168.802.144 1.074A8.501 8.501 0 1 1 3.554 15.541c-.27-.314-.736-.394-1.073-.153Z"
      fill={props.background}
    />
  </svg>
);
const Memo = memo(SvgEllipse);
export default Memo;
