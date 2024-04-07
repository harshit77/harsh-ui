import React from "react";
import Tag from "../../lib/components/Tag";

import { Check, DeleteFilledOn, CancelClear } from "../../lib/icons";

const ICONS = {
  Check: <Check />,
  DeleteFilledOn: <DeleteFilledOn />,
  CancelClear: <CancelClear />,
};

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    icon: {
      control: "select",
      options: [undefined, ...Object.keys(ICONS)],
      mapping: { undefined, ...ICONS },
    },
    onClose: {
      control: "boolean",
    },
  },
  parameters: {
    docs: {
      description: {
        component: '`import { Tag } from "harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "HarshUI",
  variant: "primary",
  onClose: undefined,
};

Default.argTypes = Tag.Props;

export const CustomStylingText = Template.bind({});

CustomStylingText.args = {
  children: (
    <div>
      <span style={{ color: "white" }}>DataCenter: </span>IBM
    </div>
  ),
  variant: "primary",
  onClose: undefined,
};

export const Size = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
      <div>
        <Tag size="small">Small</Tag>
      </div>
      <div>
        <Tag size="medium">Medium</Tag>
      </div>
      <div>
        <Tag size="large">large</Tag>
      </div>
    </div>
  );
};

export const Variants = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
      <div>
        <Tag variant="primary">HarshUI</Tag>
      </div>
      <div>
        <Tag variant="success">IBM</Tag>
      </div>

      <div>
        <Tag variant="info">Phase 3</Tag>
      </div>

      <div>
        <Tag variant="warning">InProgress</Tag>
      </div>
      <div>
        <Tag variant="error">Failed</Tag>
      </div>
      <div>
        <Tag variant="secondary">Disconnected</Tag>
      </div>
    </div>
  );
};

export const Types = ({}) => {
  return (
    <div
      style={{
        margin: "4px 0",
        gap: 20,
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div>
        <h5 style={{ margin: 4, textTransform: "capitalize" }}>Outline</h5>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Tag type="outline" variant="primary">
            Primary
          </Tag>
          <Tag type="outline" variant="secondary">
            Secondary
          </Tag>
          <Tag type="outline" variant="info">
            Info
          </Tag>
          <Tag type="outline" variant="success">
            Success
          </Tag>
          <Tag type="outline" variant="warning">
            Warning
          </Tag>
          <Tag type="outline" variant="error">
            Error
          </Tag>
        </div>
      </div>
      <div>
        <h5 style={{ margin: 4, textTransform: "capitalize" }}>Solid</h5>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Tag type="solid" variant="primary">
            Primary
          </Tag>
          <Tag type="solid" variant="secondary">
            Secondary
          </Tag>
          <Tag type="solid" variant="info">
            Info
          </Tag>
          <Tag type="solid" variant="success">
            Success
          </Tag>
          <Tag type="solid" variant="warning">
            Warning
          </Tag>
          <Tag type="solid" variant="error">
            Error
          </Tag>
        </div>
      </div>
    </div>
  );
};
