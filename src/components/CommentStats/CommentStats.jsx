import React from "react";
import styles from "./CommentStats.module.css";
import ComentIcon from "../Icons/ComentIcon";

const CommentStats = ({ value, color }) => {
  return (
    <div className={styles.container}>
      <ComentIcon color={color} />
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default CommentStats;
