import React from "react";
import styles from "./SideBar.module.css";
import Button from "../../atoms/Button/Button";
import ProfileButton from "../../molecules/ProfileButton/ProfileButton";
import OpenBookIcon from "../../atoms/Icons/OpenBookIcon/OpenBookIcon";
import { Link } from "react-router-dom";
import UserIcon from "../../atoms/Icons/UserIcon/UserIcon";

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <Link to="/" className={styles.sidebarItem}>
        <OpenBookIcon size="46" />
      </Link>

      <Link to="/dashboard" className={styles.sidebarItem}>
        <UserIcon size="46" />
      </Link>
    </aside>
  );
};

export default SideBar;
