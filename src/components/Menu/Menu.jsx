import React, { useState } from "react";
import styles from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";

const MENU = [
  {
    id: 1,
    name: "Избранное",
    href: "#",
  },
  {
    id: 2,
    name: "Моя компания",
    href: "#",
  },
  {
    id: 3,
    name: "Моё развитие",
    href: "#",
  },
  {
    id: 4,
    name: "Новости компании",
    href: "#",
  },
  {
    id: 5,
    name: "Телефонная книга",
    href: "#",
  },
];

const Menu = ({ isModal }) => {
  const [activeItem, setActiveItem] = useState(1);

  const handleMenuItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div
      className={`${styles.container} ${isModal ? styles.modalContainer : ""}`}
    >
      {MENU.map((el) => (
        <MenuItem
          isActive={activeItem === el.id}
          onClick={() => handleMenuItemClick(el.id)}
          key={el.id}
          text={el.name}
          href={el.href}
          isModal={isModal}
        />
      ))}
    </div>
  );
};

export default Menu;
