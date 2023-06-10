import React from "react";
import classnames from "classnames";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { Add, DeleteFilledOn, CancelClear } from "../icons";
import Typography from "./Typography";

const Filter = ({
  filteredData,
  filterFieldChange = () => {},
  onFilterDropdown = () => {},
  onSave = () => {},
  onClear = () => {},
}) => {
  const { filterHeader, filterBody } = filteredData;

  return (
    <div className="harsh-ui-filter__wrapper">
      {filterHeader && (
        <div
          className={classnames("harsh-ui-filter__header", {
            "harsh-ui-filter__header--exists": filterHeader,
          })}
        >
          {filterHeader?.options?.length === 0 ? (
            <Typography component="body2" family="medium">
              {filterHeader.label}
            </Typography>
          ) : (
            <Dropdown
              id={filterHeader.id}
              defaultValue={filterHeader.label}
              buttonProps={{ variant: "text", type: "button" }}
              dropdownProps={{
                style: { width: 208 },
              }}
              onCloseSelect={onFilterDropdown}
            >
              <Dropdown.MenuItem id="default-filter">Filter</Dropdown.MenuItem>
              <Dropdown.Divider />
              {filterHeader.options.map((item, index) => (
                <React.Fragment key={index}>
                  <Dropdown.MenuItem
                    suffix={<DeleteFilledOn width={16} height={16} />}
                    id={item.id}
                  >
                    {item.label}
                  </Dropdown.MenuItem>
                  <Dropdown.Divider />
                </React.Fragment>
              ))}
            </Dropdown>
          )}
          <div className="harsh-ui-filter__actions">
            <div>
              {filterHeader.saveLabel && (
                <Button
                  label={filterHeader.saveLabel}
                  variant="link"
                  icon={<Add width="18" height="18" />}
                  iconPosition="left"
                  onClick={onSave}
                />
              )}
            </div>
            <div className="harsh-ui-filter__actions--dropdown">
              {filterBody.length > 0 && filterHeader.clearLabel && (
                <Button
                  label={filterHeader.clearLabel}
                  variant="link"
                  icon={<CancelClear width="18" height="18" />}
                  iconPosition="left"
                  onClick={onClear}
                />
              )}

              {filterBody &&
                filterBody.map((field) => {
                  if (field.id === "advance_filter") {
                    return field.render(field, filterFieldChange);
                  }
                })}
            </div>
          </div>
        </div>
      )}
      <div className="harsh-ui-filter__field">
        {filterBody &&
          filterBody.map((field) => {
            if (field.id !== "advance_filter") {
              return field.render(field, filterFieldChange);
            }
          })}
      </div>
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
