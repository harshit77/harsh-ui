import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Tag, Checkbox, Typography, Dropdown } from "../index";
import { CancelClear, Add } from "../../icons";
import Button from "../Button";
import { getDropdownText } from "./helper";
import Input from "../Input";
import { useDebounce } from "../../hooks";

const InlineFilter = ({
  options,
  debounceDelay = 500,
  onChangeFilterOption = () => {},
}) => {
  const initialFilterOptions = useRef(options);
  const [filterOptions, setFilterOptions] = useState(
    options.filter((current) => current.active)
  );
  const [enableFilter, setEnableFilter] = useState(true);
  const debouncedSearchTerm = useDebounce(filterOptions, debounceDelay);

  useEffect(() => {
    generateFilterString();
  }, [debouncedSearchTerm]);

  const generateFilterString = () => {
    const activeFilterString = filterOptions.map((option) => ({
      [option.field]: `and:${option.operator.filterString}${
        option.operator.id === "IN"
          ? option.options
              .filter((option) => option.checked)
              .map((filteredId) => filteredId.id)
          : option?.currentValue || ""
      }`,
    }));

    onChangeFilterOption(activeFilterString);
  };

  const handleAddFilter = () => setEnableFilter(false);
  const handleClear = () => {
    setEnableFilter(true);
    setFilterOptions([]);
  };

  const handleNewOption = (e, instance) => {
    instance.hide();
    const targetId = e.target.id;
    if (targetId) {
      const findOption = initialFilterOptions.current.find(
        (option) => option.field === targetId
      );
      setFilterOptions([...filterOptions, { ...findOption, active: true }]);
      setEnableFilter(true);
    }
  };

  const clearOption = (clickedOptionId, e) => {
    const findClickedOptionIndex = filterOptions.findIndex(
      (option) => option.field === clickedOptionId
    );
    filterOptions.splice(findClickedOptionIndex, 1);
    setFilterOptions([...filterOptions]);
  };

  const handleInOperator = (field, e, instance) => {
    instance.hide();
    const selectedId = e.target.id;
    if (selectedId) {
      const selectedValue = field.options.find(
        (option) => option.id === selectedId
      );
      field["currentValue"] = selectedValue.id;
    }

    setFilterOptions([...filterOptions]);
  };

  const handleInputChange = (option, e) => {
    option["currentValue"] = e.target.value;
    setFilterOptions([...filterOptions]);
  };

  const getTagUI = (fieldItem) => {
    const maxTag = 1;
    const tagsCount = fieldItem.options.filter(
      (checkedTag) => checkedTag.checked
    );
    if (tagsCount.length !== 0) {
      const extraTags = tagsCount.length - maxTag;
      const maxTagList = tagsCount
        .slice(0, maxTag)
        .map((item) => <Tag variant="secondary">{item.value}</Tag>);
      if (extraTags > 0) {
        maxTagList.push(<Tag variant="secondary">{extraTags} +</Tag>);
      }
      return <>{maxTagList}</>;
    }
    return " ";
  };

  const handleCheck = (fieldItem, { target: { id } }) => {
    fieldItem.options = fieldItem.options.map((item) => ({
      ...item,
      checked: item.id === id ? !item.checked : item.checked,
    }));

    fieldItem.currentValue = fieldItem.options
      .filter((option) => option.checked)
      .map((filteredId) => filteredId.id);

    setFilterOptions((prevFields) => [
      ...prevFields.map((field) =>
        field.field === fieldItem.field ? fieldItem : field
      ),
    ]);
  };

  const getFilterElement = (fieldItem) => {
    switch (fieldItem.operator.id) {
      case "IN":
        return (
          <Dropdown
            defaultValue={getTagUI(fieldItem)}
            buttonProps={{ variant: "dropdown", style: { minWidth: 320 } }}
            onCloseSelect={(e, instance) => {
              instance.hide();
            }}
          >
            <Dropdown.Menu>
              {fieldItem.options.map((item, index) => (
                <Dropdown.MenuItem key={index}>
                  <Checkbox onChange={handleCheck.bind(this, fieldItem)}>
                    <Checkbox.Item
                      label={item.value}
                      id={item.id}
                      checked={item?.checked}
                    />
                  </Checkbox>
                </Dropdown.MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        );
      case "EQUAL":
      case "CONTAINS":
        return Array.isArray(fieldItem.options) ? (
          <Dropdown
            defaultValue={getDropdownText(
              fieldItem.options,
              fieldItem.currentValue
            )}
            buttonProps={{ variant: "dropdown", style: { minWidth: 250 } }}
            onCloseSelect={handleInOperator.bind(this, fieldItem)}
          >
            <Dropdown.Menu>
              {fieldItem.options.map((item) => (
                <Dropdown.MenuItem id={item.id}>{item.value}</Dropdown.MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Input
            id={fieldItem.field}
            onChange={handleInputChange.bind(this, fieldItem)}
          />
        );
    }
  };

  const defaultElement = useMemo(
    () => (
      <Dropdown
        defaultValue=" "
        buttonProps={{
          variant: "dropdown",
          style: { width: 120, visibilty: "none" },
        }}
        onCloseSelect={handleNewOption}
      >
        <Dropdown.Menu>
          {initialFilterOptions.current
            .filter(
              (option) =>
                !filterOptions.some(
                  (existing) => existing.field === option.field
                )
            )
            .map((inactiveOption) => (
              <Dropdown.MenuItem id={inactiveOption.field}>
                {inactiveOption.label}
              </Dropdown.MenuItem>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    ),
    [filterOptions, enableFilter]
  );

  const inlineElements = useMemo(
    () =>
      filterOptions.map((activeOption) => (
        <>
          <div className="harsh-ui-inlineFilter" key={activeOption.field}>
            <div className="harsh-ui-inlineFilter--selector">
              <Typography component="h5" family="medium">
                {activeOption.label}
              </Typography>
            </div>
            <span className="harsh-ui-inlineFilter--operator">
              <Typography component="h5" family="medium">
                {activeOption.operator.label}
              </Typography>
            </span>
            <span className="harsh-ui-inlineFilter--selector">
              {getFilterElement(activeOption)}
            </span>
            <span
              className="harsh-ui-inlineFilter--clearOperator"
              onClick={clearOption.bind(this, activeOption.field)}
            >
              <CancelClear width="18" height="18" />
            </span>
          </div>
        </>
      )),
    [filterOptions]
  );

  return (
    <div className="harsh-ui-inlineFilter--container">
      {inlineElements}
      {!enableFilter && defaultElement}
      <Button
        label="Filter"
        className="addFilter"
        icon={<Add />}
        disabled={
          filterOptions.length === initialFilterOptions.current.length ||
          !enableFilter
        }
        iconPosition="left"
        onClick={handleAddFilter}
      />
      {filterOptions.some((option) => option.active) && (
        <Button label="Clear All" variant="link" onClick={handleClear} />
      )}
    </div>
  );
};

InlineFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChangeFilterOption: PropTypes.func,
};

export default InlineFilter;
