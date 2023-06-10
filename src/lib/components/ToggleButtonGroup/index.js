import React, { useState, Children, cloneElement, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography";
import classnames from "classnames";
import ToggleButton from "./ToggleButton";

const ToggleButtonGroup = ({
  label,
  children,
  className,
  onChange,
  ...props
}) => {
  const [activeButton, setActiveButton] = useState(props.active || 0);
  const arrayChildren = Children.toArray(children);

  useEffect(
    () => props.active != undefined && setActiveButton(props.active),
    [props.active]
  );

  const handleInternalOnChange = (e) => setActiveButton(Number(e.target.id));

  return (
    <div
      className={classnames("harsh-ui-toggleButtonGroup", {
        [className]: className,
      })}
    >
      {label && <Typography component="body2">{label}</Typography>}
      <div className="harsh-ui-toggleButtonGroup__buttons">
        {Children.map(arrayChildren, (child, index) =>
          cloneElement(child, {
            id: index,
            key: index,
            active: activeButton === index,
            ...child.props,
            onClick: child.props.onChange ?? onChange ?? handleInternalOnChange,
          })
        )}
      </div>
    </div>
  );
};

ToggleButtonGroup.propTypes = {
  /** To specify the label */
  label: PropTypes.string,
  /** To specify the child nodes */
  children: PropTypes.node,
  /** To specify the class for outermost node */
  className: PropTypes.string,
};
ToggleButtonGroup.ToggleButton = ToggleButton;

export default ToggleButtonGroup;
