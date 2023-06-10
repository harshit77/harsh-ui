import React, { useState, forwardRef } from "react";
import PropTypes, { bool } from "prop-types";
import { DateRange } from "../../icons";
import DatePicker from "react-datepicker";
import classnames from "classnames";
import Input from "../Input";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../Dropdown";

export const DATECALENDER_VARIANT = {
  primary: "primary",
  dateWithDropdown: "dateWithDropdown",
  dateWithInput: "dateWithInput",
  inputWithInput: "inputWithInput",
  dropdownWithDropdown: "dropdownWithDropdown",
  dateRange: "dateRange",
};

const DateCalender = ({
  id,
  value = null,
  dropdownValue,
  secondDropdownValue,
  inputValue,
  secondInputValue,
  startDate,
  endDate,
  label = "Date",
  secondLabel,
  dropdownLabel = "Dropdown 1",
  secondDropdownLabel = "Dropdown 2",
  inputLabel = "Input 1",
  secondInputLabel = "Input 2",
  placeholder = "Date",
  secondPlaceholder= "To",
  dateFormat = "dd/MM/yyyy",
  withTime = false,
  variant,
  onChange,
  onEndDateChange,
  onKeyDown,
  onDropdownCloseSelect,
  onSecondDropdownCloseSelect,
  onInputChange,
  onSecondInputChange,
  size,
  suffix,
  maxDate,
  minDate,
  endMaxDate,
  endMinDate,
  disabled,
  secondDisabled,
  listItems,
  error,
  endDateError,
  horizontal,
  className,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [secondCalenderOpen, setSecondCalenderOpen] = useState(false);

  const disableKeyDown = (e) => {
    e.preventDefault();
  };

  const toggleOpenCalender = () => {
    setOpen(!open);
  };

  const toggleSecondOpenSecondCalender = () => {
    setSecondCalenderOpen(!secondCalenderOpen);
  };

  const CustomInputDatePicker = forwardRef(
    ({ value, label, suffixOnClick, suffix, size, disabled, placeholder, error, className, horizontal }, ref) => (
      <Input
        value={value}
        ref={ref}
        label={label}
        suffixOnClick={!disabled && suffixOnClick}
        suffix={suffix}
        size={size}
        disabled={disabled}
        placeholder={placeholder}
        error={error}
        className={className}
        horizontal={horizontal}
      />
    )
  );

  return (
    <div className="harsh-ui-datepicker_wrapper">
      {(variant === DATECALENDER_VARIANT.primary ||
        variant === DATECALENDER_VARIANT.dateWithDropdown ||
        variant === DATECALENDER_VARIANT.dateWithInput ||
        variant === DATECALENDER_VARIANT.dateRange) && (
        <DatePicker
          selected={value ? value : startDate}
          onChange={(date)=> {
            onChange(date);
            toggleOpenCalender();
          }}
          onKeyDown={onKeyDown ? onKeyDown : disableKeyDown}
          maxDate={maxDate}
          minDate={minDate}
          value={value ? value : startDate}
          startDate={startDate}
          endDate={endDate}
          showTimeInput={withTime}
          timeInputLabel="Time:"
          dateFormat={dateFormat + (withTime ? " h:mm aa" : "")}
          placeholderText={placeholder}
          disabled={disabled}
          onClickOutside={toggleOpenCalender}
          open={open}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          {...props}
          customInput={
            <CustomInputDatePicker
              label={label}
              suffixOnClick={toggleOpenCalender}
              onClick={toggleOpenCalender}
              suffix={suffix ? suffix : <DateRange />}
              size={size}
              placeholder={placeholder}
              error={error}
              horizontal={horizontal}
              className={className}
            />
          }
        />
      )}

      {variant === DATECALENDER_VARIANT.inputWithInput && (
        <div className={classnames("harsh-ui-datetime_dropdown")}>
          <Input
            label={inputLabel}
            value={inputValue}
            onChange={onInputChange}
          />
        </div>
      )}

      {variant === DATECALENDER_VARIANT.dropdownWithDropdown && (
        <div className={classnames("harsh-ui-datetime_dropdown")}>
          <Dropdown
            defaultValue={dropdownValue}
            onCloseSelect={onDropdownCloseSelect}
            label={dropdownLabel}
            buttonProps={{ variant: "dropdown" }}
          >
            <Dropdown.Menu>
              {listItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  <Dropdown.MenuItem id={item.label} value={item.value}>
                    {item.label}
                  </Dropdown.MenuItem>
                  {index !== listItems.length - 1 && <Dropdown.Divider />}
                </React.Fragment>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}

      {(variant === DATECALENDER_VARIANT.dateWithDropdown ||
        variant === DATECALENDER_VARIANT.dateWithInput ||
        variant === DATECALENDER_VARIANT.dropdownWithDropdown ||
        variant === DATECALENDER_VARIANT.dateRange ||
        variant === DATECALENDER_VARIANT.inputWithInput) && (
        <div className={classnames("harsh-ui-seprator_wrapper")}>
          <div className={classnames("harsh-ui-arrowleft")} />
          <div className={classnames("harsh-ui-seprator")} />
          <div className={classnames("harsh-ui-arrowright")} />
        </div>
      )}

      {(variant === DATECALENDER_VARIANT.dateWithDropdown ||
        variant === DATECALENDER_VARIANT.dropdownWithDropdown) && (
        <div className={classnames("harsh-ui-datetime_dropdown")}>
          <Dropdown
            defaultValue={secondDropdownValue}
            onCloseSelect={onSecondDropdownCloseSelect}
            label={secondDropdownLabel}
            buttonProps={{ variant: "dropdown" }}
          >
            <Dropdown.Menu>
              {listItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  <Dropdown.MenuItem id={item.label} value={item.value}>
                    {item.label}
                  </Dropdown.MenuItem>
                  {index !== listItems.length - 1 && <Dropdown.Divider />}
                </React.Fragment>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}

      {(variant === DATECALENDER_VARIANT.dateWithInput ||
        variant === DATECALENDER_VARIANT.inputWithInput) && (
        <div className={classnames("harsh-ui-datetime_dropdown")}>
          <Input
            label={secondInputLabel}
            value={secondInputValue}
            onChange={onSecondInputChange}
          />
        </div>
      )}

      {(variant === DATECALENDER_VARIANT.dateRange ||
        variant === DATECALENDER_VARIANT.dateRangeWithTime) && (
        <DatePicker
          selected={endDate}
          onChange={(date)=> {
            onEndDateChange(date);
            toggleSecondOpenSecondCalender();
          }}
          onKeyDown={onKeyDown ? onKeyDown : disableKeyDown}
          maxDate={endMaxDate}
          minDate={endMinDate}
          value={endDate}
          startDate={startDate}
          endDate={endDate}
          showTimeInput={withTime}
          timeInputLabel="Time:"
          dateFormat={dateFormat + (withTime ? " h:mm aa" : "")}
          placeholderText={secondPlaceholder}
          disabled={secondDisabled}
          onClickOutside={toggleSecondOpenSecondCalender}
          open={secondCalenderOpen}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          {...props}
          customInput={
            <CustomInputDatePicker
              label={secondLabel}
              suffixOnClick={toggleSecondOpenSecondCalender}
              onClick={toggleSecondOpenSecondCalender}
              suffix={suffix ? suffix : <DateRange />}
              size={size}
              placeholder={secondPlaceholder}
              error={endDateError}
              horizontal={horizontal}
              className={className}
            />
          }
        />
      )}
    </div>
  );
};

DateCalender.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  size: PropTypes.string,
  suffix: PropTypes.any,
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  withTime: bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  variant: PropTypes.oneOf(Object.values(DATECALENDER_VARIANT)),
};
export default DateCalender;