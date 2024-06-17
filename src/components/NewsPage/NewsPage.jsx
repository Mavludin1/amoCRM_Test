import React from "react";
import styles from "./NewsPage.module.css";
import Menu from "../Menu/Menu";
import NewsDetails from "../NewsDetails/NewsDetails";
import ModalSideBar from "../ModalSideBar/ModalSideBar";

const NewsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.news__container}>
        <h1 className={styles.page__title}>Заголовок страницы</h1>
        <NewsDetails />
      </div>
      <ModalSideBar />
    </div>
  );
};

export default NewsPage;
