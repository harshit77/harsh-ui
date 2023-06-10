import React, { Children, cloneElement, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Typography from "../Typography";
import Item from "./Item";

const Checkbox = ({
  ids = [],
  label = "",
  className,
  containerClassName,
  children,
  onChange,
  horizontal = false,
  ...props
}) => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheck = ({ target: { id } }) => {
    const selectedId = Number(id);
    const selectedCheckboxes = checkedValues;
    const findIdx = selectedCheckboxes.indexOf(selectedId);
    findIdx !== -1
      ? selectedCheckboxes.splice(findIdx, 1)
      : selectedCheckboxes.push(selectedId);
    setCheckedValues([...selectedCheckboxes]);
  };

  return (
    <div
      className={classnames("harsh-ui-checkbox__wrapper", {
        [className]: className,
      })}
    >
      {label && <Typography component="body2">{label}</Typography>}
      <div
        className={classnames("harsh-ui-checkbox__container", {
          "harsh-ui-checkbox__container--horizontal": horizontal,
          [containerClassName]: containerClassName,
        })}
      >
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            ...child.props,
            id: child.props?.id || index,
            checked:
              child.props.checked ??
              [...checkedValues, ...ids].includes(child.props?.id || index),
            onChange: child.props.onChange ?? onChange ?? handleCheck,
          })
        )}
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  /**
    To specify arrays of ids of checkedbox
   */
  ids: PropTypes.arrayOf(PropTypes.number),
  /**
    To specify the label to be displayed for checkbox component.
   */
  label: PropTypes.string,
  /**
   * To specify external classnames as overrides to the checkbox component.
   */
  className: PropTypes.string,
  /**
   To specify external classnames for the container of checkbox component. that comes after className
  */
  containerClassName: PropTypes.string,
  /**
   * To specify the content to be rendered inside the checkbox component. */
  children: PropTypes.node,
  /** A callback function which is called when selected checkbox option changes */
  onChange: PropTypes.func,
  /** To specify the checkbox items direction */
  horizontal: PropTypes.bool,
};
Checkbox.Item = Item;

export default Checkbox;
