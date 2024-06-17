import React, { useEffect, useRef } from "react";
import styles from "./TextArea.module.css";

const TextArea = ({
  name,
  value,
  onChange,
  placeholder,
  isDisabled = false,
  label,
  error,
}) => {
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "25px";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  };

  const handleInputChange = (event) => {
    adjustTextareaHeight();
    onChange(event);
  };

  useEffect(() => {
    if (textareaRef.current) {
      adjustTextareaHeight();
    }
  }, [value]);

  return (
    <div className={styles.textAreaContainer}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        ref={textareaRef}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={isDisabled}
        className={`${styles.textarea} ${error ? styles.errorInput : ""}`}
      />
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default TextArea;
