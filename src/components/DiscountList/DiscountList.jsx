import React, { useState } from "react";
import DiscountCard from "../DiscountCard/DiscountCard";
import styles from "./DiscountList.module.css";
import classNames from "classnames";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const DiscountList = ({ discounts, initialVisibleCount }) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const isButtonVisible = discounts?.length <= initialVisibleCount;
  const visibleDiscounts = discounts?.slice(0, visibleCount);
  const buttonText =
    visibleDiscounts?.length !== discounts?.length ? "Смотреть еще" : "Скрыть";

  const onClickMore = () => {
    setVisibleCount((prevCount) =>
      prevCount >= discounts?.length
        ? initialVisibleCount
        : prevCount + initialVisibleCount
    );
  };

  return (
    <div>
      {discounts ? (
        <>
          <div
            className={classNames(styles.gridContainer, {
              [styles.without__button]: isButtonVisible,
            })}
          >
            {visibleDiscounts?.map((el, index) => {
              return (
                <div key={el.id} className={styles.gridItem}>
                  <DiscountCard
                    index={index}
                    title={el.title}
                    pubDate={el.pubDate}
                    image={el.image}
                    previewText={el.previewtext}
                    isActive={true}
                    id={el.id}
                  />
                </div>
              );
            })}
          </div>
          <div
            className={
              isButtonVisible ? styles.button__none : styles.button__more
            }
          >
            <Button onClick={onClickMore} text={buttonText} />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default DiscountList;
