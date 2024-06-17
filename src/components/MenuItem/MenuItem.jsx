import React from "react";
import styles from "./MenuItem.module.css";
import classNames from "classnames";

const MenuItem = ({ text, href, isActive, onClick, isModal }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.modalContainer]: isModal,
      })}
      onClick={onClick}
    >
      <a
        className={classNames(styles.container__item, {
          [styles.active]: isActive,
        })}
        href={href}
      >
        {text}
      </a>
    </div>
  );
};

export default MenuItem;
