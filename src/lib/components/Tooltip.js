import React, { useState } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";
import "tippy.js/dist/svg-arrow.css";

const Tooltip = ({
  content,
  children,
  theme = "dark",
  disabled = false,
  position = "auto",
  interactive = false,
  hideAfter = -1,
  ...otherProps
}) => {
  const [instance, setInstance] = useState(null);
  const [mounted, setMounted] = useState(false);
  const localProps = {};

  if (hideAfter > 0) {
    localProps["onShow"] = (instance) =>
      setTimeout(() => instance.hide(), hideAfter);
  }

  return (
    <Tippy
      role="tooltip"
      theme={theme}
      content={mounted ? content : null}
      arrow
      disabled={disabled}
      animation={"scale-subtle"}
      placement={position}
      plugins={[followCursor]}
      onMount={() => setMounted(true)}
      onHidden={() => setMounted(false)}
      interactive={interactive}
      duration={[100, 200]}
      zIndex={10000}
      onCreate={(instance) => setInstance(instance)}
      {...localProps}
      {...otherProps}
    >
      {children}
    </Tippy>
  );
};

Tooltip.propTypes = {
  content: PropTypes.node,

  children: PropTypes.node,

  theme: PropTypes.oneOf(["dark", "light"]),

  disabled: PropTypes.bool,

  position: PropTypes.string,

  interactive: PropTypes.bool,
  hideAfter: PropTypes.number,
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
