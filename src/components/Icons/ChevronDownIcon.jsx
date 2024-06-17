import React from "react";
import { components } from "react-select";

const ChevronDownIcon = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="11"
        height="10"
        viewBox="0 0 11 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L5.5 5.5L10 1" stroke="#8591A5" />
      </svg>
    </components.DropdownIndicator>
  );
};

export default ChevronDownIcon;
