import React from "react";
import styles from "./SideBar.module.css";

import ProfileButton from "../../molecules/ProfileButton/ProfileButton";

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <ProfileButton />
    </aside>
  );
};

export default SideBar;
