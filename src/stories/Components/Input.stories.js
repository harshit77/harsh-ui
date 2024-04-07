import React, { useState } from "react";
import Input from "../../lib/components/Input";
import Dropdown from "../../lib/components/Dropdown";
import { within, expect, userEvent, fn } from "@storybook/test";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: '`import { Input } from "harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "InputLabel",
  placeholder: "Input Placeholder",
  autoFocus: true,
};

Default.play= async({canvasElement})=>{
  const canvas= within(canvasElement);
  const placeholderElement= canvas.getByPlaceholderText("Input Placeholder");
  expect(placeholderElement).toBeInTheDocument();
}

export const Disabled = Template.bind({});
Disabled.args = {
  label: "InputLabel",
  value: "Its a disabled input",
  disabled: true,
};

const CountryCode = [
  { value: "+1", viewValue: "US" },
  { value: "+2", viewValue: "CA" },
  { value: "+91", viewValue: "INR" },
];

export const Sizes = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Input label="Small Input" size="small" placeholder="small" />
      <Input label="Medium Input" size="medium" />
      <Input label="Large Input" size="large" />
    </div>
  );
};

export const Controlled = Template.bind({});
Controlled.args = {
  label: "InputLabel",
  placeholder: "Input Placeholder",
  onChange:fn(),
};

Controlled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const placeholderElement = canvas.getByPlaceholderText("Input Placeholder");
  await userEvent.type(placeholderElement, "HarshUI", {
    delay: 500,
  });
  expect(placeholderElement).toHaveDisplayValue("HarshUI")
};

export const ControlledSufix = (args) => {
  const [value, setValue] = useState("HarshUI");
  return (
    <Input
      label="ControlledInput"
      suffix={<div>.HarshUI.com</div>}
      onChange={(e) => setValue(e.target.value + ".HarshUI.com")}
    />
  );
};

export const PublicUrl = (args) => {
  const [value, setValue] = useState("HarshUI");
  return (
    <Input
      label="ControlledInput"
      suffix={<div>.HarshUI.com</div>}
      onChange={(e) => setValue(e.target.value + ".HarshUI.com")}
      placeholder="CIDR"
    />
  );
};

export const InputWithDropdownOnly = (args) => {
  const [value, setValue] = useState("HarshUI");
  const { Menu, MenuItem, Divider } = Dropdown;
  return (
    <Input
      label="ControlledInput"
      prefix={
        <Dropdown defaultValue="US" buttonProps={{ variant: "dropdown" }}>
          <Menu>
            {CountryCode.map((item, index) => (
              <React.Fragment key={item.value}>
                <MenuItem id={item.value}>{item.viewValue}</MenuItem>
                {index !== CountryCode.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Menu>
        </Dropdown>
      }
      onChange={(e) => setValue(e.target.value)}
      placeholder="Phone Number"
    />
  );
};

export const InputWithCountryCode = (args) => {
  const [value, setValue] = useState("");
  const [currentCountryCode, setCurrentCountryCode] = useState("1");

  const handleCountryCodeChange = (selectedCountry) => {
    setCurrentCountryCode(selectedCountry[2]);
    setValue("");
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue) {
      const countryCodeWithFormat =
        inputValue.length === 1 ? `+${currentCountryCode}` : inputValue;
      const getPhoneNumberOnly = inputValue.includes(countryCodeWithFormat);
      const updateValue = !getPhoneNumberOnly
        ? `${countryCodeWithFormat}${inputValue}`
        : inputValue === `+${currentCountryCode}`
          ? ""
          : inputValue;
      setValue(updateValue);
    }
  };
  return (
    <Input
      label="ControlledInput"
      value={value}
      countryCode
      onChangeCountryCode={handleCountryCodeChange}
      onChange={handleChange}
      placeholder="Enter Phone number"
    />
  );
};

export const SaleAmount = (args) => {
  const [value, setValue] = useState(1000);
  return (
    <Input
      label="ControlledInput"
      amount
      value={value}
      suffix={<div>USD</div>}
      onChange={(e) => setValue(e.target.value)}
      placeholder="1000"
      autoFocus
      disabled
    />
  );
};

export const ControlledWithSuffix = (args) => {
  const [value, setValue] = useState("HarshUI");
  return (
    <Input
      label="ControlledInput"
      value={value}
      suffix={<div>USD</div>}
      onChange={(e) => setValue(e.target.value)}
      placeholder="ControlledWithSuffix"
    />
  );
};

export const SearchInput = (args) => {
  const [value, setValue] = useState("HarshUI");
  return (
    <Input
      value={value}
      search
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search Input"
    />
  );
};

export const HelpText = (args) => {
  const [value, setValue] = useState("HarshUI");
  return (
    <Input
      label="Email"
      value={value}
      onChange={(e) => setValue(e.target.value + ".HarshUI.com")}
      placeholder="example@gmail.com"
      helpText="Please make sure you provide gmail id only"
    />
  );
};

export const ControlledWithError = (args) => {
  const [value, setValue] = useState("HarshUI");
  return (
    <Input
      label="Gateway*"
      value={value}
      error
      onChange={(e) => setValue(e.target.value)}
      placeholder="Error"
    />
  );
};

export const PhoneNumberWithError = (args) => {
  const [value, setValue] = useState("HarshUI");
  const { Menu, MenuItem, Divider } = Dropdown;
  return (
    <Input
      label="ControlledInput"
      error="Phone number should be 10 digits plus country code, e.g. +1XXXXXXXXXX"
      prefix={
        <Dropdown defaultValue="US" buttonProps={{ variant: "dropdown" }}>
          <Menu>
            {CountryCode.map((item, index) => (
              <React.Fragment key={item.value}>
                <MenuItem id={item.value}>{item.viewValue}</MenuItem>
                {index !== CountryCode.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Menu>
        </Dropdown>
      }
      onChange={(e) => setValue(e.target.value)}
      placeholder="Phone Number"
    />
  );
};
