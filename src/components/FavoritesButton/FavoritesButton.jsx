import React, { useState } from "react";
import styles from "./FavoritesButton.module.css";
import StarIcon from "../Icons/StarIcon";

const FavoritesButton = ({ color }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.starContainer}>
      <StarIcon isFilled={isActive} color={color} />
    </div>
  );
};

export default FavoritesButton;
