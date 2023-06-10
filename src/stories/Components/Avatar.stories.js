import React from "react";
import { ActionDropdown } from "../../lib/components";
import Avatar from "../../lib/components/Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: '`import { Avatar } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: 150,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Avatar size="small" user={{ name: "VW" }} />
        <Avatar size="medium" user={{ name: "VW" }} />
        <Avatar size="large" user={{ name: "VW" }} />
      </div>
      <div
        style={{
          width: 150,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Avatar size="small" variant="secondary" user={{ name: "10" }} />
        <Avatar size="medium" variant="secondary" user={{ name: "10" }} />
        <Avatar size="large" variant="secondary" user={{ name: "10" }} />
      </div>
    </div>
  );
};
