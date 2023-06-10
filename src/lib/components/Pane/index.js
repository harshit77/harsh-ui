import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Portal from "../../atom/Portal";
import classnames from "classnames";
import Spinner from "../Spinner";
import Header from "./Header";
import Body from "./Body";
import Backdrop from "../../atom/Backdrop";
import Button from "../Button";
import { CancelClear } from "../../icons";
import { useOnClickOutside } from "../../hooks";

const Pane = ({
  isOpen,
  closeButton = true,
  children,
  loading = false,
  onClose = () => {},
  backdropClassName,
  className,
  closeOnOutSideClick = true,
}) => {
  const wrapperRef = useRef();

  useOnClickOutside(wrapperRef, onClose, closeOnOutSideClick);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <Portal>
      {isOpen && (
        <Backdrop
          className={classnames(
            "harsh-ui-modal_backdrop harsh-ui-pane_backdrop",
            {
              [backdropClassName]: backdropClassName,
            }
          )}
        >
          <div
            className={classnames("harsh-ui-pane__wrapper", {
              [className]: className,
            })}
            ref={wrapperRef}
          >
            {closeButton && (
              <Button
                variant="text"
                icon={<CancelClear />}
                className="harsh-ui-pane__close"
                onClick={onClose}
              />
            )}
            {loading ? <Spinner /> : children}
          </div>
        </Backdrop>
      )}
    </Portal>
  );
};

Pane.propTypes = {
  isOpen: PropTypes.bool,
  closeButton: PropTypes.bool,
  children: PropTypes.node,
  loading: PropTypes.bool,
  onClose: PropTypes.func,
  backdropClassName: PropTypes.string,
  closeOnOutSideClick: PropTypes.bool,
};

Pane.Header = Header;
Pane.Body = Body;

export default Pane;
