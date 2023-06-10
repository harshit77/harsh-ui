import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography";
import classnames from "classnames";
import { CheckboxChecked, CheckboxUncheck, CheckboxSelectAll } from "../../icons";

const Item = ({ id, className, label, checked = false, isSelectAll = false, ...otherProps }) => {
  return (
    <div
      className={classnames("harsh-ui-checkbox__item", {
        [className]: className,
        "harsh-ui-checkbox__item--disabled": otherProps?.disabled,
      })}
    >
      <label htmlFor={id}>
        <input id={id} type="checkbox" checked={checked} {...otherProps} />
        {isSelectAll ? (checked ? <CheckboxChecked /> : <CheckboxSelectAll />) : (checked ? <CheckboxChecked /> : <CheckboxUncheck />)}
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
  isSelectAll: PropTypes.bool,
};

export default Item;
