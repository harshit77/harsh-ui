import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeOut = setTimeout(() => setDebounceValue(value), delay);
    return () => {
      clearTimeout(timeOut);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
