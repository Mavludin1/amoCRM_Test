import React, { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import Tabs from "../Tabs/Tabs";
import NewsList from "../NewsList/NewsList";
import DiscountList from "../DiscountList/DiscountList";
import { Link } from "react-router-dom";

const NEWS_URL = "http://localhost/api/news";
const DISCOUNTS_URL = "http://localhost/api/promotions";

const MainPage = () => {
  const [news, setNews] = useState(null);
  const [discounts, setDiscounts] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const fetchUploadData = async (url, dispatch, setLoading) => {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      dispatch(responseJson);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchUploadData(NEWS_URL, setNews);
    fetchUploadData(DISCOUNTS_URL, setDiscounts);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__info}>
        <h1 className={styles.container__info_title}>
          Получите{" "}
          <span className={styles.container__info_title_max}>максимум</span>
          <br />
          от отдела продаж
        </h1>
        <p className={styles.container__info_paragraph}>
          amoCRM — это полный набор инструментов, которые раскроют потенциал
          вашего отдела продаж и повысят его эффективность. Считается лучшей
          CRM-системой по версии{" "}
          <a className={styles.container__info_link} target="_blank" href="#">
            crmrating.ru
          </a>
        </p>
      </div>
      <Tabs selectedTab={selectedTab} onSelectTab={setSelectedTab}>
        <NewsList
          news={news}
          initialVisibleCount={5}
        />
        <DiscountList
          discounts={discounts}
          initialVisibleCount={3}
        />
      </Tabs>
    </div>
  );
};

export default MainPage;
