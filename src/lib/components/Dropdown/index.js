import React, {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Divider from "./Divider";
import classnames from "classnames";
import Button from "../Button";
import { ArrowDown } from "../../icons";
import Typography from "../Typography";
import Search from "./Search";

const STRATEGY = {
  absolute: "absolute",
  fixed: "fixed",
};

const PLACEMENT = {
  top: "top",
  topStart: "top-start",
  topEnd: "top-end",
  right: "right",
  rightStart: "right-start",
  rightEnd: "right-end",
  bottom: "bottom",
  bottomStart: "bottom-start",
  bottomEnd: "bottom-end",
  left: "left",
  leftStart: "left-start",
  leftEnd: "left-end",
  auto: "auto",
  autoStart: "auto-start",
  autoEnd: "auto-end",
};

const VARIANT = {
  primary: "primary",
  secondary: "secondary",
};

const Trigger = {
  click: "click",
  mouseEnter: "mouseenter focus",
  focusIn: "focusin",
};

const Dropdown = ({
  icon,
  label,
  variant = VARIANT.primary,
  fullWidth = true,
  arrow = false,
  defaultValue,
  optionSelected = true,
  dropdownProps = {},
  searchProps = {},
  customTarget,
  children,
  placement = PLACEMENT.bottomStart,
  onClick,
  onCloseSelect,
  trigger = Trigger.click,
  strategy = STRATEGY.absolute,
  className,
  buttonProps: { ...buttonProps } = {},
  horizontal,
  error = false,
  disabled = false,
  customWidth,
}) => {
  const [mounted, setMounted] = useState(false);
  const [instance, setInstance] = useState(null);
  const buttonRef = useRef(null);
  const listItemRef = useRef(null);

  const { classNames: dropdownClassNames, ...otherDropdownProps } =
    dropdownProps;

  useEffect(() => {
    if (listItemRef?.current && fullWidth) {
      listItemRef.current.style.minWidth =
        (buttonRef.current?.clientWidth > 200
          ? buttonRef.current?.clientWidth
          : 200) + "px";
    }
  }, [mounted, fullWidth, children]);

  const onClose = (e) => {
    if (onCloseSelect) {
      onCloseSelect(e, instance);
    } else instance.hide();
  };

  const handleOutSideClick = (instance, e) => {
    if (onCloseSelect) {
      onCloseSelect(e, instance);
    } else instance.hide();
  };

  const isSearchPropsExists =
    Object.keys(searchProps).length !== 0 && searchProps.constructor === Object;

  return (
    <div
      className={classnames(
        "harsh-ui-dropdown--wrapper",
        { "harsh-ui-dropdown--wrapper--horizontal": horizontal },
        { "harsh-ui-dropdown--wrapper--disabled": disabled },
        { "harsh-ui-dropdown--wrapper--error": error },
        {
          "harsh-ui-dropdown--wrapper--notSelected": !optionSelected,
        },
        {
          [className]: className,
        }
      )}
    >
      {label && (
        <Typography component="body2" className="harsh-ui-dropdown--label">
          {label}
        </Typography>
      )}
      <Tippy
        role="dropdown"
        trigger={Trigger[trigger]}
        hideOnClick="toggle"
        onClickOutside={handleOutSideClick}
        interactive
        strategy={strategy}
        offset={0}
        arrow={arrow}
        className="harsh-ui-dropdown"
        placement={placement}
        onMount={() => setMounted(true)}
        onHidden={() => setMounted(false)}
        theme="light"
        maxWidth={
          buttonRef.current?.clientWidth > 208
            ? buttonRef.current?.clientWidth
            : customWidth ?? 208
        }
        content={
          mounted && !!children ? (
            <div
              className={classnames("harsh-ui-dropdown__popup", {
                [dropdownClassNames]: dropdownClassNames,
                "harsh-ui-dropdown__popup--secondary":
                  VARIANT.secondary === variant,
                "harsh-ui-dropdown__popup--search": isSearchPropsExists,
              })}
              {...otherDropdownProps}
              onClick={onClose}
              ref={listItemRef}
            >
              {isSearchPropsExists && <Search {...searchProps} />}
              {Children.map(children, (child, index) =>
                cloneElement(child, {
                  ...child.props,
                  key: child.props.id || index,
                  onClick: onClose,
                })
              )}
            </div>
          ) : null
        }
        onCreate={(instance) => instance && setInstance(instance)}
      >
        {customTarget ? (
          <span className="harsh-ui-customTarget" ref={buttonRef}>
            {typeof customTarget === "function" ? customTarget() : customTarget}
          </span>
        ) : (
          <Button
            ref={buttonRef}
            label={defaultValue}
            icon={icon || <ArrowDown />}
            onClick={onClick}
            active={mounted}
            {...buttonProps}
          />
        )}
      </Tippy>
      {error && (
        <Typography
          component="body2"
          className="harsh-ui-dropdown--error-text"
        >
          {error}
        </Typography>
      )}
    </div>
  );
};

Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.Divider = Divider;

Dropdown.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  arrow: PropTypes.bool,
  defaultValue: PropTypes.string,
  optionSelected: PropTypes.bool,
  dropdownProps: PropTypes.object,
  customTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  children: PropTypes.node,
  placement: PropTypes.oneOf(Object.values(PLACEMENT)),
  onClick: PropTypes.func,
  onCloseSelect: PropTypes.func,
  trigger: PropTypes.oneOf(Object.values(Trigger)),
  strategy: PropTypes.oneOf(Object.values(STRATEGY)),
  buttonProps: PropTypes.object,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  customWidth: PropTypes.number,
};

export default Dropdown;
