import React, { useState } from "react";
import styles from "./Tabs.module.css";
import Tab from "./Tab/Tab";


const TABS_DATA = [
  {
    id: 1,
    name: "Новости",
  },
  {
    id: 2,
    name: "Акции",
  },
];

const Tabs = ({ children, selectedTab, onSelectTab }) => {
  return (
    <div>
      <div className={styles.buttons}>
        {TABS_DATA.map((el, index) => {
          return (
            <Tab
              key={el.id}
              label={el.name}
              isChecked={selectedTab === index}
              onSelectTab={() => onSelectTab(index)}
            />
          );
        })}
      </div>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
