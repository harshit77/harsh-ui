import React from "react";
import {
  Bold,
  Italic,
  StrikeThrough,
  CodeView,
  Undo,
  Redo,
  Link,
  Unlink,
  ImageManager,
  ClearFormatting,
  FontAwesome,
  Fullscreen,
  Underline,
} from "../../icons";

const DEFAULT_CONFIG = {
  toolbar: [
    {
      name: "document",
      items: ["Source", "-", "Undo", "Redo"],
    },
    {
      name: "basicstyles",
      items: ["Bold", "Italic", "RemoveFormat", "Strike"],
    },
    {
      name: "links",
      items: ["Link", "Unlink", "Anchor"],
    },
    {
      name: "insert",
      items: ["Image"],
    },
    {
      name: "tools",
      items: ["Maximize"],
    },
  ],
  height: "360px",
  resize_enabled: false,
  removeButtons: "Anchor",
};

const CHAT_DEFAULT_CONFIG = {
  toolbar: [
    {
      name: "basicstyles",
      items: ["Bold", "Italic", "Underline", "Strike"],
    },
  ],
  height: "100px",
  toolbarLocation: "bottom",
  placeholder: "Write a comment",
  resize_enabled: false,
  removeButtons: "Anchor",
  editorplaceholder: "Type something here...",
};

const ALL_PLUGINS = [
  {
    id: "source",
    component: <CodeView width="18" height="18" />,
  },
  {
    id: "undo",
    component: <Undo width="18" height="18" />,
  },
  {
    id: "redo",
    component: <Redo width="18" height="18" />,
  },
  {
    id: "bold",
    component: <Bold width="18" height="18" />,
  },
  {
    id: "italic",
    component: <Italic width="18" height="18" />,
  },
  {
    id: "strike",
    component: <StrikeThrough width="18" height="18" />,
  },
  {
    id: "underline",
    component: <Underline width="18" height="18" />,
  },
  {
    id: "link",
    component: <Link width="18" height="18" />,
  },
  {
    id: "unlink",
    component: <Unlink width="18" height="18" />,
  },
  {
    id: "anchor",
    component: <FontAwesome width="18" height="18" />,
  },
  {
    id: "image",
    component: <ImageManager width="18" height="18" />,
  },
  {
    id: "removeformat",
    component: <ClearFormatting width="18" height="18" />,
  },
  {
    id: "maximize",
    component: <Fullscreen width="18" height="18" />,
  },
];

export { DEFAULT_CONFIG, ALL_PLUGINS, CHAT_DEFAULT_CONFIG };
