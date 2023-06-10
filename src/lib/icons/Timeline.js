import * as React from "react";
import { memo } from "react";
const SvgTimeline = (props) => (
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
      d="M21 3.323H9.24v1.411H21v-1.41ZM16.294 5.681H9.239v1.411h7.055v-1.41ZM5.414 4.29c.506 0 .914.412.914.913a.914.914 0 0 1-1.828.005c0-.502.412-.919.914-.919Zm0-1.5a2.418 2.418 0 0 0 0 4.832 2.417 2.417 0 0 0 0-4.833ZM21 10.116H9.24v1.41H21v-1.41ZM16.294 12.473H9.239v1.411h7.055v-1.41ZM5.414 11.086a.915.915 0 0 1 0 1.828.915.915 0 0 1 0-1.828Zm0-1.5a2.414 2.414 0 1 0 0 4.827 2.414 2.414 0 0 0 0-4.827ZM21 16.908H9.24v1.41H21v-1.41ZM16.294 19.266H9.239v1.41h7.055v-1.41ZM5.414 17.878c.506 0 .914.413.914.914a.918.918 0 0 1-.914.914.915.915 0 0 1 0-1.828Zm0-1.5a2.414 2.414 0 1 0 0 4.827 2.414 2.414 0 0 0 0-4.827Z"
      fill="currentColor"
    />
    <path
      d="M4.71 6.387v4.434h1.406V6.387H4.71ZM4.713 13.36v4.434h1.406v-4.435H4.713Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgTimeline);
export default Memo;
