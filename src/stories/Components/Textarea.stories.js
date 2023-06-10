import React from "react";
import { Textarea } from "../../lib/components";

export default {
  title: "Components/Textarea",
  components: Textarea,
  parameters: {
    docs: {
      description: {
        component: '`import { Textarea } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = () => {
  return <Textarea label="Textarea Label" autoFocus />;
};

export const Disabled = () => {
  return (
    <Textarea label="Textarea Label" value="Its a disabled textarea" disabled />
  );
};

export const CustomRows = () => {
  return <Textarea label="Textarea Label" autoFocus rows={10} />;
};

export const Error = () => {
  return <Textarea label="Textarea Label" rows={10} error />;
};

export const ErrorWithMessage = () => {
  return (
    <Textarea
      label="Textarea Label"
      value="&%%%%%*****###"
      rows={10}
      error="It's a not valid description"
    />
  );
};

export const MaxLength = () => {
  return <Textarea label="Textarea Label" rows={10} maxLength="10" />;
};
