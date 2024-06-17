import React, { useEffect, useRef, useState } from "react";
import styles from "./NewsCard.module.css";
import classNames from "classnames";
import shave from "shave";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import Date from "../Date/Date";
import { Link } from "react-router-dom";
import CommentStats from "../CommentStats/CommentStats";
import ViewsStats from "../ViewsStats/ViewsStats";
import LikeStats from "../LikeStats/LikeStats";

const NewsCard = ({
  imgPath,
  title,
  previewText,
  index,
  pubDate,
  id,
  setFavorites,
  news,
}) => {
  const previewTextRef = useRef("");
  const containerInfoRef = useRef("");
  const isThirdСardStyle = (index + 1) % 3 === 0;

  useEffect(() => {
    const shaveText = () => {
      if (containerInfoRef.current && previewTextRef.current) {
        const containerInfoHeight = containerInfoRef.current.offsetHeight;
        const titleHeight = containerInfoRef.current.querySelector(
          `.${styles.title}`
        ).offsetHeight;

        const remainingHeight = isThirdСardStyle
          ? containerInfoHeight - titleHeight - 60
          : containerInfoHeight - titleHeight - 18;

        shave(previewTextRef.current, remainingHeight);
      }
    };

    shaveText();

    window.addEventListener("resize", shaveText);

    return () => window.removeEventListener("resize", shaveText);
  }, [previewText, index]);

  return (
    <div
      className={classNames(styles.card, {
        [styles.thirdСardStyle]: isThirdСardStyle,
      })}
    >
      <Link className={styles.card__link} to={`/news/${id}`} />
      <div className={styles.container}>
        <div className={styles.img__container}>
          <img
            className={styles.news__img}
            src={imgPath || "src/assets/images/plug.png"}
            alt="Фото новости"
          />
          <div className={styles.news__img_filter}></div>
        </div>
        <div ref={containerInfoRef} className={styles.container__info}>
          <h2 className={styles.title}>
            {title || "У этого поста нет фотографии"}
          </h2>
          <p ref={previewTextRef} className={styles.preview__text}>
            {previewText || "Текст в этом посте отсутствует"}
          </p>
        </div>
        <div className={styles.statistics__info}>
          <Date date={pubDate} />
          <div className={styles.icons}>
            <LikeStats
              value={"123"}
              color={isThirdСardStyle ? "#fff" : "#8591a5"}
            />
            <CommentStats
              value={"76"}
              color={isThirdСardStyle ? "#fff" : "#8591a5"}
            />
            <ViewsStats
              value={"225"}
              color={isThirdСardStyle ? "#fff" : "#8591a5"}
            />
          </div>
        </div>
      </div>
      <div className={styles.favorites__button}>
        <FavoritesButton
          id={id}
          news={news}
          setFavorites={setFavorites}
          color={isThirdСardStyle ? "#fff" : "#4c8bf7"}
        />
      </div>
    </div>
  );
};

export default NewsCard;
