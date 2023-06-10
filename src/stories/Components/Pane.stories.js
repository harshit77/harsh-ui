import React, { useState } from "react";

import { Button, Input, Pane, Typography } from "../../lib/components";

export default {
  title: "Overlays/Pane",
  component: Pane,
  parameters: {
    docs: {
      description: {
        component: '`import { Pane } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = (args) => {
  const [showPane, setShowPane] = useState(false);
  return (
    <>
      <Button onClick={() => setShowPane((prev) => !prev)} label="Show Pane" />
      <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <Typography component="body1">Pane Header</Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography component="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Pane.Body>
      </Pane>
    </>
  );
};

export const CustomHeader = (args) => {
  const [showPane, setShowPane] = useState(false);
  return (
    <>
      <Button onClick={() => setShowPane((prev) => !prev)} label="Show Pane" />
      <Pane
        isOpen={showPane}
        onClose={() => setShowPane(false)}
        className="customClass"
      >
        <Pane.Header>
          <Typography component="body1">Pane Header</Typography>
          <Input />
        </Pane.Header>
        <Pane.Body>
          <Typography component="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Pane.Body>
      </Pane>
    </>
  );
};
