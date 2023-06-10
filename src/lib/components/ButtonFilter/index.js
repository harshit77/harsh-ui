import React, {
  Children,
  cloneElement,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Item from "./Item";
import { ArrowRight, ArrowLeft, ArrowDown, ArrowUp } from "../../icons";
import { scrollSmoothly } from "./helper";
import Typography from "../Typography";

const ButtonFilter = ({
  children,
  className,
  ids = [],
  onChange,
  multiLine = false,
}) => {
  const buttonFilterRef = useRef(null);
  const buttonFilterInnerRef = useRef(null);
  const actionButtonLeftRef = useRef(null);
  const actionButtonRightRef = useRef(null);
  const [seeMore, setSeeMore] = useState(false);
  const [selectedValues, setSelectedValues] = useState([...ids]);

  const handleScrollEvent = useCallback((direction) => {
    direction &&
      scrollSmoothly(
        buttonFilterInnerRef.current,
        direction,
        0.1,
        direction === "right"
          ? actionButtonRightRef.current.offsetWidth
          : actionButtonLeftRef.current.offsetWidth,
        1
      );
    buttonFilterInnerRef.current.scrollLeft +=
      direction === "right"
        ? actionButtonRightRef.current.offsetWidth
        : -actionButtonLeftRef.current.offsetWidth;

    if (buttonFilterInnerRef.current.scrollLeft !== 0) {
      actionButtonRightRef.current.style.display = "block";
      actionButtonLeftRef.current.style.display = "block";
      if (
        buttonFilterRef.current.offsetWidth +
          buttonFilterInnerRef.current.scrollLeft +
          12 >
        buttonFilterInnerRef.current.scrollWidth
      ) {
        actionButtonRightRef.current.style.display = "none";
      } else if (
        buttonFilterRef.current.offsetWidth +
          buttonFilterInnerRef.current.scrollLeft <
        0
      ) {
        actionButtonLeftRef.current.style.display = "none";
      }
    } else if (buttonFilterInnerRef.current.scrollLeft === 0) {
      actionButtonRightRef.current.style.display = "block";
      actionButtonLeftRef.current.style.display = "none";
    }
  }, []);

  useEffect(() => {
    if (multiLine) {
      document.documentElement.style.setProperty(
        "--multiLine--seeMore",
        `${buttonFilterRef.current.scrollHeight}px`
      );
    } else handleScrollEvent();
  }, [buttonFilterRef?.current]);

  const handleInternalClick = ({ target: { id } }) => {
    const selectedId = Number(id);
    const findIdx = selectedValues.indexOf(selectedId);
    findIdx !== -1
      ? selectedValues.splice(findIdx, 1)
      : selectedValues.push(selectedId);
    setSelectedValues([...selectedValues]);
  };

  return (
    <div
      className={classnames(
        "harsh-ui-buttonFilter",
        { "harsh-ui-buttonFilter__multiLine": multiLine },
        { "harsh-ui-buttonFilter__multiLine--open": multiLine && seeMore },
        {
          [className]: className,
        }
      )}
      ref={buttonFilterRef}
    >
      <div
        className={classnames("harsh-ui-buttonFilter__wrapper", {
          "harsh-ui-buttonFilter__wrapper--multiLine": multiLine,
        })}
        ref={buttonFilterInnerRef}
      >
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            ...child.props,
            id: child.props.id || index,
            selected:
              child.props.selected ??
              [...selectedValues, ...ids].includes(child.props?.id || index),
            onClick: child.props?.onChange ?? onChange ?? handleInternalClick,
          })
        )}
      </div>
      {multiLine ? (
        <div
          className="harsh-ui-buttonFilter__action harsh-ui-buttonFilter__action--seeMore"
          ref={actionButtonRightRef}
        >
          <Typography
            component="body1"
            onClick={() => setSeeMore((prev) => !prev)}
          >
            See{" "}
            {seeMore ? (
              <>
                Less <ArrowUp />
              </>
            ) : (
              <>
                More
                <ArrowDown />
              </>
            )}
          </Typography>
        </div>
      ) : (
        <>
          <div className="harsh-ui-buttonFilter__action harsh-ui-buttonFilter__action--right">
            <div
              className="harsh-ui-buttonFilter__action--wrapper"
              onClick={(e) => handleScrollEvent("right")}
              ref={actionButtonRightRef}
            >
              <ArrowRight width={16} height={16} />
            </div>
          </div>
          <div className="harsh-ui-buttonFilter__action harsh-ui-buttonFilter__action--left">
            <div
              className="harsh-ui-buttonFilter__action--wrapper"
              onClick={(e) => handleScrollEvent("left")}
              ref={actionButtonLeftRef}
            >
              <ArrowLeft width={16} height={16} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

ButtonFilter.Item = Item;

ButtonFilter.propTypes = {
  /** To specify the child <ButtonFilter.Item/> */
  children: PropTypes.node,
  /** To specify the className for outer container */
  className: PropTypes.string,
  /** To specify the selected buttons by defaults by passing ids to an array */
  ids: PropTypes.array,
  /** A callback function which is called when selected radio option changes */
  onChange: PropTypes.func,
  /** A boolean value to determine the layout for ButtonFilter */
  multiLine: PropTypes.bool,
};

export default ButtonFilter;
