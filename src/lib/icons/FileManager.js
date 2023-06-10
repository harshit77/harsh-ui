import * as React from "react";
import { memo } from "react";
const SvgFileManager = (props) => (
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
      d="M1.5 8.625h20.996L22.5 18.75c0 .621-.59 1.125-1.313 1.125H2.813c-.726 0-1.312-.504-1.312-1.125V8.625Zm21-1.125h-21V5.25c0-.621.586-1.125 1.313-1.125h5.609c.558 0 1.094.191 1.484.527l1.395 1.196c.394.336.93.527 1.488.527h8.399c.726 0 1.312.504 1.312 1.125Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgFileManager);
export default Memo;
