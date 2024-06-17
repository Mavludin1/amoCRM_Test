import React from "react";
import InputMask from "react-input-mask";
import styles from "./TextInput.module.css";
import classNames from "classnames";

const TextInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  isDisabled = false,
  label,
  error,
}) => {
  return (
    <div
      className={classNames(styles.inputContainer, {
        [styles.disabled]: isDisabled,
      })}
    >
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      {type === "tel" ? (
        <InputMask
          mask="+7\ 999 999-99-99"
          maskChar=""
          value={value}
          onChange={onChange}
          disabled={isDisabled}
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type="tel"
              name={name}
              placeholder={placeholder || "..."}
              className={`${styles.input} ${error ? styles.errorInput : ""}`}
            />
          )}
        </InputMask>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
          className={`${styles.input} ${error ? styles.errorInput : ""}`}
        />
      )}
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default TextInput;
