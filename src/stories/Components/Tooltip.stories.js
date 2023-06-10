import React, { forwardRef } from "react";

import { Button, Tooltip, Typography } from "../../lib/components";

export default {
  title: "Overlays/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: '`import { Tooltip } from "harsh-ui/index"`',
      },
    },
  },
};

export const FollowCursor = (args) => {
  return (
    <div style={{ margin: "40px 0 0 20px" }}>
      <Tooltip
        position="top"
        followCursor={"horizontal"}
        content={"Content is string"}
        {...args}
      >
        <Button label="Follow cursor" variant="secondary" />
      </Tooltip>
    </div>
  );
};
FollowCursor.storyName = "Follow cursor";

export const JSXContentInside = (args) => {
  return (
    <Tooltip
      position="right"
      trigger={"click"}
      content={
        <span>
          Content is a <b>JSX</b> <u>Element</u>
        </span>
      }
      right
      {...args}
    >
      <Button variant="secondary" label="On click" />
    </Tooltip>
  );
};
JSXContentInside.storyName = "JSX content inside";

export const positions = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <Tooltip position="top" content="Tooltip">
          <Button variant="secondary" label="top" />
        </Tooltip>
        <Tooltip position="top-start" content="Tooltip">
          <Button variant="secondary" label="top-start" />
        </Tooltip>
        <Tooltip position="top-end" content="Tooltip">
          <Button variant="secondary" label="top-end" />
        </Tooltip>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <Tooltip position="right" content="Tooltip">
          <Button variant="secondary" label="right" />
        </Tooltip>
        <Tooltip position="right-start" content="Tooltip">
          <Button variant="secondary" label="right-start" />
        </Tooltip>
        <Tooltip position="right-end" content="Tooltip">
          <Button variant="secondary" label="right-end" />
        </Tooltip>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <Tooltip position="bottom" content="Tooltip">
          <Button variant="secondary" label="bottom" />
        </Tooltip>
        <Tooltip position="bottom-start" content="Tooltip">
          <Button variant="secondary" label="bottom-start" />
        </Tooltip>
        <Tooltip position="bottom-end" content="Tooltip">
          <Button variant="secondary" label="bottom-end" />
        </Tooltip>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <Tooltip position="left" content="Tooltip">
          <Button variant="secondary" label="left" />
        </Tooltip>
        <Tooltip position="left-start" content="Tooltip">
          <Button variant="secondary" label="left-start" />
        </Tooltip>
        <Tooltip position="left-end" content="Tooltip">
          <Button variant="secondary" label="left-end" />
        </Tooltip>
      </div>
    </div>
  );
};

export const TooltipOnText = () => {
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        flexDirection: "row",
        gap: 20,
        marginTop: 40,
      }}
    >
      <Tooltip position="top" content="Tooltip">
        <Typography>Top</Typography>
      </Tooltip>
      <Tooltip position="bottom" content="Tooltip">
        <Typography>Bottom</Typography>
      </Tooltip>
      <Tooltip position="left" content="Tooltip">
        <Typography>Left</Typography>
      </Tooltip>
      <Tooltip position="right" content="Tooltip">
        <Typography>Right</Typography>
      </Tooltip>
    </div>
  );
};
TooltipOnText.storyName = "Tooltip on text";

export const TooltipOnCustomComponent = () => {
  const CustomComponent = forwardRef(({ text }, ref) => (
    <div ref={ref}>{text}</div>
  ));
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        flexDirection: "row",
        gap: 20,
        marginTop: 40,
      }}
    >
      <Tooltip position="top" content="Tooltip">
        <CustomComponent text="Custom component" />
      </Tooltip>
    </div>
  );
};
TooltipOnCustomComponent.storyName = "Tooltip on custom component";
