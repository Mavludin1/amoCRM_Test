import React from "react";
import styles from "./ViewsStats.module.css";
import ViewsIcon from "../Icons/ViewsIcon";

const ViewsStats = ({ value, color }) => {
  return (
    <div className={styles.container}>
      <ViewsIcon color={color} />
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default ViewsStats;
