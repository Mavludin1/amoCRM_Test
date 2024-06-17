import React from "react";
import styles from "./RadioInput.module.css";

const RadioInput = ({
  name,
  value,
  isDisabled,
  isChecked,
  label,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      <label className={styles.input__label} htmlFor={value}>
        {label}
      </label>
    </div>
  );
}

export default RadioInput