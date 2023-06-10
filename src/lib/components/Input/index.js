import React, { forwardRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Typography from "../Typography";
import { Search } from "../../icons";
import InputWithCountryCode from "./InputWithCountryCode";

const Input = forwardRef(
  (
    {
      label,
      value,
      type = "text",
      onChange,
      search = false,
      prefix,
      suffix,
      placeholder,
      className,
      amount = false,
      size = "medium",
      horizontal,
      disabled = false,
      error,
      helpText,
      countryCode,
      onChangeCountryCode,
      separator,
      suffixOnClick,
      ...otherProps
    },
    ref
  ) => {
    return (
      <div
        className={classnames(
          "harsh-ui-input__wrapper",
          {
            "harsh-ui-input__wrapper--horizontal": horizontal,
          },
          {
            [className]: className,
          }
        )}
      >
        <div className="harsh-ui-input__label-wrapper">
          {label && (
            <Typography
              component="body2"
              className={classnames(
                { "harsh-ui-input__label-wrapper--disabled": disabled },
                {
                  "harsh-ui-input__label-wrapper--error": error,
                }
              )}
            >
              {label}
            </Typography>
          )}
        </div>
        <div
          className={classnames("harsh-ui-input", {
            "harsh-ui-input--small": size === "small",
            "harsh-ui-input--medium": size === "medium",
            "harsh-ui-input--large": size === "large",
            "harsh-ui-input--notFilled": !value,
            "harsh-ui-input--disabled": disabled,
            "harsh-ui-input--suffixContainer": suffix || search,
            "harsh-ui-input--prefixContainer": prefix || amount,
            "harsh-ui-input--countryContainer": countryCode,
            "harsh-ui-input--error": error,
          })}
        >
          {(prefix || amount || countryCode) && (
            <div
              className={classnames("harsh-ui-input__prefix", {
                "harsh-ui-input__prefix--amount": amount,
              })}
            >
              {amount
                ? "$"
                : prefix ||
                  (countryCode && (
                    <InputWithCountryCode
                      onChangeCountryCode={onChangeCountryCode}
                      countryCode={countryCode}
                    />
                  ))}
            </div>
          )}
          <input
            ref={ref}
            value={value}
            type={type}
            onChange={onChange}
            onClick={suffixOnClick}
            placeholder={placeholder}
            {...otherProps}
            disabled={disabled}
          />
          {(suffix || search) && (
            <div
              className={classnames("harsh-ui-input__suffix", {
                "harsh-ui-input__search": search,
                "harsh-ui-input__suffix--amount": amount,
              })}
              onClick={
                search ? onChange : suffixOnClick ? suffixOnClick : () => {}
              }
            >
              {search ? <Search /> : suffix}
            </div>
          )}
          {separator && (
            <div className={classnames("harsh-ui-seprator_input_wrapper")}>
              <div className={classnames("harsh-ui-arrowleft_input")} />
              <div className={classnames("harsh-ui-seprator_input")} />
              <div className={classnames("harsh-ui-arrowright_input")} />
            </div>
          )}
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

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  amount: PropTypes.bool,
  size: PropTypes.string,
  horizontal: PropTypes.bool,
  countryCode: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  separator: PropTypes.bool,
};

export default Input;
