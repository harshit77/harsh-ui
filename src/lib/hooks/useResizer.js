import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const useResizer = (headRef, bodyRef, onResizeEnd, resizingAllowed, reload) => {
  const thElements = useRef([]);
  const thColGroups = useRef([]);
  const thColBodyGroups = useRef([]);
  const updatedColumnsWidth = useRef([]);

  const setColumnWidth = (updatedWidth, currentIndex) => {
    if (Array.isArray(bodyRef.current)) {
      thColBodyGroups.current
        .filter((filteredBody) => filteredBody)
        .forEach((bodygroup) => {
          const getElement = bodygroup.querySelectorAll(
            "col:not(:last-of-type)"
          );

          getElement[currentIndex].style.minWidth = `${updatedWidth}px`;
        });
    } else {
      thColBodyGroups.current[
        currentIndex
      ].style.minWidth = `${updatedWidth}px`;
    }
    updatedColumnsWidth.current[currentIndex] = updatedWidth;
  };

  const createResizerColumn = (column, resizer, currentIndex) => {
    let x = 0,
      width = 0;

    const mouseDownHandler = (e) => {
      x = e.clientX;
      resizer.classList.add("resizing");

      const styles = window.getComputedStyle(column);
      width = parseInt(styles.width, 10);
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };
    const mouseMoveHandler = (e) => {
      const dx = e.clientX - x;
      const updatedWidth = width + dx;
      thColGroups.current[currentIndex].style.minWidth = `${updatedWidth}px`;
      setColumnWidth(updatedWidth, currentIndex);
      onResizeEnd(updatedColumnsWidth.current);
    };

    const mouseUpHandler = (e) => {
      resizer.classList.remove("resizing");
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mousedown", mouseDownHandler);
    };

    resizer.addEventListener("mousedown", mouseDownHandler);
  };

  useEffect(() => {
    if (resizingAllowed) {
      thElements.current = [
        ...headRef.current.querySelectorAll("th:not(:last-of-type)"),
      ];
      thColGroups.current = [
        ...headRef.current.querySelectorAll("col:not(:last-of-type)"),
      ];
      thColBodyGroups.current = [
        ...(Array.isArray(bodyRef.current)
          ? bodyRef.current
          : bodyRef.current.querySelectorAll("col:not(:last-of-type)")),
      ];

      thElements.current.forEach((element, index) => {
        const resizer = document.createElement("div");
        resizer.classList.add("resizer");
        resizer.style.height = `${element.offsetHeight * 0.3}px`;
        element.appendChild(resizer);
        updatedColumnsWidth.current.push(element.clientWidth);
        createResizerColumn(element, resizer, index);
      });
    }
  }, [resizingAllowed]);

  useEffect(() => {
    if (bodyRef.current?.length > 0 && resizingAllowed) {
      thColBodyGroups.current = [
        ...(Array.isArray(bodyRef.current)
          ? bodyRef.current
          : bodyRef.current.querySelectorAll("col:not(:last-of-type)")),
      ];
      thColBodyGroups.current.forEach(() => {
        thColGroups.current.forEach((_, currentIndex) =>
          setColumnWidth(
            updatedColumnsWidth.current[currentIndex],
            currentIndex
          )
        );
      });
    }
  }, [bodyRef.current?.length, resizingAllowed, reload]);
};

useResizer.propTypes = {
  headRef: PropTypes.object,
  bodyRef: PropTypes.object,
  onResizeEnd: PropTypes.func,
};

export default useResizer;
