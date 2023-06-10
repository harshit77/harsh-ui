import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { ArrowUp, ArrowDown, Minus, Add } from "../icons";
import PropTypes from "prop-types";
import classnames from "classnames";

const VARAINT = {
  primary: "primary",
  secondary: "secondary",
};

const SIZE = {
  small: "small",
  medium: "medium",
  large: "large",
};

const Counter = ({
  className,
  disabled = false,
  variant = VARAINT.primary,
  size = SIZE.large,
  min = 0,
  max = 9999,
  value,
  onChange = () => {},
  ...otherProps
}) => {
  const [count, setCount] = useState(value || 0);
  const initalSkipRef = useRef(true);

  useEffect(() => {
    !initalSkipRef.current && onChange(count);
    if (initalSkipRef.current) {
      initalSkipRef.current = false;
    }
  }, [count]);

  const handleClick = (type, e) => {
    type === "-"
      ? setCount((prevValue) => prevValue - 1)
      : setCount((prevValue) => prevValue + 1);
  };

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setCount(" ");
      return false;
    }
    const targetValue = Number(e.target.value);
    !isNaN(targetValue) && targetValue <= Number(max) && setCount(targetValue);
  };

  return (
    <div
      className={classnames({
        "harsh-ui-counter__primary": VARAINT.primary === variant,
        "harsh-ui-counter__primary--disabled":
          disabled && VARAINT.primary === variant,
        "harsh-ui-counter__secondary": VARAINT.secondary === variant,
        "harsh-ui-counter__secondary--disabled":
          disabled && VARAINT.primary === variant,
        "harsh-ui-counter__primary--small": SIZE.small === size,
        "harsh-ui-counter__primary--medium": SIZE.medium === size,
        [className]: className,
      })}
      onClick={(e) => e.stopPropagation()}
    >
      {VARAINT.primary === variant ? (
        <>
          <Button
            variant="text"
            icon={<Minus width="16" height="16" />}
            disabled={count <= min || disabled}
            onClick={handleClick.bind(this, "-")}
          />
          <input
            value={count}
            type="number"
            min={min}
            inputmode="numeric"
            max={max}
            onChange={handleInputChange.bind(this)}
            {...otherProps}
          />
          <Button
            variant="text"
            disabled={count >= max || disabled}
            icon={<Add width="16" height="16" />}
            onClick={handleClick.bind(this, "+")}
          />
        </>
      ) : (
        <Input
          value={count}
          type="number"
          min={min}
          inputmode="numeric"
          max={max}
          onChange={handleInputChange.bind(this)}
          suffix={
            <>
              <Button
                variant="text"
                icon={<ArrowUp width="16" height="16" />}
                disabled={count <= min || disabled}
                onClick={handleClick.bind(this, "-")}
              />
              <Button
                variant="text"
                disabled={count >= max || disabled}
                icon={<ArrowDown width="16" height="16" />}
                onClick={handleClick.bind(this, "+")}
              />
            </>
          }
          disabled={disabled}
          {...otherProps}
        />
      )}
    </div>
  );
};

Counter.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default Counter;
