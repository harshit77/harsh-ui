import React, { useState } from "react";
import RadioButton from "../../lib/components/RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  subcomponents: {
    "RadioButton.Item": RadioButton.Item,
  },
  parameters: {
    docs: {
      description: {
        component: '`import { RadioButton } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = (args) => {
  return (
    <RadioButton label="Choose an option">
      <RadioButton.Item value="1" label="Option1" />
      <RadioButton.Item value="2" label="Option2" />
    </RadioButton>
  );
};

export const RadioButtonHorizontally = () => {
  return (
    <RadioButton label="Choose an option" horizontal>
      <RadioButton.Item value="1" label="Option1" />
      <RadioButton.Item value="2" label="Option2" />
    </RadioButton>
  );
};

export const ControlledRadioButton = (args) => {
  const [checkedValue, setCheckedValue] = useState([1]);
  return (
    <RadioButton
      ids={checkedValue}
      label="Choose an option"
      onChange={(e) => setCheckedValue([Number(e.target.id)])}
    >
      <RadioButton.Item value="1" label="Option1" />
      <RadioButton.Item value="2" label="Option2" />
    </RadioButton>
  );
};

export const ControlledRadioButtonWithDisabledRadio = (args) => {
  const [checkedValue, setCheckedValue] = useState([1, 2]);
  return (
    <RadioButton
      ids={checkedValue}
      label="Choose an option"
      onChange={(e) => setCheckedValue([Number(e.target.id), 2])}
    >
      <RadioButton.Item value="1" label="Option1" />
      <RadioButton.Item value="2" label="Option2" />
      <RadioButton.Item value="3" label="Option3" disabled />
    </RadioButton>
  );
};
