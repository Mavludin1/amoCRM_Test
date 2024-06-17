import React from "react";
import moment from "moment";
import styles from "./Date.module.css";

const Date = ({ date }) => {
  return (
    <p className={styles.date}>{moment.unix(date).format("DD.MM.YYYY")}</p>
  );
};

export default Date;
