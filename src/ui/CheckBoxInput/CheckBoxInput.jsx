import React from "react";
import styles from "./CheckBoxInput.module.css";
import CheckMarkIcon from "../../components/Icons/CheckMarkIcon";

const CheckBoxInput = ({ name, isDisabled, isChecked, label, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
        id={name}
        type="checkbox"
        name={name}
      />
      <label className={styles.input__label} htmlFor={name}>
        {isChecked && (
          <div className={styles.checkmark}>
            <CheckMarkIcon isDisabled={isDisabled} />
          </div>
        )}
        {label}
      </label>
    </div>
  );
};

export default CheckBoxInput;
