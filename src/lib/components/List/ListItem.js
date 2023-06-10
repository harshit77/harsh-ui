import React from "react";
import ListItemText from "./ListItemText";
import ListInfoCircle from "./ListInfoCircle";
import PropTypes from "prop-types";
import classnames from "classnames";

const ListItem = ({
  className,
  maxCircleLimit = 4,
  circles,
  text,
  onMoreClick = () => {},
}) => {
  return (
    <div
      className={classnames("harsh-ui-list__listItem", {
        [className]: className,
      })}
    >
      {circles &&
        circles.reduce((acc, current, index) => {
          if (index === maxCircleLimit) {
            acc.push(
              <ListInfoCircle
                more={circles.length - maxCircleLimit}
                onMoreClick={onMoreClick}
              />
            );
          } else if (index < maxCircleLimit) {
            acc.push(<ListInfoCircle type={current?.type} />);
          }
          return acc;
        }, [])}
      {text && <ListItemText text={text} />}
    </div>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  maxCircleLimit: PropTypes.number,
  circles: PropTypes.array,
  text: PropTypes.string,
  onMoreClick: PropTypes.func,
};

export default ListItem;
