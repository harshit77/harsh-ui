import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Item from "./Item";

const SIZES = { large: "large", small: "small" };

const Tab = ({
  size = SIZES.small,
  noUnderline = false,
  tile = false,
  separatedTile = false,
  children,
  className = "",
  ...otherProps
}) => {
  return (
    <div
      className={classnames(
        "harsh-ui-tab__wrapper",
        {
          "harsh-ui-tab__wrapper--size-large": size === SIZES.large,
        },
        {
          "harsh-ui-tab__wrapper--size-small": size === SIZES.small,
        },
        {
          "harsh-ui-tab__wrapper--underline-none": noUnderline,
        },
        {
          "harsh-ui-tab__wrapper--tile": tile,
        },
        {
          "harsh-ui-tab__wrapper--separatedTile": separatedTile,
        },
        [className]
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Tab.propTypes = {
  /** To specify the variant of tab  */
  noUnderline: PropTypes.bool,
  /** To specify the size of tab  */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /** To specify the node of tab component   */
  children: PropTypes.node,
  /** To specify the class for the outermost component   */
  className: PropTypes.string,
};

Tab.Item = Item;

export default Tab;
