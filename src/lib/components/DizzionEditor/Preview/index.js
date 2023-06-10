import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ButtonSlider from "./ButtonSlider";
import { DeleteFilledOn, MenuMoreVert } from "../../../icons";
import Dropdown from "../../Dropdown";
import DOMPurify from "dompurify";
import Typography from "../../Typography";

const Preview = ({
  previewPages,
  selectedPage,
  onUpdatePage,
  setSelectedPage,
}) => {
  const handleClick = (selectedIndex) => {
    setSelectedPage(selectedIndex);
  };
  const nextSlide = () => {
    if (previewPages?.length > 0) {
      setSelectedPage(selectedPage + 1);
    }
  };

  const prevSlide = () => {
    if (previewPages?.length > 0) {
      setSelectedPage(selectedPage - 1);
    }
  };

  const handleRemovePage = (e, instance) => {
    instance.hide();
    const findIndex = previewPages.findIndex(
      (page) => page.id === selectedPage
    );
    previewPages.splice(findIndex, 1);
    onUpdatePage([...previewPages]);
    setSelectedPage(selectedPage === 1 ? 1 : selectedPage - 1);
  };

  return (
    <div className="harsh-ui-textSlider__wrapper">
      <Typography family="medium" component="h3-1" className="">
        Preview
      </Typography>
      <div className="harsh-ui-textSlider__preview">
        <div className="harsh-ui-textSlider__preview--header">
          <div className="page-numbring">
            <ButtonSlider
              moveSlide={prevSlide}
              direction="prev"
              disabled={selectedPage === 1}
            />
            <span className="pagetTitle">Page {selectedPage}</span>
            <ButtonSlider
              moveSlide={nextSlide}
              direction="next"
              disabled={selectedPage === previewPages.length}
            />
          </div>
          {previewPages.length > 1 && (
            <div className="harsh-ui-actions">
              <Dropdown
                buttonProps={{ variant: "text", icon: <MenuMoreVert /> }}
                dropdownProps={{ style: { width: 150 } }}
                onCloseSelect={handleRemovePage}
              >
                <Dropdown.Menu>
                  <Dropdown.MenuItem id={selectedPage}>
                    <DeleteFilledOn />
                    <span>Remove</span>
                  </Dropdown.MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>
        <div
          className="harsh-ui-textSlider__preview--content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              previewPages?.[selectedPage - 1].content
            ),
          }}
        />
      </div>

      <div className="harsh-ui-textSlider__thumnails">
        <div class="slide-container">
          {previewPages.length &&
            previewPages?.map((column, index) => (
              <div
                className={classnames("slide", {
                  "slide--selected": selectedPage === index + 1,
                })}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(column.content),
                }}
                onClick={() => handleClick(index + 1)}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

Preview.propTypes = {
  previewPages: PropTypes.array,
};

export default Preview;
