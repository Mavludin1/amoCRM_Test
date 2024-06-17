import React from "react";
import styles from "./UserPage.module.css";
import Menu from "../Menu/Menu";
import EditUserForm from "../EditUserForm/EditUserForm";
import ModalSideBar from "../ModalSideBar/ModalSideBar";

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <EditUserForm />
      <ModalSideBar />
    </div>
  );
};

export default UserPage;
