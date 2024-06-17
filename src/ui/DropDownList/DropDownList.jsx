import React from "react";
import Select from "react-select";
import styles from "./DropDownList.module.css";
import ChevronDownIcon from "../../components/Icons/ChevronDownIcon";

const DropDownList = ({
  label,
  options,
  name,
  value,
  onChange,
  disabled = false,
}) => {
  const selectOptions = options.map((option) => ({
    value: option.value,
    label: option.label,
  }));

  const handleChange = (selectedOption) => {
    onChange({
      target: {
        name: name,
        value: selectedOption ? selectedOption.value : "",
      },
    });
  };

  const formatOptionLabel = ({ label }) => <div className={styles.options_title} title={label}>{label}</div>;

  const selectedValue = selectOptions.find((option) => option.value === value);

  return (
    <div className={styles.container}>
      {label && (
        <label
          className={`${styles.label} ${disabled ? styles.disabled : ""}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <Select
        name={name}
        value={selectedValue}
        onChange={handleChange}
        options={selectOptions}
        classNamePrefix="react-select"
        isDisabled={disabled}
        isClearable={false}
        isSearchable={false}
        formatOptionLabel={formatOptionLabel}
        components={{ DropdownIndicator: ChevronDownIcon }}
      />
    </div>
  );
};

export default DropDownList;
