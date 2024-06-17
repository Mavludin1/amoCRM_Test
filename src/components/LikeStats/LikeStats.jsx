import React from "react";
import HeartIcon from "../Icons/HeartIcon";
import styles from "./LikeStats.module.css";

const LikeStats = ({ value, color }) => {
  return (
    <div className={styles.container}>
      <HeartIcon color={color} />
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default LikeStats;
