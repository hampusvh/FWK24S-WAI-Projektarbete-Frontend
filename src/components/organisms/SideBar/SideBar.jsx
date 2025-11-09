import React from "react";
import styles from "./SideBar.module.css";
import Button from "../../atoms/Button/Button";
import ProfileButton from "../../molecules/ProfileButton/ProfileButton";
import OpenBookIcon from "../../atoms/Icons/OpenBookIcon/OpenBookIcon";
import { Link, useLocation } from "react-router-dom";
import UserIcon from "../../atoms/Icons/UserIcon/UserIcon";

const SideBar = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <Link to="/" className={styles.sidebarItem + " " + (location.pathname == "/" ? styles.active : "")}>
        <OpenBookIcon size="36" />
        <span>Journal</span>
      </Link>

      <Link to="/settings" className={styles.sidebarItem + " " + (location.pathname == "/settings" ? styles.active : "")}>
        <UserIcon size="36" />
        <span>Account</span>
      </Link>
    </aside>
  );
};

export default SideBar;
