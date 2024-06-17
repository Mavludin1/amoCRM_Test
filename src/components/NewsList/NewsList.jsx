import React, { useState } from "react";
import styles from "./NewsList.module.css";
import NewsCard from "../NewsCard/NewsCard";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const NewsList = ({ news, initialVisibleCount, setFavorites }) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const visibleNews = news?.slice(0, visibleCount);
  const buttonText =
    visibleNews?.length !== news?.length ? "Смотреть еще" : "Скрыть";

  const onClickMore = () => {
    setVisibleCount((prevCount) =>
      prevCount >= news?.length
        ? initialVisibleCount
        : prevCount + initialVisibleCount
    );
  };

  return (
    <div className={styles.container}>
      {news ? (
        <>
          <div className={styles.container__card}>
            {visibleNews?.map((el, index) => {
              return (
                <NewsCard
                  imgPath={el.image ? el.image : el.link}
                  id={el.id}
                  title={el.title}
                  previewText={el.previewtext}
                  index={index}
                  pubDate={el.pubDate}
                  key={el.id}
                  setFavorites={setFavorites}
                  news={news}
                />
              );
            })}
          </div>
          <div className={styles.button__more}>
            <Button onClick={onClickMore} text={buttonText} />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default NewsList;
