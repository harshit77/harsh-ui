import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Basic from "./Basic";
import Chat from "./Chat";
import { ALL_PLUGINS } from "./config";
import Typography from "../Typography";

const TYPE = {
  chat: "chat",
  basic: "basic",
};

const DizzionEditor = ({
  preview = false,
  selectedPage = 1,
  setSelectedPage,
  pages,
  onUpdatePage,
  config,
  type = TYPE.basic,
  renderAction,
}) => {
  return (
    <div className="harsh-ui-editor__container">
      <div
        className={classnames("harsh-ui-editor", {
          "harsh-ui-editor--preview": preview,
          "harsh-ui-editor--chat": TYPE.chat === type,
        })}
      >
        {type === TYPE.basic && (
          <Basic
            preview={preview}
            selectedPage={selectedPage}
            pages={pages}
            onUpdatePage={onUpdatePage}
            config={config}
            setSelectedPage={setSelectedPage}
          />
        )}
        {type === TYPE.chat && (
          <Chat
            onUpdatePage={onUpdatePage}
            config={config}
            renderAction={renderAction}
          />
        )}
        {ALL_PLUGINS.map((plugin) => (
          <div id={`${plugin.id}_icon`} className="custom_plugin">
            {plugin.component}
          </div>
        ))}
      </div>
      {type === TYPE.basic && pages[selectedPage - 1].error && (
        <Typography
          component="body3"
          className="harsh-ui-editor__error-message"
        >
          {pages[selectedPage - 1].error}
        </Typography>
      )}
    </div>
  );
};

DizzionEditor.propTypes = {
  preview: PropTypes.bool,
  selectedPage: PropTypes.number,
  setSelectedPage: PropTypes.func,
  pages: PropTypes.array,
  onUpdatePage: PropTypes.func,
};

export default DizzionEditor;
