import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography";
import classnames from "classnames";
import ListItem from "./ListItem";
import ListInfoCircle from "./ListInfoCircle";
import ListItemText from "./ListItemText";

const List = ({
  headerText,
  headerIcon = null,
  headerComponent,
  children,
  className,
}) => {
  return (
    <div className={classnames("harsh-ui-list", { [className]: className })}>
      <div className="harsh-ui-list__header">
        <Typography
          component={"body3" || headerComponent}
          weight="medium"
          lineHeight="tight"
        >
          {headerText}
        </Typography>
        {headerIcon}
      </div>
      {children}
    </div>
  );
};

List.ListItem = ListItem;
List.ListItemText = ListItemText;
List.ListInfoCircle = ListInfoCircle;

List.propTypes = {
  /**
    To specify the label to be displayed for Radio component.
   */
  headerText: PropTypes.string,
  /**
   * To specify external classnames as overrides to the Radio component.
   */
  className: PropTypes.string,
  /**
   To specify type of Typography component
  */
  headerComponent: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Radio component. */
  children: PropTypes.node,

  /** To specify any icon next to header Text */
  headerIcon: PropTypes.node,
};

export default List;
