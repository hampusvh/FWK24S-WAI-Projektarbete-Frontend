import { Outlet } from "react-router-dom";
import Sidebar from "../components/organisms/SideBar/SideBar";
import styles from "./AppLayout.module.css";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
