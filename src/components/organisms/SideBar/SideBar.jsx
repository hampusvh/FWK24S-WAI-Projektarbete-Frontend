import React from "react";
import styles from "./SideBar.module.css";
import Button from "../../atoms/Button/Button";
import ProfileButton from "../../molecules/ProfileButton/ProfileButton";

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <Button>Journal</Button>
      <ProfileButton />
    </aside>
  );
};

export default SideBar;
