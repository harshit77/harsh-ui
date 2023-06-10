import React, { useState } from "react";
import Switch from "../../lib/components/Switch";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: '`import { Switch } from "dizzion/index"`',
      },
    },
  },
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "",
  checked: true,
};

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch onChange={(e) => setChecked(e.target.checked)} checked={checked} />
  );
};

export const PrefixedSwitch = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      prefixed
      label="Prefixed Switch"
      onChange={(e) => setChecked(e.target.checked)}
      checked={checked}
    />
  );
};

export const PrefixedSwitchCustomClass = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      prefixed
      textClassName="customClass"
      label="Prefixed Switch"
      onChange={(e) => setChecked(e.target.checked)}
      checked={checked}
    />
  );
};

export const Variants = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  return (
    <>
      <Switch
        onChange={(e) => setChecked(e.target.checked)}
        checked={checked}
      />
      <div>
        <Switch label="Disabled" prefixed disabled />
      </div>
      <div>
        <Switch
          variant="primary"
          label="Primary"
          onChange={(e) => setChecked1(e.target.checked)}
          checked={checked1}
        />
      </div>
      <div>
        <Switch
          variant="secondary"
          label="Secondary"
          onChange={(e) => setChecked2(e.target.checked)}
          checked={checked2}
        />
      </div>
    </>
  );
};

export const Size = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  return (
    <>
      <div>
        <Switch
          label="Small"
          onChange={(e) => setChecked1(e.target.checked)}
          checked={checked1}
        />
      </div>
      <div>
        <Switch
          label="Medium"
          size="medium"
          onChange={(e) => setChecked2(e.target.checked)}
          checked={checked2}
        />
      </div>
    </>
  );
};
