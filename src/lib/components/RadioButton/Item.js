import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography";
import classNames from "classnames";
import { RadioChecked, RadioUncheck } from "../../icons";

const Item = ({ id, className, label, checked = false, ...otherProps }) => {
  return (
    <div
      className={classNames("harsh-ui-radio__item", {
        [className]: className,
        "harsh-ui-radio__item--disabled": otherProps?.disabled,
      })}
    >
      <label htmlFor={id}>
        <input id={id} type="radio" checked={checked} {...otherProps} />
        {checked ? <RadioChecked /> : <RadioUncheck />}
        <Typography component="body2">{label}</Typography>
      </label>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
};

export default Item;
