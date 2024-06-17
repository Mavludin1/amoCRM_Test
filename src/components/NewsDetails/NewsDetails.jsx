import React, { useEffect, useState } from "react";
import styles from "./NewsDetails.module.css";
import { useParams } from "react-router-dom";
import moment from "moment";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/news/${id}`);
        const resJson = await res.json();
        setNews(resJson);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <span className={styles.date}>
          {moment.unix(news.pubDate).locale("ru").format("DD MMMM YYYY")}
        </span>
        <h2 className={styles.title}>Заголовок новости</h2>
        <div
          className={styles.fulltext}
          dangerouslySetInnerHTML={{ __html: news.fulltext }}
        ></div>
      </div>
    </div>
  );
};

export default NewsDetails;
