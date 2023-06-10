import React, { useState } from "react";
import Checkbox from "../../lib/components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  subcomponents: {
    "Checkbox.Item": Checkbox.Item,
  },
  parameters: {
    docs: {
      description: {
        component: '`import { Checkbox } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = (args) => {
  return (
    <Checkbox label="Choose an option">
      <Checkbox.Item value="1" label="Option1" />
      <Checkbox.Item value="2" label="Option2" />
    </Checkbox>
  );
};

Default.argTypes = Checkbox.props;

export const CheckboxHorizontally = () => {
  return (
    <Checkbox label="Choose an option" horizontal>
      <Checkbox.Item value="1" label="Option1" />
      <Checkbox.Item value="2" label="Option2" />
    </Checkbox>
  );
};

export const ControlledCheckbox = (args) => {
  const [checkedValues, setCheckedValues] = useState([0]);

  const handleCheck = ({ target: { id } }) => {
    const selectedId = Number(id);
    const selectedCheckboxes = checkedValues;
    const findIdx = selectedCheckboxes.indexOf(selectedId);
    if (findIdx > -1) {
      selectedCheckboxes.splice(findIdx, 1);
    } else {
      selectedCheckboxes.push(selectedId);
    }
    setCheckedValues([...selectedCheckboxes]);
  };

  return (
    <Checkbox
      ids={checkedValues}
      label="Choose an option"
      onChange={handleCheck}
    >
      <Checkbox.Item value="1" label="Option1" />
      <Checkbox.Item value="2" label="Option2" />
    </Checkbox>
  );
};

export const ControlledCheckboxWithDisable = (args) => {
  const [checkedValues, setCheckedValues] = useState([0, 2]);

  const handleCheck = ({ target: { id } }) => {
    const selectedId = Number(id);
    const selectedCheckboxes = checkedValues;
    const findIdx = selectedCheckboxes.indexOf(selectedId);
    if (findIdx > -1) {
      selectedCheckboxes.splice(findIdx, 1);
    } else {
      selectedCheckboxes.push(selectedId);
    }
    setCheckedValues([...selectedCheckboxes]);
  };

  return (
    <Checkbox
      ids={checkedValues}
      label="Choose an option"
      onChange={handleCheck}
    >
      <Checkbox.Item value="1" label="Option1" />
      <Checkbox.Item value="2" label="Option2" />
      <Checkbox.Item value="3" label="Option3" disabled />
    </Checkbox>
  );
};
