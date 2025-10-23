import React from "react";
import styles from "./SideBar.module.css";

import LogoutButton from "../../molecules/LogoutButton/LogoutButton";

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <LogoutButton />
    </aside>
  );
};

export default SideBar;
