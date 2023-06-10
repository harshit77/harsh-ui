import React, { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import { CKEditor } from "ckeditor4-react";
import { CHAT_DEFAULT_CONFIG, ALL_PLUGINS } from "./config";
import Button from "../Button";

const Chat = ({ onUpdatePage, config, renderAction }) => {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);
  const [currentTheme, setCurrentTheme] = useState(
    document.body.classList.contains("harsh-ui-theme--dark")
  );

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
      backgroundColor: `rgb(${currentTheme ? "57, 57, 57" : "255, 255, 255"})`,
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

  return (
    <>
      <CKEditor
        config={{
          ...CHAT_DEFAULT_CONFIG,

          ...config,
        }}
        onChange={(e) => setContent(e.editor.getData())}
        onInstanceReady={(CKEDITOR) => {
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
      <div className="harsh-ui-editor__actions">
        {renderAction ? (
          renderAction(() => onUpdatePage(content))
        ) : (
          <Button label="Post" onClick={() => onUpdatePage(content)} />
        )}
      </div>
    </>
  );
};

Chat.propTypes = {
  onUpdatePage: PropTypes.func,
  config: PropTypes.object,
  renderAction: PropTypes.func,
};

export default Chat;
