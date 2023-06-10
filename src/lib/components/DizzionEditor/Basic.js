import React, { useState, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { CKEditor } from "ckeditor4-react";
import Preview from "./Preview";
import { DEFAULT_CONFIG, ALL_PLUGINS } from "./config";

const Basic = ({
  preview,
  selectedPage,
  onUpdatePage,
  config,
  pages,
  setSelectedPage,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [content, setContent] = useState(pages[selectedPage - 1].content);
  const editorRef = useRef(null);
  const [currentTheme, setCurrentTheme] = useState(
    document.body.classList.contains("harsh-ui-theme--dark")
  );

  useEffect(() => {
    pages[selectedPage - 1].content = content;
    onUpdatePage([...pages]);
  }, [content]);

  useEffect(() => {
    const mainNode = document.body;
    const observer = new MutationObserver(() =>
      setCurrentTheme((prevTheme) => !prevTheme)
    );

    observer.observe(mainNode, {
      attributes: true,
      attributeFilter: ["class"],
      childList: false,
      characterData: false,
    });

    return () => observer.disconnect();
  }, []);

  const editorStyle = useMemo(() => {
    return {
      backgroundColor: `rgb(${currentTheme ? "38,38,38" : "244, 244, 244"})`,
      foregroundColor: `rgb(${currentTheme ? "198, 198, 198" : "82, 82, 82"})`,
    };
  }, [currentTheme]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.editor.document
        .getBody()
        .setStyle("background-color", editorStyle.backgroundColor);
      editorRef.current.editor.document
        .getBody()
        .setStyle("color", editorStyle.foregroundColor);
    }
  }, [editorStyle]);

  useEffect(() => {
    editorRef.current !== null &&
      editorRef.current.editor.setData(pages[selectedPage - 1]?.content || "");
  }, [selectedPage]);
  return (
    <>
      <CKEditor
        config={config ? config : DEFAULT_CONFIG}
        initData={content}
        onChange={(e) => setContent(e.editor.getData())}
        onInstanceReady={(CKEDITOR) => {
          CKEDITOR.editor.document
            .getBody()
            .setStyle("background-color", editorStyle.backgroundColor);
          CKEDITOR.editor.document
            .getBody()
            .setStyle("color", editorStyle.foregroundColor);
          editorRef.current = CKEDITOR;
          let currentButton;
          ALL_PLUGINS.forEach((plugin) => {
            currentButton = document.querySelector(
              ".cke_button__" + plugin.id + "_icon"
            );
            if (currentButton) {
              currentButton.style.background = "none !important";
              currentButton.innerHTML = document.getElementById(
                `${plugin.id}_icon`
              ).innerHTML;
            }
          });
        }}
      />
      {preview && (
        <div
          className={classnames("harsh-ui-editor__preview", {
            "harsh-ui-editor__preview--open": showPreview,
          })}
          onClick={() => setShowPreview((preview) => !preview)}
        >
          Preview
        </div>
      )}
      {showPreview && (
        <Preview
          previewPages={pages}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          onUpdatePage={onUpdatePage}
        />
      )}
    </>
  );
};

Basic.propTypes = {
  preview: PropTypes.bool,
  selectedPage: PropTypes.number,
  onUpdatePage: PropTypes.func,
  config: PropTypes.object,
  pages: PropTypes.array,
  setSelectedPage: PropTypes.func,
};

export default Basic;
