import React from "react";
import classnames from "classnames";
import { ArrowRight, ArrowLeft } from "../../../icons";

const ButtonSlider = ({ direction, moveSlide, disabled }) => {
  return (
    <>
      {direction === "next" ? (
        <ArrowRight
          className={classnames("dizzion-rightArrow-btn-next", {
            disabled: disabled,
          })}
          width={16}
          height={16}
          onClick={() => (disabled ? {} : moveSlide())}
        />
      ) : (
        <ArrowLeft
          width={16}
          height={16}
          onClick={() => (disabled ? {} : moveSlide())}
          className={classnames("dizzion-rightArrow-btn-prev", {
            disabled: disabled,
          })}
        />
      )}
    </>
  );
};

export default ButtonSlider;
