import React from "react";

import Typography from "../../lib/components/Typography";

export default {
  title: "Base/Typography",
  component: Typography,
  parameters: {
    docs: {
      desciption: {
        component: '`import { Typography } from "harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => <Typography {...args}>Typography</Typography>;

export const Default = Template.bind({});

Default.args = {
  component: "h1",
};

Default.argTypes = Typography.props;

export const Heading14 = Template.bind({});
Heading14.args = {
  component: "h1-4",
};
Heading14.storyName = "Version 4 of h1";

export const Heading13 = Template.bind({});
Heading13.args = {
  component: "h1-3",
};
Heading13.storyName = "Version 3 of h1";

export const Heading12 = Template.bind({});
Heading12.args = {
  component: "h1-2",
};

Heading12.storyName = "Version 2 of h1";

export const Heading11 = Template.bind({});
Heading11.args = {
  component: "h1-1",
};

Heading11.storyName = "Version 1 of h1";

export const Heading1 = Template.bind({});
Heading1.args = {
  component: "h1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  component: "h2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  component: "h3",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  component: "h4",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  component: "h5",
};

export const Body1 = Template.bind({});
Body1.args = {
  component: "body1",
};

export const Body2 = Template.bind({});
Body2.args = {
  component: "body2",
};

export const Body3 = Template.bind({});
Body3.args = {
  component: "body3",
};

export const Family = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Typography component="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur - 16px (FontFamily-Regular)
      </Typography>
      <Typography component="body1" family="medium">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur - 16px (FontFamily-Medium)
      </Typography>
      <Typography component="body1" family="semibold">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur - 16px (FontFamily-SemiBold)
      </Typography>
    </div>
  );
};

export const Variants = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Typography component="h1-4">h1-4. Heading - 46px</Typography>
      <Typography component="h1-3">h1-3. Heading - 40px</Typography>
      <Typography component="h1-2">h1-2. Heading - 36px</Typography>
      <Typography component="h1">h1. Heading - 32px</Typography>
      <Typography component="h1-1">h1-1. Heading - 28px</Typography>
      <Typography component="h2">h2. Heading - 24px</Typography>
      <Typography component="h3-1">h3-1. Heading - 18px</Typography>
      <Typography component="h3">h3. Heading - 20px</Typography>
      <Typography component="h4">h4. Heading - 16px</Typography>
      <Typography component="h5">h5. Heading - 14px</Typography>
      <Typography component="h6">h6. Heading - 12px</Typography>
      <Typography component="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur - 16px
      </Typography>
      <div>
        <Typography component="body2">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur - 14px
        </Typography>
      </div>
      <div>
        <Typography component="body3">
          body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur - 12px
        </Typography>
      </div>
    </div>
  );
};
