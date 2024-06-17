import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./ModalSideBar.module.css";
import Menu from "../Menu/Menu";
import CrossIcon from "../Icons/CrossIcon";

const ModalSideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const burgerButton = document.querySelector(".button");
    const header = document.querySelector(".header");

    if (burgerButton && header) {
      header.classList.add("header--with-menu");
      burgerButton.addEventListener("click", handleOpenModal);
    }

    return () => {
      if (burgerButton) {
        burgerButton.removeEventListener("click", handleOpenModal);
      }
    };
  }, []);

  return (
    <div
      className={classNames(styles.overlay, { [styles.open]: isModalOpen })}
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      <div
        className={classNames(styles.modal, { [styles.slideIn]: isModalOpen })}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className={styles.title}>Меню раздела</h1>
        <button
          className={styles.closeButton}
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <CrossIcon />
        </button>
        <Menu isModal={true} />
        <a className={styles.link__img} href="/">
          <img
            className={styles.img}
            src="/src/assets/images/amoCRM_light_logo.svg"
            alt="Логотип"
          />
        </a>
      </div>
    </div>
  );
};

export default ModalSideBar;
