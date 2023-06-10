import React, { Children, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import Dropdown from "../Dropdown";
import { MenuMoreVert } from "../../icons";

const VARIANT = {
  primary: "primary",
  secondary: "secondary",
};

const Accordion = ({
  id,
  variant = VARIANT.primary,
  className,
  children,
  expanded,
  onChange,
  options,
  disabled,
  onActionChange,
  ...otherProps
}) => {
  const [openAccordion, setAccordion] = useState(false);

  useEffect(() => {
    setAccordion(expanded);
  }, [expanded]);

  const handleDropdown = (e, instance) => {
    instance.hide();
    onActionChange && onActionChange(e.target.id, id);
  };

  return (
    <div
      className={classnames(
        "harsh-ui-accordion__item--wrapper",
        {
          "harsh-ui-accordion__item--wrapper--opened": openAccordion,
        },
        {
          "harsh-ui-accordion__item--wrapper--disabled": disabled,
        },
        {
          [className]: className,
        }
      )}
      {...otherProps}
    >
      {Children.map(children, (child, index) =>
        React.cloneElement(child, {
          id: child.props.id || index,
          key: child.props.id || index,
          variant: variant,
          children: child.props.children,
          onClick: () => {
            if (!disabled) {
              setAccordion((prevOpenAccordion) => !prevOpenAccordion);
              onChange && onChange();
            }
          },
        })
      )}
      {options && (
        <Dropdown
          buttonProps={{
            variant: "text",
            type: "button",
            icon: <MenuMoreVert width={20} height={20} />,
            ...otherProps.buttonProps,
          }}
          className="harsh-ui-accordion__dropdown"
          dropdownProps={{ style: { width: 150 }, ...otherProps.dropdownProps }}
          onCloseSelect={handleDropdown}
        >
          <Dropdown.Menu>
            {options.map((item, index) => (
              <Dropdown.MenuItem id={item?.id || index}>
                {item.icon && (
                  <span style={{ marginRight: 8 }}>{item.icon}</span>
                )}
                {item.label}
              </Dropdown.MenuItem>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
};

Accordion.propTypes = {
  /**
   * To specify class for the outer container.
   */
  className: PropTypes.string,
  /**
   * To specify elements/node to render.
   */
  children: PropTypes.node,
  /**
   * To specify which accordion item to show.
   */
  expanded: PropTypes.number,
  /**
   * To specify a callback function
   */
  onChange: PropTypes.func,
};

Accordion.AccordionTitle = AccordionTitle;
Accordion.AccordionItem = AccordionItem;
Accordion.displayName = "Accordion";

export default Accordion;
