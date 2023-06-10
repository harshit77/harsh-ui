import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DizzionEditor,
  Typography,
} from "../../lib/components";
import { Add } from "../../lib/icons";

export default {
  title: "Components/DizzionEditor",
  component: DizzionEditor,
  parameters: {
    docs: {
      description: {
        component: '`import { DizzionEditor } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = (args) => {
  const [pages, setPages] = useState([{ id: 1, content: "" }]);
  const [selectedPage, setSelectedPage] = useState(1);

  const addPage = () => {
    setPages((prevPages) => [
      ...prevPages,
      { id: pages.length + 1, content: "" },
    ]);
    setSelectedPage(pages.length + 1);
  };

  return (
    <DizzionEditor
      pages={pages}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      onUpdatePage={(pages) => setPages(pages)}
    />
  );
};

export const DizzionEditorWithPreview = (args) => {
  const [pages, setPages] = useState([{ id: 1, content: "" }]);
  const [selectedPage, setSelectedPage] = useState(1);

  const addPage = () => {
    setPages((prevPages) => [
      ...prevPages,
      { id: pages.length + 1, content: "" },
    ]);
    setSelectedPage(pages.length + 1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "20px 0",
        }}
      >
        <Button
          label="Add Page"
          variant="link"
          onClick={addPage}
          icon={<Add />}
          iconPosition="left"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <DizzionEditor
          pages={pages}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          preview
          onUpdatePage={(pages) => setPages(pages)}
        />
        <Typography>
          Note: As Storybook itself having an issue with Mutation observer you
          wont see the correct theme color but inactual application we have
          verified it and it is working fine
        </Typography>
      </div>
    </div>
  );
};

export const ChatEditor = (args) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <DizzionEditor
        type="chat"
        onUpdatePage={(content) => console.log(content)}
      />
      <Typography>
        Note: As Storybook itself having an issue with Mutation observer you
        wont see the correct theme color but inactual application we have
        verified it and it is working fine
      </Typography>
    </div>
  );
};

export const ChatEditorWithCustomActionButton = (args) => {
  const listItems = ["Close incident", "Update converstion customer"];
  const getUpdatedAction = (instance, onUpdateAction) => {
    instance.hide();
    onUpdateAction();
  };

  const renderAction = (onUpdateAction) => {
    return (
      <Dropdown
        defaultValue="Action"
        buttonProps={{
          variant: "dropdownAction",
          style: { width: 120, bottom: -3 },
        }}
        onCloseSelect={(e, instance) =>
          getUpdatedAction(instance, onUpdateAction)
        }
      >
        <Dropdown.Menu>
          {listItems.map((item) => (
            <Dropdown.MenuItem id={item}>{item}</Dropdown.MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DizzionEditor
        type="chat"
        renderAction={renderAction}
        onUpdatePage={(content) => console.log(content)}
      />
      <Typography>
        Note: As Storybook itself having an issue with Mutation observer you
        wont see the correct theme color but inactual application we have
        verified it and it is working fine
      </Typography>
    </div>
  );
};

export const DizzionEditorPrefilled = (args) => {
  const [pages, setPages] = useState([
    { id: 1, content: "Page Number 1" },
    { id: 2, content: "Page Number 2" },
  ]);
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <DizzionEditor
        pages={pages}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        onUpdatePage={(pages) => setPages(pages)}
      />
      <Typography>
        Note: As Storybook itself having an issue with Mutation observer you
        wont see the correct theme color but inactual application we have
        verified it and it is working fine
      </Typography>
    </div>
  );
};

export const DizzionEditorError = (args) => {
  const [pages, setPages] = useState([
    { id: 1, content: "Page Number 1", error: "Write Some content" },
  ]);
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <DizzionEditor
        pages={pages}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        onUpdatePage={(pages) => setPages(pages)}
      />
      <Typography>
        Note: As Storybook itself having an issue with Mutation observer you
        wont see the correct theme color but inactual application we have
        verified it and it is working fine
      </Typography>
    </div>
  );
};
