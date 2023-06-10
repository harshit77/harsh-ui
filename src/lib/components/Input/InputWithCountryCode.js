import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import Typography from "../Typography";
import classnames from "classnames";
import { COUNTRYCODE } from "./constants";
import imageFile from "../../styles/assets/flags.png";
import { getSelectedCountry } from "./helper";

const InputWithCountryCode = ({ onChangeCountryCode, countryCode }) => {
  const [selectedCountry, setSelectedCountry] = useState(
    typeof countryCode === "string"
      ? getSelectedCountry(countryCode)
      : COUNTRYCODE[230]
  );
  const [countryList, setCountryList] = useState(COUNTRYCODE);

  const handleCountryCode = (e, instance) => {
    instance.hide();
    const selectedCountryId = e.target.id;
    if (selectedCountryId) {
      const selectedCountryCode = getSelectedCountry(selectedCountryId);
      setSelectedCountry(selectedCountryCode);
      setCountryList(COUNTRYCODE);
      onChangeCountryCode(selectedCountryCode);
    }
  };

  const handleSearchChanges = (e) => {
    e.target.value
      ? setCountryList([
          ...COUNTRYCODE.filter((item) =>
            item[0].toLowerCase().includes(e.target.value.toLowerCase())
          ),
        ])
      : setCountryList([...COUNTRYCODE]);
  };

  return (
    <Dropdown
      defaultValue={
        <span
          className={classnames("harsh-ui-dropdown__country--flag", {
            [selectedCountry[1]]: selectedCountry[1],
          })}
          style={{
            backgroundImage: `url(${imageFile})`,
          }}
        />
      }
      buttonProps={{ variant: "dropdown" }}
      searchProps={{
        onChange: handleSearchChanges,
      }}
      onCloseSelect={handleCountryCode}
      customWidth={300}
    >
      <Dropdown.Menu>
        {countryList.length > 0 ? (
          countryList.map((item) => (
            <Dropdown.MenuItem
              id={item[1]}
              key={item[1]}
              selected={selectedCountry[2] === item[2]}
            >
              <div className="harsh-ui-dropdown__country">
                <span
                  className={classnames("harsh-ui-dropdown__country--flag", {
                    [item[1]]: item[1],
                  })}
                  style={{
                    backgroundImage: `url(${imageFile})`,
                  }}
                />
                <span>{item[0]}</span>
              </div>
            </Dropdown.MenuItem>
          ))
        ) : (
          <div className="harsh-ui-dropdown__country--notFound">
            <Typography component="h5" family="medium">
              Not Found
            </Typography>
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

InputWithCountryCode.propTypes = {
  onChangeCountryCode: PropTypes.func,
  countryCode: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default InputWithCountryCode;
