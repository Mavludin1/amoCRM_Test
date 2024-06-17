import React from "react";
import styles from "./Tab.module.css";

const Tab = ({ label, isChecked, onSelectTab }) => {
  return (
    <label className={styles.button}>
      <input type="checkbox" checked={isChecked} onChange={onSelectTab} />
      <span className={styles.button__news}>{label}</span>
    </label>
  );
};

export default Tab;
