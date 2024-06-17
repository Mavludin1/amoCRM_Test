import React, { useEffect, useRef } from "react";
import Date from "../Date/Date";
import styles from "./DiscountCard.module.css";
import shave from "shave";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import classNames from "classnames";
import { Link } from "react-router-dom";
import LikeStats from "../LikeStats/LikeStats";
import ViewsStats from "../ViewsStats/ViewsStats";

const DiscountCard = ({
  title,
  pubDate,
  image,
  previewText,
  index,
  isActive,
  id,
}) => {
  const previewTextRef = useRef(null);
  const containerInfoRef = useRef(null);
  const titleRef = useRef(null);
  const isThirdСardStyle = (index + 1) % 2 === 0;

  useEffect(() => {
    const shaveText = () => {
      const containerInfoHeight = containerInfoRef.current.offsetHeight;
      const titleHeight = titleRef.current.offsetHeight;
      const remainingHeight = containerInfoHeight - titleHeight;
      shave(previewTextRef.current, remainingHeight);
    };

    shaveText();

    window.addEventListener("resize", shaveText);

    return () => window.removeEventListener("resize", shaveText);
  }, [previewText]);

  return (
    <div
      className={classNames(styles.container, {
        [styles.thirdСardStyle]: isThirdСardStyle,
      })}
      href="#"
    >
      <Link className={styles.card__link} to={`#`} />
      <div className={styles.info}>
        <div className={styles.info__text} ref={containerInfoRef}>
          <h1 className={styles.info__text_title} ref={titleRef}>
            {title}
          </h1>
          <p className={styles.info__text_paragraph} ref={previewTextRef}>
            {previewText}
          </p>
        </div>
        <div className={styles.info__statistic}>
          <div
            className={
              isActive
                ? styles.info__statistic_date
                : styles.info__statistic_date_close
            }
          >
            <Date date={pubDate} />
            <span className={styles.info__delimetr} />
            <h6 className={styles.info__statistic_active}>
              {isActive ? "Предложение активно" : "Завершено"}
            </h6>
          </div>
          <div className={styles.info__statistic_like}>
            <LikeStats value={"123"} color={"#8591a5"} />
            <ViewsStats value={"224"} color={"#8591a5"} />
          </div>
        </div>
        {!isThirdСardStyle && (
          <div className={styles.favorites__button}>
            <FavoritesButton color={"#4c8bf7"} />
          </div>
        )}
      </div>
      <div className={styles.card__img}>
        <img className={styles.img} src={image} alt="Фото акции" />
        {isThirdСardStyle && (
          <div className={styles.favorites__button}>
            <FavoritesButton color={"#4c8bf7"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscountCard;
