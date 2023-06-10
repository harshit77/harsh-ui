import * as React from "react";
import { memo } from "react";
const SvgStrikeThrough = (props) => (
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
      d="M3 12.203h18v1.5h-4.366c.237.497.357 1.042.35 1.593a3.25 3.25 0 0 1-1.315 2.7A5.551 5.551 0 0 1 12.203 19a6.443 6.443 0 0 1-2.624-.539 4.463 4.463 0 0 1-1.892-1.488 3.668 3.668 0 0 1-.67-2.156v-.113h.287v-.001h.341v.001H9.02v.113a2.183 2.183 0 0 0 .854 1.831 3.69 3.69 0 0 0 2.329.68 3.388 3.388 0 0 0 2.076-.547 1.734 1.734 0 0 0 .701-1.466 1.696 1.696 0 0 0-.646-1.435 3.007 3.007 0 0 0-.275-.177H3v-1.5ZM16.345 7.06a4.181 4.181 0 0 0-1.721-1.514A5.627 5.627 0 0 0 12.11 5a5.16 5.16 0 0 0-3.364 1.062A3.363 3.363 0 0 0 7.44 8.77a3.23 3.23 0 0 0 .322 1.427h2.596c-.083-.053-.185-.105-.252-.16a1.607 1.607 0 0 1-.653-1.3 1.798 1.798 0 0 1 .688-1.511 3.13 3.13 0 0 1 1.97-.553 3.048 3.048 0 0 1 2.106.669 2.35 2.35 0 0 1 .736 1.832v.114h2.003v-.114a3.9 3.9 0 0 0-.611-2.113Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgStrikeThrough);
export default Memo;
