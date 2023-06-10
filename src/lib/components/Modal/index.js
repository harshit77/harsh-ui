import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Portal from "../../atom/Portal";
import classnames from "classnames";
import Spinner from "../Spinner";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Backdrop from "../../atom/Backdrop";
import Button from "../Button";
import { CancelClear } from "../../icons";
import { useOnClickOutside } from "../../hooks";

const SIZES = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  full: "full",
};

const Modal = ({
  id,
  isOpen,
  size = "md",
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
    <Portal id={id}>
      {isOpen && (
        <Backdrop
          className={classnames("harsh-ui-modal_backdrop", {
            [backdropClassName]: backdropClassName,
          })}
        >
          <div
            className={classnames(
              "harsh-ui-modal__wrapper",
              { "harsh-ui-modal__wrapper--xs": size === SIZES.xs },
              { "harsh-ui-modal__wrapper--sm": size === SIZES.sm },
              { "harsh-ui-modal__wrapper--md": size === SIZES.md },
              { "harsh-ui-modal__wrapper--lg": size === SIZES.lg },
              { "harsh-ui-modal__wrapper--full": size === SIZES.full },
              { [className]: className }
            )}
            ref={wrapperRef}
          >
            {closeButton && (
              <Button
                variant="text"
                icon={<CancelClear />}
                className="harsh-ui-modal__close"
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

Modal.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES)),
  closeButton: PropTypes.bool,
  children: PropTypes.node,
  loading: PropTypes.bool,
  onClose: PropTypes.func,
  backdropClassName: PropTypes.string,
  closeOnOutSideClick: PropTypes.bool,
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
