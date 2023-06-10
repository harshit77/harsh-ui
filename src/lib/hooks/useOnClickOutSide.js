import { useEffect } from "react";

const useOnClickOutside = (
  ref,
  handler,
  condition = false,
  otherElementRef = null
) => {
  useEffect(() => {
    const listener = (e) => {
      if (
        !ref.current ||
        ref.current.contains(e.target) ||
        (otherElementRef?.current.contains(e.target) &&
          otherElementRef?.current !== null)
      ) {
        return false;
      }
      handler(e);
    };
    if (condition) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }
  }, [ref, handler]);
};

export default useOnClickOutside;
