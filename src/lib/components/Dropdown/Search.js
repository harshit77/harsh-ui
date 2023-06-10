import React, { useState } from "react";
import Input from "../Input";

const Search = ({ placeholder, onChange, search = true }) => {
  const [value, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <div
      className="harsh-ui-dropdown__popup-menu-item harsh-ui-dropdown__search"
      onClick={(e) => e.stopPropagation()}
    >
      <Input
        placeholder={placeholder || "Search"}
        value={value}
        onChange={handleInputChange}
        autoFocus
        search={search}
      />
    </div>
  );
};

Search.propTypes = {};

export default Search;
