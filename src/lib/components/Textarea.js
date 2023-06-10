import React, { useState, forwardRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Typography from "./Typography";

const Textarea = forwardRef(
  (
    {
      rows = 3,
      label,
      value,
      type = "text",
      onChange,
      placeholder,
      className,
      disabled = false,
      maxLength,
      error,
      helpText,
      ...otherProps
    },
    ref
  ) => {
    const [valueInternal, setValueInternal] = useState("");

    const outputtedValue = value ?? valueInternal;

    const onChangeInternal = (e) => setValueInternal(e.target.value);

    const outputtedOnChange = onChange ?? onChangeInternal;

    const textLength = outputtedValue.toString().length || 0;

    return (
      <div
        className={classnames("harsh-ui-input__wrapper", {
          [className]: className,
        })}
      >
        <div className="harsh-ui-input__label-wrapper">
          {label && (
            <Typography
              component="body2"
              className={classnames(
                { "harsh-ui-input__label-wrapper--disabled": disabled },
                {
                  "harsh-ui-input__label-wrapper--error":
                    error || textLength > maxLength,
                }
              )}
            >
              {label}
            </Typography>
          )}
          {maxLength && (
            <Typography component="body3" className={classnames()}>
              <span
                className={classnames({
                  "harsh-ui-input__label-wrapper--error":
                    error || textLength > maxLength,
                })}
              >
                {textLength}
              </span>
              /{maxLength}
            </Typography>
          )}
        </div>
        <div
          className={classnames("harsh-ui-input", {
            "harsh-ui-input--error": error || textLength > maxLength,
            "harsh-ui-input--notFilled": !value,
            "harsh-ui-input--disabled": disabled,
          })}
        >
          <textarea
            ref={ref}
            value={outputtedValue}
            rows={rows}
            onChange={outputtedOnChange}
            placeholder={placeholder}
            disabled={disabled}
            {...otherProps}
          />
        </div>
        {error && (
          <Typography
            component="body3"
            className="harsh-ui-input__error-message"
          >
            {error}
          </Typography>
        )}
        {helpText && (
          <Typography component="body3" className="harsh-ui-input__helpText">
            {helpText}
          </Typography>
        )}
      </div>
    );
  }
);

Textarea.propTypes = {
  rows: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.oneOfType[(PropTypes.string, PropTypes.number)],
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.number,
  error: PropTypes.oneOfType[(PropTypes.bool, PropTypes.node)],
  helpText: PropTypes.oneOfType[(PropTypes.bool, PropTypes.node)],
};

export default Textarea;
