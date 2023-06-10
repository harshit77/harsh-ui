import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Typography from "../Typography";

const TYPE = {
  info: "info",
  success: "success",
  error: "error",
  primary: "primary",
  secondary: "secondary",
  warning: "warning",
};

const ListInfoCircle = ({
  className,
  type = TYPE.info,
  more = 0,
  onMoreClick,
}) => {
  return (
    <>
      {more ? (
        <Typography component="body3">
          ....
          <span
            className={classnames(
              "harsh-ui-list__info--circle--more",
              { "harsh-ui-list__info--circle--info": type === TYPE.info },
              {
                "harsh-ui-list__info--circle--success": type === TYPE.success,
              },
              { "harsh-ui-list__info--circle--error": type === TYPE.error },
              {
                "harsh-ui-list__info--circle--primary": type === TYPE.primary,
              },
              {
                "harsh-ui-list__info--circle--secondary":
                  type === TYPE.secondary,
              }
            )}
            onClick={onMoreClick}
          >
            +{more}
          </span>
        </Typography>
      ) : (
        <div
          className={classnames(
            "harsh-ui-list__info--circle",
            { [className]: className },
            { "harsh-ui-list__info--circle--info": type === TYPE.info },
            { "harsh-ui-list__info--circle--success": type === TYPE.success },
            { "harsh-ui-list__info--circle--error": type === TYPE.error },
            { "harsh-ui-list__info--circle--primary": type === TYPE.primary },
            {
              "harsh-ui-list__info--circle--secondary":
                type === TYPE.secondary,
            }
          )}
        />
      )}
    </>
  );
};

ListInfoCircle.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPE)),
  more: PropTypes.number,
  onMoreClick: PropTypes.func,
};
ListInfoCircle.displayName = "ListInfoCircle";

export default ListInfoCircle;
