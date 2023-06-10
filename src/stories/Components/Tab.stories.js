import React, { useState } from "react";
import Tab from "../../lib/components/Tab";
import { Chat, Comment, FileUpload } from "../../lib/icons";

export default {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    docs: {
      description: {
        component: '`import { Tab } from "@harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => (
  <Tab {...args}>
    <Tab.Item active={true}>Label</Tab.Item>
    <Tab.Item>Label</Tab.Item>
  </Tab>
);

export const Default = Template.bind({});
Default.args = Tab.props;

export const Sizes = ({}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <Tab>
      <Tab.Item active>Small</Tab.Item>
      <Tab.Item>Small</Tab.Item>
    </Tab>

    <Tab size="large">
      <Tab.Item active>Large</Tab.Item>
      <Tab.Item>Large</Tab.Item>
    </Tab>
  </div>
);

export const WithIcon = ({}) => {
  return (
    <Tab>
      <Tab.Item active icon={<Chat />}>
        Label
      </Tab.Item>
      <Tab.Item icon={<Comment />}>Label</Tab.Item>
      <Tab.Item icon={<FileUpload />}>Label</Tab.Item>
    </Tab>
  );
};
WithIcon.storyName = "With icon";

export const WithoutUnderline = () => {
  return (
    <Tab noUnderline>
      <Tab.Item>Golden Image & Application</Tab.Item>
      <Tab.Item>Published Apps</Tab.Item>
      <Tab.Item>Desktop Pools</Tab.Item>
      <Tab.Item active>Desktop</Tab.Item>
      <Tab.Item>Template</Tab.Item>
      <Tab.Item>User Sessions</Tab.Item>
      <Tab.Item>Entitlements</Tab.Item>
    </Tab>
  );
};

WithoutUnderline.storyName = "Without underline";

export const MultipleItems = () => {
  const [tab, setTab] = useState("label1");
  return (
    <Tab>
      <Tab.Item active={tab === "label1"} onClick={() => setTab("label1")}>
        Label 1
      </Tab.Item>
      <Tab.Item active={tab === "label2"} onClick={() => setTab("label2")}>
        Label 2
      </Tab.Item>
      <Tab.Item active={tab === "label3"} onClick={() => setTab("label3")}>
        Label 3
      </Tab.Item>
    </Tab>
  );
};
MultipleItems.storyName = "Multiple items with onClick";

export const TabWithTile = () => {
  const [tab, setTab] = useState(0);
  return (
    <Tab tile>
      <Tab.Item active={tab === 0} onClick={() => setTab(0)}>
        All
      </Tab.Item>
      <Tab.Item active={tab === 1} onClick={() => setTab(1)}>
        Discussion
      </Tab.Item>
      <Tab.Item active={tab === 2} onClick={() => setTab(2)}>
        Internal
      </Tab.Item>
      <Tab.Item active={tab === 3} onClick={() => setTab(3)}>
        Resolution
      </Tab.Item>
    </Tab>
  );
};

TabWithTile.storyName = "Tab with tile view";

export const TabWithSeparatedTile = () => {
  const [tab, setTab] = useState(0);
  return (
    <Tab separatedTile>
      <Tab.Item active={tab === 0} onClick={() => setTab(0)}>
        All
      </Tab.Item>
      <Tab.Item active={tab === 1} onClick={() => setTab(1)}>
        Discussion
      </Tab.Item>
      <Tab.Item active={tab === 2} onClick={() => setTab(2)}>
        Internal
      </Tab.Item>
      <Tab.Item active={tab === 3} onClick={() => setTab(3)}>
        Resolution
      </Tab.Item>
    </Tab>
  );
};

TabWithSeparatedTile.storyName = "Tab with separated tile view";
