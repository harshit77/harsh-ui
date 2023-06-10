import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Check, CheckCircle, InfoFilledoff } from "../../icons";
import { STEPPER_VARIANT } from ".";
import Typography from "../Typography";

const Step = ({
  alternativeLabel,
  error = false,
  children,
  active,
  completed,
  currentCount,
  onChange,
  allowClick=true,
  variant,
  icon,
}) => {
  const renderIcon = () => {
    if (error) return <InfoFilledoff />;
    else if (completed) return <Check />;
    return currentCount;
  };

  return (
    <div
      className={classnames("harsh-ui-stepper__step", {
        "harsh-ui-stepper__step--alternativeLabel": alternativeLabel,
        "harsh-ui-stepper__step--sequential":
          variant === STEPPER_VARIANT.sequential,
        "harsh-ui-stepper__step--tagBased":
          variant === STEPPER_VARIANT.tagBased,
        "harsh-ui-stepper__step--active--tagBased":
          variant === STEPPER_VARIANT.tagBased,
        "harsh-ui-stepper__step--active--sequential":
          variant === STEPPER_VARIANT.sequential,
        "harsh-ui-stepper__step--active": active,
        "harsh-ui-stepper__step--tagBased--completed": variant === STEPPER_VARIANT.tagBased && completed,
        "harsh-ui-stepper__step--tagBased--active": variant === STEPPER_VARIANT.tagBased && active,
        "harsh-ui-stepper__step--allowClick": allowClick,
      })}
      onClick={() => allowClick && onChange(currentCount - 1)}
    >
      <div
        className={classnames("harsh-ui-stepper__iconContainer", {
          "harsh-ui-stepper__iconContainer--withIcon":
            variant === STEPPER_VARIANT.tagBased,
          "harsh-ui-stepper__iconContainer--activeStep": active,
          "harsh-ui-stepper__iconContainer--withIcon--activeStep":
            variant === STEPPER_VARIANT.tagBased && active,
            "harsh-ui-stepper__iconContainer--withIcon--completed":
            variant === STEPPER_VARIANT.tagBased && completed,
          "harsh-ui-stepper__iconContainer--completed": completed,
          "harsh-ui-stepper__iconContainer--error": error,
        })}
      >
        {variant === STEPPER_VARIANT.tagBased ? icon : renderIcon()}
      </div>
          <Typography component="h4"  
          className={classnames({
            "harsh-ui-stepper__label":allowClick,
            "harsh-ui-stepper__label--disabled": !allowClick,
            "harsh-ui-stepper__label--activeStep":
            allowClick && active,
              "harsh-ui-stepper__label--completed":
              allowClick && completed,
          })}
          >
              {children}
          </Typography>
      {variant === STEPPER_VARIANT.tagBased && completed && (
        <div className="harsh-ui-stepper__checkedIcon">
          <CheckCircle />
        </div>
      )}
      {variant === STEPPER_VARIANT.sequential && (
        <div className="harsh-ui-stepper__step--separator" />
      )}
    </div>
  );
};

Step.propTypes = {
  alternativeLabel: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  currentCount: PropTypes.number,
  onChange: PropTypes.func,
  variant: PropTypes.string,
};

export default Step;
