import * as React from "react";
import { memo } from "react";
const SvgTags = (props) => (
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
      d="M8.975 7.475a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.789-3.127 3.772 3.772.336.336 2.77 2.77c.376.377.588.888.59 1.42a1.955 1.955 0 0 1-.585 1.405l-5.596 5.596a1.954 1.954 0 0 1-1.405.585 1.988 1.988 0 0 1-1.41-.58l-2.78-2.78-.336-.336-3.762-3.763a1.995 1.995 0 0 1-.59-1.42V5.769a2.006 2.006 0 0 1 2-2h5.586a1.988 1.988 0 0 1 1.41.58Zm2.698 5.518-.336-.336-3.762-3.762H5.768v5.596l4.098 4.098 2.78 2.78 5.587-5.605-2.771-2.771Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgTags);
export default Memo;
