import React from "react";
import styles from "./SideBar.module.css";

import LogoutButton from "../../molecules/LogoutButton/LogoutButton";

const SideBar = () => {
  return (
    <div className={styles.sidebar_container}>
      <LogoutButton />
    </div>
  );
};

export default SideBar;
