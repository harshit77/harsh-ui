import React, { Children, cloneElement, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Step from "./Step";
import classNames from "classnames";

export const STEPPER_VARIANT = {
  tagBased: "tagBased",
  sequential: "sequential",
};

const Stepper = ({
  alternativeLabel = true,
  children,
  activeStep,
  onChange,
  variant,
}) => {
  const [internalActiveStep, setInternalActiveStep] = useState(0);

  useEffect(
    () => activeStep !== undefined && setInternalActiveStep(activeStep),
    [activeStep]
  );

  const handleActiveStep = (count) => setInternalActiveStep(count);

  return (
    <div
      className={classNames("harsh-ui-stepper__wrapper", {
        "harsh-ui-stepper__wrapper--withIcon": variant === STEPPER_VARIANT.tagBased,
        "harsh-ui-stepper__wrapper--sequential": variant === STEPPER_VARIANT.sequential,
      })}
    >
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          ...child.props,
          alternativeLabel: alternativeLabel,
          completed: child.props.completed ?? index < internalActiveStep,
          allowClick: child.props.allowClick,
          active: internalActiveStep === index,
          onChange: onChange ?? handleActiveStep,
          currentCount: index + 1,
        })
      )}
    </div>
  );
};

Stepper.propTypes = {
  alternativeLabel: PropTypes.bool,
  children: PropTypes.node,
  activeStep: PropTypes.number,
  onChange: PropTypes.func,
  variant: PropTypes.string,
};

Stepper.Step = Step;

export default Stepper;
