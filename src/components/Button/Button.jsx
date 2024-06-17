import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
