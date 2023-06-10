import React, { useState } from "react";
import DateCalender from "../../lib/components/DateCalender";

export default {
  title: "Components/DateCalender",
  component: DateCalender,
  parameters: {
    docs: {
      description: {
        component: '`import { DateCalender } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = (args) => {
  const [date, setDate] = useState("");
  return (
    <>
      <DateCalender
        label="Date"
        onChange={(date) => setDate(date)}
        value={date}
        variant="primary"
        placeholder="Select Date"
      />
    </>
  );
};

export const Sizes = (args) => {
  const [date, setDate] = useState("");
  return (
    <>
      <DateCalender
        label="Date"
        onChange={(date) => setDate(date)}
        value={date}
        size="small"
        variant="primary"
      />
      <DateCalender
        label="Date"
        onChange={(date) => setDate(date)}
        value={date}
        size="medium"
        variant="primary"
      />
      <DateCalender
        label="Date"
        onChange={(date) => setDate(date)}
        value={date}
        size="large"
        variant="primary"
      />
    </>
  );
};

export const DisabledDate = (args) => {
  return <DateCalender label="Disabled Date" variant="primary" disabled />
};

export const DateTime = (args) => {
  const [dateTime, setDateTime] = useState("");
  return (
    <DateCalender
      label="Date Time"
      withTime={true}
      onChange={(date) => setDateTime(date)}
      value={dateTime}
      variant="primary"
    />
  );
};

export const DateWithError = (args) => {
  const [date, setDate] = useState("");
  return (
    <>
      <DateCalender
        label="Date"
        onChange={(date) => setDate(date)}
        value={date}
        variant="primary"
        placeholder="Select Date"
        error="Required"
      />
    </>
  );
};

const listItems = [
  { label: "(GMT-11:00) Midway Island, Samoa", value: "-11" },
  { label: "(GMT-10:00) Hawaii", value: "-10" },
  { label: "(GMT-09:00) Alaska", value: "-9" },
];

export const DateDropdown = (args) => {
  const [dateTime, setDateTime] = useState("");
  const [dropdownValue, setDropdownValue] = useState("Timezone");

  return (
    <DateCalender
      label="Date Time"
      withTime={true}
      onChange={(date) => setDateTime(date)}
      value={dateTime}
      variant="dateWithDropdown"
      secondDropdownValue={dropdownValue}
      onSecondDropdownCloseSelect={(e, instance) => {
        setDropdownValue(e.target.id);
        instance.hide();
      }}
      secondDropdownLabel="Timezone"
      listItems={listItems}
    />
  );
};

export const DateInput = (args) => {
  const [dateTime, setDateTime] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <DateCalender
      label="Date Time"
      withTime={true}
      onChange={(date) => setDateTime(date)}
      value={dateTime}
      variant="dateWithInput"
      secondInputValue={inputValue}
      secondInputLabel="Timezone"
      onSecondInputChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export const InputInput = (args) => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  return (
    <DateCalender
      variant="inputWithInput"
      inputValue={inputValue1}
      inputLabel="Input 1"
      secondInputLabel="Input 2"
      onInputChange={(e) => setInputValue1(e.target.value)}
      secondInputValue={inputValue2}
      onSecondInputChange={(e) => setInputValue2(e.target.value)}
    />
  );
};

export const DropdownDropdown = (args) => {
  const [dropdownValue1, setDropdownValue1] = useState("Timezone 1");
  const [dropdownValue2, setDropdownValue2] = useState("Timezone 2");
  return (
    <DateCalender
      variant="dropdownWithDropdown"
      dropdownValue={dropdownValue1}
      dropdownLabel="Dropdown 1"
      secondDropdownLabel="Dropdown 2"
      onDropdownCloseSelect={(e, instance) => {
        setDropdownValue1(e.target.id);
        instance.hide();
      }}
      secondDropdownValue={dropdownValue2}
      onSecondDropdownCloseSelect={(e, instance) => {
        setDropdownValue2(e.target.id);
        instance.hide();
      }}
      listItems={listItems}
      secondListItems={listItems}
    />
  );
};

export const DateRange = (args) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <DateCalender
      label="Start Date"
      secondLabel="End Date"
      placeholder="From"
      secondPlaceholder="To"
      withTime={false}
      variant="dateRange"
      startDate={startDate}
      endDate={endDate}
      maxDate={endDate && endDate}
      endMinDate={startDate && startDate}
      onChange={(date) => setStartDate(date)}
      onEndDateChange={(date) => setEndDate(date)}
    />
  );
};

export const DisabledDateRange = (args) => {
  return (
    <DateCalender
      label="Start Date"
      secondLabel="End Date"
      placeholder="From"
      secondPlaceholder="To"
      variant="dateRange"
      disabled
      secondDisabled
    />
  );
};

export const DateRangeWithError = (args) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <DateCalender
      label="Start Date"
      secondLabel="End Date"
      placeholder="From"
      secondPlaceholder="To"
      withTime={false}
      variant="dateRange"
      startDate={startDate}
      endDate={endDate}
      maxDate={endDate && endDate}
      endMinDate={startDate && startDate}
      onChange={(date) => setStartDate(date)}
      onEndDateChange={(date) => setEndDate(date)}
      error
      endDateError
    />
  );
};

export const DateRangeWithTime = (args) => {
  const [startDateTime, setStartDateTime] = useState(null);
  const [endDateTime, setEndDateTime] = useState(null);

  return (
    <DateCalender
      label="Start Date"
      secondLabel="End Date"
      placeholder="From"
      secondPlaceholder="To"
      withTime={true}
      variant="dateRange"
      startDate={startDateTime}
      endDate={endDateTime}
      maxDate={endDateTime && endDateTime}
      endMinDate={startDateTime && startDateTime}
      onChange={(date) => setStartDateTime(date)}
      onEndDateChange={(date) => setEndDateTime(date)}
    />
  );
};

Default.argTypes = DateCalender.props;
