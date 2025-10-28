import { Outlet } from "react-router-dom";
import Sidebar from "../components/organisms/SideBar/SideBar";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
