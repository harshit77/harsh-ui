import React, { Children, cloneElement, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Typography from "../Typography";
import Item from "./Item";

const RadioButton = ({
  ids = [],
  label = "",
  className,
  containerClassName,
  children,
  onChange,
  horizontal = false,
  ...props
}) => {
  const [checkedValue, setCheckedValue] = useState("");

  const handleCheck = (e) => setCheckedValue(Number(e.target.id));

  return (
    <div
      className={classnames("harsh-ui-radio__wrapper", {
        [className]: className,
      })}
    >
      {label && <Typography component="body2">{label}</Typography>}
      <div
        className={classnames("harsh-ui-radio__container", {
          "harsh-ui-radio__container--horizontal": horizontal,
          [containerClassName]: containerClassName,
        })}
      >
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            ...child.props,
            id: child.props?.id || index,
            checked:
              child.props.checked ??
              [checkedValue, ...ids].includes(child.props?.id || index),
            onChange: child.props.onChange ?? onChange ?? handleCheck,
          })
        )}
      </div>
    </div>
  );
};

RadioButton.propTypes = {
  /**
    To specify ids of checkedBox
   */
  ids: PropTypes.arrayOf(PropTypes.number),
  /**
    To specify the label to be displayed for Radio component.
   */
  label: PropTypes.string,
  /**
   * To specify external classnames as overrides to the Radio component.
   */
  className: PropTypes.string,
  /**
   To specify external classnames for the container of Radio component. that comes after className
  */
  containerClassName: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Radio component. */
  children: PropTypes.node,
  /** A callback function which is called when selected radio option changes */
  onChange: PropTypes.func,
  /** To specify the radio items direction */
  horizontal: PropTypes.bool,
};
RadioButton.Item = Item;

export default RadioButton;
