import React, { useState } from "react";
import ToggleButtonGroup from "../../lib/components/ToggleButtonGroup";

export default {
  title: "Components/ToggleButtonGroup",
  component: ToggleButtonGroup,
  parameters: {
    docs: {
      description: {
        component: '`import { ToggleButtonGroup } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = (args) => {
  return (
    <ToggleButtonGroup label="View as">
      <ToggleButtonGroup.ToggleButton>List</ToggleButtonGroup.ToggleButton>
      <ToggleButtonGroup.ToggleButton>Map</ToggleButtonGroup.ToggleButton>
    </ToggleButtonGroup>
  );
};

export const ControlledToggleButtonGroup = (args) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (event) => setActiveTab(Number(event.target.id));

  return (
    <ToggleButtonGroup
      active={activeTab}
      label="View as"
      onChange={handleActiveTab}
    >
      <ToggleButtonGroup.ToggleButton id="0">
        List
      </ToggleButtonGroup.ToggleButton>
      <ToggleButtonGroup.ToggleButton id="1">
        Map
      </ToggleButtonGroup.ToggleButton>
    </ToggleButtonGroup>
  );
};
