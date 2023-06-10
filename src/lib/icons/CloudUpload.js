import * as React from "react";
import { memo } from "react";
const SvgCloudUpload = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 81 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#cloudUpload_svg__a)">
      <path
        d="M65 33.465c-2.267-11.5-12.367-20.133-24.5-20.133-9.633 0-18 5.467-22.167 13.467C8.3 27.865.5 36.365.5 46.665c0 11.034 8.967 20 20 20h43.333C73.033 66.665 80.5 59.2 80.5 50c0-8.8-6.833-15.934-15.5-16.534Zm-17.833 9.867v13.333H33.833V43.332h-10L40.5 26.665l16.667 16.667h-10Z"
        fill="#8CBBF9"
      />
    </g>
    <defs>
      <clipPath id="cloudUpload_svg__a">
        <path fill="currentColor" transform="translate(.5)" d="M0 0h80v80H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgCloudUpload);
export default Memo;
