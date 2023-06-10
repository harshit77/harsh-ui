import React from "react";
import Button from "../../lib/components/Button";
import { Check, DeleteFilledOn, CancelClear, Download } from "../../lib/icons";

const ICONS = {
  Check: <Check />,
  DeleteFilledOn: <DeleteFilledOn />,
  CancelClear: <CancelClear />,
};

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '`import { Button } from "harsh-ui/index"`',
      },
    },
  },
  argTypes: {
    variant: { control: "select" },
    icon: {
      control: "select",
      options: [undefined, ...Object.keys(ICONS)],
      mapping: { undefined, ...ICONS },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  size: "small",
  label: "Button",
};
Default.argTypes = Button.props;

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "primary",
  size: "small",
  label: "Button",
  disabled: true,
};

export const Size = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
      <div>
        <Button size="small" label="Small" />
      </div>
      <div>
        <Button size="medium" label="Medium" />
      </div>
      <div>
        <Button size="large" label="Large" />
      </div>
    </div>
  );
};

export const Variants = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
      <div>
        <Button label="Primary" variant="primary" />
      </div>
      <div>
        <Button label="Secondary" variant="secondary" />
      </div>
      <div>
        <Button label="Text" variant="text" />
      </div>
      <div>
        <Button label="Delete" variant="danger" />
      </div>
      <div>
        <Button label="Delete" variant="solidLinked" />
      </div>
      <div>
        <Button
          iconPosition="left"
          icon={<Check />}
          label="Advance Filter"
          variant="solidGrayed"
        />
      </div>
    </div>
  );
};

export const IconButtons = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
      <div>
        <Button label="Button" variant="primary" icon={<DeleteFilledOn />} />
      </div>
      <div>
        <Button
          label="Button"
          variant="primary"
          icon={<Check />}
          iconPosition="left"
        />
      </div>
      <div>
        <Button icon={<CancelClear />} />
      </div>
      <div>
        <Button
          label="Button"
          variant="primary"
          icon={<Download />}
          iconPosition="left"
        />
      </div>
    </div>
  );
};
IconButtons.storyName = "Icon buttons";
